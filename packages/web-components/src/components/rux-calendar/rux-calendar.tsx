/* eslint-disable react/jsx-no-bind */
import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Listen,
    Prop,
    State,
    Watch,
    h,
} from '@stencil/core'
import { getMonthValueByName, months } from '../rux-datetime-picker/utils'

import { DayInfo } from './rux-day/rux-day'
import { Precision } from '../rux-datetime-picker/utils/types'

@Component({
    tag: 'rux-calendar',
    styleUrl: 'rux-calendar.scss',
    shadow: true,
})
export class RuxCalendar {
    @Element() el!: HTMLRuxCalendarElement
    private hourInput!: HTMLRuxInputElement
    private minuteInput!: HTMLRuxInputElement
    private secondsInput!: HTMLRuxInputElement
    private millisecondInput!: HTMLRuxInputElement
    @Prop() iso: string = ''
    @Prop() minYear: number = 1900
    @Prop() maxYear: number = 2100
    /**
     * Determines the precision of the time picker down to milliseconds. When the calendar is within a rux-datepicker, the precision is set from
     * the datepicker component.
     */
    @Prop() precision: Precision = 'min'
    @Event({ eventName: 'ruxcalendardateselected' })
    ruxCalendarDateSelected!: EventEmitter<{ iso: string }>

    @State() month: string = ''
    @State() year: string = ''
    @State() days: {
        day: string
        currentMonth: boolean
        isToday: boolean
    }[] = []
    @State() currentDay: string = ''

    private years: number[] = []

    @Watch('iso')
    handleIso() {
        this.setDates()
    }

    @Watch('month')
    @Watch('year')
    @Watch('days')
    handleDatesChange() {
        // console.log('dates change')
    }

    @Listen('ruxdayselected')
    handleDaySelected(event: CustomEvent) {
        const detail: DayInfo = event.detail
        //get all rux-day's associated with this element
        const days = this.el.shadowRoot?.querySelectorAll('rux-day')
        //loop through the days and set the selected attribute to true for the day that was clicked
        days?.forEach((day) => {
            if (day !== detail.element) {
                day.selected = false
            } else {
                day.selected = true
            }
        })
        const selectedDay = detail.dayNumber
        const year = parseInt(this.year)
        const month = parseInt(getMonthValueByName(this.month)!) - 1 // Convert month name to month number
        const hours = parseInt(this.hourInput?.value || '0')
        const minutes = parseInt(this.minuteInput?.value || '0')
        const seconds = parseInt(this.secondsInput?.value || '0')
        const milliseconds = parseInt(this.millisecondInput?.value || '0')
        console.log(hours, 'hours')
        // Create the date with the time values
        const date = new Date(
            Date.UTC(
                year,
                month,
                parseInt(selectedDay),
                hours,
                minutes,
                seconds,
                milliseconds
            )
        )
        const isoString = date.toISOString()
        console.log('ISO String:', isoString)

        //TODO: Add time picker values to the isoString
        // Emit an event with the new ISO string value
        this.ruxCalendarDateSelected.emit({ iso: isoString })
    }

    connectedCallback() {
        this.handleForwardMonth = this.handleForwardMonth.bind(this)
        this.handleBackwardMonth = this.handleBackwardMonth.bind(this)
        if (!this.iso) {
            this.iso = new Date().toISOString()
        }
        //assign the current date in UTC time
        this.currentDay = new Date().toISOString()
        this.setDates()
    }

    setDates() {
        const date = new Date(this.iso)
        const year = date.getUTCFullYear()
        const month = date.getUTCMonth()
        const firstDayOfMonth = new Date(Date.UTC(year, month, 1)).getUTCDay()
        const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()

        // Get today's date in UTC
        const today = new Date()
        const todayYear = today.getUTCFullYear()
        const todayMonth = today.getUTCMonth()
        const todayDate = today.getUTCDate()

        // Calculate the number of days to display from the previous month
        const daysInPrevMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
        const prevMonthDays = Array.from(
            { length: firstDayOfMonth },
            (_, i) => ({
                day: (daysInPrevMonth - firstDayOfMonth + i + 1).toString(),
                currentMonth: false,
                isToday: false,
            })
        )

        // Calculate the days in the current month
        const currentMonthDays = Array.from(
            { length: daysInMonth },
            (_, i) => ({
                day: (i + 1).toString(),
                currentMonth: true,
                isToday:
                    year === todayYear &&
                    month === todayMonth &&
                    i + 1 === todayDate,
            })
        )

        // Calculate the number of days to display from the next month
        const totalDays = prevMonthDays.length + currentMonthDays.length
        const nextMonthDays = Array.from(
            { length: 42 - totalDays },
            (_, i) => ({
                day: (i + 1).toString(),
                currentMonth: false,
                isToday: false,
            })
        )

        // Combine all days to display
        this.days = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]

        this.month = date.toLocaleString('default', {
            month: 'long',
            timeZone: 'UTC',
        })
        this.year = year.toString()
        this.setYears()
    }

    setYears() {
        this.years = Array.from(
            { length: this.maxYear - this.minYear + 1 },
            (_, i) => this.minYear + i
        )
    }

    handleForwardMonth = () => {
        const date = new Date(this.iso)
        date.setUTCMonth(date.getUTCMonth() + 1)
        this.iso = date.toISOString()
    }
    handleBackwardMonth = () => {
        const date = new Date(this.iso)
        date.setUTCMonth(date.getUTCMonth() - 1)
        this.iso = date.toISOString()
    }

    handleMonthChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        const month = months.find((month) => month.value === target.value)
        if (month) {
            const date = new Date(this.iso)
            date.setUTCMonth(parseInt(month.value) - 1)
            this.iso = date.toISOString()
        }
    }
    handleYearChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        //We know value will be of type string because we're not using a multiselect for year
        const value = target.value as string
        const date = new Date(this.iso)
        date.setUTCFullYear(parseInt(value))
        this.iso = date.toISOString()
    }

    determineIfDateIsPastOrFuture(date: Date) {
        const dateToWorkWith = new Date(this.iso)
        if (dateToWorkWith < date) {
            return 'future'
        } else if (dateToWorkWith > date) {
            return 'past'
        } else {
            return 'present'
        }
    }

    render() {
        const { handleForwardMonth, handleBackwardMonth } = this
        return (
            <Host>
                <div class="rux-calendar">
                    <div class="rux-calendar-header">
                        <rux-button
                            borderless
                            icon="chevron-left"
                            size="small"
                            onClick={handleBackwardMonth}
                        ></rux-button>
                        <div class="select-wrapper">
                            <rux-select
                                value={getMonthValueByName(this.month)}
                                inline
                                onRuxchange={(e: CustomEvent) =>
                                    this.handleMonthChange(e)
                                }
                            >
                                {months.map((month) => (
                                    <rux-option
                                        value={month.value}
                                        label={month.label}
                                    ></rux-option>
                                ))}
                            </rux-select>
                            <rux-select
                                value={this.year}
                                inline
                                onRuxchange={(e: CustomEvent) =>
                                    this.handleYearChange(e)
                                }
                            >
                                {this.years.map((year) => (
                                    <rux-option
                                        value={year.toString()}
                                        label={year.toString()}
                                    ></rux-option>
                                ))}
                            </rux-select>
                        </div>
                        <rux-button
                            borderless
                            icon="chevron-right"
                            size="small"
                            onClick={handleForwardMonth}
                        ></rux-button>
                    </div>
                    <div class="rux-calendar-weekdays">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                    </div>

                    <div class="rux-calendar-days">
                        {this.days.map((day) => (
                            <rux-day
                                dayNumber={day.day}
                                isPastFutureDay={!day.currentMonth}
                                isToday={day.isToday}
                                isPastDay={
                                    this.determineIfDateIsPastOrFuture(
                                        new Date(
                                            parseInt(this.year),
                                            parseInt(
                                                getMonthValueByName(this.month)!
                                            ) - 1,
                                            parseInt(day.day)
                                        )
                                    ) === 'past'
                                }
                                isFutureDay={
                                    this.determineIfDateIsPastOrFuture(
                                        new Date(
                                            parseInt(this.year),
                                            parseInt(
                                                getMonthValueByName(this.month)!
                                            ) - 1,
                                            parseInt(day.day)
                                        )
                                    ) === 'future'
                                }
                            ></rux-day>
                        ))}
                    </div>
                    <div class="rux-calendar-timepicker">
                        <div class="timepicker-hours">
                            <rux-input
                                type="number"
                                min="0"
                                max="23"
                                placeholder="hh"
                                ref={(el) =>
                                    (this.hourInput = el as HTMLRuxInputElement)
                                }
                            />
                            <span>:</span>
                        </div>
                        <div class="timepicker-min">
                            <rux-input
                                type="number"
                                min="0"
                                max="59"
                                placeholder="mm"
                                ref={(el) =>
                                    (this.minuteInput = el as HTMLRuxInputElement)
                                }
                            />
                            <span>:</span>
                        </div>
                        {
                            //only show if precision is set to seconds or miliseconds
                            this.precision === 'sec' ||
                                (this.precision === 'ms' && (
                                    <div class="timepicker-sec">
                                        <rux-input
                                            type="number"
                                            min="0"
                                            max="59"
                                            placeholder="ss"
                                            ref={(el) =>
                                                (this.secondsInput = el as HTMLRuxInputElement)
                                            }
                                        />
                                        <span>:</span>
                                    </div>
                                ))
                        }
                        {this.precision === 'ms' && (
                            <div class="timepicker-ms">
                                <rux-input
                                    type="number"
                                    min="0"
                                    max="999"
                                    placeholder="SSS"
                                    ref={(el) =>
                                        (this.millisecondInput = el as HTMLRuxInputElement)
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Host>
        )
    }
}
