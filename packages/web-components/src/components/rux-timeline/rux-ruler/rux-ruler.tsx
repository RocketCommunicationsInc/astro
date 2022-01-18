import { Prop, Component, Element, Host, h } from '@stencil/core'
import {
    format,
    addHours,
    differenceInHours,
    addDays,
    addMonths,
    differenceInDays,
    differenceInMonths,
    getDay,
} from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
import { utcToZonedTime } from 'date-fns-tz/esm'
import { groupBy } from 'lodash'

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
    @Prop() interval = 1

    private _timeline: any
    @Element() el!: HTMLRuxRulerElement

    componentWillLoad() {
        const timeline = this.el?.closest('rux-timeline')
        // this.totalColumns = -timeline?.totalCol
        this._timeline = timeline
        const time = timeline?.getTotalColumns().then((r) => {
            this.totalColumns = -r
        })
        console.log('times', this.times)
        console.log('daterange', this.dateRange('hour'))

        // const range = this.dateRange(new Date('2021-02-01T00:00:00Z'), new Date('2021-02-02T00:00:00Z'), 'hour')
    }

    get times() {
        const times = []
        for (let i = 0; i < this.totalColumns; i = i + this.interval) {
            times.push((i < 10 ? '0' : '') + `${i}:00`)
        }
        return times
    }

    dateRange(interval: any) {
        const startDate = new Date(this._timeline.start)
        const endDate = new Date(this._timeline.end)

        if (interval === 'day') {
            const days = differenceInDays(endDate, startDate)

            return [...Array(days + 1).keys()].map((i) => addDays(startDate, i))
        }

        if (interval === 'hour') {
            let days = differenceInHours(endDate, startDate)
            console.log('days', [...Array(days + 1).keys()])

            // //@ts-ignore
            // [...Array(days+1).keys()].reduce((a, c) => {
            //     //@ts-ignore
            //     a['test'] = c
            //     console.log('a', c);
            //     console.log('c', c);
            // }, {})

            days = days / this.interval

            const output = [...Array(days + 1).keys()].map((i) => {
                const time = addHours(startDate, i)
                const utcTime = utcToZonedTime(time, 'UTC')
                const formattedTime = format(utcTime, 'HH:mm')
                return formattedTime
            })

            //@ts-ignore
            // const grouped = groupBy(output, day => getDay(day))
            // console.log('grouped' ,grouped);

            return output
        }

        if (interval === 'month') {
            const months = differenceInMonths(endDate, startDate)

            return [...Array(months + 1).keys()].map((i) =>
                addMonths(startDate, i)
            )
        }
        return ['foo']
    }

    render() {
        console.log('times', this.times)
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange('hour').map((time, index) => (
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
