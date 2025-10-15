import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property, queryAssignedElements } from 'lit/decorators.js'

import { classMap } from 'lit/directives/class-map.js'
import style from './rux-checkbox-group.scss?inline'

/**
 * @slot (default) - The checkbox elements
 * @slot label - The checkbox group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part container - The container div of checkbox elements
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 */
@customElement('rux-checkbox-group')
export class RuxCheckboxGroup extends LitElement {
    // IMPORTANT: Replace this with the actual content of your rux-checkbox-group.scss file
    static styles = css`
        ${unsafeCSS(style)}
    `

    // @queryAssignedElements automatically observes content assigned to slots
    // and updates the component when it changes.
    // 'flatten: true' ensures we get direct content, not just other slot elements.
    @queryAssignedElements({ slot: 'label', flatten: true })
    private _labelSlotContent!: Array<HTMLElement | Text>

    @queryAssignedElements({ slot: 'help-text', flatten: true })
    private _helpTextSlotContent!: Array<HTMLElement | Text>

    @queryAssignedElements({ slot: 'error-text', flatten: true })
    private _errorTextSlotContent!: Array<HTMLElement | Text>

    /**
     * The label of the checkbox group. For HTML content, use the `label` slot instead.
     */
    @property({ type: String })
    label?: string

    /**
     * The help or explanation text
     */
    @property({ type: String, attribute: 'help-text' })
    helpText?: string

    /**
     * The validation error text
     */
    @property({ type: String, attribute: 'error-text' })
    errorText?: string

    /**
     * Presentational only. Renders the Checkbox Group as invalid.
     */
    @property({ type: Boolean })
    invalid: boolean = false

    /**
     * Marks that a selection from the checkbox group is requried.
     */
    @property({ type: Boolean })
    required: boolean = false

    // Helper to check if a slot has meaningful content (element or non-empty text)
    private _hasSlotContent(nodes: Array<HTMLElement | Text>): boolean {
        return nodes.some((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) return true
            if (node.nodeType === Node.TEXT_NODE) return (node.textContent || '').trim().length > 0
            return false
        })
    }

    get hasLabelSlot(): boolean {
        return this._hasSlotContent(this._labelSlotContent)
    }

    get hasHelpSlot(): boolean {
        return this._hasSlotContent(this._helpTextSlotContent)
    }

    get hasErrorSlot(): boolean {
        return this._hasSlotContent(this._errorTextSlotContent)
    }

    get hasLabel(): boolean {
        return !!this.label || this.hasLabelSlot
    }

    render() {
        // Properties and getters for template logic
        const { errorText, helpText, hasHelpSlot, hasErrorSlot } = this

        return html`
            <div class="rux-form-field" part="form-field">
                <div
                    class=${classMap({
                        'rux-label': true,
                        hidden: !this.hasLabel,
                    })}
                    part="label"
                >
                    <slot name="label"> ${this.label} ${this.required ? html`<span part="required" class="rux-label__asterisk">&#42;</span>` : ''} </slot>
                </div>
                <div
                    class=${classMap({
                        'rux-checkbox-group': true,
                        'rux-checkbox-group--invalid': this.invalid,
                    })}
                    part="container"
                >
                    <slot></slot>
                </div>
            </div>

            <div
                class=${classMap({
                    'rux-error-text': !!errorText || hasErrorSlot,
                    hidden: !(!!errorText || hasErrorSlot), // Hide if no error text AND no error slot content
                })}
                part="error-text"
            >
                <svg fill="none" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                        fill="currentColor"
                    />
                </svg>
                <slot name="error-text">${errorText}</slot>
            </div>

            <div
                class=${classMap({
                    'rux-help-text': (!!helpText || hasHelpSlot) && !(!!errorText || hasErrorSlot),
                    hidden: !(!!helpText || hasHelpSlot) || !!errorText || hasErrorSlot,
                })}
                part="help-text"
            >
                <slot name="help-text">${helpText}</slot>
            </div>
        `
    }
}
