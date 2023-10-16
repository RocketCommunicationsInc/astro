import { Watch, Element, State, Component, Host, h, Prop } from '@stencil/core'
import {
    // addHours,
    // addMinutes,
    differenceInMinutes,
    // startOfDay,
    differenceInHours,
    format,
} from 'date-fns'
import { dateRange } from './helpers'
import { validateTimezone } from './helpers'

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
    @Prop() interval: 'hour' | 'day' = 'hour'

    /**
     * Controls the timezone that the timeline is localized to. Must be an IANA time zone name ("America/New_York") or an offset string.
     */
    @Prop() timezone = 'UTC'

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

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleMouse = this._handleMouse.bind(this)
        this.syncPlayhead = this.syncPlayhead.bind(this)
        this._updateRegions = this._updateRegions.bind(this)
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
        return this.columnWidth / unitOfTime
    }
    get columns() {
        let unitOfTime = 60
        if (this.interval === 'day') {
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

        if (this.interval === 'day') {
            return this.columnWidth / 24 //tbd
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

        tracks.map((el) => {
            el.width = this.width
            el.columns = this.columns
            if (this.hasPlayedIndicator) {
                el.playhead = this.playhead
            } else {
                el.playhead = null
            }

            el.interval = this.interval
            el.start = this.start
            el.end = this.end
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
        if (
            new Date(time) < new Date(this.start) ||
            new Date(time) > new Date(this.end)
        ) {
            throw new RangeError(
                `Playhead date must be between ${new Date(
                    this.start
                ).toISOString()} - ${new Date(this.end).toISOString()}`
            )
        }

        let newTime = Math.abs(
            differenceInMinutes(new Date(this.start), new Date(time))
        )

        if (this.interval === 'day') {
            newTime = Math.abs(
                differenceInHours(new Date(this.start), new Date(time))
            )
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

            tracks.map((el: HTMLRuxTrackElement) => {
                el.width = this.width
                el.columns = this.columns

                if (this.hasPlayedIndicator) {
                    el.playhead = this.playhead
                } else {
                    el.playhead = null
                }
                el.interval = this.interval
                el.start = this.start
                el.end = this.end
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
            rulerTrack.width = this.width
            rulerTrack.columns = this.columns

            rulerTrack.interval = this.interval
            rulerTrack.start = this.start
            rulerTrack.end = this.end
            const rulerEl = [...rulerTrack.children].find(
                (el: any) => el.tagName.toLowerCase() === 'rux-ruler'
            ) as HTMLRuxRulerElement

            if (rulerEl) {
                validateTimezone(this.timezone).then(() => {
                    rulerEl.timezone = this.timezone
                })

                rulerEl.start = this.start
                rulerEl.end = this.end
                rulerEl.interval = this.interval
            }
        }
    }

    private _setZoom() {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24 * 5
        }

        if (this.zoom >= 1) {
            this.columnWidth = this.zoom * unitOfTime
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
                    class="rux-timeline"
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
