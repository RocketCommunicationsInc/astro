
import { LitElement, html, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { Status } from '../../common/commonTypes.module';

// Assuming these are also custom elements, and their paths are correctly set up for Lit.
// Ensure these files actually export and define their custom elements.
import '../../common/functional-components/MonitoringBadge/monitoring-badge'; // Update path if necessary for Lit component export
import '../../common/functional-components/MonitoringLabel/monitoring-label'; // Update path if necessary for Lit component export
// If 'rux-status' is another custom element, you'd typically import its definition:
// import 'path-to-rux-status/rux-status'; // Or wherever your rux-status element is defined.


export interface RangeItem {
    threshold: number;
    status: Status;
}

/**
 * @part container - The component's container element
 * @part radial-progress - The "donut"-style progress meter
 * @part icon-group - A wrapper element containing the status icon, radial progress, and notification elements.
 * @part status-icon - The component's status symbol
 * @part progress-display - The component's progress value
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 */
@customElement('rux-monitoring-progress-icon')
export class RuxMonitoringProgressIcon extends LitElement {
    // Styles from rux-monitoring-progress-icon.scss go here.
    // If your SCSS uses advanced features (variables, mixins, nesting),
    // you'll need a build step (e.g., webpack with sass-loader) to compile it to plain CSS first.
    // For this example, I've included common CSS that would likely be present.
    static styles = css`
        :host {
            display: inline-block; /* Or block, depending on desired default */
        }

        .rux-advanced-status {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .rux-advanced-status__icon-group {
            position: relative;
            width: var(--rux-monitoring-progress-icon-size, 128px);
            height: var(--rux-monitoring-progress-icon-size, 128px);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Assuming rux-status is a custom element and can be styled this way */
        rux-status {
            position: absolute;
            width: calc(var(--rux-monitoring-progress-icon-size, 128px) * 0.4);
            height: calc(var(--rux-monitoring-progress-icon-size, 128px) * 0.4);
            z-index: 2;
        }

        .rux-advanced-status__progress {
            position: absolute;
            z-index: 2;
            font-size: calc(var(--rux-monitoring-progress-icon-size, 128px) * 0.15);
            font-weight: bold;
            color: var(--rux-monitoring-progress-icon-progress-color, var(--color-text-primary));
        }

        /* Radial Progress Styles */
        svg.rux-status--off circle.progress-ring__circle { stroke: var(--color-status-off); }
        svg.rux-status--standby circle.progress-ring__circle { stroke: var(--color-status-standby); }
        svg.rux-status--normal circle.progress-ring__circle { stroke: var(--color-status-normal); }
        svg.rux-status--caution circle.progress-ring__circle { stroke: var(--color-status-caution); }
        svg.rux-status--serious circle.progress-ring__circle { stroke: var(--color-status-serious); }
        svg.rux-status--critical circle.progress-ring__circle { stroke: var(--color-status-critical); }

        svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        circle {
            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
        }

        /* Positioning for the badge assuming it's a child custom element */
        monitoring-badge {
            position: absolute;
            bottom: calc(var(--rux-monitoring-progress-icon-size, 128px) * -0.05); /* Adjust as needed */
            right: calc(var(--rux-monitoring-progress-icon-size, 128px) * -0.05); /* Adjust as needed */
            z-index: 3;
        }
    `;

    private _circumference = 56 * 2 * Math.PI;
    private _defaultRangeList: RangeItem[] = [
        { threshold: 17, status: 'off' },
        { threshold: 33, status: 'standby' },
        { threshold: 49, status: 'normal' },
        { threshold: 65, status: 'caution' },
        { threshold: 81, status: 'serious' },
        { threshold: 100, status: 'critical' },
    ];

    /**
     * Displays a label below the icon
     */
    @property({ type: String }) label?: string;

    /**
     * Displays a smaller label underneath the icon label
     */
    @property({ type: String }) sublabel?: string;

    /**
     * Items in this Array define thresholds for changing the status style of the progress icon.
     * For each item in the Array, the icon will be styled with the given status while the progress value
     * is less than or equal to the Array item’s threshold and greater than the next smallest item‘s threshold.
     * Both progress and the Array items’ threshold values can be positive or negative.
     * If no min is specified, the component assumes the Array's first status threshold begins at 0.
     */
    @property({ type: Array }) range!: Array<RangeItem>; // 'mutable' is handled by direct assignment or logic in willUpdate

    /**
     * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
     * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'`
     * for millions, `'1.5B'` for billions, and `'∞'` for one trillion or higher.
     */
    @property({ type: Number }) notifications?: number;

    /**
     * Sets the minimum value for the progress range. When progress is this number, it reads 0%.
     * When it is halfway between min and max, it will read 50%.
     */
    @property({ type: Number }) min: number = 0;

    /**
     * Sets the maximum value for the progress range. When progress is this number, it reads 100%.
     * When it is halfway between min and max, it will read 50%.
     */
    @property({ type: Number }) max: number = 100;

    /**
     * Displays this value as a percentage of where it lies between min and max
     * in the center of the donut graph and styles a proportional
     * segment of the graph. Progress can be positive or negative (the later useful for countdowns).
     * The progress value must exist within the thresholds specified in the range property below, and must be
     * an integer. If a non-integer value is passed in, progress will default to 0. If progress ever
     * becomes less than min or greater than max, it will be set to equal min or max respectively.
     */
    @property({ type: Number, reflect: true }) progress: number = 0;

    @state() _status: Status = 'off';
    @state() _graphProgress: number = 0;

    // Lit's willUpdate lifecycle method replaces Stencil's componentWillLoad and @Watch decorators.
    // It runs before the first update and subsequent updates.
    willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
        // Handle initial range setup if not provided, and ensure it's sorted
        if (changedProperties.has('range') || this.range === undefined || this.range.length < 1) {
            if (!this.range || this.range.length < 1) {
                this.range = [...this._defaultRangeList]; // Create a new array to trigger Lit's change detection
            }
            // Ensure range is always sorted by threshold for correct lookup
            this.range = [...this.range].sort((a, b) => a.threshold - b.threshold);
            this._updateProgress(); // Re-calculate status and graph if range changes or is initialized
        }

        // Handle progress updates, similar to Stencil's @Watch('progress')
        if (changedProperties.has('progress')) {
            const oldValue = changedProperties.get('progress') as number | undefined;
            const newValue = this.progress;

            // Stencil's checkProgress also handled non-integer values by setting to 0
            if (!Number.isInteger(newValue)) {
                this.progress = 0; // Directly modify the property, this will trigger another update cycle
                return; // Exit to avoid double processing if progress was invalid
            }

            if (newValue !== oldValue) {
                this._updateProgress();
            }
        }

        // Also update if min or max bounds change
        if (changedProperties.has('min') || changedProperties.has('max')) {
            this._updateProgress();
        }
    }

    private _updateProgress() {
        // Clamp progress within min/max bounds
        if (this.progress > this.max) {
            this.progress = this.max;
        } else if (this.progress < this.min) {
            this.progress = this.min;
        }

        // Determine status based on range thresholds
        const rangeStatus = this.range.find(
            (rangeItem) => this.progress <= rangeItem.threshold
        );
        // Fallback to the first status in the range, or 'off' if range is somehow empty
        this._status = rangeStatus ? rangeStatus.status : (this.range.length > 0 ? this.range[0].status : 'off');

        // Calculate graph progress
        const totalRange = this.max - this.min;
        // Prevent division by zero if min and max are the same
        const progressNormalized = totalRange > 0 ? (this.progress - this.min) / totalRange : 0;
        this._graphProgress = this._circumference - (progressNormalized * this._circumference);
    }

    render() {
        return html`
            <div
                id="rux-advanced-status__icon"
                class="rux-advanced-status"
                part="container"
            >
                <div class="rux-advanced-status__icon-group" part="icon-group">
                    <!-- Assuming rux-status is a defined custom element -->
                    <rux-status
                        .status="${this._status}"
                        part="status-icon"
                    ></rux-status>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        class="rux-status--${this._status}"
                        part="radial-progress"
                    >
                        <g id="progress">
                            <circle
                                cx="60"
                                cy="60"
                                r="56"
                                fill="transparent"
                                stroke="rgba(40, 63, 88, 1)"
                                stroke-width="10"
                                transform="rotate(-90 61 60)"
                            />
                            <circle
                                cx="60"
                                cy="60"
                                r="56"
                                fill="transparent"
                                stroke-dasharray="${this._circumference} ${this._circumference}"
                                stroke-dashoffset="${this._graphProgress}"
                                stroke-linecap="round"
                                stroke-width="10"
                                class="progress-ring__circle"
                                transform="rotate(-90 61 60)"
                            />
                        </g>
                    </svg>
                    <div
                        class="rux-advanced-status__progress"
                        part="progress-display"
                    >
                        ${Math.ceil(
                            ((this.progress - this.min) /
                                (this.max - this.min)) *
                                100
                        )}%
                    </div>

                    <!-- Assuming monitoring-badge is a defined custom element -->
                    <monitoring-badge .notifications="${this.notifications}"></monitoring-badge>
                </div>

                <!-- Assuming monitoring-label is a defined custom element -->
                <monitoring-label .label="${this.label}" .sublabel="${this.sublabel}"></monitoring-label>
            </div>
        `;
    }
}
