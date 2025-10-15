import { LitElement, css, html, unsafeCSS } from 'lit';

import { customElement } from 'lit/decorators.js';
import style from './rux-menu-item-divider.scss?inline'

/**
 * @part container - the container of the rux-menu-item-divider
 */
@customElement('rux-menu-item-divider')
export class RuxMenuItemDivider extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `;

    render() {
        return html`
            <div class="wrapper">
                <li role="separator" part="container"></li>
            </div>
        `;
    }
}
