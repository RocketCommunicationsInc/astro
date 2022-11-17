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
// import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The trigger for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @part trigger-container - the container of the tooltip trigger
 * @prop message - The message for the rux-tooltip
 */

@Component({
    tag: 'rux-tooltip',
    styleUrl: 'rux-tooltip.scss',
    shadow: true,
})
export class RuxTooltip {
    /**
     *  Enter a string to be used as the tooltip on this element
     */
    @Prop({ reflect: true }) message: string = ''

    /**
     *  Whether or not the tooltip is open
     */
    @Prop({ mutable: true, reflect: true }) open: boolean = false

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
            this.ruxTooltipOpened.emit()
        } else {
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
                    tabIndex={0}
                    aria-describedby="tooltip"
                >
                    <slot onSlotchange={_handleSlotChange} />
                </span>
            </Host>
        )
    }
}
