import { Component, Element, Fragment, Host, Prop, h } from '@stencil/core'
import {
    differenceInDays,
    endOfMonth,
    getDayOfYear,
    getDaysInMonth,
    getYear,
} from 'date-fns'

import { formatInTimeZone } from 'date-fns-tz'
import { dateRange as getRange } from '../helpers'

type Position = 'top' | 'bottom' | 'both'
type Variant = 'primary' | 'secondary'
type Type = 'date' | 'time'

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
     * @internal - The position of the ruler, either top bottom or both. This denotes if the new-day span is rendered
     * on top or bottom within the ruler.
     */
    @Prop({ attribute: 'ruler-position', reflect: true }) rulerPosition:
        | 'top'
        | 'bottom'
        | 'both' = 'both'

    /**
     * @internal Display a secondary ruler which shows one level up from the current interval. IE: Days for Hours, Months for Days, etc. Set by the parent Timeline component.
     */
    @Prop({ attribute: 'show-secondary-ruler' }) showSecondaryRuler? = false

    /**
     * Display the day (MM/DD) at 00:00. Only works when Timeline interval is set to 'hour' or 'minutes'.
     */
    @Prop({ attribute: 'show-start-of-day' }) showStartOfDay? = false

    /**
     * @internal - determines if the ruler is part of a top and bottom pair of rulers. If so,
     * the styling needs to be slightly different.
     */
    @Prop() isSecondary: boolean = false

    //a "map" that allows us to tell which grid-row a given ruler section should be.
    positionMap: Record<Type, Record<Variant, Record<Position, string>>> = {
        date: {
            primary: { top: '1', bottom: '2', both: '2' },
            secondary: { top: '1', bottom: '2', both: '1' },
        },
        time: {
            primary: { top: '2', bottom: '1', both: '1' },
            secondary: { top: '2', bottom: '1', both: '2' },
        },
    }

    get dateRange() {
        return getRange(
            new Date(this.start),
            new Date(this.end),
            this.interval,
            1,
            this.timezone
        )
    }

    getPosition(type: Type, variant: Variant, position: Position) {
        return this.positionMap[type]?.[variant]?.[position]
    }

    getColumn(index: number) {
        let unitOfTime = 60
        if (this.interval === 'minute') {
            this.timePattern = this.timePatterns['hour']
        }
        if (this.interval === 'hour') {
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
        const date = (this.dateRange[index][1] as unknown) as Date
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

    formatDate(input: string) {
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ]

        // Validate the input format using a regular expression
        const match = input.match(/^(\d{1,2})\/(\d{1,2})$/)
        if (!match) {
            throw new Error(
                `Invalid input format. Expected MM/DD, recieved: ${input}`
            )
        }

        // Extract and parse month and day
        const month = parseInt(match[1], 10)
        const day = match[2] // Already a string for padStart

        // Validate ranges
        if (month < 1 || month > 12) {
            throw new Error('Invalid month. Must be between 1 and 12.')
        }

        const paddedDay = day.padStart(2, '0') // Pad the day
        const monthName = monthNames[month - 1]
        const startYear = getYear(new Date(this.start))
        const endYear = getYear(new Date(this.end))
        let inputYear = startYear

        if (startYear !== endYear) {
            // If the start and end years are different, determine the correct year based on the input. This is important to get the correct Julian day.
            const startDate = new Date(`${startYear}-${month}-${paddedDay}`)
            const endDate = new Date(`${endYear}-${month}-${paddedDay}`)

            if (
                startDate >= new Date(this.start) &&
                startDate <= new Date(this.end)
            ) {
                inputYear = startYear
            } else if (
                endDate >= new Date(this.start) &&
                endDate <= new Date(this.end)
            ) {
                inputYear = endYear
            }
        }

        // Construct the full date string
        const fullDate = new Date(inputYear, month - 1, parseInt(paddedDay))
        const jday = getDayOfYear(fullDate).toString().padStart(3, '0')
        return `${paddedDay} ${monthName}/${jday}`
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
                    (this.dateRange[0][1] as unknown) as Date,
                    this.timezone,
                    'MMMM'
                )
            }
            if (this.interval === 'month') {
                text = formatInTimeZone(
                    (this.dateRange[0][1] as unknown) as Date,
                    this.timezone,
                    'yyyy'
                )
            }
            let returnText
            if (text && text.includes('/')) {
                returnText = this.formatDate(text)
            } else returnText = text
            return returnText
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
                    gridRow: this.isSecondary
                        ? this.getPosition(
                              'date',
                              'secondary',
                              this.rulerPosition
                          )
                        : this.getPosition(
                              'date',
                              'primary',
                              this.rulerPosition
                          ),
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
                (this.dateRange[index][1] as unknown) as Date,
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
                (this.dateRange[index][1] as unknown) as Date,
                this.timezone,
                'yyyy'
            )
        }

        if (textDisplay && textDisplay.includes('/')) {
            textDisplay = this.formatDate(textDisplay)
        }
        return gridColumn ? (
            <span
                class="ruler-new-day-display"
                style={{
                    gridRow: this.isSecondary
                        ? this.getPosition(
                              'date',
                              'secondary',
                              this.rulerPosition
                          )
                        : this.getPosition(
                              'date',
                              'primary',
                              this.rulerPosition
                          ),
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
                                            gridRow: this.isSecondary
                                                ? this.getPosition(
                                                      'time',
                                                      'secondary',
                                                      this.rulerPosition
                                                  )
                                                : this.getPosition(
                                                      'time',
                                                      'primary',
                                                      this.rulerPosition
                                                  ),
                                            gridColumn: this.getColumn(index),
                                        }}
                                    >
                                        {['day', 'month'].includes(
                                            this.interval
                                        )
                                            ? this.formatDate(time)
                                            : time}
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
