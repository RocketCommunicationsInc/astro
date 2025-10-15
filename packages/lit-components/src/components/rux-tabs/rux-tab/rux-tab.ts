import { LitElement, css, html, unsafeCSS } from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import style from './rux-tab.scss?inline';

/**
 * @part container - The main container for the tab content.
 * @slot (default) - Used for the primary tab content (e.g., the tab label).
 * @slot actions - Used for additional actions or elements within the tab, which do not trigger tab selection.
 */
export class RuxTab extends LitElement {
    // Define the component's styles. This replaces Stencil's `styleUrl`.
    // The content would come from `rux-tab.scss`.
    static styles = css`
        ${unsafeCSS(style)}
    `;

    /**
     * If present, indicates that this tab is currently selected.
     * Reflects to the `selected` attribute on the host element.
     */
    @property({ type: Boolean, reflect: true }) selected: boolean = false;

    /**
     * If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.
     * Reflects to the `disabled` attribute on the host element.
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;

    /**
     * If true, displays the tabs in a smaller style, suitable for limited-space uses.
     * Reflects to the `small` attribute on the host element.
     */
    @property({ type: Boolean, reflect: true }) small: boolean = false; // Added reflect: true to mimic Stencil's attribute setting behavior

    connectedCallback(): void {
        super.connectedCallback();
        // Stencil's `this.el.parentElement?.getAttributeNode('small')` logic.
        // In Lit, `this` refers to the host element.
        if (this.parentElement?.hasAttribute('small')) {
            this.small = true; // Setting the property will automatically reflect the attribute if `reflect: true`
        }
    }

    // Lit's way to "watch" for property changes (similar to Stencil's @Watch).
    // This method is called after the component's properties have been updated and the DOM has rendered.
    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties); // Always call super.updated()

        // Stencil's `@Watch('selected') handleSelected()` logic.
        // Only emit if 'selected' property changed and its new value is true.
        if (changedProperties.has('selected') && this.selected) {
            /**
             * Fires when a tab is selected (i.e., its `selected` property becomes `true`).
             * @event ruxtabselected
             * @type {CustomEvent<RuxTab>}
             * @detail {RuxTab} The instance of the RuxTab component that was selected.
             * @bubbles true - The event will bubble up through the DOM.
             * @composed true - The event will cross shadow DOM boundaries.
             */
            this.dispatchEvent(
                new CustomEvent<RuxTab>('ruxtabselected', {
                    detail: this, // Pass the component instance itself, equivalent to Stencil's `this.el`
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    /**
     * Handles click events on the tab.
     * Primarily prevents event propagation if the tab is disabled.
     * The actual tab selection logic (setting `selected` true/false) is expected to be handled
     * by a parent component (e.g., a tab group) that responds to user interaction or other events.
     * @param e The mouse event.
     */
    private _clickHandler(e: MouseEvent) {
        if (this.disabled) {
            e.stopImmediatePropagation();
            // If you also want to prevent any default browser behavior (e.g., if it's inside a link or button)
            // e.preventDefault();
        }
    }

    render() {
        const classes = {
            'rux-tab': true,
            'rux-tab--selected': this.selected,
            'rux-tab--small': this.small,
            'rux-tab--large': !this.small, // If 'small' is false, it's considered 'large'
            'rux-tab--disabled': this.disabled,
        };

        return html`
            <div
                part="container"
                class=${classMap(classes)}
                role="tab"
                tabindex=${this.disabled || !this.selected ? '-1' : '0'}
                @click=${this._clickHandler}
            >
                <slot></slot>
                <slot name="actions"></slot>
            </div>
        `;
    }
}

// Define the custom element if it hasn't been defined yet.
// This is typically done at the end of the component file or in an entry point.
if (!customElements.get('rux-tab')) {
    customElements.define('rux-tab', RuxTab);
}

// Augment the global HTMLElementTagNameMap for TypeScript for better IDE support
declare global {
    interface HTMLElementTagNameMap {
        'rux-tab': RuxTab;
    }
}
