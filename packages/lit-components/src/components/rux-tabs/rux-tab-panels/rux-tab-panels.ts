import { LitElement, css, html, unsafeCSS } from 'lit';

import { customElement } from 'lit/decorators.js';
import style from '../rux-tab-panel/rux-tab-panel.scss?inline';

// Define a type for the child tab panel elements.
// In a real project, you would import this type from your rux-tab-panel component.
// For now, we'll define a simple interface.
interface HTMLRuxTabPanelElement extends HTMLElement {
    // Add any specific properties or methods if known, e.g.:
    // active: boolean;
    // name: string;
}

/**
 * @slot (default) - Used for instances of rux-tab-panel
 */
@customElement('rux-tab-panels')
export class RuxTabPanels extends LitElement {
    // Defines styles for the component's host element.
    // The original Stencil code used an inline style for position and width.
    // Statically defined styles are generally preferred in Lit.
    static styles = css`
        ${unsafeCSS(style)}
    `;

    connectedCallback() {
        super.connectedCallback(); // Always call super.connectedCallback()
    }

    // Lit's `firstUpdated` lifecycle hook is called once the component has been
    // connected to the DOM and its first update (including render) has completed.
    // This is a good place to perform initial DOM queries, like getting slotted children.
    firstUpdated(): void {
        setTimeout(() => this._getSlottedChildren());
    }

    private _getSlottedChildren() {
        // In Lit, `this.shadowRoot` directly gives you access to the component's shadow DOM.
        const slot = this.shadowRoot?.querySelector('slot');

        if (slot) {
            // Get all assigned nodes (including text nodes), then filter to only elements.
            // `flatten: true` ensures that if there are nested slots, all descendants are included.
            const childNodes = slot.assignedNodes({ flatten: true });
            const children = Array.prototype.filter.call(
                childNodes,
                // Type assertion for filtered nodes
                (node): node is HTMLRuxTabPanelElement => node.nodeType === Node.ELEMENT_NODE
            );

            this._registerTabPanels(children);
            return children;
        } else {
            return [];
        }
    }

    /**
     * Emits a list of the Tab Panels on the event.detail which have been passed in.
     * Replaces Stencil's @Event decorator and EventEmitter.
     * @event ruxregisterpanels
     * @type {CustomEvent<HTMLRuxTabPanelElement[]>}
     */
    private _registerTabPanels(children: HTMLRuxTabPanelElement[]) {
        this.dispatchEvent(new CustomEvent<HTMLRuxTabPanelElement[]>('ruxregisterpanels', {
            detail: children,
            bubbles: true,   // Allows the event to bubble up through the DOM tree
            composed: true,  // Allows the event to cross the shadow DOM boundary
        }));
    }

    render() {
        // Lit uses `html` tagged template literals for rendering.
        // The <Host> equivalent in Stencil is handled by `:host` in static styles
        // or by properties/attributes directly on the class instance in Lit.
        return html`
            <slot @slotchange=${this._getSlottedChildren}></slot>
        `;
    }
}
