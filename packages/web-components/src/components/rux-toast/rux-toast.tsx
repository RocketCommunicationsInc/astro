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
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'
import { Status, StatusSymbol } from '../../common/commonTypes.module'

/**
 * @part icon - the toast's close icon
 * @part message - the toast's message
 * @part status - the toast's status symbol
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
    @Prop() message: string = ''
    /**
     *  Displays status symbol. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/).
     */
    @Prop({ reflect: true }) status?: Status

    /**
     *  If provided, the toast will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the toast will stay open until the user closes it.
     */
    @Prop({ attribute: 'close-after', mutable: true }) closeAfter?: number

    /**
     * Enables closing animation
     */
    @Prop({ mutable: true, reflect: true }) animated?: boolean = false

    /**
     * Prevents the user from dismissing the notification. Hides the `actions` slot.
     */
    @Prop({ attribute: 'hide-close' }) hideClose: boolean = false

    @Event({
        eventName: 'ruxToastWillOpen',
        composed: true,
        bubbles: true,
    })
    ruxToastWillOpen!: EventEmitter<boolean>

    @Event({
        eventName: 'ruxToastOpen',
        composed: true,
        bubbles: true,
    })
    ruxToastOpen!: EventEmitter<boolean>

    @Event({
        eventName: 'ruxToastWillClose',
        composed: true,
        bubbles: true,
    })
    ruxToastWillClose!: EventEmitter<boolean>

    @Event({
        eventName: 'ruxToastClosed',
        composed: true,
        bubbles: true,
    })
    ruxToastClosed!: EventEmitter<boolean>

    private _timeoutRef: number | null = null
    private _animationTimeoutRef: number | null = null
    private _toastHeight: number | undefined = 0

    // @Watch('open')
    // @Watch('closeAfter')
    // watchHandler() {
    //     this._updated()
    //     if (!this.open) {
    //         this.ruxToastClosed.emit()
    //     }
    // }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._updated()
        this.hasMessageSlot = hasSlot(this.el)

        this._createToastToStack()
        this._addToastToStack()
    }

    disconnectedCallback() {
        this._destroyToastStack()
    }

    componentDidRender() {
        this._toastHeight = this.el.shadowRoot
            ?.querySelector('.rux-toast')
            ?.getBoundingClientRect().height
        console.log('height before render', this._toastHeight)
        this._setCustomHeightProperty()
    }

    componentDidLoad() {
        this._setAnimateProp()
        this._handleAnimateIn()
    }

    private _handleAnimateIn() {
        if (this._animationTimeoutRef) {
            clearTimeout(this._animationTimeoutRef)
        }
        if (this.animated) {
            this.el.setAttribute('animate-in', '')
            this._animationTimeoutRef = window.setTimeout(() => {
                this.el.removeAttribute('animate-in')
                this.ruxToastOpen.emit()
            }, 2000)
        } else {
            this.ruxToastOpen.emit()
        }
    }

    private _handleAnimateOut() {
        if (this.animated) {
            this.el.setAttribute('animate-out', '')
            window.setTimeout(() => {
                this.el.removeAttribute('animate-out')
                this.ruxToastClosed.emit()
                this.el.remove()
            }, 2000)
        } else {
            this.ruxToastClosed.emit()
            this.el.remove()
        }
    }

    private _updated() {
        if (this._closeAfter) {
            this._timeoutRef = window.setTimeout(() => {
                this._handleAnimateOut()
            }, this._closeAfter)
        }
    }

    private _onClick() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef)
        }
        this._handleAnimateOut()
    }

    private _onKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this._onClick()
        }
    }

    private _setAnimateProp() {
        const toastStack = this.el.parentElement
        if (toastStack?.hasAttribute('animate-toasts')) this.animated = true
    }

    private _createToastToStack() {
        // if toast stack already exists, return
        if (document.querySelector('rux-toast-stack')) return

        const toastStack = document.createElement('rux-toast-stack')
        const body = document.body

        body.appendChild(toastStack)
    }

    private _addToastToStack() {
        const toastStack = document.querySelector('rux-toast-stack')

        // if toast already in stack, return, else add to stack
        if (this.el.parentElement === toastStack) return

        toastStack?.insertBefore(this.el, toastStack.firstChild) // add as first child
    }

    private _destroyToastStack() {
        // if toast stack does not exist, return
        if (!document.querySelector('rux-toast-stack')) return

        const toasts = document.querySelectorAll('rux-toast')
        const toastStack = document.querySelector('rux-toast-stack')

        // if all toasts are gone, remove stack
        if (toasts.length === 0) {
            toastStack?.remove()
        }
    }

    private _setCustomHeightProperty() {
        this.el.style.setProperty('--height', this._toastHeight + 'px')
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
                        'rux-toast--caution':
                            this.status === StatusSymbol.CAUTION,
                        'rux-toast--critical':
                            this.status === StatusSymbol.CRITICAL,
                        'rux-toast--serious':
                            this.status === StatusSymbol.SERIOUS,
                        'rux-toast--standby':
                            this.status === StatusSymbol.STANDBY,
                        'rux-toast--off': this.status === StatusSymbol.OFF,
                        'rux-toast--normal':
                            this.status === StatusSymbol.NORMAL,
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
                                size="20px"
                            ></rux-icon>
                        </div>
                    ) : null}
                </div>
            </Host>
        )
    }
}
