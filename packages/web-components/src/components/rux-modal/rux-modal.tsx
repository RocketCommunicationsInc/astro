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

/**
 * @part wrapper - the modal wrapper overlay
 *
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
    @Prop() modalMessage!: string
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
        this.validate('rux-modal', ['open', 'modalMessage', 'modalTitle'])
        setTimeout(() => {
            const button = this._getDefaultButton()
            button && button.focus()
        })
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
                    <div part="wrapper" class="rux-modal__wrapper">
                        <dialog class="rux-modal__dialog" role="dialog">
                            {modalTitle && (
                                <header class="rux-modal__titlebar">
                                    <div>{modalTitle}</div>
                                </header>
                            )}
                            <div class="rux-modal__content">
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
                            </div>
                        </dialog>
                    </div>
                </Host>
            )
        )
    }

    // TODO find a way to share logic to put this validation into
    // Stencil prevents using native extends class functionality
    private validate(componentTag: string, requiredProps: string[]) {
        const erroredFields: string[] = []
        const isBlank = (prop: any) => typeof prop === 'undefined'
        requiredProps.forEach((key: string) =>
            isBlank(this[key as keyof RuxModal])
                ? erroredFields.push(this.kebabize(key))
                : null
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
