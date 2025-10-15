
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import style from './rux-breadcrumb-item.scss?inline'

/**
 * @slot (default) - The breadcrumb item content
 * @part link - the link element
 */
@customElement('rux-breadcrumb-item')
export class RuxBreadcrumbItem extends LitElement {
    /**
     * @prop {String} href - The href property of the breadcrumb item link
     */
    @property({ type: String, reflect: true })
    href?: string;

    // Use @query to get direct references to elements within the shadow DOM
    @query('slot')
    private _slotElement!: HTMLSlotElement;

    @query('[part="link"]')
    private _linkElement!: HTMLAnchorElement;

    // Equivalent to Stencil's styleUrl, put your SCSS content here within the css tagged template literal.
    // Make sure to remove any SCSS-specific features not supported by standard CSS (e.g., nesting without PostCSS).
    static override styles = css`
        ${unsafeCSS(style)}
    `;

    // Stencil's `componentWillLoad` can often be mapped to `firstUpdated` in Lit,
    // which runs after the first render and properties are set.
    override firstUpdated() {
        this._handleSlotChange();
    }

    /**
     * Handles changes in the slotted content, particularly for `rux-icon` elements
     * to ensure they inherit the correct font-size.
     */
    private _handleSlotChange() {
        const slot = this._slotElement;
        const link = this._linkElement;

        // Ensure both elements are available before proceeding
        if (slot && link) {
            const fontSize = window.getComputedStyle(link).getPropertyValue('font-size');

            // Get all assigned nodes from the slot. `flatten: true` ensures nodes from nested slots are also included.
            const childEls = slot.assignedNodes({ flatten: true }) as HTMLElement[];

            if (childEls.length) {
                // Iterate through assigned nodes to find and size RUX-ICONs
                childEls.forEach((el) => {
                    // Check if the node is an element and has the 'RUX-ICON' tag
                    if (el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'RUX-ICON') {
                        el.setAttribute('size', fontSize);
                    }
                });
            }
        }
    }

    override render() {
        return html`
            <a href=${this.href || '#'} part="link">
                <!-- Listen for slotchange event to react to changes in slotted content -->
                <slot @slotchange=${this._handleSlotChange}></slot>
            </a>
        `;
    }
}
