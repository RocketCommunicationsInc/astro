import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// If you have rux-option-group.css, you would paste its content here,
// or import it if you're using a build process that handles CSS imports
// into Lit's `css` tagged template literal.
// For example:
// import styleString from './rux-option-group.css?inline'; // Using Vite's ?inline import or similar
// static styles = css`${styleString}`;

@customElement('rux-option-group')
export class RuxOptionGroup extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
    `;

    /**
     * The option group label
     */
    @property({ type: String })
    label?: string;

    // No direct equivalent for @Element() el!: HTMLRuxOptionGroupElement
    // In Lit, `this` refers to the component instance (the element).

    /** @internal **/
    // Instead of @Event and EventEmitter, we use standard CustomEvent dispatching.
    // The event name and composed property are defined directly in the dispatch.

    // connectedCallback is implicitly called by LitElement, no need to define if
    // not doing anything specific beyond what Lit handles.
    // The binding of _handleSlotChange to `this` is handled automatically by Lit
    // when used directly in the template with `@slotchange=${this._handleSlotChange}`.
    // So, the original connectedCallback is no longer necessary.

    private _handleSlotChange() {
        // Emit the 'rux-option-group-changed' event
        this.dispatchEvent(new CustomEvent('rux-option-group-changed', {
            bubbles: true,   // Common for custom events to bubble up the DOM tree
            composed: true,  // Allows the event to cross shadow DOM boundaries
            // detail: (optional payload, none needed for void EventEmitter)
        }));
    }

    render() {
        // Lit uses `html` tagged template literals instead of `h` or JSX directly.
        // `<Host>` wrapper is not needed; the template renders directly into the shadow DOM.
        return html`
            <slot @slotchange=${this._handleSlotChange}></slot>
        `;
    }
}
