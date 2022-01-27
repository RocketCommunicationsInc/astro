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
import { addMinutes, differenceInHours } from 'date-fns/esm'
import differenceInMinutes from 'date-fns/esm/fp/differenceInMinutes/index.js'
import { hasSlot } from '../../utils/utils'
import { dateRange } from './helpers'
import { MyService } from './MyServiceController'
let id = 0
@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private inputId = `rux-input-${++id}`
    private playheadContainer?: HTMLElement
    private slotContainer?: HTMLElement
    public slots?: any = 'empty'
    @State() newTime: any = ''
    @State() margin = 200
    @State() time = '00:00'
    @Element() el!: HTMLRuxTimelineElement
    @Prop() start = '2021-02-01T00:00:00Z'
    @Prop() end = '2021-02-10T00:00:00Z'
    @Prop() totalCol: any = null
    @Prop() zoom = 120
    @Prop() interval: 'hour' | 'day' | 'month' = 'hour'

    @Watch('zoom')
    handleZoomChange(old: any, newValue: any) {
        const newMargin = this.calcPlayheadFromTime(this.newTime)
        this.margin = newMargin
        this.updateRegions()
    }

    @Watch('start')
    @Watch('end')
    handleStartChange() {
        this.calcDiff()
    }

    @Watch('margin')
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
            assignedElements.time = this.margin
        }
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
    }
    componentWillLoad() {
        this.calcDiff()
        this.initializeTracks()
        MyService.addData(this.inputId)
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

    calcDiff() {
        const test = dateRange(this.start, this.end, this.interval)
        this.totalCol = test.length
    }

    get ratio() {
        if (this.interval === 'hour') {
            return this.zoom / 60 // for hours.
        }

        if (this.interval === 'day') {
            return this.zoom / 20 //tbd
        }
        return 2
    }

    calcTimeFromPlayhead(position: any) {
        this.margin = position

        const time = position - 200

        const min = time / this.ratio

        let intervalValue = 60
        if (this.interval === 'day') {
        }
        // const start = utcToZonedTime(this.start, 'utc')
        const newTime = addMinutes(new Date(this.start), min)
        const newTimeFormatted = format(newTime, 'MM/dd/Y HH:mm:ss')
        this.newTime = newTime

        const hours = Math.floor(min / intervalValue)
        const minutes = Math.floor(min % intervalValue)

        return `${hours}:${minutes}`
    }

    calcPlayheadFromTime(time: any, ratio?: any) {
        if (!ratio) {
            ratio = this.ratio
        }

        const newTime = differenceInMinutes(
            new Date(this.start),
            new Date(time)
        )

        const result = newTime * ratio + 200

        return result
    }

    handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        // if (e.clientY <= 234) { // ignore scrollbar

        if (position > 200) {
            this.time = this.calcTimeFromPlayhead(position)
            // this.calcPlayheadFromTime(this.time)
        } else {
            this.margin = 200
        }
        // }
    }

    get formattedCurrentTime() {
        if (this.newTime) {
            return format(this.newTime, 'MM/dd/Y HH:mm:ss')
        } else {
            return null
        }
    }

    private _handleSlotChange(e: any) {
        this.updateRegions()

        const slot = this.slotContainer?.querySelector(
            'slot[name=""]'
        ) as HTMLSlotElement
        console.log('slots', slot)

        // const assignedElements = slot.assignedElements({
        //     flatten: true,
        // }) as HTMLElement[]
        // this.slots = assignedElements
        // //@ts-ignore
        // assignedElements.map((el, index) => {
        //     //@ts-ignore
        //     // el.trackId = ++index
        //     // el.setAttribute('track-id', 10)
        // })
    }

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
                    console.log('travk', track.childNodes)
                    //@ts-ignore
                    region.ratio = this.ratio
                    region.interval = this.interval
                })
            })
        }
    }
    goToMin() {
        const marg = this.calcPlayheadFromTime('2021-02-01T01:30:00Z')

        this.margin = marg
    }
    render() {
        return (
            <Host>
                <div class="border">
                    <button onClick={() => this.goToMin()}>go</button>
                    <div
                        class="rux-timeline"
                        ref={(el) => (this.slotContainer = el)}
                        onMouseMove={(ev) => this.handleMouse(ev)}
                        style={{
                            gridTemplateColumns: `[header] 200px repeat(${this.totalCol}, ${this.zoom}px)`,
                        }}
                    >
                        <div ref={(el) => (this.playheadContainer = el)}>
                            <slot name="playhead"></slot>
                        </div>
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </div>
                    <div>The current time is {this.formattedCurrentTime}</div>
                </div>
            </Host>
        )
    }
}
