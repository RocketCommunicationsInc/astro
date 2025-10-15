
// LitElement Imports
import { LitElement, html, css, property, state, query } from 'lit';
import { customElement } from 'lit/decorators.js';

// Original helper imports (these remain the same)
import {
    daysInMonth,
    getBeginningOfDay,
    getStartEndDateForInterval,
} from '../helpers'; // Assuming this path is correct relative to the component
import {
    differenceInHours,
    differenceInMinutes,
    differenceInMonths,
    differenceInSeconds,
    differenceInWeeks,
} from 'date-fns';

interface DateValidation {
    success: boolean;
    error?: string;
}

// Assuming the content of rux-track.scss is available and compiled to CSS.
// For this example, I'll provide a direct CSS string.
const ruxTrackStyles = css`
    :host {
        display: block;
    }

    .rux-timeline {
        display: grid;
        grid-template-rows: 1fr;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .rux-track__header {
        min-height: 48px;
        display: flex;
        align-items: center;
        padding: var(--spacing-05, 0.5rem) var(--spacing-04, 0.25rem);
        background-color: var(--color-background-surface-default, #2a3c4b);
        border-right: 1px solid var(--color-border-default, #4b5f73);
        z-index: 1;
    }

    .rux-track__played {
        grid-row: 1;
        /* grid-column will be set directly via style attribute in JS */
        height: 100%;
        width: 2px;
        background-color: var(--color-status-success-default, #007bc1);
        z-index: 2;
        position: absolute;
        /* Transform will be set directly via style attribute in JS for precise positioning */
        transition: transform 0.1s linear;
    }

    .rux-track__played.hidden {
        display: none;
    }

    .grid {
        grid-row: 1;
        grid-column: 2 / -1;
        width: 100%;
        height: 100%;
        background-size: var(--grid-gap, 1px) 100%;
        background-image: linear-gradient(to right, var(--color-border-default, #4b5f73) 1px, transparent 1px);
        pointer-events: none;
    }
`;

/**
 * @slot (default) - The Track's content
 * @part track-header - The Track's header
 * @part container - The Track's container
 */
@customElement('rux-track') // Stencil's @Component({ tag: 'rux-track' })
export class RuxTrack extends LitElement {
    // Stencil's styleUrl to Lit's static styles
    static styles = ruxTrackStyles;

    // Stencil's `playedIndicator!: HTMLElement` with `ref` attribute
    // Lit's `@query` decorator to get a reference to a DOM element within the shadow DOM
    @query('.rux-track__played')
    private playedIndicator!: HTMLElement;

    // Stencil's `@State()` to Lit's `@state()`
    @state()
    hasRuler: boolean = false;

    // Stencil's `@Element() el!: HTMLRuxTrackElement`
    // In Lit, you typically access children via slots or by querying the shadow DOM.
    // For accessing slotted children, we'll query the default slot.
    @query('slot:not([name])')
    private _defaultSlot!: HTMLSlotElement;

    /**
     * @internal - The grid's width. Set automatically from the parent Timeline component.
     */
    // Stencil's `@Prop({ reflect: true })` to Lit's `@property({ type: Type, reflect: true })`
    @property({ type: Number, reflect: true })
    width = 0;

    /**
     * @internal - The number of grid columns to display. Set automatically from the parent Timeline component.
     */
    @property({ type: Number, reflect: true })
    columns = 0;

    /**
     * @internal - The Track's interval. Set automatically from the parent Timeline component.
     */
    @property({ type: String, reflect: true }) // Assuming interval is a string like 'hour', 'minute', etc.
    interval: string = '';

    /**
     * @internal - The Track's start date. Set automatically from the parent Timeline component.
     */
    @property({ type: String, reflect: true })
    start = '';

    /**
     * @internal - The Track's end date. Set automatically from the parent Timeline component.
     */
    @property({ type: String, reflect: true })
    end = '';

    /**
     * @internal - The Track's time zone. Set automatically from the parent Timeline component.
     */
    @property({ type: String, reflect: true })
    timezone = 'UTC';

    /**
     * The playhead of rux-track.
     */
    @property({ type: String, reflect: true }) // Assuming playhead is a string date/time
    playhead: string = '';

    // Stencil's `@Watch` decorators are replaced by Lit's `updated` lifecycle hook.
    // `updated` is called after the component's DOM has been updated, and `changedProperties`
    // contains a Map of properties that have changed since the last update.
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties); // Always call super.updated()

        // Check if any of the watched properties have changed
        const relevantPropsChanged =
            changedProperties.has('start') ||
            changedProperties.has('end') ||
            changedProperties.has('interval') ||
            changedProperties.has('playhead') ||
            changedProperties.has('timezone');

        // The original Stencil `handleUpdate` checked `if (old)`.
        // This generally means "not on the very first render".
        // However, `connectedCallback` in Stencil calls `_handleSlotChange` which in turn calls `initializeRows`.
        // This implies `initializeRows` *should* run on initial setup.
        // In Lit, `updated` runs on the first render, so we can just call `initializeRows` here if properties changed.
        // `@query` elements (like `playedIndicator` and `_defaultSlot`) are guaranteed to be available when `updated` runs.
        if (relevantPropsChanged) {
            this.initializeRows();
        }
    }

    // Stencil's `@Listen('ruxtimeregionchange')`
    // Lit: Add/remove event listeners in `connectedCallback` and `disconnectedCallback`.
    private _handleTimeRegionChange = (e: CustomEvent) => {
        this.initializeRows();
        e.stopPropagation();
    };

    connectedCallback() {
        super.connectedCallback();
        // Bind `_handleSlotChange` for the `slotchange` event listener if not using arrow function.
        // For Lit templates, event handlers bound directly like `@slotchange=${this._handleSlotChange}`
        // are correctly bound to `this`.
        this.addEventListener('ruxtimeregionchange', this._handleTimeRegionChange);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('ruxtimeregionchange', this._handleTimeRegionChange);
    }

    /**
     * Tracks are displayed as a (CSS) grid of cells.
     * Each cell can represent a minute or hour depending on the interval.
     */
    private _calculateGridColumnFromTime(time: any): number {
        if (!this.start) {
            return 0;
        }

        const useStartEndDates = getStartEndDateForInterval(this.start, this.end, this.interval);
        const timeAsDate = new Date(time);

        switch (this.interval) {
            case 'hour':
                return Math.abs(differenceInMinutes(useStartEndDates.timelineStart, timeAsDate)) + 2;
            case 'minute':
                return Math.abs(differenceInSeconds(useStartEndDates.timelineStart, timeAsDate)) + 2;
            case 'day':
                return Math.abs(differenceInHours(useStartEndDates.timelineStart, timeAsDate)) + 2;
            case 'week': {
                const numWeeks = Math.ceil(
                    Math.abs(differenceInWeeks(useStartEndDates.timelineStart, getBeginningOfDay(timeAsDate, 0)))
                );
                const weekStartsOnDay = useStartEndDates.timelineStart.getDay();
                let extraDays = timeAsDate.getDay();
                if (weekStartsOnDay > extraDays) {
                    extraDays += 7;
                }
                return Math.ceil((numWeeks + (extraDays - weekStartsOnDay) / 7) * 24) + 2;
            }
            case 'month': {
                const numMonths = Math.abs(differenceInMonths(useStartEndDates.timelineStart, timeAsDate));
                const extraDays = timeAsDate.getDate() - 1;
                const daysInCurrentMonth = daysInMonth(timeAsDate);
                const extraHours = timeAsDate.getHours();
                return Math.ceil((numMonths + (extraDays + extraHours / 24) / daysInCurrentMonth) * 24) + 2;
            }
            default:
                return 0;
        }
    }

    private _validateTimeRegion(start: any, end: any): DateValidation {
        if (!start) {
            return { success: false, error: 'Time Region must have a start date provided' };
        }
        if (!end) {
            return { success: false, error: 'Time Region must have an end date provided' };
        }

        const startDate = new Date(start);
        const endDate = new Date(end);
        const timelineStart = new Date(this.start);
        const timelineEnd = new Date(this.end);

        if (startDate > endDate) {
            return { success: false, error: `The Time Region start date must be before the end date: ${start} - ${end}` };
        }
        if (startDate > timelineEnd) {
            return { success: false, error: `The Time Region start date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}` };
        }
        if (startDate < timelineStart && endDate < timelineStart) {
            return { success: false, error: `The Time Region start and end dates do not fall within the Timeline's range: ${start} - ${end}` };
        }

        return { success: true };
    }

    /**
     * Time Regions are dumb and don't know anything about the grid.
     * The Track is responsible for lining up the Time Regions with the grid.
     */
    private initializeRows() {
        if (this.playhead && this.playedIndicator) {
            const gridColumnEnd = this._calculateGridColumnFromTime(this.playhead);
            this.playedIndicator.style.gridColumnEnd = gridColumnEnd.toString();

            // Calculate transformX based on grid properties to align playhead
            const span = this.getColumnsPerInterval();
            const gridGapValue = span * this.width;
            // gridColumnEnd is 1-indexed. We want to position the line *at* the start of that column.
            // The grid starts at column 2 (header is col 1). So (gridColumnEnd - 1) gives the number of `grid-gap` units
            // from the very beginning of the timeline grid (start of column 2).
            // Then subtract 2px for the playhead's own width to center or align it.
            const transformX = (gridColumnEnd - 2) * this.width + ((gridColumnEnd > 1) ? (span * (gridColumnEnd -2)) : 0) - 1;
            // Re-evaluating the transform:
            // Stencil's CSS was `transform: translateX(calc(var(--played-indicator-end, 2) * var(--grid-gap, 1px) - 2px));`
            // Let's use that logic as closely as possible.
            // In the CSS `grid-column: 2 / var(--played-indicator-end, 2);`
            // The `grid-gap` CSS variable is set to `renderCssGrid()` which is `width * span`.
            // So if `gridColumnEnd` is say, 10. That means it ends at grid line 10.
            // This is the X position on the grid.
            // The `translateX` value should be the position of the line.
            // The grid starts at column 2. So column 2 is at 0px offset from the header's right edge.
            // Column 3 is at `width` px. Column N is at `(N-2) * (width + gap)`... this is tricky with `width` meaning column width
            // and `grid-gap` being the total width of an 'interval'.
            // Re-reading `renderCssGrid`: `const width = span * this.width`. This `width` is what `var(--grid-gap)` is set to.
            // Let's call it `intervalPixelWidth`.
            // So, grid-column `N` means the line starts at `(N-1) * intervalPixelWidth`.
            // But the grid itself starts at column 2.
            // So for gridColumnEnd = 2, the line is at the left edge of grid-column 2. `0 * intervalPixelWidth`.
            // For gridColumnEnd = 3, the line is at the left edge of grid-column 3. `1 * intervalPixelWidth`.
            // So the X position is `(gridColumnEnd - 2) * intervalPixelWidth`.
            // And then subtract half of the line's width to center it, or 2px from the line's end.
            const intervalPixelWidth = this.renderCssGridValue(); // Gets the number value for '--grid-gap'
            const calculatedTransformX = (gridColumnEnd - 2) * intervalPixelWidth; // Offset from start of track content
            // The line itself is 2px wide. The original CSS moved it by `... - 2px`
            // Let's stick to the original calculation if possible
            // `transform: translateX(calc(var(--played-indicator-end, 2) * var(--grid-gap, 1px) - 2px));`
            // Let `playedIndicatorEnd` be `gridColumnEnd`.
            // `(gridColumnEnd * intervalPixelWidth) - 2` this would position it based on the *end* of the interval span.
            // This means it's positioned from the start of the entire grid (`[header] 200px`)
            // The header is 200px. Grid starts after header.
            // `grid-column-end` usually refers to the grid line.
            // So if grid-column is `2 / X`, the element starts at line 2 and ends at line X.
            // `playedIndicator` is given `grid-column: 2 / var(--played-indicator-end, 2);`
            // And its `transform` uses `var(--played-indicator-end)`.
            // If `gridColumnEnd` is 2, it spans `2 / 2`. `(2 * intervalPixelWidth) - 2`
            // If `gridColumnEnd` is 3, it spans `2 / 3`. `(3 * intervalPixelWidth) - 2`
            // This seems to calculate the absolute position from the left of the entire `rux-timeline` container.
            // Given the `grid-template-columns: [header] 200px repeat(${this.columns}, ${this.width}px)`
            // and `grid-column: 2 / -1` for `grid` and `rux-time-region`.
            // `playedIndicator` has `grid-column: 2 / var(--played-indicator-end, 2)`.
            // So `gridColumnEnd` is the grid line number.
            // Line 2 is at 200px. Line 3 is at 200px + `width`px.
            // Line X is at `200px + (X-2) * this.width`. This is just the start of the column.
            // The original transform uses `var(--grid-gap)` which is `span * width`.
            // `(gridColumnEnd * intervalPixelWidth) - 2` would move it significantly.
            // Let's use `(gridColumnEnd - 2)` which corresponds to the columns *after* the first data column.
            // `(gridColumnEnd - 2) * this.width` - this refers to `this.width` of `rux-track__played`?
            // This needs to be `(gridColumnEnd - 2) * (span * this.width)` which is `(gridColumnEnd - 2) * intervalPixelWidth`.
            // This moves it to the start of the correct column (relative to grid content area).
            // The `2px` in the original calc was likely to account for the line's own width relative to its grid cell.
            this.playedIndicator.style.transform = `translateX(${calculatedTransformX}px)`;
        }

        // Accessing slotted children using `assignedElements()` on the queried slot
        if (!this._defaultSlot) {
            // This scenario should be rare if `initializeRows` is called in `updated`
            // but is a safe guard.
            return;
        }
        const children = (this._defaultSlot.assignedElements() as HTMLRuxTimeRegionElement[]).filter(
            (el) => el.tagName.toLowerCase() === 'rux-time-region'
        );

        const useStartEndDates = getStartEndDateForInterval(this.start, this.end, this.interval);

        children.forEach((el) => {
            const isHidden = el.style.visibility === 'hidden';
            const isValid = this._validateTimeRegion(el.start, el.end);

            let start = el.start;
            let end = el.end;
            let startDate = new Date(el.start);
            let endDate = new Date(el.end);

            if (isValid.success) {
                if (startDate < useStartEndDates.timelineStart && endDate > useStartEndDates.timelineEnd) {
                    el.partial = 'ongoing';
                    start = useStartEndDates.timelineStart.toISOString();
                    end = useStartEndDates.timelineEnd.toISOString();
                } else if (startDate < useStartEndDates.timelineStart) {
                    el.partial = 'start';
                    start = this.start;
                } else if (endDate > useStartEndDates.timelineEnd) {
                    el.partial = 'end';
                    end = useStartEndDates.timelineEnd.toISOString();
                } else {
                    el.partial = 'none';
                }

                el.timezone = this.timezone;
                el.style.gridRow = '1';
                el.style.display = 'block';
                const gridColumn = `${this._calculateGridColumnFromTime(start)} / ${this._calculateGridColumnFromTime(end)}`;
                el.style.gridColumn = gridColumn;
            } else {
                if (!isHidden) {
                    el.style.display = 'none';
                }
            }
        });
    }

    // Event handler for slotchange. Needs to be a bound method or an arrow function.
    private _handleSlotChange = () => {
        this.initializeRows();
        // Check for 'rux-ruler' children among assigned elements
        const hasRuler = this._defaultSlot.assignedElements().find(
            (el) => el.tagName.toLowerCase() === 'rux-ruler'
        );
        this.hasRuler = !!hasRuler;
    };

    private getColumnsPerInterval(): number {
        if (['minute', 'hour'].includes(this.interval)) return 60;
        if (['day', 'week', 'month'].includes(this.interval)) return 24;
        return 60; // Default case, matching 'minute' or 'hour'
    }

    private renderCssGridValue(): number {
        // This calculates the width of one "interval" unit in pixels,
        // which then becomes the `grid-gap` (the width between grid lines)
        const span = this.getColumnsPerInterval();
        return span * this.width;
    }

    render() {
        // Stencil's `h` function and JSX syntax to Lit's `html` template literal.
        // `Host` wrapper is removed as LitElement itself is the host.
        return html`
            <div
                class="rux-timeline rux-track"
                style="grid-template-columns: [header] 200px repeat(${this.columns}, ${this.width}px); --grid-gap: ${this.renderCssGridValue()}px;"
                part="container"
            >
                <div
                    class="rux-track__header"
                    part="track-header"
                    style="grid-row: 1 / -1;"
                >
                    <slot name="label"></slot>
                </div>
                <slot @slotchange=${this._handleSlotChange}></slot>
                <div
                    class="${this.playhead ? 'rux-track__played' : ''} ${this.hasRuler ? 'hidden' : ''}"
                    <!-- No ref needed here, @query handles it -->
                ></div>
                <div class="grid"></div>
            </div>
        `;
    }
}

// Define the custom element interfaces for better TypeScript support
// as these are likely used for `el.partial`, `el.start`, etc.
declare global {
    interface HTMLRuxTimeRegionElement extends HTMLElement {
        start: string;
        end: string;
        partial: 'ongoing' | 'start' | 'end' | 'none';
        timezone: string;
        style: CSSStyleDeclaration & { gridRow: string; display: string; gridColumn: string; visibility: string; };
    }

    interface HTMLElementTagNameMap {
        'rux-track': RuxTrack;
    }
}
