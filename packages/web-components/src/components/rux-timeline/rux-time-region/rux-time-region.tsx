import { Element, Prop, Component, State, Host, h } from '@stencil/core'
import { differenceInMinutes, format, differenceInHours } from 'date-fns'

@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    @Element() el!: HTMLRuxTimeRegionElement
    /**
     * The start time
     */
    @Prop({ reflect: true }) start: any
    /**
     * The end time
     */
    @Prop({ reflect: true }) end: any

    /**
     * The label
     */
    @Prop() label?: string

    /**
     * Optionally hide the bottom right timestamp.
     */
    @Prop({ attribute: 'hide-timestamp' }) hideTimestamp = false

    /**
     * The track
     */
    @Prop() track: string = '1'
    @Prop({ reflect: true }) ratio = 2
    @Prop({ reflect: true }) interval = 'hour'
    @State() startDate: any
    @State() endDate: any
    @Prop() timelineStart: any
    componentWillLoad() {
        this.startDate = new Date(this.start)
        this.endDate = new Date(this.end)
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

    render() {
        return (
            <Host>
                <div
                    part="container"
                    class="rux-time-region"
                    style={{
                        gridRow: '1',
                        gridColumn: `${this.calculateGridColumnFromTime(
                            this.start
                        )} / ${this.calculateGridColumnFromTime(this.end)}`,
                    }}
                >
                    <div class="rux-time-region__content">
                        <slot></slot>
                    </div>
                    {!this.hideTimestamp ? (
                        <div class="rux-time-region__datetime">
                            {format(new Date(this.start), 'HH:mm')} -{' '}
                            {format(new Date(this.end), 'HH:mm')}
                        </div>
                    ) : null}
                </div>
            </Host>
        )
    }
}
