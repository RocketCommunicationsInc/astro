
import { LitElement, html, css } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

import {
    differenceInDays,
    endOfMonth,
    getDayOfYear,
    getDaysInMonth,
    getYear,
} from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { dateRange as getRange } from '../helpers' // Assuming this path is correct relative to the Lit component

type Position = 'top' | 'bottom' | 'both'
type Variant = 'primary' | 'secondary'
type Type = 'date' | 'time'

export class RuxRuler extends LitElement {
    // --- Stencil @Element() el!: HTMLRuxRulerElement is not directly needed in LitElement,
    // --- as `this` refers to the element itself.

    /**
     * @internal The Timeline's interval. Set automatically from the parent Timeline component
     */
    @property({ type: String }) interval: any = ''
    /**
     * @internal The Timeline's start date. Set automatically from the parent Timeline component
     */
    @property({ type: String }) start: string = ''
    /**
     * @internal The Timeline's end date. Set automatically from the parent Timeline component
     */
    @property({ type: String }) end: string = ''

    /**
     * @internal - The Ruler's time zone. Set automatically from the parent Timeline component.
     */
    @property({ type: String, reflect: true }) timezone = 'UTC'

    /**
     * @internal - The position of the ruler, either top bottom or both. This denotes if the new-day span is rendered
     * on top or bottom within the ruler.
     */
    @property({ type: String }) rulerPosition: 'top' | 'bottom' | 'both' = 'both'

    /**
     * @internal Display a secondary ruler which shows one level up from the current interval. IE: Days for Hours, Months for Days, etc. Set by the parent Timeline component.
     */
    @property({ type: Boolean }) showSecondaryRuler? = false

    /**
     * Display the day (MM/DD) at 00:00. Only works when Timeline interval is set to 'hour' or 'minutes'.
     * @deprecated This property is deprecated and will be removed in the next major release. Please use the `show-secondary-ruler` property on the rux-timeline component instead.
     */
    @property({ type: Boolean, attribute: 'show-start-of-day' }) showStartOfDay? = false

    /**
     * @internal - determines if the ruler is part of a top and bottom pair of rulers. If so,
     * the styling needs to be slightly different.
     */
    @property({ type: Boolean }) isSecondary: boolean = false

    /**
     * @internal used to hide j-day in secondary ruler
     */
    @property({ type: Boolean }) hideJDay: boolean = false

    // State property for internal data that triggers re-renders
    @state() private firstFullIncrement: string | undefined

    // a "map" that allows us to tell which grid-row a given ruler section should be.
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

    // LitElement uses `static styles` for defining component styles
    static styles = css`
        /* Styles from rux-ruler.scss go here */
        :host {
            display: flex;
            position: relative;
            z-index: 1;
        }

        .rux-ruler {
            display: grid;
            grid-template-rows: var(--grid-row-template, 1fr 1fr);
            width: 100%;
            grid-column-gap: 1px;
            overflow: hidden;
            font-size: var(--ruler-font-size);
            color: var(--ruler-text-color);
            line-height: var(--line-height-proportional-md);
        }

        .ruler-time {
            padding: var(--spacing-0-25) var(--spacing-0-5);
            background-color: var(--ruler-background-color);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: right;
            border-left: var(--ruler-border-left);
            border-bottom: var(--ruler-border-bottom);
        }

        .ruler-new-day-display {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--ruler-background-color);
            border-left: var(--ruler-border-left);
            border-bottom: var(--ruler-border-bottom);
            font-size: var(--font-size-2);
            padding: var(--spacing-0-25) var(--spacing-0-5);
        }

        /* Specific styles for isSecondary ruler */
        :host([issecondary]) .rux-ruler {
            border-bottom: none;
            border-top: var(--border-width-1) solid var(--color-border-accent-2);
        }

        /* Adjust border for bottom ruler */
        :host([ruler-position='bottom']) .ruler-time {
            border-top: var(--ruler-border-top);
            border-bottom: none;
        }

        :host([ruler-position='bottom']) .ruler-new-day-display {
            border-top: var(--ruler-border-top);
            border-bottom: none;
        }
    `

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
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        // Regex now supports MM/DD or MM/DD/YY
        const match = input.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2}))?$/)

        if (!match) {
            throw new Error(
                `Invalid input format. Expected MM/DD or MM/DD/YY, received: ${input}`
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

        //If interval is month, we want the entire month name. If not, we just need the abbreviated month name.
        const monthName =
            this.interval !== 'month'
                ? monthNames[month - 1].slice(0, 3)
                : monthNames[month - 1]
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
        if (this.interval === 'month') return `${monthName}`
        if (this.hideJDay) return `${paddedDay} ${monthName}`
        else return `${paddedDay} ${monthName}/${jday}`
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
            this.firstFullIncrement = undefined // Reset after use, assuming it's consumed
        }

        /**
         * Otherwise there is not the start of a day
         * within the timeine so we can make the partial
         * date take up the full width of the timeline.
         */

        return html`
            <span
                class="ruler-new-day-display"
                style=${styleMap({
                    gridRow: this.isSecondary
                        ? this.getPosition('date', 'secondary', this.rulerPosition)
                        : this.getPosition('date', 'primary', this.rulerPosition),
                    gridColumn: `2 / ${partialIncrement}`,
                    display: Number(partialIncrement) === 2 ? 'none' : undefined,
                })}
            >
                <span>${textContent}</span>
            </span>
        `
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
        return gridColumn
            ? html`
                  <span
                      class="ruler-new-day-display"
                      style=${styleMap({
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
                      })}
                  >
                      <span>${textDisplay}</span>
                  </span>
              `
            : null
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

    // LitElement's equivalent of Stencil's componentDidLoad
    firstUpdated() {
        //add deprecation warning if show-start-of-day is being used
        if (this.showStartOfDay) {
            console.warn(
                'The show-start-of-day property is deprecated and will be removed in the next major release. Please use the show-secondary-ruler prop on the rux-timeline component instead.'
            )
        }
    }

    render() {
        return html`
            <div class="rux-ruler rux-track">
                ${this.dateRange.map(
                    ([time, newDayDate]: any, index: any) => {
                        let newDay
                        if (['hour', 'minute'].includes(this.interval)) {
                            newDay = this.timePattern.test(time)
                                ? newDayDate
                                : ''
                        }
                        return html`
                            <span
                                class=${classMap({
                                    'ruler-time': true,
                                    'ruler-new-day-cell':
                                        (this.showStartOfDay && this.shouldShow(time)) ||
                                        false,
                                    'has-date-scroll':
                                        (this.showStartOfDay &&
                                            ['hour', 'minute'].includes(this.interval)) ||
                                        false,
                                })}
                                style=${styleMap({
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
                                })}
                            >
                                ${['day', 'month'].includes(this.interval)
                                    ? this.formatDate(time)
                                    : time}
                            </span>
                            ${this.showSecondaryRuler
                                ? this.secondaryRuler(time, newDay, index)
                                : null}
                        `
                    }
                )}
                ${this.showSecondaryRuler ? this.getPartial() : null}
            </div>
        `
    }
}
