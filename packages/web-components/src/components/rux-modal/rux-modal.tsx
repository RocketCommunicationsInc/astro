import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
    Watch,
    Host,
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @part wrapper - the modal wrapper overlay ! DEPRECATED IN FAVOR OF CONTAINER !
 * @part container - the modal container
 * @part dialog - the native dialog element
 * @part header - the header of the modal
 * @part message - the message of the modal
 * @part confirm-button - the modal's confirm button
 * @part deny-button - the modal's deny button
 */
@Component({
    tag: 'rux-modal',
    styleUrl: 'rux-modal.scss',
    shadow: true,
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

    private hasFooter = hasSlot(this.element, 'footer')
    private hasHeader = hasSlot(this.element, 'header')
    private hasMessage = hasSlot(this.element, 'message')

    // confirm dialog if Enter key is pressed
    @Listen('keydown', { target: 'window' })
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Enter') {
            const button = this._getDefaultButton()
            if (button) {
                button.click()
            }
        }
    }

    // close modal if click happens outside of dialog
    @Listen('click', { target: 'window' })
    handleClick(ev: MouseEvent) {
        const wrapper = this._getWrapper()
        if (ev.composedPath()[0] === wrapper) {
            this.ruxModalClosed.emit(false)
            this.open = false
        }
    }

    @Watch('open')
    validateName(isOpen: boolean) {
        if (isOpen) {
            setTimeout(() => {
                const button = this._getDefaultButton()
                button && button.focus()
            })
        }
    }

    private _handleModalChoice(e: MouseEvent) {
        // convert string value to boolean
        const target = e.currentTarget as HTMLElement
        const choice = target.dataset.value === 'true'
        this.ruxModalClosed.emit(choice)
        this.open = false
    }

    private _getDefaultButton(): HTMLElement | null {
        const buttonSet = this.element?.shadowRoot?.querySelectorAll(
            'rux-button:not([hidden])'
        ) as NodeListOf<HTMLElement>

        if (buttonSet.length > 0) {
            const defaultButton = buttonSet[buttonSet.length - 1]
            return defaultButton
        }

        return null
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

    connectedCallback() {
        setTimeout(() => {
            const button = this._getDefaultButton()
            button && button.focus()
        })
        this._handleModalChoice = this._handleModalChoice.bind(this)
    }

    componentDidLoad() {
        setTimeout(() => {
            const button = this._getDefaultButton()
            button && button.focus()
        })
    }

    render() {
        const {
            open,
            modalMessage,
            modalTitle,
            confirmText,
            denyText,
            _handleModalChoice,
        } = this

        return (
            open && (
                <Host>
                    <div part="wrapper container" class="rux-modal__wrapper">
                        <dialog
                            class="rux-modal__dialog"
                            role="dialog"
                            part="dialog"
                        >
                            {modalTitle || this.hasHeader ? (
                                <header class="rux-modal__header" part="header">
                                    <slot name="header">{modalTitle}</slot>
                                </header>
                            ) : null}
                            {modalMessage || this.hasMessage ? (
                                <div class="rux-modal__content" part="message">
                                    <div
                                        class="rux-modal__message"
                                        part="message"
                                    >
                                        <slot name="message">
                                            {modalMessage}
                                        </slot>
                                    </div>
                                </div>
                            ) : null}
                            {this.hasFooter ? (
                                <footer class="rux-modal__footer" part="footer">
                                    <slot name="footer"></slot>
                                </footer>
                            ) : (
                                <footer class="rux-modal__footer" part="footer">
                                    <rux-button-group h-align="right">
                                        <rux-button
                                            secondary={confirmText.length > 0}
                                            onClick={_handleModalChoice}
                                            data-value="false"
                                            hidden={!denyText}
                                            tabindex="-1"
                                            exportparts="container:deny-button"
                                        >
                                            {denyText}
                                        </rux-button>
                                        <rux-button
                                            onClick={_handleModalChoice}
                                            data-value="true"
                                            hidden={!confirmText}
                                            tabindex="0"
                                            exportparts="container:confirm-button"
                                        >
                                            {confirmText}
                                        </rux-button>
                                    </rux-button-group>
                                </footer>
                            )}
                        </dialog>
                    </div>
                </Host>
            )
        )
    }
}
