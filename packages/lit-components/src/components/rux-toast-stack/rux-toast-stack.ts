import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './rux-toast-stack.scss?inline';

// Define the type alias
export type ToastStackPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'

// Assume styles are imported or defined here
// import styles from './rux-toast-stack.scss?inline';

/**
 * RuxToastStack Component (LitElement Conversion)
 *
 * @slot (default) - where all toasts go
 */
@customElement('rux-toast-stack')
export class RuxToastStack extends LitElement {
    // In Lit, we use 'this' for the element reference, but @query is useful
    // if we needed a reference to an element *inside* the shadow DOM.
    // Since we are adding children to the host, we don't strictly need @query
    // but we can use it to get a reference to the main container div if needed.
    // @query('.rux-toast-stack') private containerEl!: HTMLDivElement;

    /**
     * position of toast stack in viewport
     */
    @property({ type: String, attribute: 'position', reflect: true })
    position: ToastStackPosition = 'top-right';

    // Define the component's styles
    
    static styles = css`
        ${unsafeCSS(style)}
    `;

    /**
     * Adds an individual toast to the stack with the set props passed in as an object.
     * Accepts any key's that match rux-toast props (message, hideClose, ect).
     * (Equivalent to Stencil's @Method)
     */
    public async addToast(props: { [x: string]: any }) {
        // Since the toasts are added to the light DOM (slot), we use `this` (the host element).
        const toast = document.createElement('rux-toast') as any; // Cast as 'any' to easily access potential properties

        // Stencil added a transition for opacity, which should probably be in CSS,
        // but we'll include the inline style for direct conversion.
        toast.style.transition = 'opacity 800ms ease-in 1s';

        // Stencil uses a verbose switch/case. We can simplify this by iterating over keys
        // and setting the properties directly, as long as the keys match the rux-toast properties.
        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                // Directly set the property on the new element instance
                // This assumes standard web component property names (camelCase)
                toast[key] = props[key];
            }
        }

        // Add as the first child to maintain stack order (newest on top/bottom)
        // Stencil used `this.el` which is the host element. In Lit, that's just `this`.
        this.insertBefore(toast, this.firstChild);
    }

    // You can keep the getter, but in Lit you'd typically query for elements as needed
    // or use a Reactive Controller to manage a dynamic list of children.
    get _toastsArray(): Array<any> { // Using 'any' as HTMLRuxToastElement is not defined here
        const toasts: Array<any> = Array.from(
            this.querySelectorAll('rux-toast')
        );
        return toasts;
    }

    render() {
        // In Lit, the component's template defines the internal shadow DOM structure.
        // We use a div to contain the slotted content and apply internal flex layout.
        return html`
            <div class="rux-toast-stack">
                <slot></slot>
            </div>
        `;
    }
}
