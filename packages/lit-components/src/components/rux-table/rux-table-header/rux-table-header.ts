import { LitElement, css, html, unsafeCSS } from 'lit';

import { customElement } from 'lit/decorators.js'; // For the @customElement decorator
import style from './rux-table-header.scss?inline';

@customElement('rux-table-header')
export class RuxTableHeader extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    render() {
        // In Lit, the content returned by render() is automatically placed
        // inside the component's Shadow DOM. No need for a <Host> wrapper.
        return html`
            <slot></slot>
        `;
    }
}
