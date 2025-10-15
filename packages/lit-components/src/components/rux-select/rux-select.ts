import {
    LitElement,
    html,
    css,
    type PropertyValues,
    unsafeCSS,
} from 'lit'
import {
    customElement,
    property,
    state,
    query,
} from 'lit/decorators.js'
import style from './rux-select.scss?inline';

// Assume FormFieldInterface and utilities are available/re-implemented
interface FormFieldInterface {
    disabled: boolean
    required: boolean
    label?: string
    invalid: boolean
    multiple: boolean
    name: string
    value?: string | string[]
    helpText?: string
    errorText?: string
}

// Re-implement Stencil utilities in a Lit-compatible way
const hasSlot = (el: Element, name: string) => {
    return !!el.querySelector(`[slot="${name}"]`)
}

// In Lit, we often skip renderHiddenSelect and instead make the component
// form-associated using the static formAssociated = true pattern.
// However, since the Stencil original uses a utility, we'll keep the
// rendered hidden select for compatibility, though we'll need to define it.
const renderHiddenSelect = (
    _shouldRender: boolean,
    _el: Element,
    _name: string,
    _value?: string | string[],
    _disabled?: boolean
) => {
    // In a full Lit conversion, you'd likely remove this utility
    // and handle form data directly or use the `formAssociated` pattern.
}

/**
 * RuxSelect Component (LitElement Conversion)
 *
 * @slot (default) - The select options
 * @slot label - The select label
 * @slot help-text - the help text
 * @slot error-text - the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The select label
 * @part select - The select element
 * @part required - The asterisk when required is true
 */
@customElement('rux-select')
export class RuxSelect extends LitElement implements FormFieldInterface {
    // Queries for DOM elements
    @query('.native-select')
    private selectEl!: HTMLSelectElement

    @query('slot:not([name])')
    private defaultSlot!: HTMLSlotElement

    // State for slot detection
    @state()
    private hasLabelSlot = false
    @state()
    private hasHelpSlot = false
    @state()
    private hasErrorSlot = false

    // Unique ID for select element if not provided
    private _inputId = `rux-select-${Math.random().toString(36).substr(2, 9)}`

    // --- Properties (Props) ---

    @property({ type: Boolean, reflect: true })
    disabled: boolean = false

    @property({ type: Boolean, reflect: true })
    required: boolean = false

    @property({ type: String })
    label?: string

    @property({ attribute: 'input-id', type: String })
    inputId?: string

    @property({ attribute: 'label-id', type: String })
    labelId?: string

    @property({ type: Boolean, reflect: true })
    invalid: boolean = false

    @property({ type: Boolean, reflect: true })
    multiple: boolean = false

    @property({ type: String, reflect: true })
    name = ''

    // Lit will automatically handle array/string value based on initial value,
    // but we use the type hint for clarity.
    @property({ type: [String, Array] as unknown as undefined })
    value?: string | string[]

    @property({ attribute: 'help-text', type: String })
    helpText?: string

    @property({ attribute: 'error-text', type: String })
    errorText?: string

    @property({ type: String, reflect: true })
    size?: 'small' | 'medium' | 'large' = 'medium'

    @property({ type: Boolean, reflect: true })
    inline?: boolean = false

    // --- Styles ---

    static styles = css`
        ${unsafeCSS(style)}
    `

    // --- Lifecycle and Observers ---

    // Lit's equivalent of Stencil's componentWillLoad and connectedCallback
    connectedCallback(): void {
        super.connectedCallback()
        // Add listener for slot changes once connected
        this.updateComplete.then(() => {
            this.defaultSlot?.addEventListener(
                'slotchange',
                this._handleSlotChange
            )
        })

        // Initial slot check for label
        this._handleLabelSlotChange()
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        // Clean up
        this.defaultSlot?.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    // Lit's equivalent of @Watch('value')
    // We run the sync in `updated` to ensure `this.selectEl` exists.
    updated(changedProperties: PropertyValues) {
        if (changedProperties.has('value')) {
            this._syncOptionsFromValue()
        }
    }

    // Lit's equivalent of @Watch('label')
    // We run the sync in `updated` to ensure we re-render if label text changes
    // while a label slot is NOT present.
    // The slotchange listener handles the slot version.
    willUpdate(changedProperties: PropertyValues) {
        if (changedProperties.has('label')) {
            this._handleLabelSlotChange()
        }
    }

    // --- Listeners (Lit equivalent of Stencil @Listen) ---

    // Listeners for custom child element events (rux-option-group-changed, rux-option-changed)
    // These listeners are added directly to the component element's root in Lit.

    firstUpdated() {
        this.addEventListener('rux-option-group-changed', this._handleGroupOrOptionChange as EventListener)
        this.addEventListener('rux-option-changed', this._handleGroupOrOptionChange as EventListener)
        
        // Initial sync after first render
        this._handleSlotChange()
    }

    private _handleGroupOrOptionChange = () => {
        // Debounce or directly run, depending on desired performance.
        // Running directly here mimics the Stencil behavior.
        this._syncOptionsToNativeSelect()
        this._syncOptionsFromValue()
    }

    // --- Methods (Lit equivalent of Stencil @Method) ---

    public async setFocus(options?: FocusOptions) {
        this.selectEl.focus(options)
    }

    // --- Getters ---

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    get _calculatedInputId() {
        return this.inputId || this._inputId
    }

    // --- Private Methods ---

    private _onBlur = () => {
        this.dispatchEvent(
            new CustomEvent('ruxblur', { bubbles: true, composed: true })
        )
    }

    private _handleLabelSlotChange = () => {
        this.hasLabelSlot = hasSlot(this, 'label')
        this.requestUpdate()
    }

    private async _handleSlotChange() {
        await this._syncOptionsToNativeSelect()
        await this._syncOptionsFromValue()

        // Check for error and help slots
        this.hasErrorSlot = hasSlot(this, 'error-text')
        this.hasHelpSlot = hasSlot(this, 'help-text')
        this.requestUpdate()
    }

    /**
     * Manually copies custom options/groups from the default slot into the native <select> element.
     */
    private async _syncOptionsToNativeSelect() {
        const select = this.selectEl
        if (!select || !this.defaultSlot) return

        select.innerHTML = ''
        const assignedElements = this.defaultSlot.assignedElements({
            flatten: true,
        }) as HTMLElement[]

        assignedElements.forEach((item: any) => {
            if (item.tagName.toLowerCase() === 'rux-option') {
                this._appendOptionToNativeSelect(
                    item.label,
                    item.value,
                    item.disabled,
                    select,
                    item.title
                )
            } else if (item.tagName.toLowerCase() === 'rux-option-group') {
                const children = [
                    ...Array.from(item.querySelectorAll('rux-option')),
                ] 
                this._appendOptGroupToNativeSelect(
                    item.label ? item.label : 'Group',
                    children,
                    item.title
                )
            }
        })
        return Promise.resolve()
    }

    private _appendOptGroupToNativeSelect(
        groupName: string,
        children: any[],
        title?: string
    ) {
        const group = Object.assign(document.createElement('optgroup'), {
            label: groupName,
            title: title,
        })

        children.forEach((option: any) => {
            this._appendOptionToNativeSelect(
                option.label,
                option.value,
                option.disabled,
                group,
                option.title
            )
        })

        this.selectEl.appendChild(group)
    }

    private _appendOptionToNativeSelect(
        label: string,
        value: string,
        disabled: boolean,
        target: HTMLSelectElement | HTMLOptGroupElement,
        title?: string
    ) {
        const item = Object.assign(document.createElement('option'), {
            innerHTML: label || '',
            value: value,
            disabled: disabled,
            title: title,
        })
        target.appendChild(item)
    }

    /**
     * Sets the 'selected' property on the native options based on the component's 'value' property.
     */
    private _syncOptionsFromValue() {
        if (!this.selectEl) return

        const options = [
            ...Array.from(this.selectEl.querySelectorAll('option')),
        ]

        options.forEach((option: HTMLOptionElement) => {
            if (Array.isArray(this.value)) {
                option.selected = this.value.includes(option.value)
            } else {
                // Ensure value is treated as string for comparison
                option.selected = String(option.value) === String(this.value)
            }
        })
        return Promise.resolve()
    }

    /**
     * Updates the component's 'value' property and emits the 'ruxchange' event.
     */
    private _onChange(e: Event) {
        const target = e.target as HTMLSelectElement

        const values = [...target.options]
            .filter((option) => option.selected)
            .map((option) => option.value)

        // Update the component's value property
        if (this.multiple) {
            this.value = values // Array of strings
        } else {
            this.value = values.length > 0 ? values[0] : undefined // Single string or undefined
        }

        // Emit custom event
        this.dispatchEvent(
            new CustomEvent('ruxchange', {
                detail: this.value,
                bubbles: true,
                composed: true,
            })
        )
    }

    render() {
        // renderHiddenSelect is a Stencil-specific form utility.
        // We'll skip it in the Lit template as it's often not needed,
        // but if it's strictly necessary for legacy reasons, you'd place a
        // hidden `<select>` here with all the same options.
        // For simplicity and Lit best practice, we'll rely on the visible one.

        return html`
            <div part="form-field">
                <label
                    id=${this.labelId ?? ''}
                    for=${this._calculatedInputId}
                    aria-hidden=${this.hasLabel ? 'false' : 'true'}
                    part="label"
                >
                    <span class="${this.hasLabel ? '' : 'hidden'}">
                        <slot
                            @slotchange=${this._handleLabelSlotChange}
                            name="label"
                        >
                            ${this.label}
                            ${this.required
                                ? html`
                                      <span
                                          part="required"
                                          class="rux-label__asterisk"
                                      >
                                          &#42;
                                      </span>
                                  `
                                : null}
                        </slot>
                    </span>
                </label>
                <select
                    class="
                        native-select
                        rux-select
                        ${this.size === 'small' ? 'rux-select--small' : ''}
                        ${this.size === 'medium' ? 'rux-select--medium' : ''}
                        ${this.size === 'large' ? 'rux-select--large' : ''}
                        ${this.invalid ? 'rux-select--invalid' : ''}
                        ${this.multiple ? 'rux-select--multiple' : ''}
                        ${this.inline ? 'rux-select--inline' : ''}
                    "
                    id=${this._calculatedInputId}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    ?multiple=${this.multiple}
                    name=${this.name}
                    @change=${this._onChange}
                    @blur=${this._onBlur}
                    part="select"
                    aria-describedby=${
                        this.invalid || this.hasErrorSlot
                            ? 'error-text-container'
                            : ''
                    }
                ></select>
                <div aria-hidden="true" class="hidden">
                    <slot @slotchange=${this._handleSlotChange}></slot>
                </div>
            </div>

            <div
                id="error-text-container"
                class="rux-error-text ${this.errorText || this.hasErrorSlot
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
                    ${this.errorText}
                </slot>
            </div>
            <div
                class="rux-help-text ${((this.helpText || this.hasHelpSlot) &&
                    !this.errorText &&
                    !this.hasErrorSlot) ||
                'hidden'}"
                part="help-text"
            >
                <slot name="help-text" @slotchange=${this._handleSlotChange}>
                    ${this.helpText}
                </slot>
            </div>
        `
    }
}
