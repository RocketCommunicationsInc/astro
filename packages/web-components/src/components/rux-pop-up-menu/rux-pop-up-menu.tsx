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
    Event,
} from '@stencil/core'
import {
    Placement,
    computePosition,
    arrow,
    offset,
    flip,
    autoUpdate,
} from '@floating-ui/dom'

/**
 * @slot (default) - The contents for rux-pop-up-menu
 * @slot trigger - The trigger element for rux-pop-up-menu
 *
 * @part conatiner - the container of rux-pop-up-menu
 * @part trigger-container - the container of the pop-up trigger
 * @part popup-content - the content that is shown when rux-pop-up-menu is opened
 * @part arrow - the arrow pointing to the trigger of rux-pop-up-menu
 */
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

    /**
     * @event ruxpopupmenuselected - emits the value of the selected rux-menu-item inside of rux-pop-up-menu
     */
    @Event({ eventName: 'ruxpopupmenuselected' })
    ruxPopUpMenuSelected!: EventEmitter

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this.content.style.display = 'block'
            this._startPositioner()
            window.addEventListener('mousedown', (e: MouseEvent) =>
                this._handleOutsideClick(e)
            )
        } else {
            this.content.style.display = ''
            this._stopPositioner()
            window.removeEventListener('mousedown', (e: MouseEvent) =>
                this._handleOutsideClick(e)
            )
        }
    }

    /**
     * @returns Promise<boolean> depending on if the popup is open
     */
    @Method()
    async isOpen(): Promise<boolean> {
        if (this.open) {
            return true
        } else return false
    }

    //? If we really want the ability to isolate rux-pop-up-menu as a container of sorts, then this might be unnecessary
    //? It's only helpful if the pop-up is being used with rux-menu-items. Otherwise this is a waste of code.
    //* Pros - most the time it'll be used with menu-items, and therefore this is better DX since you don't have to add
    //* listeners to each menu item, and can add a listener just to pop-up-menu.
    //* Cons - if not using rux-menu-items, this doesn't do anything at all.
    @Listen('ruxmenuitemselected', { passive: true })
    handleSelected(e: CustomEvent) {
        const items = this.el.querySelectorAll('rux-menu-item')
        items.forEach((item) => {
            if (item.value === e.target.value) {
                item.selected = true
                this.ruxPopUpMenuSelected.emit(item)
            } else {
                item.selected = false
            }
        })
    }

    connectedCallback() {
        this._handleTriggerClick = this._handleTriggerClick.bind(this)
        this._handleOutsideClick = this._handleOutsideClick.bind(this)
    }

    componentDidRender() {
        //if open is passed true on init, then wait for things to be defined and run positioner.
        if (this.open) {
            this._startPositioner()
        }
    }

    private async _handleTriggerClick() {
        this.open = !this.open
    }

    private _position() {
        // If it's not visible, can't be opened or doesn't have content we don't need to compute anything.
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

    private _startPositioner() {
        this._stopPositioner()
        if (this.open) {
            this._position()
            this._positionerCleanup = autoUpdate(
                this.triggerSlot,
                this.content,
                this._position.bind(this)
            )
        }
    }

    /**
     * This returns which side the arrow is on: top, right, left or bottom.
     * Currently using this to determine which border to bolster, but could be useful in the future.
     * ! This does cause a 'state changed during render' stencil erorr.
     * ! Tried returning the postion instead of storing in state, but the class list never updates that way.
     * * solved with async getTriggerRect and getArrowRect
     */
    private async _determineArrowPosition() {
        if (!this.open) {
            return
        }

        const triggerElRect = await this.getTriggerRect()
        const arrowDivRect = await this.getArrowRect()

        // If trigger's bottom is higher than the arrows bottom, and triggers top is lower than the arrow's top
        //it's not top or bottom. Check for left or right
        if (
            triggerElRect.bottom > arrowDivRect.bottom &&
            triggerElRect.top < arrowDivRect.top
        ) {
            if (triggerElRect.right > arrowDivRect.right) {
                this.arrowPosition = 'left'
                // return 'left'
            } else {
                this.arrowPosition = 'right'
                // return 'right'
            }
        } else {
            if (triggerElRect.bottom > arrowDivRect.bottom) {
                this.arrowPosition = 'top'
                // return 'top'
            } else {
                this.arrowPosition = 'bottom'
                // return 'bottom'
            }
        }
    }
    private async getTriggerRect() {
        return this.triggerSlot.getBoundingClientRect()
    }
    private async getArrowRect() {
        return this.arrowEl?.getBoundingClientRect()
    }

    private _stopPositioner() {
        if (this._positionerCleanup) {
            this._positionerCleanup()
            this._positionerCleanup = undefined
        }
    }

    private _handleOutsideClick(e: MouseEvent) {
        const menuClick = e.composedPath().includes(this.contentSlot)
        const triggerClick = e.composedPath().includes(this.triggerSlot)
        //! This prevents the pop up from closing if you're not using rux-menu to encapsulate everything within pop-up - but
        //! since pop-up is display block, clicking in ceratin places still won't close the pop-up.
        //! Setting width: min-content solves this. What are the downsides to that?
        const popUpClick = e.composedPath().includes(this.el)
        if (!menuClick && !triggerClick && !popUpClick) {
            this.open = false
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
                <div class="rux-popup" part="container">
                    <div
                        onClick={this._handleTriggerClick}
                        class="rux-popup__trigger"
                        ref={(el) => (this.trigger = el)}
                        part="trigger-container"
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
                            part="arrow"
                        ></div>

                        <slot></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
