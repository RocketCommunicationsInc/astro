import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
    Method,
    // Watch,
    Host,
} from '@stencil/core'

/**
 * @part wrapper - the modal wrapper overlay
 *
 */
@Component({
    tag: 'rux-modal',
    styleUrl: 'rux-modal.scss',
    shadow: { delegatesFocus: true },
})
export class RuxModal {
    /**
     * Shows and hides modal
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false
    /**
     * Modal body message
     */
    @Prop() modalMessage?: string
    /**
     * Modal header title
     */
    @Prop() modalTitle?: string
    /**
     * Text for confirmation button
     */
    @Prop() confirmText: string = 'Confirm'
    /**
     * Text for close button
     */
    @Prop() denyText: string = 'Cancel'
    /**
     * Event that is fired when modal closes
     */
    @Event({
        eventName: 'ruxmodalclosed',
        composed: true,
        bubbles: true,
    })
    ruxModalClosed!: EventEmitter<boolean>

    @Element() element!: HTMLRuxModalElement

    // confirm dialog if Enter key is pressed
    // @Listen('keydown', { target: 'window' })
    // handleKeyDown(ev: KeyboardEvent) {
    //     if (ev.key === 'Enter') {
    //         const button = this._getDefaultButton()
    //         if (button) {
    //             button.click()
    //         }
    //     }
    // }

    // close modal if click happens outside of dialog
    @Listen('click', { target: 'window' })
    handleClick(ev: MouseEvent) {
        const wrapper = this._getWrapper()
        if (ev.composedPath()[0] === wrapper) {
            this.ruxModalClosed.emit(false)
            this.open = false
        }
    }

    // @Watch('open')
    // validateName() {
    //     if (this.open) {
    //         setTimeout(() => {
    //             //* Finds rux-buttons inside of rux-modal in order to set focus
    //             const ruxButtons = this.element.querySelectorAll(
    //                 'rux-button'
    //             ) as NodeListOf<HTMLRuxButtonElement>
    //             if (ruxButtons.length > 0) {
    //                 let realBtns: HTMLButtonElement[] = []
    //                 ruxButtons.forEach((btn) => {
    //                     //* rux-button can't be focused, but it's shadow button can
    //                     const realBtn = btn.shadowRoot?.querySelector('button')
    //                     realBtns.push(realBtn!)
    //                 })
    //                 //? Focuses the last button that is rendered.
    //                 realBtns[realBtns.length - 1].focus()
    //                 console.log(document.activeElement, 'active')

    //                 // const button = this._getDefaultButton()
    //                 // console.log(button, 'btn')
    //                 // button && button.focus()
    //             }
    //         }, 100)
    //     }
    // }

    // private _handleModalChoice(e: MouseEvent) {
    //     // convert string value to boolean
    //     const target = e.currentTarget as HTMLElement
    //     const choice = target.dataset.value === 'true'
    //     this.ruxModalClosed.emit(choice)
    //     this.open = false
    // }

    // private _getDefaultButton(): HTMLElement | null {
    //     const buttonSet = this.element?.querySelectorAll(
    //         'rux-button:not([hidden])'
    //     ) as NodeListOf<HTMLElement>

    //     if (buttonSet.length > 0) {
    //         const defaultButton = buttonSet[buttonSet.length - 1]

    //         return defaultButton
    //     }

    //     return null
    // }
    @Method()
    async openAsync() {
        console.log('getting called')
        //tried this
        // requestAnimationFrame(() => {
        //     this.open = true
        //     this.element.focus()
        // })
        //* Tried a async set focus method, no dice
        // * tried commenting out animation, no dice.

        this.open = true
    }

    private _getWrapper(): HTMLElement | null {
        const wrapper = this.element?.shadowRoot?.querySelector(
            '.rux-modal__wrapper'
        ) as HTMLElement

        if (wrapper) {
            return wrapper
        }
        return null
    }

    // connectedCallback() {
    //     setTimeout(() => {
    //         const button = this._getDefaultButton()
    //         button && button.focus()
    //     })
    // }

    // componentDidLoad() {
    //     setTimeout(() => {
    //         const button = this._getDefaultButton()
    //         button && button.focus()
    //     })
    // }

    render() {
        // const {
        //     open,
        //     modalMessage,
        //     modalTitle,
        //     confirmText,
        //     denyText,
        //     _handleModalChoice,
        // } = this

        return (
            this.open && (
                <Host>
                    <div part="wrapper" class="rux-modal__wrapper">
                        <dialog class="rux-modal__dialog" role="dialog">
                            <div class="rux-modal__titlebar">
                                <slot name="header"></slot>
                            </div>
                            <div class="rux-modal__content">
                                <div class="rux-modal__message">
                                    <slot name="content"></slot>
                                </div>
                                <div class="rux-modal__footer">
                                    <slot name="footer"></slot>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </Host>
            )
        )
    }
}

/*
{modalTitle && (
     <header class="rux-modal__titlebar">
        <div>{modalTitle}</div>
    </header>
)}
<div class="rux-modal__message">
                                    {modalMessage}
                                </div>
<rux-button-group h-align="right">
                                    <rux-button
                                        secondary={confirmText.length > 0}
                                        onClick={_handleModalChoice.bind(this)}
                                        data-value="false"
                                        hidden={!denyText}
                                        tabindex="-1"
                                    >
                                        {denyText}
                                    </rux-button>
                                    <rux-button
                                        onClick={_handleModalChoice.bind(this)}
                                        data-value="true"
                                        hidden={!confirmText}
                                        tabindex="0"
                                    >
                                        {confirmText}
                                    </rux-button>
                                </rux-button-group>
*/
