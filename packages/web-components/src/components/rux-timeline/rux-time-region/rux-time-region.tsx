import { Element, Prop, Component, State, Host, h } from '@stencil/core'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { differenceInDays, differenceInHours } from 'date-fns/esm'
import format from 'date-fns/format'

@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    private ruxTimeline: any
    @Element() el!: HTMLRuxTimeRegionElement
    /**
     * The start time
     */
    @Prop() start: any
    /**
     * The end time
     */
    @Prop() end: any

    /**
     * The label
     */
    @Prop() label?: string

    /**
     * The track
     */
    @Prop() track: string = '1'
    @Prop({ reflect: true }) ratio = 2
    @Prop({ reflect: true }) interval = 'hour'
    @State() startDate: any
    @State() endDate: any
    componentWillLoad() {
        this.startDate = new Date(this.start)
        this.endDate = new Date(this.end)
        this.ruxTimeline = this.el?.closest('rux-timeline')
    }

    get startOffset() {
        if (this.interval === 'hour') {
            return this.startDate.getMinutes() * this.ratio
        }
        if (this.interval === 'day') {
            return this.startDate.getHours() * this.ratio
            // return 0
        }

        return 0
    }

    get endOffset() {
        if (this.interval === 'hour') {
            return this.endDate.getMinutes() * this.ratio
        }

        if (this.interval === 'day') {
            return this.endDate.getHours() * this.ratio
        }

        return 0
    }

    calculateGridColumnFromTime(time: any) {
        const timelineStart = new Date(this.ruxTimeline.start)

        if (this.interval === 'hour') {
            const difference = Math.abs(
                differenceInHours(timelineStart, new Date(time))
            )

            return difference + 2
        }

        if (this.interval === 'day') {
            const difference = Math.abs(
                differenceInDays(timelineStart, new Date(time))
            )

            return difference + 2
        }
        return 0
    }

    render() {
        return (
            <Host>
                <div
                    part="container"
                    class="rux-time-region"
                    style={{
                        gridRow: `${this.track}`,
                        gridColumn: `${this.calculateGridColumnFromTime(
                            this.start
                        )} / ${this.calculateGridColumnFromTime(this.end)}`,
                        marginLeft: `${this.startOffset}px`,
                        marginRight: `-${this.endOffset}px`,
                    }}
                >
                    <div class="rux-time-region__content">
                        <slot></slot>
                    </div>
                    <div class="rux-time-region__datetime">
                        {format(new Date(this.start), 'HH:mm')} -{' '}
                        {format(new Date(this.end), 'HH:mm')}
                    </div>
                </div>
            </Host>
        )
    }
}
