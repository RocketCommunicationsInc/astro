import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { StatusSymbol, type Status } from '../../common/commonTypes.module';
import { classMap } from 'lit/directives/class-map.js';
import style from './rux-notification.scss?inline'

/**
 * @part icon - the notification's close icon
 * @part message - the notification's message
 * @part status - the notification's status symbol
 * @part container - the notification's container element
 *
 * @slot prefix - an optional left side content area
 * @slot (default) - the notification's message
 * @slot actions - used for display actions like close icons or buttons
 */
@customElement('rux-notification')
export class RuxNotification extends LitElement {
    static styles = css`${unsafeCSS(style)}`; // Use css template literal for styles

    @state() hasPrefixSlot = false;
    @state() hasMessageSlot = false;

    /**
     *  Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided).
     */
    @property({ type: Boolean, reflect: true }) open: boolean = false;

    /**
     *  Message for the notification banner.
     */
    @property() message: string = '';

    /**
     *  The background color. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/).
     */
    @property({ reflect: true }) status?: Status;

    /**
     *  If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it.
     */
    @property({ type: Number, attribute: 'close-after' }) closeAfter?: number;

    /**
     * Changes the size of the banner to a small variant.
     */
    @property({ type: Boolean }) small: boolean = false;

    /**
     * Prevents the user from dismissing the notification. Hides the `actions` slot.
     */
    @property({ type: Boolean, attribute: 'hide-close' }) hideClose: boolean = false;

    private _timeoutRef: number | null = null;

    // LitElement's `updated` lifecycle method is used to react to property changes.
    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties); // Always call super.updated

        if (changedProperties.has('open') || changedProperties.has('closeAfter')) {
            this._handleOpenAndCloseAfterChange();
        }
    }

    connectedCallback(): void {
        super.connectedCallback();
        // Initial slot presence check on connect
        this.updateSlotPresence();
    }

    firstUpdated(): void {
        // Ensure slots are correctly identified after first render and shadow DOM is available
        this.updateSlotPresence();
    }

    private _handleOpenAndCloseAfterChange() {
        // Clear any existing timeout to prevent multiple timers or old timers from firing
        if (this._timeoutRef) {
            window.clearTimeout(this._timeoutRef);
            this._timeoutRef = null;
        }

        if (this.open && this._closeAfterValue !== undefined && this._closeAfterValue !== null) {
            this._timeoutRef = window.setTimeout(() => {
                this.open = false; // Setting `open` to false will trigger `updated` again
            }, this._closeAfterValue);
        }

        // Emit ruxclosed event when the notification transitions to closed state
        // This mirrors Stencil's @Watch('open') behavior where it emits if !this.open
        if (!this.open) {
            this.dispatchEvent(
                new CustomEvent('ruxclosed', { detail: true, bubbles: true, composed: true })
            );
        }
    }

    private _onClick() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef);
            this._timeoutRef = null;
        }
        this.open = false; // Close the notification
    }

    private _onKeyPress(e: KeyboardEvent) {
        // Allow Enter or Space key to trigger close action, similar to a button
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent default scroll for spacebar
            this._onClick();
        }
    }

    /**
     * Getter to process the closeAfter value, applying validation rules
     * (converting seconds to ms, enforcing min/max delay).
     */
    private get _closeAfterValue(): number | undefined {
        let value = this.closeAfter;

        // If provided value is less than 1000, assume it's in seconds and convert to ms.
        if (value !== undefined && value !== null && value <= 999) {
            value *= 1000;
        }

        // Enforce the valid range [2000ms, 10000ms]. If outside, default to 2000ms.
        if (value !== undefined && value !== null && (value > 10000 || value < 2000)) {
            value = 2000;
        }

        return value;
    }

    /**
     * Checks for the presence of content in named and default slots.
     * This is called on slotchange events to update the component's state.
     */
    private updateSlotPresence() {
        const prefixSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="prefix"]');
        const defaultSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot:not([name])');

        this.hasPrefixSlot = (prefixSlot?.assignedNodes().length || 0) > 0;
        this.hasMessageSlot = (defaultSlot?.assignedNodes().length || 0) > 0;
    }

    render() {
        return html`
            <div
                class=${classMap({
                    'rux-notification-banner': true,
                    'rux-notification-banner--open': this.open,
                    'rux-notification-banner--small': this.small,
                    'rux-notification-banner--large': !this.small, // 'large' implied when 'small' is false
                    'rux-notification-banner--caution': this.status === StatusSymbol.CAUTION,
                    'rux-notification-banner--critical': this.status === StatusSymbol.CRITICAL,
                    'rux-notification-banner--serious': this.status === StatusSymbol.SERIOUS,
                    'rux-notification-banner--standby': this.status === StatusSymbol.STANDBY,
                    'rux-notification-banner--off': this.status === StatusSymbol.OFF,
                    'rux-notification-banner--normal': this.status === StatusSymbol.NORMAL,
                    'rux-notification-banner--hasPrefixSlot': this.hasPrefixSlot,
                })}
            >
                <div class="rux-notification-banner__inner" part="container">
                    <div
                        class=${classMap({
                            'rux-notification-banner__prefix': true,
                            hidden: !this.hasPrefixSlot,
                        })}
                    >
                        <!-- Listen for slotchange to update hasPrefixSlot state -->
                        <slot name="prefix" @slotchange=${this.updateSlotPresence}></slot>
                    </div>

                    ${this.status
                        ? html`
                              <div
                                  class="rux-notification-banner__status"
                                  part="status"
                              >
                                  <!-- rux-status is assumed to be another custom element -->
                                  <rux-status status=${this.status}></rux-status>
                              </div>
                          `
                        : null}

                    <div class="rux-notification-banner__content" part="message">
                        <!-- Listen for slotchange on the default slot to update hasMessageSlot state -->
                        <slot @slotchange=${this.updateSlotPresence}></slot>
                        <!-- Render message prop only if default slot is empty -->
                        ${!this.hasMessageSlot && this.message
                            ? html`<span>${this.message}</span>`
                            : null}
                    </div>

                    ${!this.hideClose
                        ? html`
                              <div class="rux-notification-banner__actions">
                                  <slot name="actions">
                                      <!-- rux-icon is assumed to be another custom element -->
                                      <rux-icon
                                          role="button"
                                          tabindex="0"
                                          class="rux-notification-banner__close"
                                          @click=${this._onClick}
                                          @keydown=${this._onKeyPress}
                                          icon="clear"
                                          size=${this.small ? '24px' : '32px'}
                                          part="icon" <!-- Exposes this rux-icon as 'icon' part of rux-notification -->
                                      ></rux-icon>
                                  </slot>
                              </div>
                          `
                        : null}
                </div>
            </div>
        `;
    }
}
