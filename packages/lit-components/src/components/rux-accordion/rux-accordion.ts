
import { LitElement, html, css, type PropertyValueMap, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './rux-accordion.scss?inline'

// Define a type for rux-accordion-item to ensure type safety when querying.
// We assume it exposes an 'expanded' attribute and potentially a 'expanded' property.
interface RuxAccordionItem extends HTMLElement {
    expanded: boolean; // Assuming it has a JS property for 'expanded' state
    // Standard DOM methods for attributes are used:
    hasAttribute(name: string): boolean;
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
}

@customElement('rux-accordion')
export class RuxAccordion extends LitElement {
    /**
     * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
     */
    @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    /**
     * If true, only one rux-accordion-item can be open at a time.
     * The `attribute: 'disallow-multiple'` ensures it maps to the HTML attribute `disallow-multiple`.
     */
    @property({ type: Boolean, reflect: true, attribute: 'disallow-multiple' })
    disallowMultiple: boolean = false;

    static styles = css`
        ${unsafeCSS(style)}
    `;

    connectedCallback(): void {
        super.connectedCallback();
        // Attach the event listener to the host element. Custom events like 'ruxexpanded'
        // typically bubble up, allowing the parent to catch them.
        this.addEventListener('ruxexpanded', this._handleItemToggle as EventListener);
        // Initialize the tabindex for the host element based on the disabled state.
        this.tabIndex = this.disabled ? -1 : 0;
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        // Clean up the event listener when the component is removed from the DOM.
        this.removeEventListener('ruxexpanded', this._handleItemToggle as EventListener);
    }

    // Lit's updated lifecycle method is called after the component's properties have been set
    // and the component has rendered.
    updated(changedProperties: PropertyValueMap<any>): void {
        super.updated(changedProperties);
        // Update the host element's tabindex whenever the 'disabled' property changes.
        if (changedProperties.has('disabled')) {
            this.tabIndex = this.disabled ? -1 : 0;
        }
    }

    private _handleItemToggle(event: CustomEvent): void {
        // Stop the event from bubbling up further if we are taking control.
        event.stopPropagation();

        const targetItem = event.target as RuxAccordionItem;

        // Ensure the event originated from an actual rux-accordion-item
        if (targetItem.tagName !== 'RUX-ACCORDION-ITEM') {
            return;
        }

        if (this.disallowMultiple) {
            // event.preventDefault() in Stencil indicates that the event is cancelable
            // and its default action (e.g., the item expanding itself) can be stopped.
            // We apply it here to fully control the expansion logic from the parent.
            if (event.cancelable) {
                event.preventDefault();
            }

            // Get all direct `rux-accordion-item` children of this `rux-accordion` component.
            // `this.querySelectorAll` correctly queries the light DOM children.
            const items = Array.from(this.querySelectorAll('rux-accordion-item')) as RuxAccordionItem[];

            // Determine the expanded state of the `targetItem` *before* this toggle action.
            const wasTargetItemExpanded = targetItem.hasAttribute('expanded');

            // Iterate over all items and collapse any that are currently expanded.
            // This ensures only one item can be open at a time.
            items.forEach((item: RuxAccordionItem) => {
                if (item.hasAttribute('expanded')) {
                    item.removeAttribute('expanded');
                    // If 'rux-accordion-item' also has a JS property 'expanded', sync it.
                    // This assumes the child component reacts to this property or attribute change.
                    item.expanded = false;
                }
            });

            // If the `targetItem` was not expanded (i.e., it was clicked to open),
            // then explicitly expand it now.
            // If it *was* already expanded (i.e., clicked to close), it remains closed
            // because its `expanded` attribute was removed in the loop above and not re-added here.
            if (!wasTargetItemExpanded) {
                targetItem.setAttribute('expanded', '');
                targetItem.expanded = true;
            }
        }
    }

    render() {
        // The <slot> element renders the light DOM children (e.g., rux-accordion-item elements).
        // Lit automatically renders this within the component's shadow DOM.
        return html`
            <slot></slot>
        `;
    }
}
