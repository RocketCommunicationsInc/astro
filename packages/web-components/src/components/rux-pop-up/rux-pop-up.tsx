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
    computePosition,
    arrow,
    offset,
    flip,
    autoUpdate,
    autoPlacement,
} from '@floating-ui/dom'
import { ExtendedPlacement } from '../../common/commonTypes.module'

/**
 * @slot (default) - The contents for rux-pop-up
 * @slot trigger - The trigger element for rux-pop-up
 *
 * @part container - the container of rux-pop-up
 * @part trigger-container - the container of the pop-up trigger
 * @part popup-content - the content that is shown when rux-pop-up is opened
 * @part arrow - the arrow pointing to the trigger of rux-pop-up
 */

@Component({
    tag: 'rux-pop-up',
    styleUrl: 'rux-pop-up.scss',
    shadow: true,
})
export class RuxPopUp {
    private trigger!: HTMLElement
    private content!: HTMLElement
    private arrowEl!: HTMLElement
    private _positionerCleanup: ReturnType<typeof autoUpdate> | undefined
    private _assignedOutsideClickEvent: boolean = false

    @Element() el!: HTMLRuxPopUpElement

    /**
     * Determines if the pop up is open or closed
     */
    @Prop({ mutable: true, reflect: true }) open = false

    /**
     * The placement of the pop up relative to it's slotted trigger element. Defaults to auto.
     */
    @Prop() placement: ExtendedPlacement = 'auto'

    /**
     * Turns autoUpdate on or off which makes the pop-up move to stay in view based on scroll. Defaults to false.
     */
    @Prop({ reflect: true }) disableAutoUpdate: boolean = false

    /**
     * watches for trigger movements and replace the popup if movement is detected.
     */
    @Prop({ reflect: true }) enableAnimationFrame: boolean = false

    /**
     * The position strategy of the popup, either absolute or fixed.
     */
    @Prop() strategy: 'absolute' | 'fixed' = 'absolute'

    /**
     * When provided, will close the pop-up when a single selection is made.
     */
    @Prop({ attribute: 'close-on-select' }) closeOnSelect: boolean = false

    @State() arrowPosition?: string

    /**
     * Emits when the pop up has opened
     */
    @Event({ eventName: 'ruxpopupopened' })
    ruxPopUpOpened!: EventEmitter
    /**
     * Emits when the pop up has closed.
     */
    @Event({ eventName: 'ruxpopupclosed' })
    ruxPopUpClosed!: EventEmitter

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this.content.style.display = 'block'
            this._startPositioner()
            this.ruxPopUpOpened.emit()
            if (!this._assignedOutsideClickEvent) {
                window.addEventListener('mousedown', this._handleOutsideClick)
                this._assignedOutsideClickEvent = true
            }
        } else {
            this.content.style.display = ''
            this._stopPositioner()
            this.ruxPopUpClosed.emit()
            if (this._assignedOutsideClickEvent) {
                window.removeEventListener(
                    'mousedown',
                    this._handleOutsideClick
                )
                this._assignedOutsideClickEvent = false
            }
        }
    }

    /**
     * Opens the pop up and returns true.
     */
    @Method()
    async show() {
        if (this.open) {
            return this.open
        } else this.open = true
        return this.open
    }

    /**
     * Closes the pop up and returns false.
     */
    @Method()
    async hide() {
        if (!this.open) {
            return this.open
        } else this.open = false
        return this.open
    }

    connectedCallback() {
        this._handleTriggerClick = this._handleTriggerClick.bind(this)
        this._handleTriggerKeyPress = this._handleTriggerKeyPress.bind(this)
        this._handleOutsideClick = this._handleOutsideClick.bind(this)
        this._setTriggerTabIndex = this._setTriggerTabIndex.bind(this)
        if (this.open && !this._assignedOutsideClickEvent) {
            window.addEventListener('mousedown', this._handleOutsideClick)
            this._assignedOutsideClickEvent = true
        }
    }

    componentWillLoad() {
        this._setTriggerTabIndex()
    }

    componentDidRender() {
        if (this.open) {
            this._startPositioner()
        }
    }

    private async _handleTriggerClick(event: MouseEvent) {
        //excludes synthetic keyboard events such as Enter on a button behaving as a click
        if (event.detail > 0) {
            this.open = !this.open
        }
    }

    //part of focus + accessible keyboard events
    private async _handleTriggerKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.open = !this.open
        }
    }

    private _position() {
        if (!this.open || !this.triggerSlot || !this.content) {
            return
        }
        const placementCheck = () => {
            // disable auto update = false, placement is anything
            if (!this.disableAutoUpdate) {
                return [
                    offset(12),
                    this.placement === 'auto'
                        ? autoPlacement({ alignment: 'start' })
                        : flip(),
                    arrow({ element: this.arrowEl }),
                ]
            }
            // disableAutoUpdate = true, placement=auto
            else if (this.placement === 'auto') {
                /* we need to set a starting placement for the user because 'auto' is only understood by floating-ui as something means,
            'pick whatever side fits best', and in this case we don't want any automatic setting of placements */
                this.placement = 'top'
                return [offset(12), arrow({ element: this.arrowEl })]
                // disableAutoUpdate = true, placement != auto
            } else {
                return [offset(12), arrow({ element: this.arrowEl })]
            }
        }
        computePosition(this.triggerSlot, this.content, {
            //@ts-ignore
            placement: this.placement,
            strategy: this.strategy,
            middleware: placementCheck(),
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(this.content.style, {
                left: `${x}px`,
                top: `${y}px`,
                position: `${this.strategy}`,
            })

            //@ts-ignore
            const { x: arrowX, y: arrowY } = middlewareData.arrow

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]]
            Object.assign(this.arrowEl!.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                //@ts-ignore
                [staticSide]: '-6px',
            })
        })
        this._setArrowPosition()
    }

    //set a tabindex if the trigger element does not have one, necessary for items that can not natively receive focus
    private _setTriggerTabIndex() {
        const triggerEl = this.el.querySelector(
            `[slot='trigger']`
        ) as HTMLElement
        triggerEl.hasAttribute('tabindex')
            ? null
            : triggerEl.setAttribute('tabindex', '0')
    }

    private _startPositioner() {
        this._stopPositioner()
        if (this.open) {
            this._position()
            this._positionerCleanup = autoUpdate(
                this.triggerSlot,
                this.content,
                this._position.bind(this),
                { animationFrame: this.enableAnimationFrame }
            )
        }
    }

    private async _setArrowPosition() {
        const arrowPos = await this._determineArrowPosition()
        if (this.arrowPosition === arrowPos) {
            return
        } else this.arrowPosition = arrowPos
    }

    private async _determineArrowPosition() {
        if (!this.open) {
            return
        }

        const triggerElRect = await this.getTriggerRect()
        const arrowDivRect = await this.getArrowRect()

        if (
            triggerElRect.bottom > arrowDivRect.bottom &&
            triggerElRect.top < arrowDivRect.top
        ) {
            if (triggerElRect.right > arrowDivRect.right) {
                return 'left'
            } else {
                return 'right'
            }
        } else {
            if (triggerElRect.bottom > arrowDivRect.bottom) {
                return 'top'
            } else {
                return 'bottom'
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
        const popUpClick = e.composedPath().includes(this.el)
        if (!menuClick && !triggerClick && !popUpClick) {
            this.open = false
        }
    }

    @Listen('ruxmenuselected')
    handleSelection() {
        if (this.closeOnSelect) {
            this.open = false
        }
    }

    get contentSlot() {
        return this.content
            ?.querySelector('slot')!
            .assignedElements({ flatten: true })[0]
    }

    get triggerSlot() {
        return this.trigger
            ?.querySelector('slot')!
            .assignedElements({ flatten: true })[0]
    }

    get hasMenu(): boolean {
        //@ts-ignore
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
                        onKeyPress={this._handleTriggerKeyPress}
                        class="rux-popup__trigger"
                        ref={(el) => (this.trigger = el!)}
                        part="trigger-container"
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <div
                        class={{
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
                        aria-hidden={this.open ? 'false' : 'true'}
                        part="popup-content"
                        ref={(el) => (this.content = el!)}
                    >
                        <div
                            class="rux-popup-arrow"
                            ref={(el) => (this.arrowEl = el!)}
                            part="arrow"
                        ></div>

                        <slot></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
