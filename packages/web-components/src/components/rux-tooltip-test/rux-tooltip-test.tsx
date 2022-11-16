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
 * @slot (default) - The content of the tooltip
 * @part container - The container of the tooltip text
 */

@Component({
    tag: 'rux-tooltip-test',
    styleUrl: 'rux-tooltip.scss',
    shadow: true,
})
export class RuxTooltip2 {
    /**
     *  Whether or not the tooltip is open
     */
    @Prop({ mutable: true, reflect: true }) open: boolean = false

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
        const triggers = document.querySelectorAll(`[tooltip="${this.el.id}"]`)
        for (const trigger of triggers) {
            trigger.setAttribute('aria-describedBy', this.el.id)
            trigger.addEventListener('pointerenter', () => (this.open = true))
            trigger.addEventListener('pointerleave', () => (this.open = false))
        }
    }
    disconnectedCallback() {
        // const trigger = document.querySelector(
        //     `[tooltip="${this.el.id}"]`
        // ) as HTMLElement
        // trigger.removeEventListener('pointerenter', () => {
        //     this.open = true
        //     console.log('removed!')
        // })
        // trigger.removeEventListener('pointerleave', this._handleMouseout)
    }
    componentWillLoad() {}

    private async _handleMouseIn() {
        this.open = true
    }

    private async _handleMouseOut() {
        this.open = false
    }

    render() {
        return (
            <Host>
                <span
                    aria-hidden={this.open ? 'false' : 'true'}
                    class={{
                        tooltip: true,
                        hidden: !this.open,
                    }}
                    role="tooltip"
                    part="container"
                >
                    <slot />
                </span>
            </Host>
        )
    }
}
