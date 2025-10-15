import { LitElement, css, html, unsafeCSS } from 'lit';
import {
    autoPlacement,
    autoUpdate,
    computePosition,
    flip,
    offset,
} from '@floating-ui/dom';
import { customElement, property, query, state } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';
import style from './rux-tooltip.scss?inline';

// Assuming ExtendedPlacement is defined elsewhere, or you define it here.
type ExtendedPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'auto';

// Simple utility function to check for slot content, similar to Stencil's hasSlot
function hasSlot(element: HTMLElement, name?: string): boolean {
    const slot = element.shadowRoot?.querySelector(
        name ? `slot[name="${name}"]` : 'slot:not([name])'
    ) as HTMLSlotElement | null;
    return !!slot && slot.assignedNodes().length > 0;
}

/**
 * @slot (default) - The trigger for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @part trigger-container - the container of the tooltip trigger
 */
@customElement('rux-tooltip')
export class RuxTooltip extends LitElement {
    // Refs for DOM elements
    @query('.rux-tooltip__trigger')
    private _triggerElement!: HTMLSpanElement; // The span wrapping the slot

    @query('.tooltip')
    private _contentElement!: HTMLSpanElement; // The tooltip content span

    private _positionerCleanup: ReturnType<typeof autoUpdate> | undefined;

    @state()
    currentSlotted: any; // Kept for compatibility, though not directly used in the Stencil snippet's logic

    @state()
    hasTriggerSlot = false; // Indicates if the default slot has content

    @state()
    delegatedFocus = false; // Tracks if the slotted element is focusable (not fully implemented in Stencil code)

    /**
     *  The tooltip's content.
     */
    @property({ type: String, reflect: true })
    message: string = '';

    /**
     *  Whether or not the tooltip is open
     */
    @property({ type: Boolean, reflect: true })
    open: boolean = false;

    /**
     *  How long it takes the tooltip to appear in milliseconds, default = 800, Overrides the css custom property --delay.
     */
    @property({ type: Number, reflect: true })
    delay: number = 800;

    /**
     *  Pixel offset from trigger, default = 8
     */
    @property({ type: Number })
    offset: number = 8;

    /**
     * The placement of the tooltip relative to its slotted trigger element. Defaults to auto.
     */
    @property({ type: String, reflect: true })
    placement: ExtendedPlacement = 'auto';

    /**
     * Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false.
     */
    @property({ type: Boolean, reflect: true })
    disableAutoUpdate: boolean = false;

    /**
     * The position strategy of the tooltip, either absolute or fixed.
     */
    @property({ type: String })
    strategy: 'absolute' | 'fixed' = 'absolute';

    // Static styles for the component
    static styles = css`
        ${unsafeCSS(style)}
    `;

    connectedCallback() {
        super.connectedCallback();
        // Stencil's componentWillLoad/connectedCallback logic
        this._handleSlotChange();
        // Stencil's @Listen('keydown', { target: 'document' })
        document.addEventListener('keydown', this._handleKeypress);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up document-level event listener
        document.removeEventListener('keydown', this._handleKeypress);
        // Clean up Floating UI positioner
        this._stopPositioner();
    }

    firstUpdated() {
        // Stencil's componentDidLoad logic
        this._applyDelayStyle(); // Initialize custom property for delay
        this._handleOpenState(); // Initialize open state
    }

    // LitElement's `updated` lifecycle hook replaces Stencil's `@Watch` decorators
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('delay')) {
            this._applyDelayStyle();
        }
        if (changedProperties.has('open')) {
            this._handleOpenState();
        }
        if (changedProperties.has('placement')) {
            // Re-start positioner if placement changes while open
            if (this.open) {
                this._startPositioner();
            }
        }
    }

    private _applyDelayStyle() {
        if (!isNaN(Number(this.delay))) {
            this.style.setProperty('--delay', `${Number(this.delay)}ms`);
        }
    }

    private _handleOpenState() {
        if (!this._contentElement || !this._triggerElement) {
            // Elements not ready yet, defer
            return;
        }

        if (this.open) {
            // Ensure display is not 'none' for Floating UI calculations, then update position
            this._contentElement.style.display = 'block';
            this._startPositioner();
            this.dispatchEvent(
                new CustomEvent('ruxtooltipopened', {
                    bubbles: true,
                    composed: true,
                })
            );
        } else {
            // Stop positioning and hide the tooltip
            this._stopPositioner();
            this._contentElement.style.display = 'none'; // Explicitly hide when closed
            this.dispatchEvent(
                new CustomEvent('ruxtooltipclosed', {
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    // Use an arrow function to maintain `this` context when used as an event listener
    private _handleKeypress = (e: KeyboardEvent) => {
        if (e.key !== 'Escape') return;

        // Get the actual element acting as the Floating UI reference
        const triggerReferenceElement = this.getFloatingUiReferenceElement();
        if (!triggerReferenceElement) return;

        const hovered =
            this._triggerElement.matches(':hover') ||
            triggerReferenceElement.matches(':hover');
        const focused =
            this._triggerElement.contains(document.activeElement) ||
            triggerReferenceElement.contains(document.activeElement);

        if (!hovered && !focused) return;
        if (this.open) {
            this.hide();
        }
    };

    /**
     * Opens the tooltip and returns true.
     */
    public async show(): Promise<boolean> {
        if (!this.open) {
            this.open = true;
        }
        return this.open;
    }

    /**
     * Closes the tooltip and returns false.
     */
    public async hide(): Promise<boolean> {
        if (this.open) {
            this.open = false;
        }
        return !this.open;
    }

    private _position() {
        const referenceElement = this.getFloatingUiReferenceElement();

        if (!this.open || !referenceElement || !this._contentElement) {
            return;
        }

        const middleware = [offset(this.offset)];

        if (!this.disableAutoUpdate) {
            // Apply autoPlacement or flip only if autoUpdate is not disabled
            if (this.placement === 'auto') {
                middleware.push(autoPlacement({ alignment: 'start' }));
            } else {
                middleware.push(flip());
            }
        } else if (this.placement === 'auto') {
            // If autoUpdate is disabled but placement is auto, still use autoPlacement
            middleware.push(autoPlacement({ alignment: 'start' }));
        }

        computePosition(referenceElement, this._contentElement, {
            placement: this.placement,
            strategy: this.strategy,
            middleware: middleware,
        }).then(({ x, y }) => {
            Object.assign(this._contentElement.style, {
                left: `${x}px`,
                top: `${y}px`,
                position: `${this.strategy}`,
            });
        });
    }

    private _startPositioner() {
        this._stopPositioner(); // Ensure previous positioner is cleaned up
        const referenceElement = this.getFloatingUiReferenceElement();

        if (this.open && referenceElement && this._contentElement) {
            this._position(); // Perform initial positioning
            if (!this.disableAutoUpdate) {
                // Only enable autoUpdate if it's not disabled by prop
                this._positionerCleanup = autoUpdate(
                    referenceElement,
                    this._contentElement,
                    this._position.bind(this)
                );
            }
        }
    }

    private _stopPositioner() {
        if (this._positionerCleanup) {
            this._positionerCleanup();
            this._positionerCleanup = undefined;
        }
    }

    // This method replaces Stencil's `get triggerSlot()`
    // It returns the actual element that Floating UI should reference.
    private getFloatingUiReferenceElement(): HTMLElement | null {
        const slot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement | null;
        if (slot) {
            const assignedNodes = slot.assignedElements({ flatten: true });
            // If there's content slotted, use the first assigned element as the reference
            if (assignedNodes.length > 0) {
                return assignedNodes[0] as HTMLElement;
            }
        }
        // If no content is slotted, use the default trigger wrapper span itself as the reference
        return this._triggerElement || null;
    }

    // Use arrow functions for event handlers to automatically bind 'this'
    private _handleSlotChange = () => {
        // Update hasTriggerSlot state based on whether the default slot has content
        this.hasTriggerSlot = hasSlot(this);
    };

    private _handleTooltipShow = () => {
        if (this.open) return;
        this.open = true;
    };

    private _handleTooltipHide = () => {
        if (!this.open) return;
        this.open = false;
    };

    render() {
        return html`
            <span
                @mouseenter=${this._handleTooltipShow}
                @mouseleave=${this._handleTooltipHide}
                @focusin=${this._handleTooltipShow}
                @focusout=${this._handleTooltipHide}
            >
                <span
                    class="rux-tooltip__trigger"
                    part="trigger-container"
                    aria-describedby="tooltip"
                >
                    <!-- Default slot for the tooltip trigger content -->
                    <slot @slotchange=${this._handleSlotChange}></slot>
                </span>
                <span
                    aria-hidden=${this.open ? 'false' : 'true'}
                    class=${classMap({
                        tooltip: true,
                        // 'hidden' class handles initial display: none and transition out
                        // :host([open]) handles display: block and transition in
                    })}
                    id="tooltip"
                    role="tooltip"
                    part="container"
                >
                    ${this.message}
                </span>
            </span>
        `;
    }
}
