import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core'
import {
    dateRange,
    daysInMonth,
    getBeginningOfMonth,
    getStartEndDateForInterval,
    validateTimezone,
} from './helpers'
import {
    differenceInHours,
    differenceInMinutes,
    differenceInMonths,
    format,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

/**
 * @part playhead - The timeline's playhead
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 */
@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private slotContainer?: HTMLElement
    private timelineContainer?: HTMLElement
    private rulerContainer?: HTMLElement

    public slots?: any = 'empty'
    @Element() el!: HTMLRuxTimelineElement

    @State() playheadPositionInPixels = 200
    @State() columnWidth = 120
    @State() playheadHeight = 0
    @State() showPlayhead = true

    /**
     * The timeline's start date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    @Prop() start: string = ''

    /**
     * The timeline's end date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    @Prop() end: string = ''

    /**
     * The timeline's zoom level.
     */
    @Prop({ reflect: true }) zoom = 1

    /**
     * The timeline's playhead date time. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    @Prop({ reflect: true, mutable: true }) playhead?: string

    /**
     * Visually marks past time as played in each track
     */
    @Prop({ reflect: true, attribute: 'has-played-indicator' })
    hasPlayedIndicator = false

    /**
     * The timeline's date time interval
     */
    @Prop() interval: 'month' | 'week' | 'hour' | 'day' | 'minute' = 'hour'

    /**
     * Controls the display of grid lines
     */
    @Prop({ attribute: 'show-grid' }) showGrid: boolean = false

    /**
     * Controls the timezone that the timeline is localized to. Must be an IANA time zone name ("America/New_York") or an offset string.
     */
    @Prop() timezone = 'UTC'

    /**
     * Controls the position of the ruler. Either top, bottom or both.
     */
    @Prop({ attribute: 'ruler-position', reflect: true }) rulerPosition:
        | 'top'
        | 'bottom'
        | 'both' = 'both'

    /**
     * Hides the J-Day display when show-secondary-ruler is true.
     */
    @Prop({ attribute: 'hide-j-day' }) hideJDay: boolean = false

    /**
     * Controls whether or not the attached rux-ruler displays the secondary date portion.
     */
    @Prop({ attribute: 'show-secondary-ruler' })
    showSecondaryRuler: boolean = false

    @Watch('hasPlayedIndicator')
    @Watch('playhead')
    syncPlayhead() {
        if (this.playhead) {
            const time = this._calculatePlayheadFromTime(this.playhead)
            if (time) {
                this.playheadPositionInPixels = time
            }
            this._updateRegions()
        }
    }

    @Watch('zoom')
    handleZoomChange() {
        this._setZoom()
        this.syncPlayhead()
        this._updateRegions()
    }

    @Watch('start')
    @Watch('end')
    @Watch('interval')
    @Watch('timezone')
    handleChange() {
        this.syncPlayhead()
        this._updateRegions()
        this.syncPlayhead()
    }

    @Watch('rulerPosition')
    @Watch('showSecondaryRuler')
    @Watch('hideJDay')
    handleRulerPosChange() {
        this._updateRegions()
    }

    @Watch('showGrid')
    handleGridChange() {
        //because we're using the :host selector, we need to set the attribute on the host element. otherwise,
        //`show-grid="false"` will register as show-grid still being there, thus applying the grid styles.
        if (!this.showGrid) {
            this.el.removeAttribute('show-grid')
        }
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleMouse = this._handleMouse.bind(this)
        this.syncPlayhead = this.syncPlayhead.bind(this)
        this._updateRegions = this._updateRegions.bind(this)
        if (!this.showGrid) {
            this.el.removeAttribute('show-grid')
        }
    }
    componentWillLoad() {
        this._setZoom()
        this.syncPlayhead()
    }

    get width() {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }
        // widths will be the same as for days
        if (this.interval === 'week') {
            unitOfTime = 24
        }
        if (this.interval === 'month') {
            unitOfTime = 24
        }
        return this.columnWidth / unitOfTime
    }
    get columns() {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }
        // columns will be the same as for days
        if (this.interval === 'week') {
            unitOfTime = 24
        }
        if (this.interval === 'month') {
            unitOfTime = 24
        }
        return this.totalColumns * unitOfTime
    }

    get totalColumns() {
        if (!this.start && !this.end) {
            return 0
        }

        const range = dateRange(this.start, this.end, this.interval)
        return range.length
    }
    /**
     * The relationship between 1px and the datetime it represents.
     * We need a way to map individual pixels to a particular time, so that
     * if the playhead or an event is positioned at 120px visually, we can determine
     * what exact time that represents.
     */
    get pxToTimeRatio() {
        if (this.interval === 'hour') {
            return this.columnWidth / 60 // for hours.
        }

        if (this.interval === 'minute') {
            return this.columnWidth / 1 // for minutes.
        }

        if (this.interval === 'day') {
            return this.columnWidth / 24 //tbd
        }
        // same as for days

        if (this.interval === 'week') {
            return this.columnWidth / 24 //seems ok
        }

        if (this.interval === 'month') {
            return this.columnWidth / 24 //seems ok
        }

        return 2
    }

    get formattedCurrentTime() {
        if (this.playhead) {
            return format(new Date(this.playhead), 'MM/dd/Y HH:mm:ss')
        } else {
            return null
        }
    }

    initializeTracks() {
        const tracks = [...this.el.children].filter(
            (el) => el.tagName.toLowerCase() === 'rux-track'
        ) as HTMLRuxTrackElement[]

        // handle start/end timeline for boundaries for month/week
        let useStartEndDates: {
            timelineStart: Date
            timelineEnd: Date
        } = getStartEndDateForInterval(this.start, this.end, this.interval)

        tracks.map((el) => {
            el.width = this.width
            el.columns = this.columns
            if (this.hasPlayedIndicator) {
                el.playhead = this.playhead
            } else {
                el.playhead = null
            }

            el.interval = this.interval
            el.start = useStartEndDates.timelineStart.toISOString()
            el.end = useStartEndDates.timelineEnd.toISOString()
        })
    }

    /**
     * Give it a position (in pixels) and get the time that represents
     */
    // private _calculateTimeFromPlayhead(position: any) {
    //     // this.playheadPositionInPixels = position - 2

    //     const time = position - 200

    //     const min = time / this.pxToTimeRatio

    //     let newTime = new Date()
    //     if (this.interval === 'hour') {
    //         newTime = addMinutes(new Date(this.start), min)
    //     }

    //     if (this.interval === 'day') {
    //         /**
    //          * If the interval is day, we need to round the start/end times to the start of the day
    //          * Ie you passing 01/01/2020 06:00 as the start, the timeline needs to start at 00
    //          */

    //         const start = startOfDay(new Date(this.start))
    //         newTime = addHours(start, min)
    //     }

    //     return newTime
    // }

    /**
     * Give it a time, get where it should be positioned visually (in pixels)
     */
    private _calculatePlayheadFromTime(time: any) {
        if (!time) return
        // handle start/end timeline for boundaries for month/week
        let useStartEndDates: {
            timelineStart: Date
            timelineEnd: Date
        } = getStartEndDateForInterval(this.start, this.end, this.interval)
        if (
            new Date(time) < useStartEndDates.timelineStart ||
            new Date(time) > useStartEndDates.timelineEnd
        ) {
            console.warn(
                `Playhead date must be between ${useStartEndDates.timelineStart.toISOString()} - ${useStartEndDates.timelineEnd.toISOString()}`
            )
        }

        const timeAsDate = new Date(time)

        // Calculate time difference based on timezone handling
        let newTime: number

        if (this.timezone === 'UTC') {
            // For UTC timezone, use explicit UTC time calculations to avoid any local timezone interference
            const timelineStartMs = useStartEndDates.timelineStart.getTime()
            const playheadTimeMs = timeAsDate.getTime()
            const diffMs = Math.abs(playheadTimeMs - timelineStartMs)

            if (this.interval === 'day') {
                newTime = diffMs / (1000 * 60 * 60) // Convert to hours
            } else if (this.interval === 'week') {
                newTime = diffMs / (1000 * 60 * 60 * 7) // Convert to hours then divide by 7
            } else {
                newTime = diffMs / (1000 * 60) // Convert to minutes (default case)
            }
        } else {
            // For non-UTC timezones, use timezone-aware date-fns functions
            const timelineStart = utcToZonedTime(
                useStartEndDates.timelineStart,
                this.timezone
            )
            const playheadTime = utcToZonedTime(timeAsDate, this.timezone)

            if (this.interval === 'day') {
                newTime = Math.abs(
                    differenceInHours(timelineStart, playheadTime)
                )
            } else if (this.interval === 'week') {
                newTime =
                    Math.abs(differenceInHours(timelineStart, playheadTime)) / 7
            } else {
                newTime = Math.abs(
                    differenceInMinutes(timelineStart, playheadTime)
                )
            }
        }

        if (this.interval === 'month') {
            // For a month, the timeline starts on the first of the month
            // This code allows us to take into account the varying length of each month.
            if (this.timezone === 'UTC') {
                // For UTC, use the original dates directly
                const monthStart = getBeginningOfMonth(
                    useStartEndDates.timelineStart,
                    0
                )
                const numMonths = Math.abs(
                    differenceInMonths(monthStart, timeAsDate)
                )
                const extraDays = timeAsDate.getDate() - 1
                const daysInCurrentMonth = daysInMonth(timeAsDate)
                const extraHours = timeAsDate.getHours()
                newTime =
                    (numMonths +
                        (extraDays + extraHours / 24) / daysInCurrentMonth) *
                        this.columnWidth +
                    200
            } else {
                // For non-UTC timezones, use timezone-converted dates
                const timelineStart = utcToZonedTime(
                    useStartEndDates.timelineStart,
                    this.timezone
                )
                const playheadTime = utcToZonedTime(timeAsDate, this.timezone)
                const monthStart = getBeginningOfMonth(timelineStart, 0)
                const numMonths = Math.abs(
                    differenceInMonths(monthStart, playheadTime)
                )
                const extraDays = playheadTime.getDate() - 1
                const daysInCurrentMonth = daysInMonth(playheadTime)
                const extraHours = playheadTime.getHours()
                newTime =
                    (numMonths +
                        (extraDays + extraHours / 24) / daysInCurrentMonth) *
                        this.columnWidth +
                    200
            }
            return newTime
        }

        const result = newTime * this.pxToTimeRatio + 200

        return result
    }

    /**
     * For debugging
     */
    private _handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()

        const scrollOffset = this.timelineContainer
            ? this.timelineContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        if (position >= 200) {
            // this.playheadPositionInPixels = position - scrollOffset
            // const time = this._calculateTimeFromPlayhead(position)
            // this.playhead = time.toISOString()
        }
    }

    private _handleSlotChange() {
        this._updateRegions()
    }

    /**
     * Syncs the Timeline's current interval and pxToTimeRatio to it's children and grandchildren
     * We're taking a props down, events up approach to data flow here.
     */
    private _updateRegions() {
        const slot = this.slotContainer?.querySelectorAll(
            'slot'
        )[0] as HTMLSlotElement

        if (slot) {
            const tracks = [
                ...(slot
                    ?.assignedElements({ flatten: true })
                    .filter(
                        (node: any) =>
                            node.tagName.toLowerCase() === 'rux-track'
                    ) as [HTMLRuxTrackElement]),
            ]

            let useStartEndDates: {
                timelineStart: Date
                timelineEnd: Date
            } = getStartEndDateForInterval(this.start, this.end, this.interval)

            tracks.map((el: HTMLRuxTrackElement) => {
                el.width = this.width
                el.columns = this.columns

                if (this.hasPlayedIndicator) {
                    el.playhead = this.playhead
                } else {
                    el.playhead = null
                }
                el.interval = this.interval
                el.start = useStartEndDates.timelineStart.toISOString()
                el.end = useStartEndDates.timelineEnd.toISOString()
                el.timezone = this.timezone
            })
        }

        const rulerSlot = this.rulerContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement

        const rulerTrack = rulerSlot
            ?.assignedElements({ flatten: true })
            .find(
                (el: any) => el.tagName.toLowerCase() === 'rux-track'
            ) as HTMLRuxTrackElement

        if (rulerTrack) {
            let useStartEndDates: {
                timelineStart: Date
                timelineEnd: Date
            } = getStartEndDateForInterval(this.start, this.end, this.interval)

            rulerTrack.width = this.width
            rulerTrack.columns = this.columns

            rulerTrack.interval = this.interval
            rulerTrack.start = useStartEndDates.timelineStart.toISOString()
            rulerTrack.end = useStartEndDates.timelineEnd.toISOString()
            const rulerEl = [...rulerTrack.children].find(
                (el: any) => el.tagName.toLowerCase() === 'rux-ruler'
            ) as HTMLRuxRulerElement

            if (rulerEl) {
                validateTimezone(this.timezone).then(() => {
                    rulerEl.timezone = this.timezone
                })
                // pass any relative props to rux-ruler element
                rulerEl.start = useStartEndDates.timelineStart.toISOString()
                rulerEl.end = useStartEndDates.timelineEnd.toISOString()
                rulerEl.interval = this.interval
                rulerEl.rulerPosition = this.rulerPosition
                rulerEl.showSecondaryRuler = this.showSecondaryRuler
                rulerEl.hideJDay = this.hideJDay
            }
        }
    }

    private _setZoom() {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 120
        }
        if (this.interval === 'month') {
            unitOfTime = 120
        }
        if (this.interval === 'week') {
            unitOfTime = 120
        }

        if (isNaN(this.zoom)) {
            this.zoom = 1
        }

        // this change allows the developers to zoom more tightly if desired.
        if (this.zoom > 0) {
            this.columnWidth = Math.floor(this.zoom * unitOfTime)
        }
    }

    _handleScroll() {
        // #TODO Maybe throttle this event w/ requestAnimationFrame?
        const scrollOffset = this.timelineContainer
            ? this.timelineContainer?.scrollTop
            : 0
        this.playheadHeight = scrollOffset

        const leftOffset = this.timelineContainer
            ? this.timelineContainer?.scrollLeft
            : 0
        this.showPlayhead = leftOffset + 200 <= this.playheadPositionInPixels
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-timeline': true,
                        'ruler-position__top': this.rulerPosition === 'top',
                        'ruler-position__bottom':
                            this.rulerPosition === 'bottom',
                        'ruler-position__both': this.rulerPosition === 'both',
                    }}
                    onMouseMove={(ev) => this._handleMouse(ev)}
                    onScroll={() => this._handleScroll()}
                    ref={(el) => (this.timelineContainer = el)}
                    part="time-region-container"
                >
                    {this.playhead && (
                        <div
                            class={{
                                'rux-playhead': true,
                                hidden: !this.showPlayhead,
                            }}
                            part="playhead"
                            style={{
                                top: `${this.playheadHeight}px`,
                                left: `${this.playheadPositionInPixels}px`,
                            }}
                        ></div>
                    )}
                    {
                        //* If we need a second ruler, create one here.
                        this.rulerPosition === 'both' ? (
                            <rux-track
                                slot="ruler"
                                interval={this.interval}
                                timezone={this.timezone}
                                start={this.start}
                                end={this.end}
                                width={this.width}
                                columns={this.columns}
                                playhead={this.playhead}
                            >
                                <rux-ruler
                                    interval={this.interval}
                                    start={this.start}
                                    end={this.end}
                                    timezone={this.timezone}
                                    rulerPosition={this.rulerPosition}
                                    showSecondaryRuler={this.showSecondaryRuler}
                                    isSecondary
                                    hideJDay={this.hideJDay}
                                ></rux-ruler>
                            </rux-track>
                        ) : null
                    }

                    <div class="events" ref={(el) => (this.slotContainer = el)}>
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </div>
                    <div class="ruler" ref={(el) => (this.rulerContainer = el)}>
                        <slot name="ruler"></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
