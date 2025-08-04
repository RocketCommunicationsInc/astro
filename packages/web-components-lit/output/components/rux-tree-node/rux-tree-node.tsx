To convert the Stencil.js `rux-tree-node` component to LitElement, we'll address the following key areas:

1.  **Imports**: Replace Stencil decorators and `h` with Lit's `customElement`, `property`, `state`, `html`, `css`, `classMap`, and `eventOptions`.
2.  **Component Definition**: `Component` becomes `@customElement`. `styleUrl` content moves to a `static styles` block using `css` tagged template literal. `shadow: true` is default in LitElement.
3.  **Properties (`@Prop`)**: Convert to `@property` decorator. `mutable: true` and `reflect: true` properties will just be `reflect: true`.
4.  **State (`@State`)**: Convert to `@state` decorator.
5.  **Element Reference (`@Element`)**: In LitElement, `this` inside the component class refers to the host element, so `this.el` is no longer needed. Queries for elements within the shadow DOM use `this.shadowRoot.querySelector` or `this.shadowRoot.querySelectorAll`. Queries for light DOM children use `this.querySelector` or `this.querySelectorAll`.
6.  **Events (`@Event`, `EventEmitter`)**: Stencil's `EventEmitter` is replaced by `this.dispatchEvent(new CustomEvent(...))`. Event dispatching logic previously in `@Watch` will be moved to the `updated` lifecycle hook.
7.  **Watchers (`@Watch`)**: Replaced by the `updated(changedProperties)` lifecycle method.
8.  **Listeners (`@Listen`)**: Host listeners are added in `connectedCallback` and removed in `disconnectedCallback`. Event listeners on internal template elements are added directly in the `html` template using `@event` syntax. `passive: false` from `eventOptions` is used for keydown.
9.  **Methods (`@Method`)**: Public methods are simply public class methods in LitElement.
10. **Lifecycle Hooks**: `connectedCallback`, `firstUpdated`, and `updated` replace Stencil's `connectedCallback` and `componentWillLoad`.
11. **JSX/TSX (`h`) to `html`**: The render method is converted from Stencil's `h` syntax to Lit's `html` tagged template literals. Conditional classes use `classMap` from `lit/directives/class-map.js`.
12. **`hasSlot` Utility**: This utility is re-implemented as a private method within the LitElement component, leveraging `this.shadowRoot.querySelector('slot').assignedNodes()`.
13. **ARIA Attributes**: `aria-expanded` and `aria-selected` attributes, which were on `Host` in Stencil, are managed explicitly on the host element (`this`) within the `updated` lifecycle hook.

**Note on Styles**: The original `rux-tree-node.scss` file content is not provided. A basic CSS structure is added in `static styles` based on typical tree node appearance to ensure the component is functional, but you should replace it with the actual compiled CSS from your SCSS file.

```typescript
/* eslint react/jsx-no-bind: 0 */ // This rule is for React and can be safely removed.

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { eventOptions } from 'lit/decorators.js';

let id = 0;

// Type declarations for global interfaces to improve TypeScript support for custom elements.
// This allows TypeScript to recognize properties and methods when interacting with RuxTreeNode instances.
declare global {
    interface HTMLRuxTreeNodeElement extends HTMLElement {
        expanded: boolean;
        selected: boolean;
        setExpanded(value: boolean): Promise<void>;
        setSelected(value: boolean): Promise<void>;
        // Include other public properties or methods that might be accessed externally
    }

    interface HTMLElementTagNameMap {
        'rux-tree-node': HTMLRuxTreeNodeElement;
    }

    // Define for the parent tree element, used in _getVisibleNodes
    interface HTMLRuxTreeElement extends HTMLElement {
        querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    }
}

/**
 * @slot (default) - The parent node content
 * @slot prefix - Renders content before the default slot
 * @slot suffix - Renders content after the default slot
 * @slot node - Renders a child node within the current node
 * @part text - The area between the prefix and suffix slots
 * @part indicator - The opened/closed indicator
 * @part node - The individual tree node
 */
@customElement('rux-tree-node')
export class RuxTreeNode extends LitElement {
    // Defines the styles for the component's Shadow DOM
    static styles = css`
        :host {
            display: block;
            contain: content; /* Optimizes rendering performance */
        }

        .tree-node {
            display: flex;
            flex-direction: column;
        }

        .parent {
            display: flex;
            align-items: center;
            cursor: pointer;
            outline: none; /* Focus is managed programmatically; consider using :focus-visible for accessibility */
            padding: 4px 0; /* Example padding */
        }

        .arrow {
            /* Basic arrow styling; replace with actual icon or SVG if needed */
            display: inline-block;
            width: 16px; /* Adjust size as needed */
            height: 16px;
            cursor: pointer;
            flex-shrink: 0;
            margin-right: 4px;
            transition: transform 0.2s ease-in-out;
            /* Simple triangle representation */
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid currentColor;
        }

        :host([expanded]) .arrow {
            transform: rotate(90deg);
        }

        .children {
            margin-left: 20px; /* Indent children */
            display: none; /* Hidden by default when collapsed */
            overflow: hidden; /* For smooth transitions if height/max-height animations are added */
        }

        :host([expanded]) .children {
            display: block;
        }

        :host([selected]) .parent {
            background-color: var(--rux-tree-node-selected-bg, #e0e0e0); /* Example selected background */
        }

        /* Styling for parts */
        .parent[part="node"] {
            /* Custom styles for the entire node clickable area */
        }
        .arrow[part="indicator"] {
            /* Custom styles for the expand/collapse indicator */
        }
        span[part="text"] {
            flex-grow: 1; /* Allows the text slot to take available space */
        }

        /* Slot styling helpers to ensure alignment and spacing for slotted content */
        .prefix, .suffix {
            display: flex;
            align-items: center;
        }
        .prefix ::slotted(*) {
            margin-right: 4px;
        }
        .suffix ::slotted(*) {
            margin-left: 4px;
        }
    `;

    // Unique ID for this component instance, used in events
    private componentId = `node-${++id}`;

    // Internal state properties that trigger re-renders
    @state()
    private children: Array<HTMLRuxTreeNodeElement> = [];
    @state()
    private hasPrefix: boolean = false;
    @state()
    private hasSuffix: boolean = false;

    /**
     * Controls the expanded state of the tree node.
     * Reflects to an attribute `expanded` on the host element.
     */
    @property({ type: Boolean, reflect: true })
    expanded = false;

    /**
     * Controls the selected state of the tree node.
     * Reflects to an attribute `selected` on the host element.
     */
    @property({ type: Boolean, reflect: true })
    selected = false;

    /**
     * Lifecycle callback: Invoked when the component is connected to the DOM.
     * Used for adding host listeners and setting static ARIA roles.
     */
    connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener('keydown', this._handleKeyDown, { passive: false });
        // Set the static ARIA role for accessibility
        this.setAttribute('role', 'treeitem');
    }

    /**
     * Lifecycle callback: Invoked when the component is disconnected from the DOM.
     * Used for cleaning up event listeners.
     */
    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._handleKeyDown);
    }

    /**
     * Lifecycle callback: Invoked once after the component's first render.
     * Ideal for initial DOM-dependent setup.
     */
    protected firstUpdated(): void {
        this._handleSlotChange(); // Populate `children` state based on initial slots
        this._checkForPrefixAndSuffix(); // Determine if prefix/suffix slots have content
        // Set initial ARIA attributes on the host element
        this.setAttribute('aria-expanded', String(this.expanded));
        this.setAttribute('aria-selected', String(this.selected));
    }

    /**
     * Lifecycle callback: Invoked after a component's update (property change, state change, etc.) has been applied to the DOM.
     * Used to react to property changes, dispatch events, and update ARIA attributes.
     */
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('expanded')) {
            const oldValue = changedProperties.get('expanded') as boolean;
            this.setAttribute('aria-expanded', String(this.expanded)); // Update host attribute for accessibility
            if (this.expanded !== oldValue) { // Dispatch event only if the value has actually changed
                const eventName = this.expanded ? 'ruxtreenodeexpanded' : 'ruxtreenodecollapsed';
                this.dispatchEvent(new CustomEvent(eventName, {
                    detail: this.componentId,
                    bubbles: true,
                    composed: true, // Allows event to cross shadow DOM boundaries
                }));
            }
        }

        if (changedProperties.has('selected')) {
            const oldValue = changedProperties.get('selected') as boolean;
            this.setAttribute('aria-selected', String(this.selected)); // Update host attribute for accessibility
            if (this.selected !== oldValue) { // Dispatch event only if the value has actually changed
                if (this.selected) {
                    this.dispatchEvent(new CustomEvent('ruxtreenodeselected', {
                        detail: this.componentId,
                        bubbles: true,
                        composed: true,
                    }));
                }
            }
        }
    }

    // Getter to quickly check if the node has children
    get hasChildren(): boolean {
        return this.children.length > 0;
    }

    /**
     * Private helper method to determine if a specific slot (or the default slot) has content.
     * @param slotName - The name of the slot to check. If undefined, checks the default slot.
     */
    private _hasSlotContent(slotName?: string): boolean {
        let slotEl: HTMLSlotElement | null;
        if (slotName) {
            slotEl = this.shadowRoot!.querySelector(`slot[name="${slotName}"]`);
        } else {
            slotEl = this.shadowRoot!.querySelector('slot:not([name])');
        }
        return slotEl ? slotEl.assignedNodes({ flatten: true }).length > 0 : false;
    }

    /**
     * Updates the `hasPrefix` and `hasSuffix` state properties based on slot content.
     */
    private _checkForPrefixAndSuffix(): void {
        this.hasPrefix = this._hasSlotContent('prefix');
        this.hasSuffix = this._hasSlotContent('suffix');
    }

    /**
     * Public method to programmatically set the expanded state.
     * Direct assignment to `this.expanded` will trigger `updated` hook for side effects.
     * @param value - `true` to expand, `false` to collapse.
     */
    async setExpanded(value: boolean): Promise<void> {
        this.expanded = value;
    }

    /**
     * Public method to programmatically set the selected state.
     * Direct assignment to `this.selected` will trigger `updated` hook for side effects.
     * @param value - `true` to select, `false` to deselect.
     */
    async setSelected(value: boolean): Promise<void> {
        this.selected = value;
    }

    /**
     * Handles `slotchange` events for the default and 'node' slots.
     * Updates the `children` state and recalculates ARIA levels for children.
     */
    private _handleSlotChange(): void {
        // Query for elements with `slot="node"` in the component's light DOM.
        const children = Array.from(
            this.querySelectorAll(`[slot="node"]`)
        ) as HTMLRuxTreeNodeElement[];
        this.children = children;
        this._setAriaLevel();
    }

    /**
     * Sets the `aria-level` attribute for child `rux-tree-node` elements based on the parent's level.
     * This method assumes the parent `rux-tree` or another mechanism sets the initial `aria-level` for root nodes.
     */
    private _setAriaLevel(): void {
        const level = this.getAttribute('aria-level');
        if (level) {
            this.children.forEach((child) => {
                child.setAttribute('aria-level', `${+level + 1}`);
            });
        }
    }

    /**
     * Handles click events on the expand/collapse arrow icon.
     * Stops propagation to prevent the click from also triggering the node's selection handler.
     * @param e - The mouse event.
     */
    private _handleArrowClick(e: MouseEvent): void {
        e.stopPropagation();
        this.expanded = !this.expanded; // Toggles expanded state
    }

    /**
     * Handles click events on the main tree node content area (excluding the arrow).
     * Toggles the selected state and stops event propagation.
     * @param e - The mouse event.
     */
    private _handleTreeNodeClick(e: MouseEvent): void {
        // Stop propagation to prevent clicks on this node from affecting parent nodes in the tree
        e.stopPropagation();
        this.selected = !this.selected; // Toggles selected state
    }

    /**
     * Expands the current node if it has children and is not already expanded.
     */
    private _expandNextNode(): void {
        if (!this.expanded && this.hasChildren) {
            this.setExpanded(true);
        }
    }

    /**
     * Focuses on the `.parent` element within the shadow DOM of a target `rux-tree-node`.
     * This ensures the node receives keyboard focus correctly.
     * @param el - The `HTMLRuxTreeNodeElement` to focus.
     */
    private _focusItem(el: HTMLRuxTreeNodeElement): void {
        const parent = el?.shadowRoot?.querySelector('.parent') as HTMLElement;
        if (parent) {
            parent.focus();
        }
    }

    /**
     * Collapses the current node if expanded, or focuses on its parent node if already collapsed.
     */
    private _collapseParent(): void {
        if (this.expanded) {
            this.setExpanded(false);
        } else if (this.parentElement) {
            // Find the closest ancestor that is also a `rux-tree-node` (identified by role='treeitem')
            const parentTreeItemNode = this.parentElement.closest("[role='treeitem']") as HTMLRuxTreeNodeElement | null;
            if (parentTreeItemNode) {
                this._focusItem(parentTreeItemNode);
            }
        }
    }

    /**
     * Handles keyboard navigation (ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Enter) for tree traversal.
     * Uses `eventOptions` to allow `preventDefault()`.
     * @param ev - The keyboard event.
     */
    @eventOptions({ passive: false })
    private _handleKeyDown(ev: KeyboardEvent): void {
        // Ensure the event originated from the `tabindex="0"` element within this component's shadow DOM.
        if (ev.target === this.shadowRoot!.querySelector('.parent')) {
            switch (ev.key) {
                case 'ArrowUp':
                    ev.preventDefault();
                    this._focusNext(-1);
                    break;
                case 'ArrowRight':
                    ev.preventDefault();
                    this._expandNextNode();
                    break;
                case 'ArrowDown':
                    ev.preventDefault();
                    this._focusNext(1);
                    break;
                case 'ArrowLeft':
                    ev.preventDefault();
                    this._collapseParent();
                    break;
                case 'Enter':
                    ev.preventDefault();
                    this.setSelected(true); // Selecting on Enter key press
                    break;
            }
        }
    }

    /**
     * Retrieves all currently visible `rux-tree-node` elements within the same `rux-tree` hierarchy.
     * "Visible" is determined by `offsetParent !== null`.
     */
    private _getVisibleNodes(): HTMLRuxTreeNodeElement[] {
        // Find the root `rux-tree` element for the current tree structure.
        const rootTree = this.closest("[role='tree']") as HTMLRuxTreeElement;
        if (!rootTree) {
            console.warn('rux-tree-node must be a descendant of an element with role="tree"');
            return [];
        }
        // Query all `rux-tree-node` elements within the entire tree's light DOM.
        const nodes = Array.from(rootTree.querySelectorAll('rux-tree-node'));
        // Filter out nodes that are not currently rendered/visible (e.g., children of collapsed nodes).
        return nodes.filter(
            (node: HTMLRuxTreeNodeElement) => node.offsetParent !== null
        );
    }

    /**
     * Finds and focuses the next or previous visible tree node in the specified direction, skipping disabled nodes.
     * @param direction - `-1` for previous, `1` for next.
     */
    private _focusNext(direction: number): void {
        const visibleNodes = this._getVisibleNodes();
        const currentIndex: number = visibleNodes.indexOf(this); // `this` is the current focused node
        if (currentIndex !== -1) {
            let nextElement: HTMLRuxTreeNodeElement | undefined = visibleNodes[currentIndex + direction];

            // Loop to skip any disabled nodes in the path
            while (nextElement && nextElement.hasAttribute('disabled')) {
                const nextIndex = visibleNodes.indexOf(nextElement) + direction;
                if (nextIndex < 0 || nextIndex >= visibleNodes.length) {
                    nextElement = undefined; // No more elements in this direction
                    break;
                }
                nextElement = visibleNodes[nextIndex];
            }

            if (nextElement) {
                this._focusItem(nextElement);
            }
        }
    }

    /**
     * LitElement's render method, which defines the component's shadow DOM structure.
     */
    render() {
        // Destructure properties and methods for easier access in the template
        const {
            _handleArrowClick,
            _handleSlotChange,
            _handleTreeNodeClick,
            componentId,
            expanded,
            hasChildren,
            hasPrefix,
            hasSuffix,
        } = this;

        return html`
            <div
                id=${componentId}
                class=${classMap({
                    'tree-node': true,
                    'tree-node--expanded': expanded,
                    'tree-node--has-children': hasChildren,
                })}
            >
                <div class="parent" tabindex="0" part="node" @click=${_handleTreeNodeClick}>
                    ${hasChildren
                        ? html`
                              <i
                                  @click=${_handleArrowClick}
                                  part="indicator"
                                  class="arrow"
                              ></i>
                          `
                        : ''}
                    <span class=${classMap({ prefix: hasPrefix })}>
                        <slot
                            name="prefix"
                            @slotchange=${this._checkForPrefixAndSuffix}
                        ></slot>
                    </span>
                    <span part="text">
                        <slot @slotchange=${_handleSlotChange}></slot>
                    </span>
                    <span class=${classMap({ suffix: hasSuffix })}>
                        <slot
                            name="suffix"
                            @slotchange=${this._checkForPrefixAndSuffix}
                        ></slot>
                    </span>
                </div>
                <div
                    class="children"
                    role=${hasChildren ? 'group' : ''}
                >
                    <slot name="node" @slotchange=${_handleSlotChange}></slot>
                </div>
            </div>
        `;
    }
}
```