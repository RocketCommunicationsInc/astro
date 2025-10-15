
import { LitElement, html, css, type PropertyValues, unsafeCSS } from 'lit';
import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import {
    computePosition,
    arrow,
    offset,
    flip,
    autoUpdate,
    autoPlacement,
    type Placement,
} from '@floating-ui/dom';
import type { ExtendedPlacement } from '../../common/commonTypes.module';
import style from './rux-pop-up.scss?inline'

/**
 * @slot (default) - The contents for rux-pop-up
 * @slot trigger - The trigger element for rux-pop-up
 *
 * @part container - the container of rux-pop-up
 * @part trigger-container - the container of the pop-up trigger
 * @part popup-content - the content that is shown when rux-pop-up is opened
 * @part arrow - the arrow pointing to the trigger of rux-pop-up
 */
@customElement('rux-pop-up')
export class RuxPopUp extends LitElement {
    // --- Internal Element References (Shadow DOM) ---
    // Use @query to get references to elements within the component's shadow DOM.
    @query('.rux-popup__trigger')
    private _triggerContainer!: HTMLDivElement;

    @query('.rux-popup__content')
    private _contentElement!: HTMLDivElement;

    @query('.rux-popup-arrow')
    private _arrowEl!: HTMLDivElement;

    // --- Slotted Element References (Light DOM) ---
    // Use @queryAssignedElements to get references to elements slotted into specific slots.
    // `flatten: true` gets the actual assigned elements, not just the <slot> element itself.
    @queryAssignedElements({ slot: 'trigger', flatten: true })
    private _assignedTriggerElements!: HTMLElement[];

    @queryAssignedElements({ flatten: true }) // Default slot
    private _assignedContentElements!: HTMLElement[];

    // --- Private Class Members ---
    private _positionerCleanup: ReturnType<typeof autoUpdate> | undefined;
    private _assignedOutsideClickEvent: boolean = false;

    // --- Component Properties (@Prop equivalents) ---
    // Use @property to expose component properties.
    // `reflect: true` keeps the attribute and property in sync.
    // `attribute` specifies the attribute name if it differs from the property name (kebab-case by default).
    @property({ type: Boolean, reflect: true }) open = false;

    @property({ type: String }) placement: ExtendedPlacement = 'auto';

    @property({ type: Boolean, reflect: true, attribute: 'disable-auto-update' }) disableAutoUpdate: boolean = false;

    @property({ type: Boolean, reflect: true, attribute: 'enable-animation-frame' }) enableAnimationFrame: boolean = false;

    @property({ type: String }) strategy: 'absolute' | 'fixed' = 'absolute';

    @property({ type: Boolean, attribute: 'close-on-select' }) closeOnSelect: boolean = false;

    // --- Component State (@State equivalent) ---
    // Use @state for internal component state that triggers re-renders.
    @state() arrowPosition?: string;

    // --- Static Styles ---
    // Define component styles using the `css` tagged template literal.
    // You should copy the content of your `rux-pop-up.scss` here, converted to plain CSS.
    static styles = css`${unsafeCSS(style)}`;

    // --- Lifecycle Callbacks ---
    connectedCallback() {
        super.connectedCallback();
        // Bind event handler methods to `this` for correct context when used as listeners
        this._handleOutsideClick = this._handleOutsideClick.bind(this);
        this._position = this._position.bind(this);
        // Listen for custom events that bubble up to the host element
        this.addEventListener('ruxmenuselected', this._handleSelectionEvent as EventListener);
    }

    // Called once after the first render. Ideal for initial DOM setup that depends on elements being present.
    firstUpdated() {
        if (this.open) {
            this._startPositioner();
            if (!this._assignedOutsideClickEvent) {
                window.addEventListener('mousedown', this._handleOutsideClick);
                this._assignedOutsideClickEvent = true;
            }
        }
        this._setTriggerTabIndex(); // Set tabindex initially
    }

    // Called after every render, including the first. Use `changedProperties` to react to specific property changes.
    updated(changedProperties: PropertyValues) {
        if (changedProperties.has('open')) {
            this._handleOpenChange();
        }
        // If positioning-related properties change while open, restart positioner.
        if (this.open && (
            changedProperties.has('placement') ||
            changedProperties.has('strategy') ||
            changedProperties.has('disableAutoUpdate') ||
            changedProperties.has('enableAnimationFrame')
        )) {
            this._startPositioner();
        }
    }

    // Called when the component is removed from the DOM. Important for cleanup.
    disconnectedCallback() {
        super.disconnectedCallback();
        this._stopPositioner(); // Stop Floating UI auto-updates
        if (this._assignedOutsideClickEvent) {
            window.removeEventListener('mousedown', this._handleOutsideClick);
            this._assignedOutsideClickEvent = false;
        }
        this.removeEventListener('ruxmenuselected', this._handleSelectionEvent as EventListener);
    }

    // --- Internal Logic Methods ---

    // Handles changes to the `open` property
    private _handleOpenChange() {
        if (this.open) {
            this._contentElement.style.display = 'block'; // Make content visible before positioning
            this._startPositioner();
            // Dispatch a custom event for consumers
            this.dispatchEvent(new CustomEvent('ruxpopupopened', { bubbles: true, composed: true }));
            if (!this._assignedOutsideClickEvent) {
                window.addEventListener('mousedown', this._handleOutsideClick);
                this._assignedOutsideClickEvent = true;
            }
        } else {
            this._contentElement.style.display = ''; // Reset display (CSS 'hidden' class will take over)
            this._stopPositioner();
            this.dispatchEvent(new CustomEvent('ruxpopupclosed', { bubbles: true, composed: true }));
            if (this._assignedOutsideClickEvent) {
                window.removeEventListener('mousedown', this._handleOutsideClick);
                this._assignedOutsideClickEvent = false;
            }
        }
    }

    /**
     * Public method to open the pop up.
     * No @Method decorator needed in LitElement.
     */
    public async show() {
        if (this.open) {
            return this.open;
        }
        this.open = true;
        return this.open;
    }

    /**
     * Public method to close the pop up.
     * No @Method decorator needed in LitElement.
     */
    public async hide() {
        if (!this.open) {
            return this.open;
        }
        this.open = false;
        return this.open;
    }

    private _handleTriggerClick(event: MouseEvent) {
        // Excludes synthetic keyboard events such as Enter on a button behaving as a click
        if (event.detail > 0) {
            this.open = !this.open;
        }
    }

    private _handleTriggerKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent default scroll for space bar if trigger is scrollable
            this.open = !this.open;
        }
    }

    private _position() {
        // Ensure all necessary elements are available before attempting to position
        if (!this.open || !this.triggerSlot || !this._contentElement || !this._arrowEl) {
            return;
        }

        const middleware = [];
        middleware.push(offset(12));

        if (!this.disableAutoUpdate) {
            middleware.push(this.placement === 'auto' ? autoPlacement({ alignment: 'start' }) : flip());
        } else if (this.placement === 'auto') {
            // If auto-update is off but placement is 'auto', Floating UI needs a concrete placement.
            // We handle this by setting a default in the computePosition call.
        } else {
            // disableAutoUpdate is true and placement is explicitly set, no auto-placement middleware needed.
        }

        middleware.push(arrow({ element: this._arrowEl }));

        computePosition(this.triggerSlot, this._contentElement, {
            // Provide a default 'bottom' placement if 'auto' is used and auto-update is disabled
            placement: this.placement === 'auto' && this.disableAutoUpdate ? 'bottom' : this.placement as Placement,
            strategy: this.strategy,
            middleware: middleware,
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(this._contentElement.style, {
                left: `${x}px`,
                top: `${y}px`,
                position: `${this.strategy}`,
            });

            const { x: arrowX, y: arrowY } = middlewareData.arrow || { x: null, y: null };

            // Determine which side of the content the arrow is attached to.
            // If content is placed 'top', arrow is on its 'bottom' side.
            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]] as keyof CSSStyleDeclaration;

            if (this._arrowEl) {
                Object.assign(this._arrowEl.style, {
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    right: '',
                    bottom: '',
                    [staticSide]: '-6px', // Position the arrow just outside the content boundary
                });
            }
            this._setArrowPosition(placement); // Update class for styling the arrow
        });
    }

    // Sets a tabindex on the slotted trigger if it doesn't have one, for accessibility.
    private _setTriggerTabIndex() {
        const triggerEl = this.triggerSlot;
        if (!triggerEl) return; // No trigger element, nothing to set.

        // Only set tabindex to '0' if it's not already set, or if it's not explicitly set to '-1'.
        if (!triggerEl.hasAttribute('tabindex') && triggerEl.tabIndex !== -1) {
            triggerEl.setAttribute('tabindex', '0');
        }
    }

    private _startPositioner() {
        this._stopPositioner(); // Ensure previous autoUpdate is cleaned up

        if (this.open && this.triggerSlot && this._contentElement) {
            this._position(); // Perform initial positioning
            this._positionerCleanup = autoUpdate(
                this.triggerSlot,
                this._contentElement,
                this._position, // Use the bound method
                { animationFrame: this.enableAnimationFrame }
            );
        }
    }

    // Sets the `arrowPosition` state based on the actual computed placement,
    // which determines the arrow's styling classes.
    private _setArrowPosition(placement: string) {
        const side = placement.split('-')[0];
        let newArrowPosition: string | undefined;

        switch (side) {
            case 'top': newArrowPosition = 'bottom'; break;
            case 'bottom': newArrowPosition = 'top'; break;
            case 'left': newArrowPosition = 'right'; break;
            case 'right': newArrowPosition = 'left'; break;
            default: newArrowPosition = undefined;
        }

        if (this.arrowPosition !== newArrowPosition) {
            this.arrowPosition = newArrowPosition;
        }
    }

    private _stopPositioner() {
        if (this._positionerCleanup) {
            this._positionerCleanup();
            this._positionerCleanup = undefined;
        }
    }

    private _handleOutsideClick(e: MouseEvent) {
        const path = e.composedPath(); // Get the event path, respecting shadow DOM

        // Check if the click occurred inside the component itself (shadow or light DOM)
        const isClickInsideComponent = path.includes(this) ||
                                     (this._contentElement && path.includes(this._contentElement)) ||
                                     (this.triggerSlot && path.includes(this.triggerSlot));

        if (!isClickInsideComponent) {
            this.open = false;
        }
    }

    // Replaces Stencil's @Listen decorator. Listen on the host element.
    private _handleSelectionEvent() {
        if (this.closeOnSelect) {
            this.open = false;
        }
    }

    // --- Getters for Slotted Elements ---
    // These return the actual HTML elements that are slotted into the component.
    get contentSlot(): HTMLElement | undefined {
        return this._assignedContentElements[0];
    }

    get triggerSlot(): HTMLElement | undefined {
        return this._assignedTriggerElements[0];
    }

    // Determines if a rux-menu is slotted in the default slot.
    get hasMenu(): boolean {
        return this._assignedContentElements.some(
            (el) => el.tagName.toLowerCase() === 'rux-menu'
        );
    }

    // --- Render Method ---
    // LitElement's render method returns an HTML template literal.
    render() {
        // Use `classMap` for conditional CSS classes.
        const contentClasses = {
            'rux-popup__arrow-left': this.arrowPosition === 'left',
            'rux-popup__arrow-top': this.arrowPosition === 'top',
            'rux-popup__arrow-right': this.arrowPosition === 'right',
            'rux-popup__arrow-bottom': this.arrowPosition === 'bottom',
            'rux-popup__content': true,
            'rux-popup__content--menu': this.hasMenu,
            'hidden': !this.open, // Apply 'hidden' class when `open` is false
        };

        return html`
            <div class="rux-popup" part="container">
                <div
                    @click=${this._handleTriggerClick}
                    @keydown=${this._handleTriggerKeyPress}
                    class="rux-popup__trigger"
                    part="trigger-container"
                    tabindex="-1"
                    ${this.triggerSlot ? '' : 'aria-hidden="true"'}
                >
                    <slot name="trigger"></slot>
                </div>

                <div
                    class=${classMap(contentClasses)}
                    aria-hidden=${this.open ? 'false' : 'true'}
                    part="popup-content"
                >
                    <div
                        class="rux-popup-arrow"
                        part="arrow"
                    ></div>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
