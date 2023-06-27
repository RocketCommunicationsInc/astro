import { Component, Host, h, Prop, Element, Method } from '@stencil/core'

export type ToastStackPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'

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
    @Prop({ attribute: 'position', reflect: true })
    position: ToastStackPosition = 'top-right'

    /**
     * adds an individual toast to the stack with the set props passed in as an object
     */
    @Method()
    async addToast(props: {
        [x: string]: any
        hasOwnProperty: (arg0: string) => any
    }) {
        const toast = document.createElement('rux-toast')
        toast.style.transition = 'opacity 800ms ease-in 1s'

        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                switch (key) {
                    case 'message':
                        toast.message = props[key]
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
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
