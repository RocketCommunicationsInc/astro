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
import { dateRange } from './helpers'

@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
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
        // const current = utcToZonedTime(this.newTime, 'utc')
        // console.log('cur', current);

        const oldRatio = newValue / 60
        const newRatio = this.zoom / 60
        console.log('old', oldRatio)
        console.log('new', newRatio)

        const newMargin = this.calcPlayheadFromTime(this.newTime, oldRatio)
        console.log('newMarg', newMargin)
        this.margin = newMargin

        // this.margin = 500
    }

    @Watch('start')
    @Watch('end')
    handleStartChange() {
        this.calcDiff()
        console.log('start changed')
    }
    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
    }
    componentWillLoad() {
        const diff = this.calcDiff()
        console.log('diff', diff)

        console.log('timelinechildnodes', this.el.childNodes)
        const childNodes = this.el.childNodes
        const children = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )

        children.forEach((el, index) => {
            //@ts-ignore
            el.track = ++index
        })
        // this._handleSlotChange()

        window.setInterval(() => {
            // this.margin = this.margin + 2
            //   console.log(this.margin);
        }, 1000)

        const { width } = this.el.getBoundingClientRect()
        console.log('current width', width)
    }

    @Method()
    async getTotalColumns() {
        const start = new Date(this.start)
        const end = new Date(this.end)
        return differenceInHours(start, end)
    }

    calcDiff() {
        const start = new Date(this.start)
        const end = new Date(this.end)
        const test = dateRange(this.start, this.end, this.interval)
        this.totalCol = test.length
        console.log('test', test)

        // this.totalCol = -differenceInHours(start, end)
    }

    get ratio() {
        if (this.interval === 'hour') {
            return this.zoom / 60 // for hours.
        }

        if (this.interval === 'day') {
            return this.zoom / 120 //tbd
        }
        return 2
    }

    calcTimeFromPlayhead(position: any) {
        this.margin = position
        const time = position - 200

        const min = time / this.ratio

        console.log('time', min)
        let intervalValue = 60
        if (this.interval === 'day') {
        }
        const start = utcToZonedTime(this.start, 'utc')
        const newTime = addMinutes(start, min)
        const newTimeFormatted = format(newTime, 'MM/dd/Y HH:mm:ss')
        this.newTime = newTime

        const hours = Math.floor(min / intervalValue)
        const minutes = Math.floor(min % intervalValue)

        // const hour = Math.floor(min / 60)
        console.log(`${hours}:${minutes}`)
        return `${hours}:${minutes}`
    }

    calcPlayheadFromTime(time: any, ratio?: any) {
        if (!ratio) {
            ratio = this.ratio
        }

        const start = utcToZonedTime(this.start, 'utc')
        const targetTime = utcToZonedTime(time, 'utc')
        const newTime = differenceInMinutes(start, targetTime)
        console.log('newtime', newTime)
        console.log('ratio', ratio)

        return (newTime + 200) * ratio - 200
    }

    handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()
        console.log('scrollleft', this.slotContainer?.scrollLeft)
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        // if (e.clientY <= 234) { // ignore scrollbar

        if (position > 200) {
            console.log('pos', position)

            this.time = this.calcTimeFromPlayhead(position)
        } else {
            this.margin = 200
        }
        // }
    }
    get theSlots() {
        return this.slots
    }

    get formattedCurrentTime() {
        if (this.newTime) {
            return format(this.newTime, 'MM/dd/Y HH:mm:ss')
        } else {
            return null
        }
    }

    private _handleSlotChange() {
        const slot = this.slotContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement

        const assignedElements = slot.assignedElements({
            flatten: true,
        }) as HTMLElement[]
        this.slots = assignedElements
        //@ts-ignore
        assignedElements.map((el, index) => {
            //@ts-ignore
            // el.trackId = ++index
            // el.setAttribute('track-id', 10)
        })
    }
    goToMin() {
        const marg = this.calcPlayheadFromTime('2021-02-01T01:30:00Z')

        this.margin = marg
    }
    render() {
        return (
            <Host>
                <div class="border">
                    {this.totalCol}
                    <button onClick={() => this.goToMin()}>go</button>
                    <div
                        class="rux-timeline"
                        ref={(el) => (this.slotContainer = el)}
                        onMouseMove={(ev) => this.handleMouse(ev)}
                        style={{
                            gridTemplateColumns: `[header] 200px repeat(${this.totalCol}, ${this.zoom}px)`,
                        }}
                    >
                        <div
                            class="rux-playhead"
                            style={{ left: `${this.margin}px` }}
                        ></div>
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </div>
                    <div>The current time is {this.time}</div>
                    {this.formattedCurrentTime}
                </div>
            </Host>
        )
    }
}
