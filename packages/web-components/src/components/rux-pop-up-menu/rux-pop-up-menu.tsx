//@ts-nocheck
import { Prop, Watch, Element, Component, Host, h, State } from '@stencil/core'
import {
    Placement,
    computePosition,
    arrow,
    offset,
    flip,
    autoUpdate,
} from '@floating-ui/dom'

@Component({
    tag: 'rux-pop-up-menu',
    styleUrl: 'rux-pop-up-menu.scss',
    shadow: true,
})
export class RuxPopUpMenu {
    private trigger!: HTMLElement
    private content!: HTMLElement
    private arrowEl?: HTMLElement
    private positionerCleanup: ReturnType<typeof autoUpdate> | undefined

    @Prop({ mutable: true }) open = false
    @Prop() placement: Placement = 'bottom'

    @State() arrowPosition?: string

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this.content.style.display = 'block'
        } else {
            this.content.style.display = ''
        }

        if (this.open) {
            this.startPositioner()
        }
    }

    connectedCallback() {
        this.handleTriggerClick = this.handleTriggerClick.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private async handleTriggerClick() {
        this.open = !this.open
    }

    private position() {
        /**
         * TOMORROWS NOTES
         * Problem: The initial position is off by like 20pixels. If you hide/show again,
         * its in the correct spot.
         *
         * Problem: if you set the outside div to position: relative; it fucks everything
         *
         * If we replace the slot with some hardcoded content, it works as expected
         * https://github.com/floating-ui/floating-ui/issues/796
         *
         * I think what's happening is that the slotted content hasn't finished rendered
         * or just isnt available yet.
         *
         * For floating UI to work, the element needs to be visible before
         * compute is calcualted.
         */

        // If it's not visible, can't be opened or doesn't have content se don't need to compute anything.
        if (!this.open || !this.triggerSlot || !this.content) {
            return
        }
        computePosition(this.triggerSlot, this.content, {
            placement: this.placement,
            middleware: [offset(12), flip(), arrow({ element: this.arrowEl })],
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(this.content.style, {
                left: `${x}px`,
                top: `${y}px`,
            })

            const { x: arrowX, y: arrowY } = middlewareData.arrow

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]]

            Object.assign(this.arrowEl.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide]: '-6px',
            })
        })
        this._determineArrowPosition()
    }

    private startPositioner() {
        this.stopPositioner()
        this.position()
        this.positionerCleanup = autoUpdate(
            this.triggerSlot,
            this.content,
            this.position.bind(this)
        )
    }

    /**
     * This returns which side the arrow is on: top, right, left or bottom.
     * Currently using this to determine which border to bolster, but could be useful in the future.
     */
    private _determineArrowPosition() {
        if (!this.open) {
            return
        }
        const triggerElRect = this.triggerSlot.getBoundingClientRect()
        const arrowDivRect = this.arrowEl?.getBoundingClientRect()

        // If trigger's bottom is higher than the arrows bottom, and triggers top is lower than the arrow's top
        //it's not top or bottom. Check for left or right
        if (
            triggerElRect.bottom > arrowDivRect.bottom &&
            triggerElRect.top < arrowDivRect.top
        ) {
            if (triggerElRect.right > arrowDivRect.right) {
                this.arrowPosition = 'left'
            } else {
                this.arrowPosition = 'right'
            }
        } else {
            if (triggerElRect.bottom > arrowDivRect.bottom) {
                this.arrowPosition = 'top'
            } else {
                this.arrowPosition = 'bottom'
            }
        }

        console.log(`${this.arrowPosition}: Arrow Position`)
    }

    private stopPositioner() {
        if (this.positionerCleanup) {
            this.positionerCleanup()
            this.positionerCleanup = undefined
        }
    }

    private _handleSlotChange(e: any) {
        this.position()
    }

    get contentSlot() {
        return this.content
            ?.querySelector('slot')
            .assignedElements({ flatten: true })[0]
    }

    get triggerSlot() {
        return this.trigger
            ?.querySelector('slot')
            .assignedElements({ flatten: true })[0]
    }

    get hasMenu(): boolean {
        return !!this.content
            ?.querySelector('slot')
            .assignedElements({ flatten: true })
            .filter(
                (el) => el.tagName.toLowerCase() === 'rux-menu'
            )[0] as HTMLRuxMenuElement
    }

    render() {
        return (
            <Host>
                <div class="rux-popup">
                    <div
                        onClick={this.handleTriggerClick}
                        class="rux-popup__trigger"
                        ref={(el) => (this.trigger = el)}
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <div
                        class={{
                            // wish I could set the arrow class like this
                            //`rux-popup__arrow-${this._determineArrowPosition()}`: true,
                            'rux-popup__arrow-left':
                                this.arrowPosition === 'left',
                            'rux-popup__arrow-top':
                                this.arrowPosition === 'top',
                            'rux-popup__arrow-right':
                                this.arrowPosition === 'right',
                            'rux-popup__arrow-bottom':
                                this.arrowPosition === 'bottom',
                            'rux-popup__content': true,
                            'rux-popup__content--menu': this.hasMenu,
                        }}
                        part="popup-content"
                        ref={(el) => (this.content = el)}
                    >
                        <div
                            class="rux-popup-arrow"
                            ref={(el) => (this.arrowEl = el)}
                        ></div>

                        <slot
                            onSlotchange={(e) => {
                                this._handleSlotChange(e)
                            }}
                        ></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
