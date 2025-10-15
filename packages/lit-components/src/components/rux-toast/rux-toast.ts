
import { LitElement, html, css, type PropertyValueMap, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '../../components/rux-status/rux-status';
import type { Status } from '../../common/commonTypes.module';

import style from './rux-toast.scss?inline';

/**
 * Utility to check if a default slot has meaningful content.
 * This is an adaptation of Stencil's `hasSlot` for LitElement,
 * checking if the default slot (`<slot>`) has any assigned nodes that are not just whitespace.
 */
function hasSlotContent(element: LitElement): boolean {
    // Get the default slot element from the shadow DOM
    const defaultSlot = element.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement | null;
    if (defaultSlot) {
        // Get all nodes assigned to this slot, flattening any nested slots
        const assignedNodes = defaultSlot.assignedNodes({ flatten: true });
        // Check if any assigned node is not a whitespace text node
        return assignedNodes.some(node => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim() !== '');
    }
    return false;
}

/**
 * @part icon - the toast's close icon
 * @part message - the toast's message
 * @part container - the toast's container element
 *
 * @slot (default) - the toast's message
 */
@customElement('rux-toast')
export class RuxToast extends LitElement {
    // Styles from rux-toast.scss are inlined here using Lit's `css` tagged template literal
    static styles = css`       
        ${unsafeCSS(style)}
    `;

    // Internal state to track if the default slot has content
    @state() private hasMessageSlot = false;

    /**
     * Message for the toast.
     */
    @property({ type: String, reflect: true }) message: string = '';

    /**
     * If provided, the toast will automatically close after this amount of time.
     * Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally),
     * between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the
     * `2000`-`10000` range will be ignored in favor of the default 2000ms delay.
     * If `closeAfter` is not passed or if it is given an undefined or `null` value,
     * the toast will stay open until the user closes it.
     */
    @property({ type: Number, attribute: 'close-after', reflect: true })
    closeAfter?: number;

    /**
     * Prevents the user from dismissing the notification. Hides the close icon.
     */
    @property({ type: Boolean, attribute: 'hide-close', reflect: true }) hideClose: boolean = false;

    /**
     * Allows for a status to be assigned to the toast.
     */
    @property({ type: String, reflect: true }) status?: Status;

    private _timeoutRef: number | null = null;

    /**
     * Handles the `slotchange` event to update `hasMessageSlot` state.
     * Uses an arrow function to ensure `this` context is correctly bound.
     */
    private _handleSlotChange = () => {
        this.hasMessageSlot = hasSlotContent(this);
    };

    /**
     * LitElement lifecycle method called when the element is first connected to the DOM.
     */
    connectedCallback(): void {
        super.connectedCallback();
        // Setup for slotchange listener and initial slot check will be done in firstUpdated.
    }

    /**
     * LitElement lifecycle method called after the first update (render).
     * Corresponds to Stencil's `componentDidLoad`.
     */
    firstUpdated(): void {
        this._handleOpen(); // Emit open event
        this.hasMessageSlot = hasSlotContent(this); // Initial check for slotted content

        // Attach slotchange listener to the default slot in the shadow DOM
        const defaultSlot = this.shadowRoot?.querySelector('slot:not([name])');
        if (defaultSlot) {
            defaultSlot.addEventListener('slotchange', this._handleSlotChange);
        }
    }

    /**
     * LitElement lifecycle method called after the component's properties have been updated.
     * Corresponds to Stencil's `@Watch` decorator for `closeAfter`.
     * @param changedProperties A Map of properties that have changed, with their old values.
     */
    protected updated(changedProperties: PropertyValueMap<any>): void {
        if (changedProperties.has('closeAfter')) {
            this._handleCloseAfterChange();
        }
    }

    /**
     * LitElement lifecycle method called when the element is disconnected from the DOM.
     * Used for cleanup (e.g., clearing timeouts, removing event listeners).
     */
    disconnectedCallback(): void {
        super.disconnectedCallback();
        // Clear any active timeout to prevent memory leaks or calling `_handleClose` on a detached element
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef);
            this._timeoutRef = null;
        }
        // Remove the slotchange listener to prevent memory leaks
        const defaultSlot = this.shadowRoot?.querySelector('slot:not([name])');
        if (defaultSlot) {
            defaultSlot.removeEventListener('slotchange', this._handleSlotChange);
        }
    }

    /**
     * Dispatches the `ruxtoastopen` event.
     */
    private _handleOpen() {
        this.dispatchEvent(new CustomEvent('ruxtoastopen', {
            composed: true, // Allows the event to cross shadow DOM boundaries
            bubbles: true,  // Allows the event to bubble up through the DOM tree
        }));
    }

    /**
     * Handles closing the toast: dispatches `ruxtoastclosed` event and removes the element.
     */
    private _handleClose() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef);
            this._timeoutRef = null;
        }
        this.dispatchEvent(new CustomEvent('ruxtoastclosed', {
            composed: true,
            bubbles: true,
        }));
        this.remove(); // Removes the custom element itself from the DOM
    }

    /**
     * Manages the auto-close timeout based on `closeAfter` property changes.
     */
    private _handleCloseAfterChange() {
        // Clear any previously set timeout to reset the timer
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef);
            this._timeoutRef = null;
        }

        const effectiveCloseAfter = this._getEffectiveCloseAfter();

        // Set a new timeout only if an effective close duration is determined
        if (effectiveCloseAfter !== undefined) {
            this._timeoutRef = window.setTimeout(() => {
                this._handleClose();
            }, effectiveCloseAfter);
        }
    }

    /**
     * Handler for click events on the close icon.
     */
    private _onClick() {
        this._handleClose();
    }

    /**
     * Handler for keyboard events (Enter/Space) on the close icon for accessibility.
     * @param e The KeyboardEvent object.
     */
    private _onKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent default browser action (e.g., scrolling for spacebar)
            this._onClick();
        }
    }

    /**
     * Calculates the effective `closeAfter` time in milliseconds, applying validation rules.
     * This method is a pure function and does not modify `this.closeAfter`.
     * @returns The calculated timeout in milliseconds, or `undefined` if no auto-close.
     */
    private _getEffectiveCloseAfter(): number | undefined {
        let value = this.closeAfter;

        // If closeAfter is undefined or null, no auto-close
        if (value === undefined || value === null) {
            return undefined;
        }

        // Convert value from seconds to milliseconds if it's likely provided in seconds
        // (i.e., less than 1000ms)
        if (value <= 999) {
            value *= 1000;
        }

        // Enforce the valid range: 2000ms (2 seconds) to 10000ms (10 seconds)
        if (value > 10000 || value < 2000) {
            return 2000; // Default to 2000ms if outside the valid range
        }

        return value;
    }

    /**
     * LitElement's render method, defines the component's template.
     * Converts Stencil's JSX to Lit's `html` tagged template literals.
     */
    render() {
        // Get the value of the CSS custom property '--iconSize' from the host element's computed style
        const iconSize = getComputedStyle(this).getPropertyValue('--iconSize');

        return html`
            <div
                class="rux-toast rux-toast-status__${this.status || ''}"
                part="container"
            >
                <div
                    class="rux-toast__content"
                    part="message"
                >
                    ${this.status
                        ? html`<rux-status status="${this.status}"></rux-status>`
                        : ''}
                    <slot @slotchange="${this._handleSlotChange}"></slot>
                    ${!this.hasMessageSlot && this.message
                        ? html`<span>${this.message}</span>`
                        : ''}
                </div>

                ${!this.hideClose
                    ? html`
                        <div class="rux-toast__actions">
                            <rux-icon
                                role="button"
                                tabindex="0"
                                class="rux-toast__close"
                                @click="${this._onClick}"
                                @keydown="${this._onKeyPress}"
                                icon="clear"
                                exportparts="icon"
                                style="--iconSize: ${iconSize}"
                            ></rux-icon>
                        </div>
                    `
                    : ''}
            </div>
        `;
    }
}
