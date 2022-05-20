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
 * @part footer - the footer of the modal
 *
 * @slot header - the header of the modal
 * @slot message - the modal's message or content
 * @slot footer - the footer of the modal
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
     * Event that is fired when modal opens
     */
    @Event({
        eventName: 'ruxmodalopened',
        composed: true,
        bubbles: true,
    })
    ruxModalOpened!: EventEmitter<void>
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
            // this.ruxModalClosed.emit(false)
            this.open = false
        }
    }

    @Watch('open')
    handleOpen(isOpen: boolean) {
        //? This is preventing the default focusing of a button if the footer slot exists.
        //? I thought about runninng it anyway, but it could lead to cases where an unintentional button gets focused.
        if (isOpen && !this.hasFooter) {
            setTimeout(() => {
                const button = this._getDefaultButton()
                if (button) {
                    button.focus()
                }
            }, 0)
        }
        this.open ? this.ruxModalOpened.emit() : this.ruxModalClosed.emit()
    }

    private _handleModalChoice() {
        this.open = false
    }

    private _getDefaultButton(): HTMLElement | null {
        const buttonSet = this.element?.shadowRoot?.querySelectorAll(
            'rux-button:not([hidden])'
        ) as NodeListOf<HTMLElement>

        if (buttonSet.length > 0) {
            const defaultButton = buttonSet[buttonSet.length - 1]
            //* Need to get the native <button> to focus. This isn't necessary if we add the delegateFocus option to the stencil shadow in Stencil 2.10
            const shadow = defaultButton.shadowRoot?.querySelector('button')

            if (shadow) return shadow
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
        this._handleModalChoice = this._handleModalChoice.bind(this)
    }

    componentDidRender() {
        const button = this._getDefaultButton()
        button && button.focus()
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
                                            hidden={!denyText}
                                            tabindex="-1"
                                            exportparts="container:deny-button"
                                        >
                                            {denyText}
                                        </rux-button>
                                        <rux-button
                                            onClick={_handleModalChoice}
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
