/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Component, Host, h, Prop, Element, State, Listen } from '@stencil/core'

/**
 * @part container - the notification's container element
 *
 * @slot (default) - the notification's message
 */
@Component({
    tag: 'rux-toast-stack',
    styleUrl: 'rux-toast-stack.scss',
    shadow: true,
})
export class RuxToastStack {
    @Element() el!: HTMLRuxToastStackElement

    @State() openToastAmount: number = 0

    /**
     * Enables animation on all toasts
     */
    @Prop() animateToasts: boolean = false

    @Listen('ruxtoastclosed')
    handleToastClosed() {
        this._hideToastsOverFour()
    }

    connectedCallback() {
        //this._handleSlotChange = this._handleSlotChange.bind(this)
        this.el.shadowRoot?.addEventListener('slotchange', () => {
            this._hideToastsOverFour()
            this._setAnimateOnToasts()
        })
    }

    // private _handleSlotChange() {
    //   console.log('open toasts', this._openToastAmountInStack)
    // }

    private _setAnimateOnToasts() {
        if (this.animateToasts) {
            const toasts = this.el.querySelectorAll('rux-toast')

            for (const toast of toasts) {
                toast.setAttribute('animate-out', '')
            }
        }
    }

    private _checkAndSetToastAmount() {
        let openToastAmount = this._openToastAmountInStack
        let openToasts = this._openToasts

        if (openToastAmount <= 4) {
            for (const toast of openToasts) {
                toast.style.display = ''
            }
        } else {
            for (const [index, value] of openToasts.entries()) {
                if (index <= 3) {
                    value.style.display = ''
                } else {
                    value.style.display = 'none'
                }
            }

            console.log('open toasts', openToasts)
            console.log('open toasts amount', openToastAmount)
        }
    }

    private _hideToastsOverFour() {
        if (this.animateToasts) {
            window.setTimeout(() => {
                this._checkAndSetToastAmount()
            }, 200)
        } else {
            this._checkAndSetToastAmount()
        }
    }

    get _openToastAmountInStack() {
        this.openToastAmount = 0
        const toasts = this.el.querySelectorAll('rux-toast')

        if (!toasts) return this.openToastAmount

        for (const toast of toasts) {
            toast.open ? this.openToastAmount++ : null
        }

        return this.openToastAmount
    }

    get _openToasts() {
        const toasts = this.el.querySelectorAll('rux-toast')
        let openToasts = []

        for (const toast of toasts) {
            if (toast.open) openToasts.push(toast)
        }

        return openToasts
    }

    render() {
        return (
            <Host>
                <div class="rux-toast-stack">
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
