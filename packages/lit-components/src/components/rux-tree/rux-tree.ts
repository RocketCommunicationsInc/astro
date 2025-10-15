import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import style from './rux-tree.scss?inline'
// Assuming HTMLRuxTreeNodeElement is the type for the child nodes
declare interface HTMLRuxTreeNodeElement extends HTMLElement {
    selected: boolean;
    // Assuming the element structure from _handleNodeSelected for querySelector
    shadowRoot: ShadowRoot | null;
}

// Assume styles are imported or defined here
// import styles from './rux-tree.scss?inline';

/**
 * RuxTree Component (LitElement Conversion)
 *
 * @slot (default) - the nodes of the tree.
 */
@customElement('rux-tree')
export class RuxTree extends LitElement {
    // Query for the default, unnamed slot element
    @query('slot:not([name])')
    private defaultSlot!: HTMLSlotElement;

    // Define the component's styles
    static styles = css`
        ${unsafeCSS(style)}
    `;

    // --- Lifecycle ---

    firstUpdated() {
        // Initial setup after the component first renders
        this.defaultSlot?.addEventListener(
            'slotchange',
            this._handleSlotChange
        );
        // Run initial slot processing
        this._handleSlotChange();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        // Remove the slotchange listener
        this.defaultSlot?.removeEventListener(
            'slotchange',
            this._handleSlotChange
        );

        // Remove the ruxtreenodeselected listeners from all assigned nodes
        this._getAssignedNodes().forEach((el) => {
            el.removeEventListener(
                'ruxtreenodeselected',
                this._handleNodeSelected as EventListener
            );
        });
    }

    // --- Private Utility ---

    /** Gets the assigned rux-tree-node elements from the default slot. */
    private _getAssignedNodes(): HTMLRuxTreeNodeElement[] {
        if (!this.defaultSlot) return [];
        return this.defaultSlot.assignedElements({ flatten: true }) as HTMLRuxTreeNodeElement[];
    }

    // --- Event Handlers ---

    private _handleSlotChange = () => {
        // Remove old listeners and set attributes on new or re-assigned elements
        this._getAssignedNodes().forEach((el) => {
            // Set aria-level
            el.setAttribute('aria-level', '1');

            // Add new listeners
            el.addEventListener(
                'ruxtreenodeselected',
                this._handleNodeSelected as EventListener
            );
        });
    };

    /** Handles the selection event from a rux-tree-node, enforcing single selection. */
    private _handleNodeSelected = (e: CustomEvent<string>) => {
        // Stop event propagation to prevent multiple tree components from unselecting
        e.stopPropagation();

        // Query all relevant nodes globally (mimicking the original)
        // Note: Using `document.querySelectorAll` in web components can sometimes be problematic
        // but is necessary here to mirror the Stencil component's global unselection logic.
        const allNodes = document.querySelectorAll<HTMLRuxTreeNodeElement>('rux-tree-node');
        
        const previousSelectedNode = Array.from(allNodes).find((node) => {
            // Find a node that is currently selected AND is NOT the node that just emitted the event
            // The original logic checks the shadow DOM ID, which is a strong dependency.
            const isDifferentNode = node.shadowRoot?.querySelector('.tree-node')?.id !== e.detail;
            return node.selected && isDifferentNode;
        });

        if (previousSelectedNode) {
            previousSelectedNode.selected = false;
        }
    };

    // --- Render ---

    render() {
        // The host element must have role="tree"
        this.setAttribute('role', 'tree');
        this.classList.add('rux-tree');

        // The inner div with the ref is no longer needed. We just need the slot.
        return html`
            <slot @slotchange=${this._handleSlotChange}></slot>
        `;
    }
}
