/* eslint react/jsx-no-bind: 0 */ // --> OFF
import {
    Component,
    Event,
    EventEmitter,
    Host,
    h,
    Prop,
    Element,
    Watch,
    State,
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'
import { Status, StatusSymbol } from '../../common/commonTypes.module'

/**
 * @part icon - the notification's close icon
 * @part message - the notification's message
 * @part status - the notification's status symbol
 * @part container - the notification's container element
 *
 * @slot prefix - an optional left side content area
 * @slot (default) - the notification's message
 * @slot actions - used for display actions like close icons or buttons
 */
@Component({
    tag: 'rux-notification',
    styleUrl: 'rux-notification.scss',
    shadow: true,
})
export class RuxNotification {
    @Element() el!: HTMLRuxNotificationElement

    @State() hasPrefixSlot = false
    @State() hasMessageSlot = false
    /**
     *  Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided).
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false

    /**
     *  Message for the notification banner.
     */
    @Prop() message: string = ''
    /**
     *  The background color. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/).
     */
    @Prop({ reflect: true }) status?: Status
    /**
     *  If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it.
     */
    @Prop({ attribute: 'close-after', mutable: true }) closeAfter?: number
    /**
     * Changes the size of the banner to a small variant. (Deprecated: use `size` prop instead)
     */
    @Prop() small: boolean = false

    /**
     * Styles the input element size between small, and medium. The default styling is medium.
     */
    @Prop({ reflect: true }) size?: 'small' | 'medium'

    /**
     * Prevents the user from dismissing the notification. Hides the `actions` slot.
     */
    @Prop({ attribute: 'hide-close' }) hideClose: boolean = false

    /**
     * Fires when the notification banner is closed
     */
    @Event({
        eventName: 'ruxclosed',
    })
    ruxClosed!: EventEmitter<boolean>

    private _timeoutRef: number | null = null

    @Watch('open')
    @Watch('closeAfter')
    watchHandler() {
        this._updated()
        if (!this.open) {
            this.ruxClosed.emit()
        }
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._updated()
        this.hasMessageSlot = hasSlot(this.el)
    }

    private _updated() {
        if (this._closeAfter && this.open) {
            this._timeoutRef = window.setTimeout(() => {
                this.open = false
            }, this._closeAfter)
        }
    }

    private _onClick() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef)
        }
        this.open = false
    }

    private _onKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this._onClick()
        }
    }

    get _closeAfter() {
        //* as long as it's less than 1000, they put in seconds. Convert that here.
        if (this.closeAfter && this.closeAfter <= 999) {
            //it's in seconds
            this.closeAfter *= 1000 // change into ms
        }

        if (
            (this.closeAfter && this.closeAfter > 10000) ||
            (this.closeAfter && this.closeAfter < 2000)
        ) {
            // if this number is larger than 10s or smaller than 2s, enforce minimum 2s delay
            this.closeAfter = 2000
        }

        return this.closeAfter
    }

    private _handleSlotChange() {
        this.hasPrefixSlot = hasSlot(this.el, 'prefix')
        this.hasMessageSlot = hasSlot(this.el)
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-notification-banner': true,
                        'rux-notification-banner--open': this.open,
                        'rux-notification-banner--small':
                            this.small || this.size === 'small',
                        'rux-notification-banner--large':
                            !this.small || this.size !== 'small',
                        'rux-notification-banner--caution':
                            this.status === StatusSymbol.CAUTION,
                        'rux-notification-banner--critical':
                            this.status === StatusSymbol.CRITICAL,
                        'rux-notification-banner--serious':
                            this.status === StatusSymbol.SERIOUS,
                        'rux-notification-banner--standby':
                            this.status === StatusSymbol.STANDBY,
                        'rux-notification-banner--off':
                            this.status === StatusSymbol.OFF,
                        'rux-notification-banner--normal':
                            this.status === StatusSymbol.NORMAL,
                        'rux-notification-banner--hasPrefixSlot': this
                            .hasPrefixSlot,
                    }}
                >
                    <div
                        class={{ 'rux-notification-banner__inner': true }}
                        part="container"
                    >
                        <div
                            class={{
                                'rux-notification-banner__prefix': true,
                                hidden: !this.hasPrefixSlot,
                            }}
                        >
                            <slot
                                name="prefix"
                                onSlotchange={this._handleSlotChange}
                            ></slot>
                        </div>

                        {this.status ? (
                            <div
                                class="rux-notification-banner__status"
                                part="status"
                            >
                                <rux-status status={this.status}></rux-status>
                            </div>
                        ) : null}

                        <div
                            class={{
                                'rux-notification-banner__content': true,
                            }}
                            part="message"
                        >
                            <slot onSlotchange={this._handleSlotChange}></slot>
                            {!this.hasMessageSlot && this.message ? (
                                <span>{this.message}</span>
                            ) : null}
                        </div>

                        {!this.hideClose ? (
                            <div class="rux-notification-banner__actions">
                                <slot name="actions">
                                    <rux-icon
                                        role="button"
                                        tabindex="1"
                                        class="rux-notification-banner__close"
                                        onClick={() => this._onClick()}
                                        onKeyDown={(e) => this._onKeyPress(e)}
                                        icon="clear"
                                        size={
                                            this.small || this.size === 'small'
                                                ? '24px'
                                                : '32px'
                                        }
                                        exportparts="icon"
                                    ></rux-icon>
                                </slot>
                            </div>
                        ) : null}
                    </div>
                </div>
            </Host>
        )
    }
}
