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
import { format, parse } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz/esm'
import {
    addHours,
    addMinutes,
    differenceInHours,
    startOfDay,
} from 'date-fns/esm'
import differenceInMinutes from 'date-fns/esm/fp/differenceInMinutes/index.js'
import { hasSlot } from '../../utils/utils'
import { dateRange } from './helpers'
@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private playheadContainer?: HTMLElement
    private slotContainer?: HTMLElement
    public slots?: any = 'empty'
    @State() newTime: any = ''
    @State() playheadPositionInPixels = 200
    @State() time = '00:00'
    @Element() el!: HTMLRuxTimelineElement
    @Prop() start = '2021-02-01T00:00:00Z'
    @Prop() end = '2021-02-10T00:00:00Z'
    @Prop() zoom = 120
    @Prop() interval: 'hour' | 'day' | 'month' = 'hour'

    @Watch('zoom')
    handleZoomChange() {
        const newMargin = this.calcPlayheadFromTime(this.newTime)
        this.playheadPositionInPixels = newMargin
        this.updateRegions()
    }

    @Watch('start')
    @Watch('end')
    handleStartChange() {
        this.updateRegions()
    }

    @Watch('playheadPositionInPixels')
    syncMargin() {
        const hasPlayed = hasSlot(this.el, 'playhead')
        if (hasPlayed) {
            const slot = this.playheadContainer?.querySelector(
                'slot'
            ) as HTMLSlotElement

            const assignedElements = slot
                .assignedElements({
                    flatten: true,
                })
                .filter(
                    (el) => el.tagName.toLowerCase() === 'rux-playhead'
                )[0] as HTMLRuxPlayheadElement
            assignedElements.time = this.playheadPositionInPixels
        }
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
    }
    componentWillLoad() {
        this.initializeTracks()
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
            return this.zoom / 60 // for hours.
        }

        if (this.interval === 'day') {
            return this.zoom / 24 //tbd
        }
        return 2
    }

    calcTimeFromPlayhead(position: any) {
        console.log('posss', position)
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
        const newTime = differenceInMinutes(
            new Date(this.start),
            new Date(time)
        )

        const result = newTime * this.pxToTimeRatio + 200

        return result
    }

    handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        if (position > 200) {
            console.log('position', position)
            this.calcTimeFromPlayhead(position)
        } else {
            this.playheadPositionInPixels = 200
        }
    }

    get formattedCurrentTime() {
        if (this.newTime) {
            return format(this.newTime, 'MM/dd/Y HH:mm:ss')
        } else {
            return null
        }
    }

    private _handleSlotChange(e: any) {
        // this.initializeTracks()
        this.updateRegions()
    }

    /**
     * Syncs the Timeline's current interval and ratio to it's children and grandchildren
     */
    updateRegions() {
        const slots = this.slotContainer?.querySelectorAll('slot')[1]
        const assignedNodes = slots?.assignedNodes({ flatten: true })
        let tracks = []
        if (assignedNodes) {
            tracks = assignedNodes.filter((node: any) => {
                return (
                    node.tagName && node.tagName.toLowerCase() === 'rux-track'
                )
            })

            tracks.map((track) => {
                const regions = Array.prototype.filter.call(
                    track.childNodes,
                    (node) => {
                        return (
                            node.nodeType == Node.ELEMENT_NODE &&
                            node.tagName === 'RUX-TIME-REGION'
                        )
                    }
                )

                regions.map((region) => {
                    region.ratio = this.pxToTimeRatio
                    region.interval = this.interval
                    const isValid = this.validateTimeRegion(
                        region.start,
                        region.end
                    )
                    console.log('region', region.classList)

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
                            node.tagName === 'RUX-RULER'
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
    }

    validateTimeRegion(start: any, end: any) {
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
        return this.zoom / unitOfTime
    }
    getColumns() {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }
        return this.totalColumns * unitOfTime
    }
    render() {
        return (
            <Host>
                <div
                    class="rux-timeline"
                    ref={(el) => (this.slotContainer = el)}
                    onMouseMove={(ev) => this.handleMouse(ev)}
                    style={{
                        gridTemplateColumns: `[header] 200px repeat(${this.getColumns()}, ${this.getWidth()}px)`,
                    }}
                >
                    <div ref={(el) => (this.playheadContainer = el)}>
                        <slot name="playhead"></slot>
                    </div>
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
                <div>The current time is {this.formattedCurrentTime}</div>
            </Host>
        )
    }
}
