
// Import necessary modules from Lit and its decorators
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// Import external date utility
import { formatInTimeZone } from 'date-fns-tz';

// Define the Status type, assuming it's a string union as in commonTypes.module
type Status = 'normal' | 'critical' | 'serious' | 'caution' | 'standby' | 'off';

/**
 * @slot (default) - The content of the Time Region
 * @part container - The component's container
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 * @part timestamp - The time region's timestamp
 */
@customElement('rux-time-region')
export class RuxTimeRegion extends LitElement {
    // Stencil's @Element() el is not needed in Lit, `this` refers to the element instance itself.

    /**
     * The start date. Must be an ISO string "2021-02-02T05:00:00Z".
     */
    @property({ type: String, reflect: true })
    start: string = '';

    /**
     * The end date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    @property({ type: String, reflect: true })
    end: string = '';

    /**
     * Optionally hide the bottom right timestamp.
     */
    @property({ type: Boolean, attribute: 'hide-timestamp' })
    hideTimestamp: boolean = false;

    /**
     * Short hand attribute for displaying a Status icon and appropriate border color.
     */
    @property({ type: String })
    status?: Status;

    /**
     * Visually indicates a partial time regions. Partial time regions are time regions that start or end outside of the current range of the timeline.
     */
    @property({ type: String }) // Type is inferred as string but explicit is good
    partial: 'none' | 'start' | 'end' | 'ongoing' = 'none';

    /**
     * Visually displays the selected state
     */
    @property({ type: Boolean })
    selected: boolean = false;

    /**
     * @internal - The Time Regions's time zone. Set automatically from the parent Track component.
     */
    @property({ type: String })
    timezone: string = 'UTC';

    // Stencil's @Watch decorators are replaced by Lit's `updated` lifecycle method.
    // Stencil's @Event and EventEmitter are replaced by dispatching a CustomEvent.
    updated(changedProperties: Map<string | PropertyKey, unknown>) {
        super.updated(changedProperties);

        // Check if 'start' or 'end' properties have changed
        if (changedProperties.has('start') || changedProperties.has('end')) {
            /**
             * @internal - Emitted on the event.detail when the start or end date changes
             * so that its parent Track can update the Time Region's position.
             */
            this.dispatchEvent(
                new CustomEvent('ruxtimeregionchange', {
                    detail: {
                        start: this.start,
                        end: this.end,
                    },
                    bubbles: true,   // Allow event to bubble up the DOM tree
                    composed: true,  // Allow event to cross shadow DOM boundaries
                })
            );
        }
    }

    get formattedTime(): string | false {
        if (!this.start || !this.end) {
            return false;
        }

        try {
            return (
                formatInTimeZone(new Date(this.start), this.timezone, 'HH:mm') +
                ' - ' +
                formatInTimeZone(new Date(this.end), this.timezone, 'HH:mm')
            );
        } catch (e) {
            console.error('Error formatting time:', e);
            return false;
        }
    }

    // Stencil's `styleUrl` is replaced by Lit's `static styles` property.
    // The content from `rux-time-region.scss` would go here.
    static styles = css`
        /* Styles from rux-time-region.scss should be placed here */
        /* Placeholder for example styling */
        :host {
            display: block; /* Custom elements typically need a display type */
            position: absolute; /* Assuming these are positioned absolutely in a timeline */
            box-sizing: border-box;
            background-color: var(--rux-time-region-background, #f0f0f0);
            border: 1px solid var(--rux-time-region-border-color, #ccc);
            border-radius: 4px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 8px;
            font-family: var(--rux-font-body, sans-serif);
            font-size: var(--rux-font-size-body, 14px);
            color: var(--rux-text-color-primary, #333);
        }

        [part="container"] {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }

        .rux-time-region__content {
            display: flex;
            align-items: center;
            gap: 8px; /* Space between status icon and slot content */
            width: 100%;
            flex-grow: 1; /* Allows content to take available space */
            overflow: hidden;
        }

        .rux-time-region__datetime {
            font-size: 0.75em;
            color: var(--rux-text-color-secondary, #666);
            align-self: flex-end; /* Aligns to bottom right */
            margin-top: auto; /* Pushes to the bottom */
            white-space: nowrap; /* Prevents text wrap */
        }

        /* Status-based border colors */
        .rux-time-region--normal { border-color: var(--rux-status-color-normal, green); }
        .rux-time-region--critical { border-color: var(--rux-status-color-critical, red); }
        .rux-time-region--serious { border-color: var(--rux-status-color-serious, orange); }
        .rux-time-region--caution { border-color: var(--rux-status-color-caution, yellow); }
        .rux-time-region--standby { border-color: var(--rux-status-color-standby, blue); }
        .rux-time-region--off { border-color: var(--rux-status-color-off, gray); }

        /* Selected state */
        .rux-time-region--selected {
            border-width: 2px;
            border-color: var(--rux-time-region-selected-border-color, #0078d4);
            box-shadow: 0 0 5px rgba(0, 120, 212, 0.5);
            background-color: var(--rux-time-region-selected-background, #e0f2fe);
        }

        /* Partial states */
        .rux-time-region--partial-start {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left-style: dashed;
            border-left-width: 2px;
        }
        .rux-time-region--partial-end {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right-style: dashed;
            border-right-width: 2px;
        }

        /* Styles for the nested rux-status component when selected */
        .rux-time-region--selected .light-theme {
            /* Example: change icon color for selected state if rux-status supports it */
            --rux-status-icon-color: var(--rux-text-color-light, #fff);
        }
    `;

    render() {
        // Stencil's `h` function for JSX is replaced by Lit's `html` tagged template literal.
        // Stencil's <Host> is implicit; styling applies to :host, and content is in the template.
        const containerClasses = {
            'rux-time-region': true,
            // Status classes
            'rux-time-region--normal': this.status === 'normal',
            'rux-time-region--critical': this.status === 'critical',
            'rux-time-region--serious': this.status === 'serious',
            'rux-time-region--caution': this.status === 'caution',
            'rux-time-region--standby': this.status === 'standby',
            'rux-time-region--off': this.status === 'off',
            // Selected class
            'rux-time-region--selected': this.selected,
            // Partial classes
            'rux-time-region--partial-start':
                this.partial === 'start' || this.partial === 'ongoing',
            'rux-time-region--partial-end':
                this.partial === 'end' || this.partial === 'ongoing',
        };

        return html`
            <div part="container" class=${classMap(containerClasses)}>
                <div class="rux-time-region__content">
                    ${this.status
                        ? html`
                              <rux-status
                                  class=${classMap({
                                      'light-theme': this.selected,
                                  })}
                                  status="${this.status}"
                              ></rux-status>
                          `
                        : null}
                    <slot></slot>
                </div>
                ${!this.hideTimestamp && this.formattedTime
                    ? html`
                          <div class="rux-time-region__datetime" part="timestamp">
                              ${this.formattedTime}
                          </div>
                      `
                    : null}
            </div>
        `;
    }
}
