import { Prop, Component, Element, Host, h, Fragment } from '@stencil/core'
import { differenceInDays, endOfMonth, getDaysInMonth } from 'date-fns'
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

    /**
     * Display a secondary ruler which shows one level up from the current interval. IE: Days for Hours, Months for Days, etc.
     */
    @Prop({ attribute: 'show-secondary-ruler' }) showSecondaryRuler? = false

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
        if (this.interval === 'minute'){
            this.timePattern = this.timePatterns['hour']
        }
        if (this.interval === 'hour'){
            this.timePattern = this.timePatterns['day']
        }
        if (['day', 'week'].includes(this.interval)) {
            unitOfTime = 24
            this.timePattern = this.timePatterns['month']
        }
        if (this.interval === 'month') {
            unitOfTime = 24
            this.timePattern = this.timePatterns['year']
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

    getPartial() {
        let partialIncrement: string = '-1'
        const getText = () => {
            let text: string = ''
            if (['minute', 'hour'].includes(this.interval)) {
                text = this.dateRange[0][1] as string
            }
            if (['day', 'week'].includes(this.interval)) {
                text = formatInTimeZone(
                    this.dateRange[0][1] as Date,
                    this.timezone,
                    'MMMM'
                )
            }
            if (this.interval === 'month') {
                text = formatInTimeZone(
                    this.dateRange[0][1] as Date,
                    this.timezone,
                    'yyyy'
                )
            }
            return text
        }
        const textContent = getText()

        /**
         * If this.firsFullIncrement exists it means that there is the start of a time increment within the date range
         * so we need to find where it starts and backfill the previous increment to the start of the new day
         */
        if (this.firstFullIncrement) {
            partialIncrement = this.firstFullIncrement
            this.firstFullIncrement = undefined
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
                    gridColumn: `2 / ${partialIncrement}`,
                    display:
                        Number(partialIncrement) === 2 ? 'none' : undefined,
                }}
            >
                <span>{textContent}</span>
            </span>
        )
    }

    timePatterns = {
        hour: /^00:00+$/,
        day: /^00:[0-5][0-9]+$/,
        month: /^[0-1][0-9]\/01/,
        year: /^01\/([0-3][0-9])/,
    }
    timePattern: RegExp = this.timePatterns['day']

    secondaryRuler(time: string, newDay: string, index: number) {
        let gridColumn
        let textDisplay = ''
        if (
            ['hour', 'minute'].includes(this.interval) &&
            this.shouldShow(time)
        ) {
            if (!this.firstFullIncrement)
                this.firstFullIncrement = this.getWeekColumn(index).split(
                    '/'
                )[0]
            gridColumn = this.getWeekColumn(index)
            textDisplay = newDay
        }
        if (
            (this.interval === 'day' && this.shouldShow(time)) ||
            (this.interval === 'week' && this.shouldShowMonth(index))
        ) {
            if (!this.firstFullIncrement) {
                this.firstFullIncrement = this.getMonthColumn(index).split(
                    '/'
                )[0]
            }
            gridColumn = this.getMonthColumn(index)
            textDisplay = formatInTimeZone(
                this.dateRange[index][1] as Date,
                this.timezone,
                'MMMM'
            )
        }

        if (['month'].includes(this.interval) && this.shouldShow(time)) {
            if (!this.firstFullIncrement)
                this.firstFullIncrement = this.getYearColumn(index).split(
                    '/'
                )[0]
            gridColumn = this.getYearColumn(index)
            textDisplay = formatInTimeZone(
                this.dateRange[index][1] as Date,
                this.timezone,
                'yyyy'
            )
        }

        return gridColumn ? (
            <span
                class="ruler-new-day-display"
                style={{
                    gridRow: '2',
                    gridColumn: gridColumn,
                }}
            >
                <span>{textDisplay}</span>
            </span>
        ) : null
    }

    /**
     * Returns boolean value when comparing hour minute day month against pattern
     */
    shouldShow(time: string) {
        return this.timePattern.test(time)
    }

    /**
     * month is a special case because there is no obvious
     * time pattern to tell when a new one happens, it has to
     * rely on the dates around it
     */
    shouldShowMonth(index: number) {
        if (this.interval === 'week') {
            if (index === 0) return false
            const currentWeek = (this.dateRange[index][0] as string).slice(0, 3)
            const prevWeek = (this.dateRange[index - 1][0] as string).slice(
                0,
                3
            )
            if (prevWeek !== currentWeek && !this.firstFullIncrement)
                this.firstFullIncrement = this.getMonthColumn(index).split(
                    '/'
                )[0]
            return prevWeek !== currentWeek
        }
        return false
    }

    private firstFullIncrement: string | undefined
    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map(
                        ([time, newDayDate]: any, index: any) => {
                            let newDay
                            if (['hour', 'minute'].includes(this.interval)) {
                                newDay = this.timePattern.test(time)
                                    ? newDayDate
                                    : ''
                            }
                            return (
                                <Fragment>
                                    <span
                                        key={index}
                                        class={{
                                            'ruler-time': true,
                                            'ruler-new-day-cell':
                                                (this.showStartOfDay &&
                                                    this.shouldShow(time)) ||
                                                false,
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
                                    {this.showSecondaryRuler
                                        ? this.secondaryRuler(
                                              time,
                                              newDay,
                                              index
                                          )
                                        : null}
                                </Fragment>
                            )
                        }
                    )}
                    {this.showSecondaryRuler ? this.getPartial() : null}
                </div>
            </Host>
        )
    }
}
