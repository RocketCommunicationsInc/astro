import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'

import type { FormFieldInterface } from '../../common/interfaces.module'
import { classMap } from 'lit/directives/class-map.js'
import style from './rux-textarea.scss?inline'

let id = 0

/**
 * Utility function to check for assigned slot content in LitElement
 * This works by querying the slot element within the component's shadow DOM
 * and checking if it has any nodes assigned to it from the light DOM.
 */
function hasSlotContent(element: HTMLElement, slotName: string = ''): boolean {
    const slot = element.shadowRoot?.querySelector(slotName ? `slot[name="${slotName}"]` : 'slot:not([name])')
    return slot ? slot.assignedNodes({ flatten: true }).length > 0 : false
}

/**
 * Utility function to manage a hidden input in the light DOM (sibling to the component).
 * This ensures the component's value can be submitted with native forms.
 * It's designed to be called from a Lit lifecycle hook like `updated`.
 */
function renderHiddenInput(
    container: HTMLElement, // The custom element itself
    name: string,
    value: string | null,
    disabled: boolean
) {
    let input = container.querySelector('input[type="hidden"]') as HTMLInputElement

    if (!input) {
        input = document.createElement('input')
        input.type = 'hidden'
        // Append to the light DOM, making it a sibling of the custom element
        container.appendChild(input)
    }

    input.name = name
    input.disabled = disabled
    input.value = value || ''
}

/**
 * @slot label - The textarea label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part textarea - The textarea element
 * @part required - The asterisk when required is true
 */
@customElement('rux-textarea')
export class RuxTextarea extends LitElement implements FormFieldInterface {
    // Convert your SCSS to CSS here. This is a basic conversion,
    // assuming some CSS variables for design tokens.
    static styles = css`
        ${unsafeCSS(style)}
    `

    private inputId = `rux-textarea-${++id}`

    // Use @query to get a reference to the internal textarea element
    @query('textarea')
    private textareaEl!: HTMLTextAreaElement

    @state()
    private hasLabelSlot = false

    @state()
    private hasHelpSlot = false

    @state()
    private hasErrorSlot = false

    /**
     * The textarea label text. For HTML content, use the `label` slot instead.
     */
    @property({ type: String })
    label?: string

    /**
     * The textarea placeholder text
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
     * Presentational only. Renders the Textarea as invalid.
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
     * The input minLength attribute
     */
    @property({ attribute: 'min-length', type: String })
    minLength?: string

    /**
     * The input maxLength attribute
     */
    @property({ attribute: 'max-length', type: String })
    maxLength?: string

    /**
     * The input rows attribute
     */
    @property({ type: Number })
    rows?: number

    /**
     * Sets the input as disabled
     */
    @property({ type: Boolean, reflect: true })
    disabled = false

    /**
     * Sets the input as required
     */
    @property({ type: Boolean })
    required: boolean = false

    /**
     * The textareas readonly attribute
     */
    @property({ type: Boolean })
    readonly = false

    /**
     * Styles the input element size between small, medium and large. The default styling is medium.
     */
    @property({ type: String, reflect: true })
    size?: 'small' | 'medium' | 'large'

    constructor() {
        super()
        // Bind the slot change handler to the instance
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    connectedCallback(): void {
        super.connectedCallback()
        // Listen for slot changes within the component's shadow DOM
        this.shadowRoot?.addEventListener('slotchange', this._handleSlotChange)
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        this.shadowRoot?.removeEventListener('slotchange', this._handleSlotChange)
    }

    // Lit's equivalent of Stencil's componentWillLoad and a good place for initial DOM-dependent setup
    firstUpdated() {
        this._handleSlotChange() // Initial check for slot content
    }

    // Lit's equivalent of Stencil's `updated` hook, used for side effects
    // such as managing the hidden input in the light DOM.
    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties)
        // Update the hidden input whenever properties relevant to it change
        if (changedProperties.has('name') || changedProperties.has('value') || changedProperties.has('disabled')) {
            renderHiddenInput(this, this.name, this.value, this.disabled)
        }
    }

    get hasLabel(): boolean {
        return !!this.label || this.hasLabelSlot
    }

    private _handleSlotChange(): void {
        // Update state based on actual slot content
        this.hasLabelSlot = hasSlotContent(this, 'label')
        this.hasErrorSlot = hasSlotContent(this, 'error-text')
        this.hasHelpSlot = hasSlotContent(this, 'help-text')
        // Lit usually handles re-renders on @state changes, but this explicit call
        // ensures a re-render if state was modified inside a non-reactive context.
        this.requestUpdate()
    }

    private _onChange(e: Event): void {
        const target = e.target as HTMLTextAreaElement
        this.value = target.value
        /**
         * Fired when an alteration to the input's value is committed by the user
         * @event ruxchange
         */
        this.dispatchEvent(
            new CustomEvent('ruxchange', {
                detail: { value: this.value },
                bubbles: true,
                composed: true,
            })
        )
    }

    private _onInput(e: Event): void {
        const target = e.target as HTMLTextAreaElement
        this.value = target.value
        /**
         * Fired when the value of the input changes
         * @event ruxinput
         */
        this.dispatchEvent(
            new CustomEvent('ruxinput', {
                detail: { value: this.value },
                bubbles: true,
                composed: true,
            })
        )
    }

    private _onBlur = (): void => {
        /**
         * Fired when an element has lost focus
         * @event ruxblur
         */
        this.dispatchEvent(new CustomEvent('ruxblur', { bubbles: true, composed: true }))
    }

    /**
     * Sets element as focused
     */
    async setFocus(options?: FocusOptions): Promise<void> {
        this.textareaEl.focus(options)
    }

    render() {
        // Use classMap for dynamic classes
        const textareaClasses = classMap({
            'rux-textarea': true,
            'rux-textarea--disabled': this.disabled,
            'rux-textarea--invalid': this.invalid,
            'rux-textarea--small': this.size === 'small',
            'rux-textarea--large': this.size === 'large',
        })

        const errorTextClasses = classMap({
            'rux-error-text': !!this.errorText || this.hasErrorSlot,
            hidden: !this.errorText && !this.hasErrorSlot,
        })

        const helpTextClasses = classMap({
            'rux-help-text': (!!this.helpText || this.hasHelpSlot) && (!this.errorText || !this.hasErrorSlot),
            hidden: (!this.helpText && !this.hasHelpSlot) || !!this.errorText || this.hasErrorSlot,
        })

        return html`
            <div class="rux-textarea-field" part="form-field">
                ${this.hasLabel
                    ? html`
                          <label class="rux-textarea-label" aria-hidden=${this.hasLabel ? 'false' : 'true'} for=${this.inputId} part="label">
                              <span class=${classMap({ hidden: !this.hasLabel })}>
                                  <slot name="label" @slotchange=${this._handleSlotChange}>
                                      ${this.label} ${this.required ? html` <span part="required" class="rux-textarea-label__asterisk">&#42;</span>` : ''}
                                  </slot>
                              </span>
                          </label>
                      `
                    : null}
                <textarea
                    name=${this.name}
                    ?disabled=${this.disabled}
                    aria-invalid=${this.invalid ? 'true' : 'false'}
                    placeholder=${this.placeholder || ''}
                    ?required=${this.required}
                    ?readonly=${this.readonly}
                    minlength=${this.minLength || ''}
                    maxlength=${this.maxLength || ''}
                    .value=${this.value}
                    class=${textareaClasses}
                    id=${this.inputId}
                    rows=${this.rows || ''}
                    @change=${this._onChange}
                    @input=${this._onInput}
                    @blur=${this._onBlur}
                    part="textarea"
                ></textarea>
            </div>
            ${this.errorText
                ? html`<div class=${errorTextClasses} part="error-text">
                      <svg fill="none" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                              fill="currentColor"
                          />
                      </svg>
                      <slot name="error-text" @slotchange=${this._handleSlotChange}> ${this.errorText} </slot>
                  </div>`
                : ''}
            <div class=${helpTextClasses} part="help-text">
                <slot name="help-text" @slotchange=${this._handleSlotChange}> ${this.helpText} </slot>
            </div>
        `
    }
}
