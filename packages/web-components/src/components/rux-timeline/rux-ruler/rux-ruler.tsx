import { Prop, Component, Element, Host, h, Fragment } from '@stencil/core'
import { differenceInDays, endOfMonth, format, getDaysInMonth } from 'date-fns'
import { dateRange as getRange } from '../helpers'
import { formatInTimeZone } from 'date-fns-tz'
@Component({
    tag: 'rux-ruler',
    styleUrl: 'rux-ruler.scss',
    shadow: true,
})
export class RuxRuler {
    @Element() el!: HTMLRuxRulerElement
    /**
     * @internal The Timeline's interval. Set automatically from the parent Timeline component
     */
    @Prop() interval: any = ''
    /**
     * @internal The Timeline's start date. Set automatically from the parent Timeline component
     */
    @Prop() start: string = ''
    /**
     * @internal The Timeline's end date. Set automatically from the parent Timeline component
     */
    @Prop() end: string = ''

    /**
     * @internal - The Ruler's time zone. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) timezone = 'UTC'

    /**
     * Display the day (MM/DD) at 00:00. Only works when Timeline interval is set to 'hour' or 'minutes'.
     */
    @Prop({ attribute: 'show-start-of-day' }) showStartOfDay? = false

    get dateRange() {
        return getRange(
            new Date(this.start),
            new Date(this.end),
            this.interval,
            1,
            this.timezone
        )
    }

    getColumn(index: number) {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }
        // same as for days
        if (this.interval === 'week') {
            unitOfTime = 24
        }
        if (this.interval === 'month') {
            unitOfTime = 24
        }

        const start = unitOfTime * index + 2
        const end = start + unitOfTime
        return `${unitOfTime * index + 2} / ${end}`
    }

    getWeekColumn(index: number) {
        let unitOfTime = 60 // hour and minutes interval of columns
        let intervalOfTime = unitOfTime * 24 // by default assume hours 24hours in a day
        if (this.interval === 'minute') {
            intervalOfTime = intervalOfTime * 60 // interval * minutes * hours for minutes
        }
        const start = unitOfTime * index + 2
        const end = start + intervalOfTime

        return `${unitOfTime * index + 2} / ${end}`
    }

    getMonthColumn(index: number) {
        const date = this.dateRange[index][1] as Date
        let unitOfTime = 24 // day/week/month grid unit
        let intervalOfTime = unitOfTime * getDaysInMonth(date)
        if (this.interval === 'week') {
            const endofMonthDate: Date = endOfMonth(date)
            const daysBetween: number = differenceInDays(endofMonthDate, date)
            /**
             * days between the first day shown of the month and the last day of the month
             * divided by days in a week
             */
            intervalOfTime = unitOfTime * Math.ceil(daysBetween / 7)
        }
        const start = unitOfTime * index + 2
        const end = start + intervalOfTime

        return `${unitOfTime * index + 2} / ${end}`
    }

    getYearColumn(index: number) {
        let unitOfTime = 24 // day/week/month grid unit
        let intervalOfTime = unitOfTime * 12 // 12 months in a year
        const start = unitOfTime * index + 2
        const end = start + intervalOfTime

        return `${unitOfTime * index + 2} / ${end}`
    }

    getPartialDay() {
        let partialDay = {
            end: -1,
            date: this.dateRange[0][1],
        }
        /**
         * If this.firsNewDay exists it means that there is the start of a day within the date range
         * so we need to find where it starts and backfill the previous day to the start day
         */
        if (this.firstNewDay) {
            //Set Last Column
            let unitOfTime = 60
            if (this.interval === 'minute') {
                unitOfTime = unitOfTime * 60
            }
            const prevDay = this.dateRange[this.firstNewDay - 1]
            const end = unitOfTime * this.firstNewDay! + 2
            partialDay = {
                end,
                date: prevDay[1],
            }
        }

        /**
         * Otherwise there is not the start of a day
         * within the timeine so we can make the partial
         * date take up the full width of the timeline.
         */
        return (
            <span
                class="ruler-new-day-display"
                style={{
                    gridRow: '2',
                    gridColumn: `2 / ${partialDay.end}`,
                }}
            >
                <span>{partialDay.date}</span>
            </span>
        )
    }

    timePattern = /^00:00+$/
    monthPattern = /^[0-1][0-9]\/01/
    yearPattern = /^01\/([0-3][0-9])/

    secondaryRuler(time: string, newDay: string, index: number) {
        if (!this.showStartOfDay) return null
        if (
            ['hour', 'minute'].includes(this.interval) &&
            this.shouldShowDate(time)
        ) {
            return (
                <span
                    class="ruler-new-day-display"
                    style={{
                        gridRow: '2',
                        gridColumn: this.getWeekColumn(index),
                    }}
                >
                    <span>{newDay}</span>
                </span>
            )
        }
        if (
            ['day', 'week'].includes(this.interval) &&
            this.shouldShowMonth(time, index)
        )
            return (
                <span
                    class="ruler-new-day-display"
                    style={{
                        gridRow: '2',
                        gridColumn: this.getMonthColumn(index),
                    }}
                >
                    <span>
                        {formatInTimeZone(
                            this.dateRange[index][1] as Date,
                            this.timezone,
                            'MMMM'
                        )}
                    </span>
                </span>
            )

        if (['month'].includes(this.interval) && this.shouldShowYear(time)) {
            if (!this.firstNewYear) this.firstNewYear = index
            return (
                <span
                    class="ruler-new-day-display"
                    style={{
                        gridRow: '2',
                        gridColumn: this.getYearColumn(index),
                    }}
                >
                    <span>
                        {format(this.dateRange[index][1] as Date, 'yyyy')}
                    </span>
                </span>
            )
        }
        return null
    }

    shouldShowDate(time: string) {
        return this.timePattern.test(time)
    }

    shouldShowMonth(time: string, index: number) {
        if (this.interval === 'day') {
            return this.monthPattern.test(time)
        }
        if (this.interval === 'week') {
            if (index === 0) return false
            const currentWeek = (this.dateRange[index][0] as string).slice(0, 3)
            const prevWeek = (this.dateRange[index - 1][0] as string).slice(
                0,
                3
            )
            if (prevWeek !== currentWeek && !this.firstNewWeek)
                this.firstNewWeek = index
            return prevWeek !== currentWeek
        }
        return false
    }

    shouldShowYear(time: string) {
        return this.yearPattern.test(time)
    }

    private firstNewDay: number | undefined
    private firstNewWeek: number | undefined
    private firstNewYear: number | undefined
    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map(
                        ([time, newDayDate]: any, index: any) => {
                            const newDay = this.timePattern.test(time)
                                ? newDayDate
                                : ''
                            if (newDay !== '' && !this.firstNewDay)
                                this.firstNewDay = index
                            return (
                                <Fragment>
                                    <span
                                        key={index}
                                        class={{
                                            'ruler-time': true,
                                            'ruler-new-day-cell': this.shouldShowDate(
                                                time
                                            ),
                                            'has-date-scroll':
                                                (this.showStartOfDay &&
                                                    ['hour', 'minute'].includes(
                                                        this.interval
                                                    )) ||
                                                false,
                                        }}
                                        style={{
                                            gridRow: '1',
                                            gridColumn: this.getColumn(index),
                                        }}
                                    >
                                        {time}
                                    </span>
                                    {this.secondaryRuler(time, newDay, index)}
                                </Fragment>
                            )
                        }
                    )}
                </div>
            </Host>
        )
    }
}
