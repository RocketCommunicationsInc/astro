import { Prop, Component, Element, Host, h } from '@stencil/core'
import {
    format,
    addHours,
    differenceInHours,
    addDays,
    addMonths,
    differenceInDays,
    differenceInMonths,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz/esm'
import { dateRange as getRange } from '../helpers'

@Component({
    tag: 'rux-ruler',
    styleUrl: 'rux-ruler.scss',
    shadow: true,
})
export class RuxRuler {
    /**
     * The track
     */
    @Prop() track: string = '1'
    @Prop() totalColumns = 24
    @Prop() intervalIncrement = 1
    @Prop() interval: any = ''

    private _timeline: any
    @Element() el!: HTMLRuxRulerElement

    componentWillLoad() {
        const timeline = this.el?.closest('rux-timeline')
        // this.totalColumns = -timeline?.totalCol
        this._timeline = timeline
        // timeline?.getTotalColumns().then((r) => {
        //     this.totalColumns = -r
        // })
        this.totalColumns = timeline?.totalCol
        this.interval = timeline?.interval
        console.log('times', this.times)

        // const range = this.dateRange(new Date('2021-02-01T00:00:00Z'), new Date('2021-02-02T00:00:00Z'), 'hour')
    }

    get times() {
        const times = []
        for (let i = 0; i < this.totalColumns; i = i + this.intervalIncrement) {
            times.push((i < 10 ? '0' : '') + `${i}:00`)
        }
        return times
    }

    dateRange() {
        return getRange(
            this._timeline.start,
            this._timeline.end,
            this.interval,
            this.intervalIncrement
        )
    }

    render() {
        console.log('times', this.times)
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange().map((time, index) => (
                        <span
                            class={{
                                'ruler-time': true,
                                'ruler-time__first': index === 0,
                            }}
                            style={{ gridRow: `${this.track}` }}
                        >
                            {time}
                        </span>
                    ))}
                </div>
            </Host>
        )
    }
}
