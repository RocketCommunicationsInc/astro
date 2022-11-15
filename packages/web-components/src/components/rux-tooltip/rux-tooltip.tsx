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
import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The trigger for the rux-tooltip
 * @slot (message) - The message for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @prop (message) - The message for the rux-tooltip
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

    @State() hasMessageSlot: boolean = false

    @Element() el!: HTMLRuxTooltipElement

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
            return this.open
        } else this.open = false
        return this.open
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.el.addEventListener('mouseover', this._handleMouseIn)
        this.el.addEventListener('mouseout', this._handleMouseOut)
    }
    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
        this.el.removeEventListener('mouseover', this._handleMouseIn)
        this.el.removeEventListener('mouseout', this._handleMouseOut)
    }
    componentWillLoad() {
        this._handleSlotChange()
    }

    private _handleSlotChange() {
        this.hasMessageSlot = hasSlot(this.el, 'message')
    }
    private async _handleMouseIn() {
        this.open = true
    }

    private async _handleMouseOut() {
        this.open = false
    }

    render() {
        const { _handleSlotChange } = this
        return (
            <Host>
                <div class="rux-tooltip">
                    <div
                        aria-hidden={this.open ? 'false' : 'true'}
                        class={{
                            tooltip: true,
                            hidden: !this.open,
                        }}
                        part="container"
                    >
                        <slot name="message" onSlotchange={_handleSlotChange}>
                            {this.message}
                        </slot>
                    </div>
                    <slot />
                </div>
            </Host>
        )
    }
}
