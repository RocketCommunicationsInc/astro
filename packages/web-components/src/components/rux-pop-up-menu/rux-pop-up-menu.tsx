//@ts-nocheck
import {
    Prop,
    Watch,
    Element,
    Component,
    Host,
    h,
    State,
    Event,
    EventEmitter,
    Method,
    Listen,
} from '@stencil/core'
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
    private _positionerCleanup: ReturnType<typeof autoUpdate> | undefined

    @Element() el!: HTMLRuxPopUpMenuElement

    /**
     * @prop open - determines if the pop up is open or closed
     */
    @Prop({ mutable: true }) open = false
    /**
     * @prop placement - the placement of the pop up relative to it's slotted trigger element. A list of
     * acceptable placements can be found at [floatingui.com/docs](https://floating-ui.com/docs/computePosition#placement)
     */
    @Prop() placement: Placement = 'bottom'

    @State() arrowPosition?: string
    @State() menuItems?: HTMLRuxMenuItemElement[] = []

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this.content.style.display = 'block'
            this._startPositioner()
        } else {
            this.content.style.display = ''
        }
    }

    /**
     *
     * @returns Promise<boolean> depending on if the popup is open
     */
    @Method()
    async isOpen(): Promise<boolean> {
        if (this.open) {
            return true
        } else return false
    }

    @Listen('ruxmenuitemselected', { passive: true })
    handleSelected(e: CustomEvent) {
        //click a menu item, go thru connected menu items, if target matches update selected
        const items = this.el.querySelectorAll('rux-menu-item')
        items.forEach((item) => {
            if (item.value === e.target.value) {
                item.selected = true
            } else {
                item.selected = false
            }
        })
    }

    connectedCallback() {
        this._handleTriggerClick = this._handleTriggerClick.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentDidRender() {
        //if open is passed true on init, then wait for things to be defined and run positioner.
        if (this.open) {
            this._startPositioner()
        }
        // this._determineArrowPosition()
    }

    private async _handleTriggerClick() {
        this.open = !this.open
    }

    private _position() {
        // If it's not visible, can't be opened or doesn't have content we don't need to compute anything.
        if (!this.open || !this.triggerSlot || !this.content) {
            console.log(
                `returning early, one or more are false: open - ${this.open}, triggerSlot - ${this.triggerSlot}, content - ${this.content}`
            )
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
        //* Tried component will load, did load
        this._determineArrowPosition() // right every time, but change during render warning
    }

    private _startPositioner() {
        this._stopPositioner()
        this._position()
        this._positionerCleanup = autoUpdate(
            this.triggerSlot,
            this.content,
            this._position.bind(this)
        )
    }

    /**
     * This returns which side the arrow is on: top, right, left or bottom.
     * Currently using this to determine which border to bolster, but could be useful in the future.
     * ! This does cause a 'state changed during render' stencil erorr.
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
    }

    private _stopPositioner() {
        if (this._positionerCleanup) {
            this._positionerCleanup()
            this._positionerCleanup = undefined
        }
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
                        onClick={this._handleTriggerClick}
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
                            hidden: this.open === false,
                        }}
                        part="popup-content"
                        ref={(el) => (this.content = el)}
                    >
                        <div
                            class="rux-popup-arrow"
                            ref={(el) => (this.arrowEl = el)}
                        ></div>

                        <slot></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
