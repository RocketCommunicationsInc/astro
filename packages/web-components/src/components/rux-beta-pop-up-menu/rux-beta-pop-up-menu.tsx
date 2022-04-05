import { Prop, Watch, Element, Component, Host, h } from '@stencil/core'
import {
    Placement,
    computePosition,
    arrow,
    offset,
    shift,
    flip,
    autoUpdate,
} from '@floating-ui/dom'

@Component({
    tag: 'rux-beta-pop-up-menu',
    styleUrl: 'rux-beta-pop-up-menu.scss',
    shadow: true,
})
export class RuxBetaPopUpMenu {
    private trigger!: HTMLElement
    private content!: HTMLElement
    private arrowEl?: HTMLElement
    private positionerCleanup: ReturnType<typeof autoUpdate> | undefined

    @Prop({ mutable: true }) open = false
    @Prop() placement: Placement = 'bottom'

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this.content.style.display = 'block'
        } else {
            this.content.style.display = ''
        }

        if (this.open) {
            console.log('TRIGGER startPositioner()')
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

    componentDidLoad() {
        //? Don't think this is necessary anymore - just calls an extra time
        // console.log('**** position() call in compDidLoad *****')
        // this.position()
    }

    private position() {
        console.log('*****Run postion()*****')
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

        if (!this.open || !this.triggerSlot || !this.content) {
            return
        }
        //@ts-ignore
        computePosition(this.triggerSlot, this.content, {
            placement: this.placement,
            middleware: [
                offset(6),
                flip(),
                // shift({padding: 5}),
                //@ts-ignore
                arrow({ element: this.arrowEl }),
            ],
            //@ts-ignore
            // middleware: [flip()]
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(this.content.style, {
                left: `${x}px`,
                top: `${y}px`,
            })

            //@ts-ignore
            const { x: arrowX, y: arrowY } = middlewareData.arrow

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]]

            //@ts-ignore
            Object.assign(this.arrowEl.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                //@ts-ignore
                [staticSide]: '-4px',
            })
        })
    }

    private startPositioner() {
        console.log('****Start Positioner****')
        this.stopPositioner()
        this.position()
        this.positionerCleanup = autoUpdate(
            this.triggerSlot,
            this.content,
            this.position.bind(this)
        )
    }

    private stopPositioner() {
        console.log('****Stop Positioner****')
        if (this.positionerCleanup) {
            this.positionerCleanup()
            this.positionerCleanup = undefined
        }
    }

    private _handleSlotChange(e: any) {
        console.log('inside handleSlotChange', e.path[1])
        this.position()
    }

    get contentSlot() {
        //@ts-ignore
        return this.content
            ?.querySelector('slot')
            .assignedElements({ flatten: true })[0]
        // .filter(el => el.tagName.toLowerCase() === 'sl-menu')[0] as HTMLSlMenuElement;
    }

    get triggerSlot() {
        // console.log('fire triggerSlot()', this.trigger)
        //@ts-ignore
        return this.trigger
            ?.querySelector('slot')
            .assignedElements({ flatten: true })[0]
        // .filter(el => el.tagName.toLowerCase() === 'sl-menu')[0] as HTMLSlMenuElement;
    }

    get hasMenu(): boolean {
        //@ts-ignore
        return !!this.content
            ?.querySelector('slot')
            .assignedElements({ flatten: true })
            .filter(
                (el) => el.tagName.toLowerCase() === 'rux-beta-menu'
            )[0] as HTMLRuxBetaMenuElement
    }

    render() {
        // console.log(this.hasMenu, 'hasMenu in render')

        return (
            <Host>
                <div class="rux-popup">
                    <div
                        onClick={this.handleTriggerClick}
                        class="rux-popup__trigger"
                        //@ts-ignore
                        ref={(el) => (this.trigger = el)}
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <div
                        // hidden={!this.open}
                        class={{
                            'rux-popup__content': true,
                            'rux-popup__content--menu': this.hasMenu,
                        }}
                        part="popup-content"
                        //@ts-ignore
                        ref={(el) => (this.content = el)}
                    >
                        <div
                            class="rux-popup-arrow"
                            ref={(el) => (this.arrowEl = el)}
                        ></div>

                        <slot
                            onSlotchange={(e) => {
                                console.log('Fire onSlotChange')
                                this._handleSlotChange(e)
                            }}
                        ></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
