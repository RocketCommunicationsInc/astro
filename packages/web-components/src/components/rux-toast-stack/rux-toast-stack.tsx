/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Component, Host, h, Prop, Element, Method } from '@stencil/core'

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

    /**
     * position of toast stack in viewport
     */
    @Prop({ attribute: 'position', reflect: true }) position: string =
        'top-right'

    /**
     * adds an individual toast to the stack with the set props passed in as an object
     */
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

        this.el?.insertBefore(toast, this.el.firstChild) // add as first child
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private _handleSlotChange() {
        this._tagFirstToast()
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
