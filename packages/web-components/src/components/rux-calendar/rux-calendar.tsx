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
    private hourInput!: HTMLInputElement
    private minuteInput!: HTMLInputElement
    private secondsInput!: HTMLInputElement
    private millisecondInput!: HTMLInputElement
    @Prop({ mutable: true }) iso: string = ''
    @Prop() minYear: number = 1900
    @Prop() maxYear: number = 2100
    @Prop() initHoursValue: string = ''
    @Prop() initMinutesValue: string = ''
    @Prop() initSecondsValue: string = ''
    @Prop() initMillisecondsValue: string = ''
    /**
     * Determines the precision of the time picker down to milliseconds. When the calendar is within a rux-datepicker, the precision is set from
     * the datepicker component.
     */
    @Prop() precision: Precision = 'min'
    @Event({ eventName: 'ruxcalendardatetimeupdated' })
    ruxCalendarDateTimeUpdated!: EventEmitter<{ iso: string }>
    @Event({ eventName: 'datetimeupdated' })
    datetimeUpdated!: EventEmitter<{ iso: string }>

    @State() month: string = ''
    @State() year: string = ''
    @State() days: {
        day: string
        currentMonth: boolean
        isToday: boolean
        pastDay: boolean
        futureDay: boolean
    }[] = []
    @State() currentDay: string = ''
    @State() selectedDay: DayInfo | null = null

    private years: number[] = []

    @Watch('iso')
    handleIso() {
        this.setDates()
    }

    @Watch('month')
    handleMonthUpdate() {
        console.log('month change')
    }

    @Listen('ruxdayselected')
    handleDaySelected(event: CustomEvent) {
        const detail: DayInfo = event.detail
        this.selectedDay = detail
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

        const selectedDayNumber = detail.dayNumber
        let month = parseInt(getMonthValueByName(this.month)!) - 1 // Convert month name to month number
        if (detail.isFutureDay) {
            month = month + 1
        }
        if (detail.isPastDay) {
            month = month - 1
        }
        const iso = this.compileIso(month, parseInt(selectedDayNumber))
        this.ruxCalendarDateTimeUpdated.emit({ iso: iso })
    }

    private compileIso(month?: number, day?: number) {
        const year = parseInt(this.year)
        const hours = parseInt(this.hourInput?.value || '0')
        const minutes = parseInt(this.minuteInput?.value || '0')
        const seconds = parseInt(this.secondsInput?.value || '0')
        const milliseconds = parseInt(this.millisecondInput?.value || '0')
        const date = new Date(
            Date.UTC(
                year,
                month || parseInt(getMonthValueByName(this.month)!) - 1,
                day || parseInt(this.currentDay.split('T')[0].split('-')[2]),
                hours,
                minutes,
                seconds,
                milliseconds
            )
        )
        return date.toISOString()
    }

    connectedCallback() {
        this.handleForwardMonth = this.handleForwardMonth.bind(this)
        this.handleBackwardMonth = this.handleBackwardMonth.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        if (!this.iso) {
            this.iso = new Date().toISOString()
        } else {
            console.log('iso came in as', this.iso)
            //determine what the selected day is based on the iso string
        }
        //assign the current date in UTC time
        this.currentDay = new Date().toISOString()
        this.setDates()
    }
    private waitForRuxDays(): Promise<NodeListOf<HTMLRuxDayElement>> {
        return new Promise((resolve) => {
            const checkRuxDays = () => {
                const ruxDays = this.el.shadowRoot!.querySelectorAll('rux-day')
                if (ruxDays.length > 0) {
                    //return the days in an array
                    resolve(ruxDays)
                } else {
                    requestAnimationFrame(checkRuxDays)
                }
            }
            checkRuxDays()
        })
    }

    componentWillLoad() {
        if (!this.selectedDay) {
            // const ruxDays = this.waitForRuxDays().then((res) => res)
            this.waitForRuxDays().then((res) => {
                const ruxDays = res
                ruxDays.forEach((day) => {
                    if (day.selected) {
                        this.selectedDay = {
                            dayNumber: day.dayNumber,
                            isPastDay: day.isPastDay,
                            isFutureDay: day.isFutureDay,
                            element: day,
                            selected: day.selected,
                        }
                    } else {
                        //If no day is selected at this point, then the datepicker gave an initial ISO string.
                        // Need to find the day that matches the day in the ISO string
                        const date = new Date(this.iso)
                        const day = date.getUTCDate()
                        const dayNumber = day.toString()
                        const selectedDay = Array.from(ruxDays).find(
                            (day) => day.dayNumber === dayNumber
                        )
                        if (selectedDay) {
                            this.selectedDay = {
                                dayNumber: selectedDay.dayNumber,
                                isPastDay: selectedDay.isPastDay,
                                isFutureDay: selectedDay.isFutureDay,
                                element: selectedDay,
                                selected: selectedDay.selected,
                            }
                        }
                    }
                })
            })
        }
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
                pastDay: true,
                futureDay: false,
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
                pastDay: false,
                futureDay: false,
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
                futureDay: true,
                pastDay: false,
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

    handleTimeChange(
        el: HTMLInputElement,
        increment?: boolean,
        decrement?: boolean
    ) {
        //connect the rux-icons of the custom spinwheel to the correct input, and increment or decrement accordingly.
        if (el.value === '') {
            el.value = '0'
        }

        if (increment) {
            el.value = (parseInt(el.value) + 1).toString()
        }
        if (decrement) {
            el.value = (parseInt(el.value) - 1).toString()
        }
        //check if the value is within the min and max range
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max
        }

        // manually dispatch the change event. This is necessary because the input value is being updated
        //  programmatically via the arrows, and that doesn't
        // emit a change event by default.
        const event = new CustomEvent('change', { bubbles: true })
        el.dispatchEvent(event)
        //when the time changes, I need to emit an event that compiles the ISO according to the selected day and
        // time inputs values

        const iso = this.compileIso(
            undefined,
            parseInt(this.selectedDay!.dayNumber!)
        )
        this.ruxCalendarDateTimeUpdated.emit({ iso: iso })
    }

    render() {
        const {
            handleForwardMonth,
            handleBackwardMonth,
            handleTimeChange,
        } = this
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
                                isPastDay={day.pastDay}
                                isFutureDay={day.futureDay}
                                selected={
                                    this.selectedDay?.dayNumber === day.day
                                }
                            ></rux-day>
                        ))}
                    </div>
                    <div class="rux-calendar-timepicker">
                        <div class="timepicker-hours input">
                            <input
                                type="number"
                                min="0"
                                max="23"
                                placeholder="hh"
                                ref={(el) =>
                                    (this.hourInput = el as HTMLInputElement)
                                }
                                value={this.initHoursValue}
                                class="part"
                            />
                            <div class="inc-dec-arrows">
                                <rux-icon
                                    icon="arrow-drop-up"
                                    size="24px"
                                    onClick={() =>
                                        handleTimeChange(
                                            this.hourInput,
                                            true,
                                            false
                                        )
                                    }
                                ></rux-icon>
                                <rux-icon
                                    icon="arrow-drop-down"
                                    size="24px"
                                    onClick={() =>
                                        handleTimeChange(
                                            this.hourInput,
                                            false,
                                            true
                                        )
                                    }
                                ></rux-icon>
                            </div>
                            :
                        </div>
                        <div class="timepicker-min input">
                            <input
                                type="number"
                                min="0"
                                max="59"
                                placeholder="mm"
                                ref={(el) =>
                                    (this.minuteInput = el as HTMLInputElement)
                                }
                                value={this.initMinutesValue}
                                class="part"
                                onChange={() => console.log('change')}
                            />
                            <div class="inc-dec-arrows">
                                <rux-icon
                                    icon="arrow-drop-up"
                                    size="24px"
                                    onClick={() =>
                                        handleTimeChange(
                                            this.minuteInput,
                                            true,
                                            false
                                        )
                                    }
                                ></rux-icon>
                                <rux-icon
                                    icon="arrow-drop-down"
                                    size="24px"
                                    onClick={() =>
                                        handleTimeChange(
                                            this.minuteInput,
                                            false,
                                            true
                                        )
                                    }
                                ></rux-icon>
                            </div>
                            :
                        </div>
                        {
                            //only show if precision is set to seconds or miliseconds
                            this.precision === 'sec' ||
                                (this.precision === 'ms' && (
                                    <div class="timepicker-sec input">
                                        <input
                                            type="number"
                                            min="0"
                                            max="59"
                                            placeholder="ss"
                                            ref={(el) =>
                                                (this.secondsInput = el as HTMLInputElement)
                                            }
                                            value={this.initSecondsValue}
                                            class="part"
                                        />
                                        <div class="inc-dec-arrows">
                                            <rux-icon
                                                icon="arrow-drop-up"
                                                size="24px"
                                                onClick={() =>
                                                    handleTimeChange(
                                                        this.secondsInput,
                                                        true,
                                                        false
                                                    )
                                                }
                                            ></rux-icon>
                                            <rux-icon
                                                icon="arrow-drop-down"
                                                size="24px"
                                                onClick={() =>
                                                    handleTimeChange(
                                                        this.secondsInput,
                                                        false,
                                                        true
                                                    )
                                                }
                                            ></rux-icon>
                                        </div>
                                        :
                                    </div>
                                ))
                        }
                        {this.precision === 'ms' && (
                            <div class="timepicker-ms input">
                                <input
                                    type="number"
                                    min="0"
                                    max="999"
                                    placeholder="SSS"
                                    ref={(el) =>
                                        (this.millisecondInput = el as HTMLInputElement)
                                    }
                                    value={this.initMillisecondsValue}
                                    class="part"
                                />
                                <div class="inc-dec-arrows">
                                    <rux-icon
                                        icon="arrow-drop-up"
                                        size="24px"
                                        onClick={() =>
                                            handleTimeChange(
                                                this.millisecondInput,
                                                true,
                                                false
                                            )
                                        }
                                    ></rux-icon>
                                    <rux-icon
                                        icon="arrow-drop-down"
                                        size="24px"
                                        onClick={() =>
                                            handleTimeChange(
                                                this.millisecondInput,
                                                false,
                                                true
                                            )
                                        }
                                    ></rux-icon>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Host>
        )
    }
}
