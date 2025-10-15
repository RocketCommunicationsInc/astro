import { LitElement, css, html, unsafeCSS } from 'lit'

import { customElement } from 'lit/decorators.js'
import style from './rux-table.scss?inline'

@customElement('rux-table') // This replaces `tag: 'rux-table'` from Stencil's @Component
export class RuxTable extends LitElement {
    // This replaces `styleUrl: 'rux-table.scss'` from Stencil's @Component
    static styles = css`
        ${unsafeCSS(style)}
    `

    render() {
        // In LitElement, the content returned by render() is already within the
        // shadow DOM of the host element, so `<Host>` is not needed.
        // `h` is replaced by Lit's `html` tagged template literal.
        return html` <slot></slot> `
    }
}
