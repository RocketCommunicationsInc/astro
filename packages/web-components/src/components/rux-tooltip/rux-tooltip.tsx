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
// import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The trigger for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @part trigger-container - the container of the tooltip trigger
 * @prop message - The message for the rux-tooltip
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
    /**
     *  Enter a string to be used as the tooltip on this element
     */
    @Prop({ reflect: true }) message: string = ''

    /**
     *  Whether or not the tooltip is open
     */
    @Prop({ mutable: true, reflect: true }) open: boolean = false

    /**
     * The placement of the tooltip relative to it's slotted trigger element. Defaults to auto.
     */
    @Prop() placement: ExtendedPlacement = 'auto'

    /**
     * Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false.
     */
    @Prop({ reflect: true }) disableAutoUpdate: boolean = false

    /**
     * The position strategy of the popup, either absolute or fixed.
     */
    @Prop() strategy: 'absolute' | 'fixed' = 'absolute'

    @Element() el!: HTMLRuxTooltipElement

    @State() currentSlotted: any

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

    @Watch('open')
    handleOpen() {
        if (this.open) {
            this._position()
            this.ruxTooltipOpened.emit()
        } else {
            //this._stopPositioner()
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

    private _position() {
        if (!this.open || !this.trigger || !this.content) {
            return
        }

        console.log(this.trigger)
        // const placementCheck = () => {
        //     if (!this.disableAutoUpdate) {
        //         return [
        //             offset(5),
        //             this.placement === 'auto'
        //                 ? autoPlacement({ alignment: 'start' })
        //                 : flip(),
        //         ]
        //     } else if (this.placement === 'auto') {
        //         return [
        //             offset(5),
        //             autoPlacement({ alignment: 'start' }),
        //         ]
        //     } else {
        //         return [offset(5)]
        //     }
        // }
        computePosition(this.trigger, this.content, {
            //@ts-ignore
            placement: 'right',
            // strategy: this.strategy,
            middleware: [flip(), offset(4)],
        }).then(({ x, y }) => {
            Object.assign(this.content.style, {
                left: `${x}px`,
                top: `${y}px`,
                //position: `${this.strategy}`,
            })

            //@ts-ignore
            // const { x: arrowX, y: arrowY } = middlewareData.arrow

            // const staticSide = {
            //     top: 'bottom',
            //     right: 'left',
            //     bottom: 'top',
            //     left: 'right',
            // }[placement.split('-')[0]]
            // Object.assign(this.arrowEl!.style, {
            //     left: arrowX != null ? `${arrowX}px` : '',
            //     top: arrowY != null ? `${arrowY}px` : '',
            //     right: '',
            //     bottom: '',
            //     //@ts-ignore
            //     [staticSide]: '-6px',
            // })
        })
        //this._setArrowPosition()
    }

    private _startPositioner() {
        this._stopPositioner()
        if (this.open) {
            this._position()
            if (!this.disableAutoUpdate) {
                this._positionerCleanup = autoUpdate(
                    this.trigger,
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

    // get contentSlot() {
    //   return this.content
    //       ?.querySelector('slot')!
    //       .assignedElements({ flatten: true })[0]
    // }

    // get triggerSlot() {
    //     return this.trigger
    //         ?.querySelector('slot')!
    //         .assignedElements({ flatten: true })[0]
    // }

    private _handleSlotChange() {
        // this.el.querySelector( 'slot' )?.assignedNodes()
        //console.log('assigned nodes',  console.log(this.el.shadowRoot?.querySelector('default-one')));
    }

    private async _handleTooltipShow() {
        this.open = true
        // If the trigger is comprised of an HTML element, get it and delegate focus to it, else it is text and don't
        const firstChild = this.el.firstElementChild as HTMLElement
        if (firstChild) {
            firstChild.focus()
        }
    }

    private async _handleTooltipHide() {
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
                <span
                    onMouseEnter={_handleTooltipShow}
                    onMouseLeave={_handleTooltipHide}
                    onFocusin={_handleTooltipShow}
                    onFocusout={_handleTooltipHide}
                    class="rux-tooltip__trigger"
                    part="trigger-container"
                    ref={(el) => (this.trigger = el!)}
                    tabIndex={0}
                    aria-describedby="tooltip"
                >
                    <slot onSlotchange={_handleSlotChange} />
                </span>
            </Host>
        )
    }
}
