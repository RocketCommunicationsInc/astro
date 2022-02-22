import { Element, State, Component, Prop, Host, h, Watch } from '@stencil/core'
import { differenceInMinutes, differenceInHours } from 'date-fns'

@Component({
    tag: 'rux-track',
    styleUrl: 'rux-track.scss',
    shadow: true,
})
export class RuxTrack {
    @Element() el!: HTMLRuxTrackElement
    @State() timelineColumns = 0

    @Prop({ reflect: true }) track?: number = 0
    @Prop({ reflect: true }) width = 0
    @Prop({ reflect: true }) columns = 0

    @Prop({ reflect: true }) timelineStart: any
    @Prop({ reflect: true }) interval: any
    @Prop({ reflect: true }) start: any
    @Prop({ reflect: true }) end: any

    @Watch('start')
    @Watch('end')
    @Watch('timelineStart')
    @Watch('interval')
    handleUpdate() {
        this.initializeRows()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentWillLoad() {
        this.initializeRows()

        const timeline = this.el.closest('rux-timeline')

        timeline?.fetchColumns().then((r) => {
            this.timelineColumns = r
        })
    }

    calculateGridColumnFromTime(time: any) {
        if (this.timelineStart) {
            const timelineStart = new Date(this.timelineStart)

            if (this.interval === 'hour') {
                const difference = Math.abs(
                    differenceInMinutes(timelineStart, new Date(time))
                )

                return difference + 2
            }

            if (this.interval === 'day') {
                const difference = Math.abs(
                    differenceInHours(timelineStart, new Date(time))
                )

                return difference + 2
            }
        }
        return 0
    }

    private _validateTimeRegion(start: any, end: any) {
        if (!this.start) {
            throw new Error('Time Region must have a start date provided')
        }

        if (!this.end) {
            throw new Error('Time Region must have a end date provided')
        }

        if (new Date(start) > new Date(end)) {
            throw new RangeError(
                `The Time Region start date must be before the end date: ${start} - ${end}`
            )
        }

        if (new Date(start) < new Date(this.start)) {
            throw new RangeError(
                `The Time Region start date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`
            )
        }

        if (new Date(start) > new Date(this.end)) {
            throw new RangeError(
                `The Time Region start date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`
            )
        }

        if (new Date(end) > new Date(this.end)) {
            throw new RangeError(
                `The Time Region end date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`
            )
        }

        if (new Date(start) < new Date(this.end)) {
            throw new RangeError(
                `The Time Region end date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`
            )
        }

        return true
    }

    initializeRows() {
        const childNodes = this.el.childNodes
        const children = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )

        children.forEach((el) => {
            el.style.gridRow = 1
            const gridColumn = `${this.calculateGridColumnFromTime(
                el.start
            )} / ${this.calculateGridColumnFromTime(el.end)}`
            el.style.gridColumn = gridColumn
        })
    }

    private _handleSlotChange() {
        //TODO
    }

    renderDebug() {
        return (
            <div style={{ display: 'contents' }}>
                {[...Array(this.timelineColumns)].map((_: any, i: any) => (
                    <div
                        style={{
                            gridRow: `${this.track}`,
                            gridColumn: `${i + 2} / ${++i + 2}`,
                        }}
                        class={{
                            cell: true,
                            marker: i % 60 === 0,
                        }}
                        part="cell"
                    ></div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <Host>
                <div
                    class="rux-timeline rux-track"
                    style={{
                        gridTemplateColumns: `[header] 200px repeat(${this.columns}, ${this.width}px)`,
                    }}
                    part="container"
                >
                    <div
                        class="rux-track__header"
                        style={{
                            gridRow: '1',
                        }}
                    >
                        <slot name="label"></slot>
                    </div>

                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
                {/* {this.renderDebug()} */}
            </Host>
        )
    }
}
