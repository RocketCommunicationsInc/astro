import { LitElement, css, html, unsafeCSS } from 'lit'

import { customElement } from 'lit/decorators.js'
import style from './rux-table-cell.scss?inline'

/**
 * RuxTableCell Component (LitElement Conversion)
 * This component acts as a structural container for table cell content.
 */
@customElement('rux-table-cell')
export class RuxTableCell extends LitElement {
    // Define the component's styles
    static styles = css`
        ${unsafeCSS(style)}
    `

    render() {
        // In Lit, the component itself is the equivalent of the <Host> element.
        // We render the default slot directly to display any nested content.
        return html` <slot></slot> `
    }
}
