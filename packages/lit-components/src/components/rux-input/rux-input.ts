import {
    LitElement,
    html,
    css,
    unsafeCSS,
    type PropertyValues,
} from 'lit'
import {
    customElement,
    property,
    state,
    query,
} from 'lit/decorators.js'

// Assume this is your SASS/CSS file. In Lit, you often import it
// and use `unsafeCSS` or pre-process it to a string.
// For this example, we'll assume the SCSS content is placed into a
// variable or you are using a build tool that handles this.
// For simplicity, I'll use a placeholder for the styles.
import style from './rux-input.scss?inline' // Example for a build setup that imports CSS as a string

// Utility functions (You'd need to convert/re-implement these for Lit)
// For this example, I'll provide a simple Lit-compatible implementation.
const hasSlot = (el: Element, name: string) => {
    return !!el.querySelector(`[slot="${name}"]`)
}
const renderHiddenInput = (
    _shouldRender: boolean,
    _el: Element,
    _name: string,
    _value: string,
    _disabled: boolean
) => {
    // Hidden input logic is often unnecessary in Lit because forms can
    // access the component's 'name' and 'value' properties directly,
    // or you can implement the 'form-associated' pattern.
    // For now, we will skip the hidden input for simplicity, as it's
    // a Stencil-specific utility for form-associated behavior.
}

// Interfaces would typically be moved to a shared file.
interface FormFieldInterface {
    label?: string
    helpText?: string
    errorText?: string
    invalid: boolean
    value: string
    name: string
    required: boolean
    disabled: boolean
}

let id = 0

/**
 * RuxInput Component (LitElement Conversion)
 *
 * @slot label - The input label
 * @slot prefix - Left side input icon
 * @slot suffix - Right side input icon
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part icon - The icon displayed when toggle-password prop is set
 * @part input-field - the styled wrapper around the input element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 * @part prefix - The container of the prefix slot
 * @part suffix - The container of the suffix slot
 */
@customElement('rux-input')
export class RuxInput
    extends LitElement
    implements FormFieldInterface
{
    private inputId = `rux-input-${++id}`

    @query('.native-input')
    private inputEl!: HTMLInputElement

    @state()
    private hasLabelSlot = false
    @state()
    private hasHelpSlot = false
    @state()
    private hasErrorSlot = false

    @state()
    private togglePassword = false

    @state()
    private isPasswordVisible = false

    @state()
    private hasFocus = false

    /**
     * The input label text. For HTML content, use the `label` slot instead.
     */
    @property({ type: String })
    label?: string
    /**
     * The input placeholder text
     */
    @property({ type: String })
    placeholder?: string

    /**
     * The help or explanation text
     */
    @property({ attribute: 'help-text', type: String })
    helpText?: string

    /**
     * The validation error text
     */
    @property({ attribute: 'error-text', type: String })
    errorText?: string

    /**
     * Presentational only. Renders the Input Field as invalid.
     */
    @property({ type: Boolean })
    invalid = false

    /**
     * The input value
     */
    @property({ type: String, reflect: true })
    value: string = ''

    /**
     * The input name
     */
    @property({ type: String })
    name = ''

    /**
     * The input type
     */
    @property({ type: String })
    type:
        | 'text'
        | 'number'
        | 'email'
        | 'url'
        | 'search'
        | 'password'
        | 'date'
        | 'datetime-local'
        | 'time'
        | 'tel' = 'text'

    /**
     * The input min attribute
     */
    @property({ type: String })
    min?: string

    /**
     * The input max attribute
     */
    @property({ type: String })
    max?: string

    /**
     * The input maxlength attribute
     */
    @property({ type: String })
    maxlength?: string

    /**
     * The input minlength attribute
     */
    @property({ type: String })
    minlength?: string

    /**
     * Disables the button via HTML disabled attribute.
     */
    @property({ type: Boolean, reflect: true })
    disabled = false

    /**
     * Sets the input as required
     */
    @property({ type: Boolean })
    required: boolean = false

    /**
     * Control the padding around the input field
     */
    @property({ type: String })
    size: 'small' | 'medium' | 'large' = 'medium'

    /**
     * The input step attribute
     */
    @property({ type: String })
    step?: string

    /**
     * The input's spellcheck attribute
     */
    @property({ type: Boolean })
    spellcheck = false

    /**
     * The inputs readonly attribute
     */
    @property({ type: Boolean })
    readonly = false

    /**
     * The inputs autocomplete attribute. In password inputs, this attribute gets set to 'off'.
     */
    @property({ type: String })
    autocomplete = 'off'

    // Static styles block
    static styles = css`
        ${unsafeCSS(style)}
    `

    // --- Lifecycle and Change Handlers ---

    // Lit's equivalent of Stencil's componentWillLoad/connectedCallback and Watch('type')
    willUpdate(changedProperties: PropertyValues) {
        if (changedProperties.has('type')) {
            this._setTogglePassword()
        }
    }

    firstUpdated() {
        this._handleSlotChange()
        // Add listener for slot changes
        this.shadowRoot!.addEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        // Remove the slotchange listener when disconnected
        this.shadowRoot?.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    // --- Methods ---

    /**
     * Sets element as focused (equivalent to Stencil @Method)
     */
    public async setFocus(options?: FocusOptions) {
        this.inputEl?.focus(options)
    }

    /**
     * Returns the native input element used in the shadow dom. (equivalent to Stencil @Method)
     */
    public async getInput() {
        return this.inputEl
    }

    // --- Getters ---

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    // --- Private Methods ---

    private _onChange(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        // Emit custom event: 'ruxchange' is Stencil's custom event
        this.dispatchEvent(
            new CustomEvent('ruxchange', {
                detail: this.value,
                bubbles: true,
                composed: true,
            })
        )
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        // Emit custom event: 'ruxinput' is Stencil's custom event
        this.dispatchEvent(
            new CustomEvent('ruxinput', {
                detail: this.value,
                bubbles: true,
                composed: true,
            })
        )
    }

    private _onBlur = () => {
        this.dispatchEvent(
            new CustomEvent('ruxblur', { bubbles: true, composed: true })
        )
        this.hasFocus = false
    }

    private _onFocus = () => {
        this.dispatchEvent(
            new CustomEvent('ruxfocus', { bubbles: true, composed: true })
        )
        this.hasFocus = true
    }

    private _handleSlotChange = () => {
        // Use `this` (the component element) to check for slots
        this.hasLabelSlot = hasSlot(this, 'label')
        this.hasErrorSlot = hasSlot(this, 'error-text')
        this.hasHelpSlot = hasSlot(this, 'help-text')

        // Force a re-render to reflect state change in the template
        this.requestUpdate()
    }

    private _setTogglePassword() {
        this.togglePassword = this.type === 'password'
        if (this.type === 'password') this.autocomplete = 'off'
    }

    private _handleTogglePassword = () => {
        this.isPasswordVisible = !this.isPasswordVisible
    }

    // --- Render Method ---

    render() {
        // Lit uses `this` directly for properties and states in the render function
        const {
            disabled,
            errorText,
            helpText,
            hasHelpSlot,
            hasErrorSlot,
            inputId,
            invalid,
            label,
            max,
            min,
            name,
            placeholder,
            required,
            step,
            type,
            value,
            hasLabel,
            size,
            spellcheck,
            readonly,
            togglePassword,
            isPasswordVisible,
            autocomplete,
            minlength,
            maxlength,
        } = this

        // Lit's template is a single function that returns `html`
        return html`
            <div class="rux-form-field" part="form-field">
                ${hasLabel
                    ? html`
                          <label
                              class="rux-input-label"
                              part="label"
                              aria-hidden=${hasLabel ? 'false' : 'true'}
                              for=${inputId}
                          >
                              <span class=${this.hasLabel ? '' : 'hidden'}>
                                  <slot
                                      name="label"
                                      @slotchange=${this._handleSlotChange}
                                  >
                                      ${label}
                                      ${required
                                          ? html`
                                                <span
                                                    part="required"
                                                    class="rux-input-label__asterisk"
                                                >
                                                    &#42;
                                                </span>
                                            `
                                          : null}
                                  </slot>
                              </span>
                          </label>
                      `
                    : null}

                <div
                    part="input-field"
                    class="rux-input ${this.hasFocus
                        ? 'rux-input--focused'
                        : ''} ${disabled ? 'rux-input--disabled' : ''} ${invalid
                        ? 'rux-input--invalid'
                        : ''} ${type === 'search' ? 'rux-input--search' : ''} ${
                        size === 'small'
                            ? 'rux-input--small'
                            : size === 'medium'
                            ? 'rux-input--medium'
                            : 'rux-input--large'
                    }"
                >
                    <span part="prefix" class="rux-input-prefix">
                        <slot name="prefix"></slot>
                    </span>
                    <input
                        name=${name}
                        ?disabled=${disabled}
                        type=${type === 'password' && isPasswordVisible
                            ? 'text'
                            : type}
                        aria-invalid=${invalid ? 'true' : 'false'}
                        placeholder=${placeholder ?? ''}
                        ?required=${required}
                        step=${step ?? ''}
                        min=${min ?? ''}
                        max=${max ?? ''}
                        minlength=${minlength ?? ''}
                        maxlength=${maxlength ?? ''}
                        .value=${value}
                        class="native-input"
                        id=${inputId}
                        ?spellcheck=${spellcheck}
                        ?readonly=${readonly}
                        @change=${this._onChange}
                        @input=${this._onInput}
                        @blur=${this._onBlur}
                        @focus=${this._onFocus}
                        part="input"
                        autocomplete=${autocomplete}
                    />
                    ${togglePassword
                        ? html`
                              <button
                                  @click=${this._handleTogglePassword}
                                  class="pw-button"
                              >
                                  <rux-icon
                                      exportparts="icon"
                                      icon=${isPasswordVisible
                                          ? 'visibility-off'
                                          : 'visibility'}
                                      size="22px"
                                  ></rux-icon>
                              </button>
                          `
                        : null}
                    <span part="suffix" class="rux-input-suffix">
                        <slot name="suffix"></slot>
                    </span>
                </div>
            </div>

            <div
                class="rux-error-text ${errorText || hasErrorSlot
                    ? ''
                    : 'hidden'}"
                part="error-text"
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
                <slot name="error-text" @slotchange=${this._handleSlotChange}>
                    ${errorText}
                </slot>
            </div>
            <div
                class="rux-help-text ${((helpText || hasHelpSlot) &&
                    !errorText &&
                    !hasErrorSlot) ||
                'hidden'}"
                part="help-text"
            >
                <slot name="help-text" @slotchange=${this._handleSlotChange}>
                    ${helpText}
                </slot>
            </div>
        `
    }
}
