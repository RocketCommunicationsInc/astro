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
    tag: 'rux-toast',
    styleUrl: 'rux-toast.scss',
    shadow: true,
})
export class RuxToast {
    @Element() el!: HTMLRuxToastElement

    @State() hasPrefixSlot = false
    @State() hasMessageSlot = false
    @State() toastArray = [...document.querySelectorAll('rux-toast')] || []
    /**
     *  Set to true to display the toast
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false

    /**
     *  Message for the toast.
     */
    @Prop() message: string = ''
    /**
     *  Displays status symbol. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/).
     */
    @Prop({ reflect: true }) status?: Status
    /**
     *  If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it.
     */
    @Prop({ attribute: 'close-after', mutable: true }) closeAfter?: number
    /**
     * Changes the size of the banner to a small variant.
     */
    // @Prop() small: boolean = false

    /**
     * Enables closing animation
     */
    @Prop() animateOut: boolean = false

    /**
     * Prevents the user from dismissing the notification. Hides the `actions` slot.
     */
    @Prop({ attribute: 'hide-close' }) hideClose: boolean = false

    /**
     * Fires when the toast is closed
     */
    @Event({
        eventName: 'ruxclosed',
    })
    ruxClosed!: EventEmitter<boolean>

    private _timeoutRef: number | null = null

    // private _currentToasts

    @Watch('open')
    @Watch('closeAfter')
    watchHandler() {
        this._hideToastsOverFour()
        this._updated()
        if (!this.open) {
            this.ruxClosed.emit()
        }
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._updated()
        this.hasMessageSlot = hasSlot(this.el)

        this._createToastStack()
        this._addToastToStack()
    }

    componentDidLoad() {
        this._hideToastsOverFour()
    }

    disconnectedCallback() {
        this._destroyToastStack()
    }

    private _updated() {
        if (this._closeAfter && this.open) {
            this._timeoutRef = window.setTimeout(() => {
                this.open = false
                this._hideToastsOverFour()
            }, this._closeAfter)
        }
        this._hideToastsOverFour()
    }

    private _onClick() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef)
        }
        if (this.animateOut) {
            this.el.setAttribute('animating', '')
            window.setTimeout(() => {
                this.open = false
                this.el.removeAttribute('animating')
            }, 200)
        } else {
            this.open = false
        }
    }

    private _onKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this._onClick()
        }
    }

    private _createToastStack() {
        // if stack already exists, return
        if (document.querySelector('.rux-toast-stack')) return

        // create stack, add to DOM
        const toastStack = document.createElement('DIV')
        toastStack.classList.add('rux-toast-stack')

        const body = document.querySelector('body')!
        body.appendChild(toastStack)
        this._addToastStackStyles()
    }

    private _addToastToStack() {
        const toastStack = document.querySelector('.rux-toast-stack')

        // if toast already in stack, return, else add to stack
        if (this.el.parentElement === toastStack) return
        toastStack?.insertBefore(this.el, toastStack.firstChild) // add as first child
    }

    // private _calcHeightOfToasts() {
    //   const toastStack = document.querySelector('.rux-toast-stack') as HTMLElement

    //   if(!toastStack) return

    //   let heightOfToastsInStack: number = 0
    //   let visibleToastAmount: number = 0

    //   const toasts = toastStack?.querySelectorAll('rux-toast')
    //   let openToasts = []

    //   for (const toast of toasts) {
    //        if (toast.hasAttribute('open')) {
    //         visibleToastAmount++

    //         openToasts.push(toast)

    //         const toastInner = toast.shadowRoot?.querySelector('.rux-toast')! as HTMLElement
    //         const toastInnerHeight = toastInner.offsetHeight
    //         const toastStyle = window.getComputedStyle(toastInner)
    //         const toastMarginBlockStart = parseInt(toastStyle.marginBlockStart)

    //         const toastMargins = toastMarginBlockStart
    //         const toastTotalHeight = toastInnerHeight + toastMargins

    //         heightOfToastsInStack = heightOfToastsInStack + toastTotalHeight
    //        }
    //   }

    //   console.log('visible toast amount', visibleToastAmount)

    //   const lastToastStyle = openToasts.length < 4 ? window.getComputedStyle(openToasts[openToasts.length-1].shadowRoot?.querySelector('.rux-toast') as HTMLElement) : window.getComputedStyle(openToasts[3].shadowRoot?.querySelector('.rux-toast') as HTMLElement)
    //   const lastToastMarginBlockEnd = parseInt(lastToastStyle.marginBlockEnd)
    //   console.log(lastToastMarginBlockEnd)
    //   heightOfToastsInStack = heightOfToastsInStack + lastToastMarginBlockEnd

    //   // if (visibleToastAmount <= 4) {
    //   //   console.log('I am updating')
    //   //   toastStack.style.height = `${heightOfToastsInStack}px`
    //   // }
    // }

    private _hideToastsOverFour() {
        const toastStack = document.querySelector(
            '.rux-toast-stack'
        ) as HTMLElement

        if (!toastStack) return

        let visibleToastAmount: number = 0

        const toasts = this.toastArray
        console.log('toasts', toasts)

        for (const toast of toasts) {
            if (toast.hasAttribute('open')) {
                visibleToastAmount++
            }

            if (visibleToastAmount <= 4) {
                toast.style.display = ''
            } else {
                toast.style.display = 'none'
            }
        }
    }

    private _getOpenToastAmountInStack() {
        const toastStack = document.querySelector(
            '.rux-toast-stack'
        ) as HTMLElement
        let toastAmount: number = 0

        if (!toastStack) return

        const toasts = toastStack?.querySelectorAll('rux-toast')

        for (const toast of toasts) {
            toast.hasAttribute('open') ? toastAmount++ : null
        }

        return toastAmount
    }

    // private _handleToastOverflow() {
    //     const toastAmount: number = this._getOpenToastAmountInStack()!

    //     console.log('is the toast amount working', toastAmount)

    //     // if more than 4 open toasts, add class to hide others, else remove it.
    //     const toastStack = document.querySelector('.rux-toast-stack') as HTMLElement
    //     if (toastAmount >= 4) {
    //         toastStack?.classList.add('toast-overflow')
    //     } else {
    //         toastStack?.classList.remove('toast-overflow')
    //     }
    // }

    private _destroyToastStack() {
        // if toast stack does not exist, return
        if (!document.querySelector('.rux-toast-stack')) return

        const toasts = document.querySelectorAll('rux-toast')
        const toastStack = document.querySelector('.rux-toast-stack')
        const toastStyles = document.getElementById('toast-styles')

        // if all toasts are gone, remove stack
        if (toasts.length === 0) {
            toastStack?.remove()
            toastStyles?.remove()
        }
    }

    private _addToastStackStyles() {
        const body = document.querySelector('body')
        const styleEl = document.createElement('style')
        styleEl.id = 'toast-styles'
        const styles = `
      .rux-toast-stack {
        position: fixed;
        top: 100px;
        inset-inline-end: 0;
        z-index: 100;
        max-width: 100%;
        max-height: 100%;
      }

      .toast-overflow {
         // overflow: hidden;
      }
      `

        styleEl.innerHTML = styles
        body?.appendChild(styleEl)
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
                {/* <div
                  class={{
                      'rux-notification-banner': true,
                      'rux-notification-banner--open': this.open,
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
              > */}
                <div
                    // class={{ 'rux-toast__inner': true }}
                    class={{
                        'rux-toast': true,
                        'rux-toast--open': this.open,
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
                        'rux-toast--hasPrefixSlot': this.hasPrefixSlot,
                    }}
                    part="container"
                >
                    <div
                        class={{
                            'rux-toast__prefix': true,
                            hidden: !this.hasPrefixSlot,
                        }}
                    >
                        <slot
                            name="prefix"
                            onSlotchange={this._handleSlotChange}
                        ></slot>
                    </div>

                    {this.status ? (
                        <div class="rux-toast__status" part="status">
                            <rux-status status={this.status}></rux-status>
                        </div>
                    ) : null}

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
                            <slot name="actions">
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
                            </slot>
                        </div>
                    ) : null}
                </div>
                {/* </div> */}
            </Host>
        )
    }
}
