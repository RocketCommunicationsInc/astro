// Assuming these are or will be converted to Lit custom elements themselves
import '../rux-monitoring-badge/rux-monitoring-badge'; // Example path
import '../rux-monitoring-label/rux-monitoring-label'; // Example path
import '../rux-icon/rux-icon'; // Assuming rux-icon is a separate Lit element
import '../rux-status/rux-status'; // Assuming rux-status is a separate Lit element

import { LitElement, PropertyValues, css, html } from 'lit';
import { Status, StatusTypes } from '../../common/commonTypes.module';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * @part container - the components container
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 * @part status-icon - the components status symbol
 */
@customElement('rux-monitoring-icon')
export class RuxMonitoringIcon extends LitElement {
    // Replace Stencil's styleUrl with Lit's static styles
    static styles = css`
        /* --- COPY CONTENTS OF rux-monitoring-icon.scss HERE --- */
        /* Example SCSS converted to CSS for Lit */
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--rux-spacing-1, 0.25rem); /* Assuming Rux tokens are defined */
            min-width: fit-content; /* Initial min-width, can be overridden by JS */
        }

        .rux-advanced-status {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--rux-spacing-1, 0.25rem);
            min-width: fit-content;
        }

        .rux-advanced-status__icon-group {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: fit-content;
        }

        .rux-advanced-status__status {
            position: absolute;
            top: -2px; /* Adjust as needed based on visual design */
            left: -2px; /* Adjust as needed based on visual design */
            z-index: 1;
        }

        /* Styles for rux-icon based on status - if rux-icon doesn't handle this internally */
        .rux-status--critical {
            color: var(--rux-color-status-critical, #ff383a);
        }
        .rux-status--serious {
            color: var(--rux-color-status-serious, #fe7d38);
        }
        .rux-status--caution {
            color: var(--rux-color-status-caution, #ffcb1e);
        }
        .rux-status--normal {
            color: var(--rux-color-status-normal, #34a956);
        }
        .rux-status--standby {
            color: var(--rux-color-status-standby, #0076a6);
        }
        .rux-status--off {
            color: var(--rux-color-status-off, #6a7482);
        }
    `;

    /**
     * Styles the icon according to the Astro Status colors.
     * Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`.
     */
    @property({ type: String, reflect: true }) status: Status = 'normal';

    /**
     * Displays a label below the icon
     */
    @property({ type: String }) label: string = ''; // Lit properties should have a default or be optional

    /**
     * Displays a smaller label underneath the icon label
     */
    @property({ type: String }) sublabel?: string;

    /**
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @property({ type: String }) icon: string = 'antenna-transmit';

    /**
     * The size of a chosen Astro icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    @property({ type: String }) size: string = '2.5rem';

    /**
     * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
     * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,
     * `'1.5M'` for millions, `'1.5B'` for billions, and uses `'∞'` for one trillion or higher.
     */
    @property({ type: Number }) notifications: number = 0;

    // Use Lit's @query decorator to get a reference to the badge element
    @query('.rux-advanced-status__badge')
    private _badgeElement?: HTMLElement;

    // Stencil's @Watch('status') logic is moved to `updated` lifecycle method
    private _validateStatus(newValue: string) {
        const statusTypes: StatusTypes = {
            off: true,
            standby: true,
            normal: true,
            caution: true,
            serious: true,
            critical: true,
        };
        if (!(newValue in statusTypes) || !statusTypes[newValue as keyof StatusTypes]) {
            throw new Error(`Invalid status provided: "${newValue}". Valid statuses are: ${Object.keys(statusTypes).join(', ')}`);
        }
    }

    // Corresponds to Stencil's componentDidRender and @Watch lifecycle
    updated(changedProperties: PropertyValues) {
        super.updated(changedProperties); // Always call super.updated

        if (changedProperties.has('status')) {
            // Perform validation when 'status' property changes
            this._validateStatus(this.status);
        }

        // Call notification width handler after every render where relevant properties might have changed
        // This ensures the layout adapts to badge presence/size
        if (changedProperties.has('notifications') || changedProperties.size === 0) { // Call on initial render too
            this.handleNotificatonWidth();
        }
    }

    handleNotificatonWidth() {
        // Access the badge element via the @query decorator
        const badge = this._badgeElement;
        if (badge) {
            /** Size and position of the host element (rux-monitoring-icon). */
            const iconRect = this.getBoundingClientRect();
            /** Size and position of the badge. */
            const badgeRect = badge.getBoundingClientRect();
            /** Offset between the right-edge of the badge and the right-edge of the icon. */
            const offset = badgeRect.right - iconRect.right;

            // if the offset is greater than zero, increase the minimum width of the host component
            if (offset > 0) {
                // Set style directly on the host element (`this`)
                this.style.minWidth = iconRect.width + offset + 'px';
            } else {
                // Reset minWidth if the badge doesn't cause overflow, allowing it to shrink
                this.style.minWidth = 'fit-content';
            }
        } else {
            // If badge is not present (e.g., notifications = 0), ensure minWidth is reset
            this.style.minWidth = 'fit-content';
        }
    }

    render() {
        // Lit's html template literal replaces Stencil's JSX (h function calls)
        return html`
            <div id="rux-advanced-status__icon" class="rux-advanced-status" part="container">
                <div class="rux-advanced-status__icon-group">
                    <div class="rux-advanced-status__status">
                        <rux-status
                            status=${this.status}
                            part="status-icon"
                        ></rux-status>
                    </div>

                    <rux-icon
                        icon=${this.icon}
                        class="rux-status--${this.status}"
                        size=${this.size}
                        exportparts="icon"
                    ></rux-icon>
                    <!-- Assuming MonitoringBadge is now a custom element rux-monitoring-badge -->
                    <rux-monitoring-badge
                        class="rux-advanced-status__badge"
                        notifications=${this.notifications}
                        part="monitoring-badge"
                    ></rux-monitoring-badge>
                </div>

                <!-- Assuming MonitoringLabel is now a custom element rux-monitoring-label -->
                <rux-monitoring-label
                    label=${this.label}
                    .sublabel=${this.sublabel}
                    part="monitoring-label"
                    part-sublabel="monitoring-sublabel"
                ></rux-monitoring-label>
            </div>
        `;
    }
}
