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
    State,
    Fragment,
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

    @State() hasFooter = hasSlot(this.element, 'footer')
    @State() hasHeader = hasSlot(this.element, 'header')
    @State() hasMessage = hasSlot(this.element, 'message')

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
            this.open = false
        }
    }

    @Watch('open')
    handleOpen(isOpen: boolean) {
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
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentDidRender() {
        const button = this._getDefaultButton()
        button && button.focus()
    }

    private _handleSlotChange() {
        this.hasHeader = hasSlot(this.element, 'header')
        this.hasMessage = hasSlot(this.element, 'message')
        this.hasFooter = hasSlot(this.element, 'footer')
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
                            <header
                                class={{
                                    hidden:
                                        !this.hasHeader &&
                                        modalTitle === undefined,
                                    'rux-modal__header': true,
                                }}
                                part="header"
                            >
                                <slot
                                    name="header"
                                    onSlotchange={this._handleSlotChange}
                                >
                                    {modalTitle}
                                </slot>
                            </header>
                            {modalMessage || this.hasMessage ? (
                                <div class="rux-modal__content" part="message">
                                    <div
                                        class={{
                                            hidden:
                                                !this.hasMessage &&
                                                modalMessage === undefined,
                                            'rux-modal__message': true,
                                        }}
                                        part="message"
                                    >
                                        <slot
                                            name="message"
                                            onSlotchange={
                                                this._handleSlotChange
                                            }
                                        >
                                            {modalMessage}
                                        </slot>
                                    </div>
                                </div>
                            ) : null}
                            <footer
                                class={{
                                    'rux-modal__footer': true,
                                }}
                                part="footer"
                            >
                                {this.hasFooter ? (
                                    <slot
                                        name="footer"
                                        onSlotchange={this._handleSlotChange}
                                    ></slot>
                                ) : (
                                    <Fragment>
                                        <rux-button-group h-align="right">
                                            <rux-button
                                                secondary={
                                                    confirmText.length > 0
                                                }
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
                                        <slot
                                            name="footer"
                                            onSlotchange={
                                                this._handleSlotChange
                                            }
                                        ></slot>
                                    </Fragment>
                                )}
                            </footer>
                        </dialog>
                    </div>
                </Host>
            )
        )
    }
}
