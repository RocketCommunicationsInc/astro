import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import style from './rux-table-row.scss?inline'

/**
 * RuxTableRow Component (LitElement Conversion)
 */
@customElement('rux-table-row')
export class RuxTableRow extends LitElement {
    /**
     * Changes the background color of the row. Can be applied to multiple rows at once.
     */
    @property({ type: Boolean, attribute: 'selected' })
    selected = false

    // Define the component's styles
    static styles = css`
        ${unsafeCSS(style)}
    `

    render() {
        // Lit uses the :host selector with class binding to apply host attributes/classes
        // The class binding is done by setting the `class` attribute on the <Host> equivalent.
        // We can apply classes to the host element using the :host selector in CSS or by binding to the class attribute in the template.

        return html`
                <slot></slot>
        `
    }

    // A more idiomatic Lit way to handle host class:
    // This method is preferred as it directly manipulates the host element's class list
    // based on the component's reactive properties.
    protected willUpdate() {
        // Toggle the 'is-selected' class on the host element based on the 'selected' property
        this.classList.toggle('is-selected', this.selected)
    }
}
