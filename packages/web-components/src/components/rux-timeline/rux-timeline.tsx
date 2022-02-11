import {
    Watch,
    Element,
    State,
    Method,
    Component,
    Host,
    h,
    Prop,
} from '@stencil/core'
import {
    // addHours,
    // addMinutes,
    differenceInMinutes,
    // startOfDay,
    differenceInHours,
    format,
} from 'date-fns'
import { dateRange } from './helpers'
@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private slotContainer?: HTMLElement
    private rulerContainer?: HTMLElement
    public slots?: any = 'empty'
    @Element() el!: HTMLRuxTimelineElement

    @State() playheadPositionInPixels = 200
    @State() columnWidth = 120

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
    @Prop({ reflect: true, mutable: true }) position?: string

    /**
     * The timeline's date time interval
     */
    @Prop() interval: 'hour' | 'day' = 'hour'

    @Watch('position')
    syncPlayhead() {
        if (this.position) {
            const time = this._calculatePlayheadFromTime(this.position)
            if (time) {
                this.playheadPositionInPixels = time
            }
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
    handleChange() {
        this._updateRegions()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleMouse = this._handleMouse.bind(this)
        this.syncPlayhead = this.syncPlayhead.bind(this)
    }
    componentWillLoad() {
        this._setZoom()
        this.initializeTracks()
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
        if (this.position) {
            return format(new Date(this.position), 'MM/dd/Y HH:mm:ss')
        } else {
            return null
        }
    }

    /**
     * Slotted tracks need to render in the order they are provided in markup
     * Because they load asynchronously, we need a better way to set their row in the grid
     */
    initializeTracks() {
        const tracks = [...this.el.children].filter(
            (el) => el.tagName.toLowerCase() === 'rux-track'
        ) as HTMLRuxTrackElement[]

        tracks.forEach((el, index) => {
            el.track = ++index
            el.width = this.width
            el.columns = this.columns
        })
    }

    /**
     * Give it a position (in pixels) and get the time that represents
     */
    // private _calculateTimeFromPlayhead(position: any) {
    //     this.playheadPositionInPixels = position - 2

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
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        if (position >= 200) {
            // const time = this._calculateTimeFromPlayhead(position)
            // this.position = time.toISOString()
        } else {
            // this.playheadPositionInPixels = 200
        }
    }

    private _handleSlotChange() {
        this.initializeTracks()
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

        const tracks = [
            ...(slot
                ?.assignedElements({ flatten: true })
                .filter(
                    (node: any) => node.tagName.toLowerCase() === 'rux-track'
                ) as [HTMLRuxTrackElement]),
        ]

        tracks.map((track: any) => {
            const regions = [...track.children].filter(
                (el: any) => el.tagName.toLowerCase() === 'rux-time-region'
            ) as HTMLRuxTimeRegionElement[]

            regions.map((region) => {
                region.ratio = this.pxToTimeRatio
                region.interval = this.interval
                region.timelineStart = this.start
                const isValid = this._validateTimeRegion(
                    region.start,
                    region.end
                )

                if (!isValid) {
                    console.log('Invalid Region', region)
                    region.style.visibility = 'hidden'
                }
            })

            const ruler = [...track.children].find(
                (el: any) => el.tagName.toLowerCase() === 'rux-ruler'
            ) as HTMLRuxRulerElement
            if (ruler) {
                ruler.startDate = this.start
                ruler.endDate = this.end
                ruler.interval = this.interval
            }
        })

        const rulerSlot = this.rulerContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement
        const rulerTrack = rulerSlot
            ?.assignedElements({ flatten: true })
            .find((el: any) => el.tagName.toLowerCase() === 'rux-track')
        if (rulerTrack) {
            const rulerEl = [...rulerTrack.children].find(
                (el: any) => el.tagName.toLowerCase() === 'rux-ruler'
            ) as HTMLRuxRulerElement
            if (rulerEl) {
                rulerEl.startDate = this.start
                rulerEl.endDate = this.end
                rulerEl.interval = this.interval
            }
        }
    }

    private _validateTimeRegion(start: any, end: any) {
        if (!this.start) {
            return false
        }

        if (!this.end) {
            return false
        }

        return (
            new Date(start) >= new Date(this.start) &&
            new Date(end) <= new Date(this.end)
        )
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

    @Method()
    async fetchColumns() {
        /**
         * #TODO Temp
         * Used for debugging only so that rux-track can know how many debug cells to render.
         */
        return this.columns
    }

    render() {
        return (
            <Host>
                <div
                    class="rux-timeline"
                    onMouseMove={(ev) => this._handleMouse(ev)}
                    style={{
                        gridTemplateColumns: `[header] 200px repeat(${this.columns}, ${this.width}px)`,
                    }}
                >
                    {this.position && (
                        <div
                            class="rux-playhead"
                            part="playhead"
                            style={{
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
