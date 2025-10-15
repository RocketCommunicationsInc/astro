import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Utility function to collapse large numbers into shorthand (e.g., 1.2M, 3K).
 * @param value The number to collapse.
 * @returns A string representation or null if value is 0 or less.
 */
export const collapseNotifications = (value: number): string | null => {
    const n = Math.floor(value)

    // don't show any values less than 0
    if (n <= 0) return null

    // get the place value
    const thousand = Math.floor((n / 1000) % 1000) // only return a whole number
    const million = (n / 1000000) % 1000000 // return a decimal value for numbers like 1.2m
    const billion = (n / 1000000000) % 1000000000 // return a decimal value for numbers like 1.2b
    const trillion = (n / 1000000000000) % 1000000000000 // trillion is just to offer an overflow instance

    // set the display to its original state
    let _shorthand = n.toString()

    //If the value is more than a trillion, show infinite. Prevents an issue where certain, very large amounts are being shown incorrectly.
    if (value > 1000000000000) {
        _shorthand = '∞'
    } else {
        if (trillion >= 1) {
            _shorthand = '∞'
        } else if (billion >= 1) {
            _shorthand = `${billion.toFixed(1).toString()}B`
        } else if (million >= 1) {
            _shorthand = `${million.toFixed(1).toString()}M`
        } else if (thousand >= 1) {
            _shorthand = `${thousand}K`
        }
    }

    return _shorthand
}

/**
 * @element rux-monitoring-badge
 *
 * @slot - Default slot for content (though not used in this specific example)
 *
 * @csspart monitoring-badge - Styles the outer div of the badge.
 */
@customElement('rux-monitoring-badge') // Define your custom element tag name
export class RuxMonitoringBadge extends LitElement {
    /**
     * The number of notifications to display.
     */
    @property({ type: Number })
    notifications?: number

    // Define component-specific styles here.
    // These styles will be scoped to the Shadow DOM of this component.
    static styles = css`
        .rux-advanced-status__badge {
            /* Example styles - replace with your actual badge styling */
            display: inline-flex; /* Use flex for centering if needed */
            align-items: center;
            justify-content: center;
            min-width: 1.5rem; /* Ensure a minimum size */
            height: 1.5rem; /* Ensure a consistent height */
            padding: 0 0.5rem;
            border-radius: 0.75rem; /* Half of height for pill shape */
            background-color: var(--rux-badge-background-color, #f44336); /* Example red */
            color: var(--rux-badge-text-color, white);
            font-family: sans-serif; /* Use your design system font */
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1; /* Prevent extra space */
            text-align: center;
            box-sizing: border-box; /* Include padding/border in width/height */
            white-space: nowrap; /* Prevent breaking on spaces */
            user-select: none; /* Prevent text selection */
        }

        .rux-advanced-status__hidden {
            display: none;
        }
    `

    render() {
        const displayValue = this.notifications !== undefined ? collapseNotifications(this.notifications) : null

        // Determine if the badge should be hidden based on the original logic
        const isHidden = this.notifications === undefined || this.notifications! <= 0

        return html` <div class="rux-advanced-status__badge ${isHidden ? 'rux-advanced-status__hidden' : ''}" part="monitoring-badge">${displayValue}</div> `
    }
}
