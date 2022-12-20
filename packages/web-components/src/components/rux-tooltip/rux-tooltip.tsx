import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
    Method,
    State,
} from '@stencil/core'
import {
    Placement,
    computePosition,
    offset,
    flip,
    autoUpdate,
    autoPlacement,
} from '@floating-ui/dom'
import { hasSlot } from '../../utils/utils'
// import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The trigger for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @part trigger-container - the container of the tooltip trigger
 */

export declare type ExtendedPlacement = Placement | 'auto'

@Component({
    tag: 'rux-tooltip',
    styleUrl: 'rux-tooltip.scss',
    shadow: true,
})
export class RuxTooltip {
    private trigger!: HTMLElement
    private content!: HTMLElement
    private _positionerCleanup: ReturnType<typeof autoUpdate> | undefined

    @Element() el!: HTMLRuxTooltipElement

    @State() currentSlotted: any
    @State() hasTriggerSlot = false
    @State() delegatedFocus = false //Keeps track of whether the element in trigger slot is focusable
    @State() timeoutID: any = undefined // Keeps track of the timeout so _handleCloseTooltip can cancel it if needed

    /**
     *  Enter a string to be used as the tooltip on this element
     */
    @Prop({ reflect: true }) message: string = ''

    /**
     *  Whether or not the tooltip is open
     */
    @Prop({ mutable: true, reflect: true }) open: boolean = false

    /**
     *  How long it takes the tooltip to appear in milliseconds, default = 800
     */

    @Prop({ reflect: true }) delay?: string | number

    /**
     *  Pixel offset from trigger, default = 8
     */

    @Prop({ mutable: true }) offset: number = 8

    /**
     * The placement of the tooltip relative to it's slotted trigger element. Defaults to auto.
     */
    @Prop() placement: ExtendedPlacement = 'auto'

    /**
     * Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false.
     */
    @Prop({ reflect: true }) disableAutoUpdate: boolean = false

    /**
     * The position strategy of the tooltip, either absolute or fixed.
     */
    @Prop() strategy: 'absolute' | 'fixed' = 'absolute'

    /**
     * Emits when the tooltip has opened
     */
    @Event({ eventName: 'ruxtooltipopened' })
    ruxTooltipOpened!: EventEmitter

    /**
     * Emits when the tooltip has closed.
     */
    @Event({ eventName: 'ruxtooltipclosed' })
    ruxTooltipClosed!: EventEmitter

    @Watch('delay')
    handleDelay() {
        //check to see if the delay prop can be converted to a number. If not, revert to default time.
        const delayTime = isNaN(Number(this.delay)) ? 800 : Number(this.delay)
        this.el.style.setProperty('--tooltip-delay', `${delayTime}ms`)
    }

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this.content.style.display = 'block'
            this._startPositioner()
            this.ruxTooltipOpened.emit()
        } else {
            this.content.style.display = ''
            this._stopPositioner()
            this.ruxTooltipClosed.emit()
        }
    }

    /**
     * Opens the tooltip and returns true.
     */
    @Method()
    async show() {
        if (this.open) {
            return this.open
        } else this.open = true
        return this.open
    }

    /**
     * Closes the tooltip and returns false.
     */
    @Method()
    async hide() {
        if (!this.open) {
            return !this.open
        } else this.open = false
        return !this.open
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleTooltipShow = this._handleTooltipShow.bind(this)
        this._handleTooltipHide = this._handleTooltipHide.bind(this)
    }
    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }
    componentWillLoad() {
        this._handleSlotChange()
    }

    componentDidLoad() {
        this.handleOpen()
        this.handleDelay()
    }

    private _position() {
        if (!this.open || !this.triggerSlot || !this.content) {
            return
        }
        const placementCheck = () => {
            if (!this.disableAutoUpdate) {
                return [
                    offset(this.offset),
                    this.placement === 'auto'
                        ? autoPlacement({ alignment: 'start' })
                        : flip(),
                ]
            } else if (this.placement === 'auto') {
                return [
                    offset(this.offset),
                    autoPlacement({ alignment: 'start' }),
                ]
            } else {
                return [offset(this.offset)]
            }
        }
        computePosition(this.triggerSlot, this.content, {
            //@ts-ignore
            placement: this.placement,
            strategy: this.strategy,
            middleware: placementCheck(),
        }).then(({ x, y }) => {
            Object.assign(this.content.style, {
                left: `${x}px`,
                top: `${y}px`,
                position: `${this.strategy}`,
            })
        })
    }

    private _startPositioner() {
        this._stopPositioner()
        if (this.open) {
            this._position()
            if (!this.disableAutoUpdate) {
                this._positionerCleanup = autoUpdate(
                    this.triggerSlot,
                    this.content,
                    this._position.bind(this)
                )
            }
        }
    }

    private _stopPositioner() {
        if (this._positionerCleanup) {
            this._positionerCleanup()
            this._positionerCleanup = undefined
        }
    }

    get triggerSlot() {
        if (
            this.trigger
                ?.querySelector('slot')!
                .assignedElements({ flatten: true })[0] !== undefined
        ) {
            return this.trigger
                ?.querySelector('slot')!
                .assignedElements({ flatten: true })[0]
        }
        return this.trigger
    }

    get hasTrigger() {
        return this.trigger ? true : this.hasTriggerSlot
    }

    private _handleSlotChange() {
        this.hasTriggerSlot = hasSlot(this.el)
    }

    private _handleTooltipShow() {
        if (this.open) return
        this.open = true
        // If the trigger is comprised of ONE HTML element, get it and delegate focus to it, else it is text OR multiple HTML elements and then we want focus to be handled normally.
        if (this.el.childElementCount === 1) {
            this.delegatedFocus = true
            const firstChild = this.el.firstElementChild as HTMLElement
            //check for a tabindex that is not -1 if it doesn't have one, add one
            firstChild.hasAttribute('tabindex') &&
            firstChild.getAttribute('tabindex') != '-1'
                ? null
                : firstChild.setAttribute('tabindex', '0')
            firstChild.focus()
        }
    }

    private _handleTooltipHide() {
        if (!this.open) return
        this.open = false
    }

    render() {
        const {
            _handleSlotChange,
            _handleTooltipShow,
            _handleTooltipHide,
        } = this
        return (
            <Host>
                <span>
                    <span
                        class="rux-tooltip__trigger"
                        part="trigger-container"
                        ref={(el) => (this.trigger = el!)}
                        tabIndex={this.delegatedFocus ? -1 : 0}
                        aria-describedby="tooltip"
                        onMouseEnter={_handleTooltipShow}
                        onMouseLeave={_handleTooltipHide}
                        onFocusin={_handleTooltipShow}
                        onFocusout={_handleTooltipHide}
                    >
                        <slot onSlotchange={_handleSlotChange} />
                    </span>
                    <span
                        aria-hidden={this.open ? 'false' : 'true'}
                        class={{
                            tooltip: true,
                            hidden: !this.open,
                        }}
                        id="tooltip"
                        role="tooltip"
                        part="container"
                        ref={(el) => (this.content = el!)}
                    >
                        {this.message}
                    </span>
                </span>
            </Host>
        )
    }
}
