import { Element, Prop, Component, State, Host, h } from '@stencil/core'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { differenceInDays, differenceInHours } from 'date-fns/esm'
import format from 'date-fns/format'
import { MyService } from '../MyServiceController'

@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    // private ruxTrack: HTMLRuxTrackElement | null = null
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

    // @State() startOffset = 0
    // @State() endOffset = 0
    @State() startDate: any
    @State() endDate: any
    componentWillLoad() {
        this.startDate = new Date(this.start)
        this.endDate = new Date(this.end)
        this.ruxTimeline = this.el?.closest('rux-timeline')

        // if (length < 60) {

        // this.startOffset = start.getMinutes() * this.ratio
        // this.endOffset = end.getMinutes() * this.ratio

        // MyService.getData().then(r => {
        //     console.log('res', r)
        // })
        // }

        // console.log('region track', this.track)
        // this.ruxTrack = this.el.closest('rux-track')
        // console.log('track', this.ruxTrack);
        // const id = this.ruxTrack?.getAttribute('track-id')
        // if (!id) {
        // console.log('no id', this.ruxTrack?.trackId)
        // }
        // console.log('id', id);
        // this.track = id ? id : '1'
    }

    get startOffset() {
        if (this.interval === 'hour') {
            return this.startDate.getMinutes() * this.ratio
        }
        if (this.interval === 'day') {
            return this.startDate.getHours() * this.ratio
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

    // get ratio() {
    //     if (this.ruxTimeline.interval === 'hour') {
    //         return this.ruxTimeline.zoom / 60 // for hours.
    //     }

    //     if (this.ruxTimeline.interval === 'day') {
    //         return this.ruxTimeline.zoom / 120 //tbd
    //     }
    //     return 2
    // }

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
        // console.log('dif', difference);

        // const date = new Date(time)
        // const form = format(date, 'HH')
        // console.log('form', form);

        // // return new Date(time).getHours() + 2
        // return +form + 2
        // return +time.substring(0, 2) + 2
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
