import {
    Component,
    h,
    Event,
    EventEmitter,
    Host,
    Prop,
    Element,
    Watch,
    State,
    Method,
} from '@stencil/core'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot } from '../../utils/utils'
import { TLEValidator, TLEValidationResult } from '../../utils/tle-validator'

let id = 0

/**
 * @slot label - The TLE input label
 * @slot help-text - The help text
 * @slot error-text - The error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part tle-input - The textarea element
 * @part required - The asterisk when required is true
 * @part validation-message - The validation message container
 */
@Component({
    tag: 'rux-tle-input',
    styleUrl: 'rux-tle-input.scss',
    shadow: true,
})
export class RuxTleInput implements FormFieldInterface {
    private inputId = `rux-tle-input-${++id}`
    private textareaEl!: HTMLTextAreaElement
    private _internals: ElementInternals | null = null
    private hasFormAssociated = false

    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false
    @State() validationResult: TLEValidationResult | null = null

    /**
     * The TLE input label text. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * The TLE input placeholder text
     */
    @Prop() placeholder?: string = 'Paste a valid TLE here...'

    /**
     * The help text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string =
        'This TLE may not be valid, please verify'

    /**
     * Presentational only. Renders the TLE input as invalid.
     */
    @Prop() invalid = false

    /**
     * The input value
     */
    @Prop({ mutable: true, reflect: true }) value: string = ''

    /**
     * The input name
     */
    @Prop() name = ''

    /**
     * Sets the input as disabled
     */
    @Prop({ reflect: true }) disabled = false

    /**
     * Sets the input as required
     */
    @Prop() required: boolean = false

    /**
     * Sets the input as readonly
     */
    @Prop() readonly = false

    /**
     * Enable checksum validation for the TLE
     */
    @Prop() validateChecksum: boolean = true

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'ruxinput' }) ruxInput!: EventEmitter

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    /**
     * Fired when a TLE is validated - returns the validation result with details
     */
    @Event({ eventName: 'ruxtlevalidated' })
    ruxTleValidated!: EventEmitter<TLEValidationResult>

    @Element() el!: HTMLRuxTleInputElement

    /**
     * Sets element as focused
     */
    @Method()
    async setFocus(options?: FocusOptions) {
        this.textareaEl.focus(options)
    }

    /**
     * Selects all text
     */
    @Method()
    async selectAll() {
        this.textareaEl.select()
    }

    /**
     * Validates the TLE format
     */
    @Method()
    async validateTle(): Promise<TLEValidationResult> {
        return this.validateTleFormat(this.value)
    }

    /**
     * @internal Used for checking validity of the form element
     */
    @Method()
    async checkValidity(): Promise<boolean> {
        if (this._internals) {
            return this._internals.checkValidity()
        }
        return !this.invalid && (this.validationResult?.valid ?? true)
    }

    /**
     * For form validation with constraint validation API
     */
    @Method()
    async reportValidity(): Promise<boolean> {
        if (this._internals) {
            return this._internals.reportValidity()
        }
        return !this.invalid && (this.validationResult?.valid ?? true)
    }

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    @Watch('value')
    handleValueChange() {
        this.validateTleFormat(this.value)
        if (this._internals) {
            this._internals.setFormValue(this.value)
        }
    }

    @Watch('disabled')
    handleDisabledChange() {
        if (this._internals) {
            this._internals.ariaDisabled = this.disabled.toString()
            if (this.disabled) {
                this._internals.setValidity({})
            } else {
                this.validateTleFormat(this.value)
            }
        }
    }

    @Watch('invalid')
    @Watch('required')
    handleValidityChange() {
        this.updateValidity()
    }

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this._onInput = this._onInput.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._onFocus = this._onFocus.bind(this)

        // Initialize ElementInternals if supported
        this.initializeElementInternals()
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    componentWillLoad() {
        this._handleSlotChange()
        if (this.value) {
            this.validateTleFormat(this.value)
            if (this._internals) {
                this._internals.setFormValue(this.value)
            }
        }

        // Initialize element states
        this.updateValidity()
        if (this._internals) {
            this._internals.ariaDisabled = this.disabled.toString()
        }
    }

    private initializeElementInternals() {
        // Check if ElementInternals is supported and initialize it
        if (
            window.ElementInternals &&
            window.CustomElementRegistry &&
            'formAssociated' in window.CustomElementRegistry.prototype
        ) {
            try {
                // Mark the element as form-associated
                if ('formAssociated' in this.constructor) {
                    ;(this.constructor as any).formAssociated = true
                }

                // Attach internals
                this._internals = this.el.attachInternals()
                this.hasFormAssociated = true
            } catch (e) {
                console.warn(
                    'ElementInternals API is not fully supported in this browser. Form association may not work properly.',
                    e
                )
                this._internals = null
                this.hasFormAssociated = false
            }
        } else {
            console.info(
                'ElementInternals API not supported in this browser. Form association will be limited.'
            )
            this._internals = null
            this.hasFormAssociated = false
        }
    }

    private updateValidity() {
        // Skip if ElementInternals is not available
        if (!this._internals) return

        // Skip validity checks if disabled
        if (this.disabled) {
            this._internals.setValidity({})
            return
        }

        if (this.invalid) {
            this._internals.setValidity(
                { customError: true },
                this.errorText || 'Invalid input'
            )
            return
        }

        if (this.required && (!this.value || this.value.trim() === '')) {
            this._internals.setValidity(
                { valueMissing: true },
                'This field is required'
            )
            return
        }

        if (
            this.value &&
            this.validationResult &&
            !this.validationResult.valid
        ) {
            this._internals.setValidity(
                { patternMismatch: true },
                this.getErrorMessage()
            )
            return
        }

        // If all checks pass, clear validity
        this._internals.setValidity({})
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
    }

    /**
     * Get a consolidated error message with issue details
     */
    private getErrorMessage(): string {
        if (!this.validationResult || this.validationResult.valid) {
            return this.errorText || ''
        }

        // Start with the base validation message
        let message = this.validationResult.message

        // Add first issue information if available
        if (
            this.validationResult.issues &&
            this.validationResult.issues.length > 0
        ) {
            const firstIssue = this.validationResult.issues[0]
            message += `. ${firstIssue.message}.`
        }

        return message
    }

    private validateTleFormat(tle: string): TLEValidationResult {
        if (!tle || tle.trim().length === 0) {
            const emptyResult: TLEValidationResult = {
                valid: true,
                message: '',
            }
            this.validationResult = emptyResult
            return emptyResult
        }

        // Use the TLEValidator to validate the TLE
        const result = TLEValidator.validate(tle)

        // Store the validation result
        this.validationResult = result

        // Emit the validation event
        this.ruxTleValidated.emit(result)

        // Update form validity when validation state changes
        this.updateValidity()

        return result
    }

    private _onChange(e: Event) {
        const target = e.target as HTMLTextAreaElement
        this.value = target.value
        this.validateTleFormat(this.value)
        if (this._internals) {
            this._internals.setFormValue(this.value)
        }
        this.ruxChange.emit()
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLTextAreaElement
        this.value = target.value
        this.validateTleFormat(this.value)
        if (this._internals) {
            this._internals.setFormValue(this.value)
        }
        this.ruxInput.emit()
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
        // Update validity state on blur to match native form behaviors
        this.updateValidity()
    }

    private _onFocus = () => {
        // Select all text when focused
        // Use setTimeout to ensure this happens after the browser's default focus behavior
        setTimeout(() => {
            if (this.textareaEl) {
                this.textareaEl.select()
            }
        }, 0)
    }

    render() {
        // Only use renderHiddenInput if ElementInternals are not supported
        if (!this.hasFormAssociated && this.name) {
            // Use the imported renderHiddenInput function if ElementInternals is not available
            import('../../utils/utils')
                .then(({ renderHiddenInput }) => {
                    renderHiddenInput(
                        true,
                        this.el,
                        this.name,
                        this.value,
                        this.disabled
                    )
                })
                .catch((err) => {
                    console.warn(
                        'Failed to import renderHiddenInput utility',
                        err
                    )
                })
        }

        const isValid = this.validationResult?.valid ?? true
        const errorMessage = this.getErrorMessage()

        return (
            <Host>
                <div class="rux-tle-input-field" part="form-field">
                    {this.hasLabel ? (
                        <label
                            class={{
                                'rux-tle-input-label': true,
                            }}
                            aria-hidden={this.hasLabel ? 'false' : 'true'}
                            htmlFor={this.inputId}
                            part="label"
                        >
                            <span class={{ hidden: !this.hasLabel }}>
                                <slot
                                    onSlotchange={this._handleSlotChange}
                                    name="label"
                                >
                                    {this.label}
                                    {this.required && (
                                        <span
                                            part="required"
                                            class="rux-tle-input-label__asterisk"
                                        >
                                            &#42;
                                        </span>
                                    )}
                                </slot>
                            </span>
                        </label>
                    ) : null}
                    <textarea
                        ref={(el) => (this.textareaEl = el!)}
                        name={this.name}
                        disabled={this.disabled}
                        aria-invalid={
                            this.invalid || !isValid ? 'true' : 'false'
                        }
                        placeholder={this.placeholder}
                        required={this.required}
                        readonly={this.readonly}
                        value={this.value}
                        class={{
                            'rux-tle-input': true,
                            'rux-tle-input--disabled': this.disabled,
                            'rux-tle-input--invalid': this.invalid || !isValid,
                        }}
                        id={this.inputId}
                        rows={2}
                        onChange={this._onChange}
                        onInput={this._onInput}
                        onBlur={this._onBlur}
                        onFocus={this._onFocus}
                        part="tle-input"
                    ></textarea>
                </div>

                {/* Error message for invalid TLE format */}
                {(!isValid || this.invalid || this.hasErrorSlot) && (
                    <div
                        class="rux-error-text"
                        part="error-text validation-message"
                    >
                        <svg
                            fill="none"
                            width="14"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                                fill="currentColor"
                            />
                        </svg>
                        <slot
                            name="error-text"
                            onSlotchange={this._handleSlotChange}
                        >
                            {errorMessage}
                        </slot>
                    </div>
                )}

                {/* Help text */}
                {(this.helpText || this.hasHelpSlot) &&
                    isValid &&
                    !this.invalid &&
                    !this.hasErrorSlot && (
                        <div class="rux-help-text" part="help-text">
                            <slot
                                name="help-text"
                                onSlotchange={this._handleSlotChange}
                            >
                                {this.helpText}
                            </slot>
                        </div>
                    )}
            </Host>
        )
    }
}
