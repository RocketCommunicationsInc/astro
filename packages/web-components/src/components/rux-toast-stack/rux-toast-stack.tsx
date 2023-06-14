/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Component, Host, h, Prop, Element, State, Method } from '@stencil/core'

/**
 * @slot (default) - where all toasts go
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
    @Prop({ attribute: 'animate-toasts', reflect: true })
    animateToasts?: boolean = false

    /**
     * sets whether the number of toasts in the stack is restricted or not
     */
    @Prop({ mutable: true }) toastOverflow: boolean = false

    /**
     * sets max number of toasts to be displayed in stack
     */
    @Prop({ mutable: true }) maxToasts: number = 4

    /**
     * position of toast stack in viewport
     */
    @Prop({ attribute: 'position', reflect: true }) position: string =
        'top-right'

    @Method()
    async addToast(props: {
        [x: string]: any
        hasOwnProperty: (arg0: string) => any
    }) {
        const toast = document.createElement('rux-toast')

        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                switch (key) {
                    case 'message':
                        toast.message = props[key]
                        break
                    case 'status':
                        toast.status = props[key]
                        break
                    case 'hideClose':
                        toast.hideClose = props[key]
                        break
                    case 'closeAfter':
                        toast.closeAfter = props[key]
                        break
                }
            }
        }

        this.animateToasts ? (toast.animated = true) : null

        this.el?.insertBefore(toast, this.el.firstChild) // add as first child
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        removeEventListener('ruxToastAnimateIn', (event) => {
            if (event.target !== this.el.firstElementChild) return
            this._runHideToasts(this.maxToasts)
        })
        removeEventListener('ruxToastAnimateOut', () => {
            this._runHideToasts(this.maxToasts)
        })
    }

    componentDidLoad() {
        if (this.toastOverflow) {
            addEventListener('ruxToastAnimateIn', (event) => {
                if (event.target !== this.el.firstElementChild) return
                this._runHideToasts(this.maxToasts)
            })

            addEventListener('ruxToastAnimateOut', () => {
                this._runHideToasts(this.maxToasts)
            })
        } else {
            removeEventListener('ruxToastAnimateIn', (event) => {
                if (event.target !== this.el.firstElementChild) return
                this._runHideToasts(this.maxToasts)
            })

            removeEventListener('ruxToastAnimateOut', () => {
                this._runHideToasts(this.maxToasts)
            })
        }
    }

    private _handleSlotChange() {
        this._tagFirstToast()
    }

    // hides any toasts in stack over the default, or user set amount
    //* OF NOTE: Restricting the height on the stack is a better method to only show the max number of toasts than setting display: none on any additional toasts over max. Doing it this way works better when animations are set on toasts.
    private _checkAndHideToastsOverAmount(amount: number) {
        // height to restrict stack to
        // set to amount times the min toast height plus amount minus 1 of the margin height.
        const stackMinHeight = amount * 60 + (amount - 1) * 12
        let stackRestrictionHeight: number = 0

        // if toast amount is under the max set, keep styling off stack
        if (this._toastAmountInStack <= amount - 1) {
            if (this.el.style.height !== '') this.el.style.height = ''
        } else {
            // set the height on the stack to the minimum height it could be with 4 toasts if 4 or more toasts in stack
            this.el.style.height = `${stackMinHeight}px`
            // if toast amount is equal to or greater than max, loop through toasts
            for (const [index, value] of this._toastsArray.entries()) {
                // calculate height needed to restrict stack to max amount on toasts in stack up to max amount
                if (index <= amount - 1) {
                    let toastInner = value.shadowRoot?.querySelector(
                        '.rux-toast'
                    )! as HTMLElement

                    // if it can't find the toast inner, give up. The function will run again.
                    if (!toastInner) {
                        return
                    }
                    const toastInnerHeight: number = toastInner.offsetHeight // height of toast
                    console.log('inner', toastInnerHeight)
                    const toastInnerMarginTop: number = parseInt(
                        window
                            .getComputedStyle(toastInner)
                            .getPropertyValue('margin-block-start')
                    ) // margin top (only getting one margin because of margin collapse)
                    stackRestrictionHeight =
                        stackRestrictionHeight +
                        toastInnerHeight +
                        toastInnerMarginTop
                }
            }

            if (stackRestrictionHeight > stackMinHeight) {
                // if toasts total height plus margin is greater than the min, set it
                if (this.el.style.height === `${stackRestrictionHeight}px`)
                    return
                this.el.style.height = `${stackRestrictionHeight}px`
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

    private _tagFirstToast() {
        const toasts = this._toastsArray

        if (toasts) {
            for (const [index, value] of toasts?.entries()) {
                index === 0
                    ? value.setAttribute('first-toast', '')
                    : value.removeAttribute('first-toast')
            }
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
