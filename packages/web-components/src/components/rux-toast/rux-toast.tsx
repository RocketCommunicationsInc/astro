/* eslint react/jsx-no-bind: 0 */ // --> OFF
import {
    Component,
    Host,
    h,
    Prop,
    Element,
    State,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @part icon - the toast's close icon
 * @part message - the toast's message
 * @part container - the toast's container element
 *
 * @slot (default) - the toast's message
 */
@Component({
    tag: 'rux-toast',
    styleUrl: 'rux-toast.scss',
    shadow: true,
})
export class RuxToast {
    @Element() el!: HTMLRuxToastElement

    @State() hasMessageSlot = false

    /**
     *  Message for the toast.
     */
    @Prop({ reflect: true }) message: string = ''

    /**
     *  If provided, the toast will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the toast will stay open until the user closes it.
     */
    @Prop({ attribute: 'close-after', mutable: true, reflect: true })
    closeAfter?: number

    /**
     * Prevents the user from dismissing the notification. Hides the close icon.
     */
    @Prop({ attribute: 'hide-close', reflect: true }) hideClose: boolean = false

    /**
     * Fires when a toast is opened
     */
    @Event({
        eventName: 'ruxtoastopen',
        composed: true,
        bubbles: true,
    })
    ruxToastOpen!: EventEmitter<boolean>

    /**
     * Fires when a toast is closed
     */
    @Event({
        eventName: 'ruxtoastclosed',
        composed: true,
        bubbles: true,
    })
    ruxToastClosed!: EventEmitter<boolean>

    private _timeoutRef: number | null = null

    @Watch('closeAfter')
    watchHandler() {
        this._updated()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._updated()
        this.hasMessageSlot = hasSlot(this.el)
    }

    componentDidLoad() {
        this._handleOpen()
    }

    private _handleOpen() {
        this.ruxToastOpen.emit()
    }

    private _handleClose() {
        this.ruxToastClosed.emit()
        this.el.remove()
    }

    private _updated() {
        if (this._closeAfter) {
            this._timeoutRef = window.setTimeout(() => {
                this._handleClose()
            }, this._closeAfter)
        }
    }

    private _onClick() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef)
        }
        this._handleClose()
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
        this.hasMessageSlot = hasSlot(this.el)
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-toast': true,
                    }}
                    part="container"
                >
                    <div
                        class={{
                            'rux-toast__content': true,
                        }}
                        part="message"
                    >
                        <slot onSlotchange={this._handleSlotChange}></slot>
                        {!this.hasMessageSlot && this.message ? (
                            <span>{this.message}</span>
                        ) : null}
                    </div>

                    {!this.hideClose ? (
                        <div class="rux-toast__actions">
                            <rux-icon
                                role="button"
                                tabindex="1"
                                class="rux-toast__close"
                                onClick={() => this._onClick()}
                                onKeyDown={(e) => this._onKeyPress(e)}
                                icon="clear"
                                exportparts="icon"
                                size="16px"
                            ></rux-icon>
                        </div>
                    ) : null}
                </div>
            </Host>
        )
    }
}
