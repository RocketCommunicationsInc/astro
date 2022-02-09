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
    addHours,
    addMinutes,
    differenceInMinutes,
    startOfDay,
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
    public slots?: any = 'empty'
    @Element() el!: HTMLRuxTimelineElement

    @State() newTime: any = ''
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
    @Prop({ reflect: true }) position?: string

    /**
     * The timeline's date time interval
     */
    @Prop() interval: 'hour' | 'day' = 'hour'

    @Watch('position')
    syncPlayhead() {
        if (this.position) {
            this.newTime = new Date(this.position)
            const time = this.calcPlayheadFromTime(this.position)
            if (time) {
                this.playheadPositionInPixels = time
            }
        }
    }

    @Watch('zoom')
    handleZoomChange() {
        this.setZoom()
        const newMargin = this.calcPlayheadFromTime(this.newTime)

        if (newMargin) {
            this.playheadPositionInPixels = newMargin
        }
        this.updateRegions()
    }

    @Watch('start')
    @Watch('end')
    handleStartChange() {
        // if (this.start && this.end) {
        this.updateRegions()
        // }
    }

    @Watch('interval')
    handleIntervalChange() {
        this.updateRegions()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
        this.syncPlayhead = this.syncPlayhead.bind(this)
    }
    componentWillLoad() {
        this.setZoom()
        this.initializeTracks()
        this.syncPlayhead()
    }

    initializeTracks() {
        const childNodes = this.el.childNodes
        const children = Array.prototype.filter.call(childNodes, (node) => {
            return (
                node.nodeType == Node.ELEMENT_NODE &&
                node.tagName === 'RUX-TRACK'
            )
        })

        children.forEach((el, index) => {
            el.track = ++index
        })
    }

    get totalColumns() {
        if (!this.start && !this.end) {
            return 0
        }

        const range = dateRange(this.start, this.end, this.interval)
        if (range) {
            return range.length
        } else {
            return 0
        }
    }
    /**
     * The relationship between 1px and the datetime it represents.
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

    calcTimeFromPlayhead(position: any) {
        this.playheadPositionInPixels = position - 2

        const time = position - 200

        const min = time / this.pxToTimeRatio

        let newTime = new Date()
        if (this.interval === 'hour') {
            newTime = addMinutes(new Date(this.start), min)
        }

        if (this.interval === 'day') {
            /**
             * If the interval is day, we need to round the start/end times to the start of the day
             * Ie you passing 01/01/2020 06:00 as the start, the timeline needs to start at 00
             */

            const start = startOfDay(new Date(this.start))
            newTime = addHours(start, min)
        }

        this.newTime = newTime
    }

    calcPlayheadFromTime(time: any) {
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

    handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        if (position >= 200) {
            // this.calcTimeFromPlayhead(position)
        } else {
            // this.playheadPositionInPixels = 200
        }
    }

    get formattedCurrentTime() {
        if (this.newTime) {
            return format(this.newTime, 'MM/dd/Y HH:mm:ss')
        } else {
            return null
        }
    }

    private _handleSlotChange() {
        // this.initializeTracks()
        this.updateRegions()
    }

    getChildElement(nodes: any, needle: any) {
        return [
            ...nodes
                ?.assignedElements({ flatten: true })
                .filter((node: any) => node.tagName.toLowerCase() === needle),
        ]
    }

    /**
     * Syncs the Timeline's current interval and ratio to it's children and grandchildren
     */
    updateRegions() {
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
            const regions = Array.prototype.filter.call(
                track.childNodes,
                (node) => {
                    return (
                        node.nodeType == Node.ELEMENT_NODE &&
                        node.tagName.toLowerCase() === 'rux-time-region'
                    )
                }
            )

            regions.map((region) => {
                region.ratio = this.pxToTimeRatio
                region.interval = this.interval
                region.timelineStart = this.start
                const isValid = this.validateTimeRegion(
                    region.start,
                    region.end
                )

                if (!isValid) {
                    console.log('Invalid Region', region)
                    region.style.visibility = 'hidden'
                }
            })

            const ruler = Array.prototype.filter.call(
                track.childNodes,
                (node) => {
                    return (
                        node.nodeType == Node.ELEMENT_NODE &&
                        node.tagName.toLowerCase() === 'rux-ruler'
                    )
                }
            )
            if (ruler.length) {
                ruler[0].startDate = this.start
                ruler[0].endDate = this.end
                ruler[0].interval = this.interval
            }
        })
    }

    validateTimeRegion(start: any, end: any) {
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

    getWidth() {
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

    setZoom() {
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
                    ref={(el) => (this.slotContainer = el)}
                    onMouseMove={(ev) => this.handleMouse(ev)}
                    style={{
                        gridTemplateColumns: `[header] 200px repeat(${
                            this.columns
                        }, ${this.getWidth()}px)`,
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

                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
            </Host>
        )
    }
}
