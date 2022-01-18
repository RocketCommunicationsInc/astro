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
import { differenceInHours, differenceInMinutes } from 'date-fns/esm'

@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private slotContainer?: HTMLElement
    public slots?: any = 'empty'
    @State() margin = 200
    @State() time = '00:00'
    @Element() el!: HTMLRuxTimelineElement
    @Prop() start = '2021-02-01T00:00:00Z'
    @Prop() end = '2021-02-10T00:00:00Z'
    @Prop() totalCol: any = null

    @Watch('start')
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
        this.totalCol = -differenceInHours(start, end)
    }
    handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()
        console.log('scrollleft', this.slotContainer?.scrollLeft)
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset
        if (position > 200) {
            this.margin = position
            const time = position - 200

            const min = time / 2

            const hours = Math.floor(min / 60)
            const minutes = Math.floor(min % 60)

            // const hour = Math.floor(min / 60)
            console.log(`${hours}:${minutes}`)
            this.time = `${hours}:${minutes}`
        } else {
            this.margin = 200
        }
    }
    get theSlots() {
        return this.slots
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
    render() {
        return (
            <Host>
                <div class="border">
                    {this.totalCol}
                    <div
                        class="rux-timeline"
                        ref={(el) => (this.slotContainer = el)}
                        onMouseMove={(ev) => this.handleMouse(ev)}
                        style={{
                            gridTemplateColumns: `[header] 200px repeat(${
                                this.totalCol + 1
                            }, 120px)`,
                        }}
                    >
                        <div
                            class="rux-playhead"
                            style={{ left: `${this.margin}px` }}
                        ></div>
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </div>
                    <div>The current time is {this.time}</div>
                </div>
            </Host>
        )
    }
}
