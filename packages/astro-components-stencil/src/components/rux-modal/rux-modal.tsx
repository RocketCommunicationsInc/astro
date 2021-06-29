import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
    Watch,
} from '@stencil/core'

@Component({
    tag: 'rux-modal',
    styleUrl: 'rux-modal.scss',
    shadow: true,
})
export class RuxModal {
    /**
     * Shows and hides modal
     */
    @Prop({ reflect: true, mutable: true }) open!: boolean
    /**
     * Modal body message
     */
    @Prop() modalMessage!: string
    /**
     * Modal header title
     */
    @Prop() modalTitle!: string
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
        eventName: 'modalClosed',
        composed: true,
        bubbles: true,
    })
    modalCloseEvent: EventEmitter<boolean>

    @Element() private element: HTMLElement

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Enter') {
            const button = this._getDefaultButton()
            if (button) {
                button.click()
            }
        }
    }

    @Watch('open')
    validateName(isOpen: boolean) {
        if (isOpen) {
            const button = this._getDefaultButton()
            if (button) {
                button.focus()
            }
        }
    }

    constructor() {}

    private _handleModalChoice(e: MouseEvent) {
        // convert string value to boolean
        const target = e.currentTarget as HTMLElement
        const choice = target.dataset.value === 'true'
        this.modalCloseEvent.emit(choice)
        this.open = false
    }

    private _getDefaultButton(): HTMLElement | null {
        const buttonSet: NodeListOf<HTMLElement> = this.element.shadowRoot.querySelectorAll(
            'rux-button:not([hidden])'
        )

        if (buttonSet.length > 0) {
            const defaultButton = buttonSet[buttonSet.length - 1]
            return defaultButton
        }

        return null
    }

    connectedCallback() {
        this.validate('rux-modal', ['open', 'modalMessage', 'modalTitle'])
    }

    componentDidRender() {
        const button = this._getDefaultButton()
        if (button) {
            button.setAttribute('tabindex', '0')
            setTimeout(() => button.focus())
        }
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
            <div class="rux-modal-container">
                <dialog class="rux-modal" role="dialog" open={open}>
                    <header class="rux-modal__titlebar">
                        <h1>{modalTitle}</h1>
                    </header>
                    <div class="rux-modal__content">
                        <div class="rux-modal__message">{modalMessage}</div>
                        <rux-button-group align="right">
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
                    </div>
                </dialog>
            </div>
        )
    }

    // TODO find a way to share logic to put this validation into
    // Stencil prevents using native extends class functionality
    private validate(componentTag: string, requiredProps: string[]) {
        const erroredFields: string[] = []
        const isBlank = (prop: any) => typeof prop === 'undefined'
        requiredProps.forEach((key: string) =>
            isBlank(this[key]) ? erroredFields.push(this.kebabize(key)) : null
        )

        if (erroredFields.length) {
            throw new Error(
                `[${componentTag}]: Following propert${
                    erroredFields.length > 1 ? 'ies' : 'y'
                } (${erroredFields.join(', ')}) ${
                    erroredFields.length > 1 ? 'are' : 'is'
                } required`
            )
        }
    }

    private kebabize = (str: string) => {
        return str
            .split('')
            .map((letter: string, idx: number) => {
                return letter.toUpperCase() === letter
                    ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                    : letter
            })
            .join('')
    }
}
