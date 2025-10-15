import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// No longer needed for LitElement
// import { FunctionalComponent, h } from '@stencil/core'

export interface FormFieldMessageProps {
    helpText?: string
    errorText?: string
}

/**
 * @part error-text - The error text element
 * @part help-text - The help text element
 */
@customElement('form-field-message')
export class FormFieldMessage extends LitElement implements FormFieldMessageProps {
    @property({ type: String, attribute: 'help-text' })
    helpText?: string

    @property({ type: String, attribute: 'error-text' })
    errorText?: string

    static styles = css`
        :host {
            display: block; /* Ensure it takes up space and allows margin/padding */
        }

        .rux-error-text,
        .rux-help-text {
            display: flex;
            align-items: center;
            font-size: 0.875rem; /* Example font size */
            line-height: 1.25rem; /* Example line height */
            margin-top: 0.25rem; /* Example spacing */
        }

        .rux-error-text {
            color: var(--rux-color-text-error, #dc2626); /* Example error color (red-600) */
        }

        .rux-error-text svg {
            margin-right: 0.25rem; /* Space between icon and text */
            flex-shrink: 0; /* Prevent icon from shrinking */
            fill: currentColor; /* Inherit color from parent */
        }

        .rux-help-text {
            color: var(--rux-color-text-help, #6b7280); /* Example help color (gray-500) */
        }
    `

    render() {
        if (this.errorText) {
            return html`
                <div class="rux-error-text" part="error-text">
                    <slot></slot>
                    <svg fill="none" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    ${this.errorText}
                </div>
            `
        }

        if (this.helpText) {
            return html`
                <div class="rux-help-text" part="help-text">
                    <slot></slot>
                    ${this.helpText}
                </div>
            `
        }

        return null
    }
}

// No default export needed for LitElement when using @customElement decorator
// export default FormFieldMessage;
