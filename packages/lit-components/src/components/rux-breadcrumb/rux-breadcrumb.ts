import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js'; // Import decorators

import style from './rux-breadcrumb.scss?inline'

/**
 * @slot (default) - place breadcrumb-items in the default slot
 *
 * @part container - the nav element containing the breadcrumb list
 * @part base - the ordered list containing the breadcrumb-items
 */
@customElement('rux-breadcrumb')
export class RuxBreadcrumb extends LitElement {
    // 1. Define static styles for the component
    static styles = css`
        ${unsafeCSS(style)}
    `;

    // 2. Use @state to make _slotCount reactive.
    // Changing this property will trigger Lit's render method.
    @state()
    private _slotCount: number = 0;

    private _observer: MutationObserver | null = null;

    // 3. connectedCallback replaces componentWillLoad for initial setup and observer creation
    connectedCallback() {
        super.connectedCallback();

        // Create a MutationObserver to watch for changes in light DOM children
        // The callback re-evaluates the children and triggers a re-render.
        this._observer = new MutationObserver(() => this._updateChildSlotsAndRender());
        // Observe direct child additions/removals
        this._observer.observe(this, { childList: true });

        // Perform initial setup when the component is connected to the DOM
        this._updateChildSlotsAndRender();
    }

    // 4. disconnectedCallback for cleanup, similar to Stencil's componentWillUnload (though not explicitly used there)
    disconnectedCallback() {
        super.disconnectedCallback();
        // Disconnect the observer to prevent memory leaks when the component is removed
        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }
    }

    /**
     * Updates the `slot` attribute of light DOM children and updates the internal
     * `_slotCount` to trigger a LitElement re-render.
     */
    private _updateChildSlotsAndRender() {
        const children = Array.from(this.children); // Get light DOM children
        let newSlotCount = 0;

        // Iterate through light DOM children and assign a unique slot name to each.
        // This is crucial for distributing them into the dynamically generated slots
        // within the shadow DOM's render() method.
        for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLElement;
            // Stencil used 1-based indexing for slots, using 0-based for simplicity here.
            // Adjust to `slot-${i + 1}` if 1-based is strictly required.
            child.slot = `slot-${i}`;
            newSlotCount++;
        }

        // Only update _slotCount if it has changed to avoid unnecessary re-renders
        if (this._slotCount !== newSlotCount) {
            this._slotCount = newSlotCount;
        }
    }

    // 5. render() method defines the component's shadow DOM structure
    render() {
        // Dynamically create an array of `<li><slot>` elements based on `_slotCount`
        const listItems = [];
        for (let i = 0; i < this._slotCount; i++) {
            listItems.push(html`<li><slot name="slot-${i}"></slot></li>`);
        }

        return html`
            <nav part="container" aria-label="Breadcrumb">
                <ol part="base">
                    ${listItems}
                </ol>
            </nav>
        `;
    }
}

// Ensure the custom element is defined
// This is typically handled by @customElement decorator, but explicit is fine too.
// customElements.define('rux-breadcrumb', RuxBreadcrumb);
