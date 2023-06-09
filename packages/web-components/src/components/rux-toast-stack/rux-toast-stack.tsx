/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Component, Host, h, Prop, Element, State } from '@stencil/core'

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

    /**
     * sets max number of toasts to be displayed in stack
     */
    @Prop() maxToasts: number = 4

    /**
     * position of toast stack in viewport
     */
    @Prop({ attribute: 'position', reflect: true }) position: string =
        'top-right'

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private _handleSlotChange() {
        this._runHideToasts(this.maxToasts)
        // this._setAnimateOnToasts()
    }

    // private _setAnimateOnToasts() {
    //     if (this.animateToasts) {
    //         const toasts = this.el.querySelectorAll('rux-toast')

    //         for (const toast of toasts) {
    //             toast.setAttribute('animate-out', '')
    //         }
    //     }
    // }

    // hides any toasts in stack over the default, or user set amount
    private _checkAndHideToastsOverAmount(amount: number) {
        if (this._toastAmountInStack <= amount) {
            for (const toast of this._toastsArray) {
                toast.style.display = ''
            }
        } else {
            for (const [index, value] of this._toastsArray.entries()) {
                if (index <= amount - 1) {
                    value.style.display = ''
                } else {
                    value.style.display = 'none'
                }
            }
        }
    }

    // runs toast hiding function based on animation prop
    private _runHideToasts(amount: number) {
        if (this.animateToasts) {
            window.setTimeout(() => {
                this._checkAndHideToastsOverAmount(amount)
            }, 200)
        } else {
            this._checkAndHideToastsOverAmount(amount)
        }
    }

    get _toastAmountInStack() {
        this.openToastAmount = this._toastsArray.length
        return this.openToastAmount
    }

    get _toastsArray() {
        const toasts: Array<HTMLRuxToastElement> = Array.from(
            this.el.querySelectorAll('rux-toast')
        )
        return toasts
    }

    render() {
        return (
            <Host>
                <div class="rux-toast-stack">
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
            </Host>
        )
    }
}
