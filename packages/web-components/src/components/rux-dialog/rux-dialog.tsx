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
    Method,
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @part container - the dialog container
 * @part dialog - the native dialog element
 * @part header - the header of the dialog
 * @part message - the message of the dialog
 * @part confirm-button - the dialog's confirm button
 * @part deny-button - the dialog's deny button
 * @part footer - the footer of the dialog
 *
 * @slot header - the header of the dialog
 * @slot (default) - the dialog's message or content
 * @slot footer - the footer of the dialog
 */
@Component({
    tag: 'rux-dialog',
    styleUrl: 'rux-dialog.scss',
    shadow: { delegatesFocus: true },
})
export class RuxDialog {
    /**
     * Shows and hides dialog
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false
    /**
     * Dialog body message
     */
    @Prop() message?: string
    /**
     * Dialog header title
     */
    @Prop() header?: string
    /**
     * Text for confirmation button
     */
    @Prop() confirmText: string = 'Confirm'
    /**
     * Text for close button
     */
    @Prop() denyText: string = 'Cancel'

    /**
     * Allows dialog to close when clicking off it
     */
    @Prop({ attribute: 'click-to-close' }) clickToClose: boolean = false

    /**
     * Event that is fired when dialog opens
     */
    @Event({
        eventName: 'ruxdialogopened',
        composed: true,
        bubbles: true,
    })
    ruxDialogOpened!: EventEmitter<void>
    /**
     * Event that is fired when dialog closes. If dialog is closed by clicking on the default confirm or deny buttons (when no footer slot is provided), then true or false will be emitted respectively on the event.detail.
     */
    @Event({
        eventName: 'ruxdialogclosed',
        composed: true,
        bubbles: true,
    })
    ruxDialogClosed!: EventEmitter<boolean | null>

    @Method()
    async toggleOpen() {
        this.open = !this.open
    }

    @Element() element!: HTMLRuxDialogElement

    @State() hasFooter = hasSlot(this.element, 'footer')
    @State() hasHeader = hasSlot(this.element, 'header')
    @State() hasMessage = hasSlot(this.element)
    private _userInput: boolean | null = null

    // confirm dialog if Enter key is pressed
    @Listen('keydown', { target: 'window' })
    handleKeyDown(ev: KeyboardEvent) {
        // prevent this from running if the slots version is being used
        if (this.open && !this.hasFooter) {
            const btns: NodeListOf<HTMLRuxButtonElement> = this.element.shadowRoot!.querySelectorAll(
                'rux-button'
            )
            if (ev.key === 'Enter') {
                //If enter is hit but the cancel/deny button is focused, we want to click that instead.
                let activeEl: any = this.element.shadowRoot?.activeElement
                if (activeEl && activeEl === btns[0]) {
                    this._userInput = false
                    btns[0].click()
                } else {
                    const button = this._getDefaultButton()
                    if (button) {
                        this._userInput = true
                        button.click()
                    }
                }
            }
            if (ev.key === 'Escape') {
                this._userInput = false
                btns[0].click()
            }
        }
    }

    // close dialog if click happens outside of dialog
    @Listen('click', { target: 'window' })
    handleClick(ev: MouseEvent) {
        if (this.clickToClose) {
            const wrapper = this._getWrapper()
            if (ev.composedPath()[0] === wrapper) {
                this.open = false
            }
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
        if (this.open) {
            setTimeout(() => {
                this.ruxDialogOpened.emit()
            }, 20)
        } else {
            this.ruxDialogClosed.emit(this._userInput)
        }

        this._userInput = null
    }

    private _handleDialogChoice(e: MouseEvent) {
        // convert string value to boolean
        const target = e.currentTarget as HTMLElement
        const choice = target.dataset.value === 'true'
        this._userInput = choice
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
            '.rux-dialog__wrapper'
        ) as HTMLElement

        if (wrapper) {
            return wrapper
        }
        return null
    }

    connectedCallback() {
        this._handleDialogChoice = this._handleDialogChoice.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.hasMessage = hasSlot(this.element)
    }

    componentDidRender() {
        const button = this._getDefaultButton()
        button && button.focus()
    }

    private _handleSlotChange() {
        this.hasHeader = hasSlot(this.element, 'header')
        this.hasMessage = hasSlot(this.element)
        this.hasFooter = hasSlot(this.element, 'footer')
    }

    render() {
        const {
            open,
            message,
            header,
            confirmText,
            denyText,
            _handleDialogChoice,
        } = this

        return (
            open && (
                <Host>
                    <div part="container" class="rux-dialog__wrapper">
                        <dialog
                            class="rux-dialog__dialog"
                            role="dialog"
                            part="dialog"
                        >
                            <header
                                class={{
                                    hidden:
                                        !this.hasHeader && header === undefined,
                                    'rux-dialog__header': true,
                                }}
                                part="header"
                            >
                                <slot
                                    name="header"
                                    onSlotchange={this._handleSlotChange}
                                >
                                    {header}
                                </slot>
                            </header>

                            <div class="rux-dialog__content">
                                <div
                                    class={{
                                        hidden:
                                            !this.hasMessage &&
                                            message === undefined,
                                        'rux-dialog__message': true,
                                    }}
                                    part="message"
                                >
                                    <slot
                                        onSlotchange={this._handleSlotChange}
                                    ></slot>
                                    {!this.hasMessage && message ? (
                                        <div>{message}</div>
                                    ) : null}
                                </div>
                            </div>
                            <footer
                                class={{
                                    'rux-dialog__footer': true,
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
                                        <div class="rux-button-group">
                                            <rux-button
                                                secondary={
                                                    confirmText.length > 0
                                                }
                                                onClick={_handleDialogChoice}
                                                data-value="false"
                                                hidden={!denyText}
                                                tabindex="0"
                                                exportparts="container:deny-button"
                                                id="rux-dialog-deny-button"
                                            >
                                                {denyText}
                                            </rux-button>
                                            <rux-button
                                                onClick={_handleDialogChoice}
                                                hidden={!confirmText}
                                                data-value="true"
                                                tabindex="1"
                                                exportparts="container:confirm-button"
                                            >
                                                {confirmText}
                                            </rux-button>
                                        </div>
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
