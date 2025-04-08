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
import {
    getDayOfYearFromIso,
    getMonthNameByNumber,
    getMonthValueByName,
    getTimeFromIso,
    julianToGregorianDay,
    months,
    removeLeadingZero,
} from '../rux-datetime-picker/utils'

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
    private arrowKeyPressed: boolean = false // used to track if an arrow key was pressed on the time inputs
    @Prop({ mutable: true }) iso: string = ''
    @Prop() minYear: number = 1900
    @Prop() maxYear: number = 2100
    /**
     * Determines the precision of the time picker down to milliseconds. When the calendar is within a rux-datepicker, the precision is set from
     * the datepicker component.
     */
    @Prop() precision: Precision = 'min'

    @Prop() isJulian: boolean = false
    @Event({ eventName: 'ruxcalendardatetimeupdated' })
    ruxCalendarDateTimeUpdated!: EventEmitter<{ iso: string }>
    @Event({ eventName: 'datetimeupdated' })
    datetimeUpdated!: EventEmitter<{ iso: string }>

    @State() initMinutesValue: string = ''
    @State() initSecondsValue: string = ''
    @State() initMillisecondsValue: string = ''
    @State() initHoursValue: string = ''
    /**
     * month is stored as the month's name. ie, January, February, etc.
     */
    @State() month: string = ''
    @State() year: string = ''
    @State() day: string = ''
    @State() days: {
        day: string
        currentMonth: boolean
        isToday: boolean
        pastDay: boolean
        futureDay: boolean
    }[] = []
    @State() currentDay: string = ''
    @State() selectedDay: DayInfo | null = null
    @State() ruxDays: NodeListOf<HTMLRuxDayElement> | undefined

    private years: number[] = []

    @Watch('iso')
    handleIso(newISO: string) {
        if (!newISO) return
        let lastValidYear = this.year
        const regex = /^(\d{0,4})?-?(\d{0,3})?-?(\d{0,2})?T?.*$/
        const matches = newISO.match(regex)

        if (matches) {
            let year = matches[1] ? matches[1] : ''
            let month: string | undefined
            let day: number | string | undefined

            // Check if the day is a 3-digit Julian day
            if (matches[2] && matches[2].length === 3) {
                const julianDay = parseInt(matches[2], 10)
                const date = new Date(
                    Date.UTC(parseInt(year || lastValidYear), 0, julianDay)
                ) // Convert Julian day to Gregorian date
                month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Get zero-padded month
                day = date.getUTCDate() // Get day of the month
            } else {
                month = matches[2]
                    ? matches[2]
                    : getMonthValueByName(this.month)
                day = matches[3] ? parseInt(matches[3], 10) : this.day
            }

            // Ensure year is exactly 4 digits long
            if (year.length === 4) {
                this.year = year
                lastValidYear = this.year // Update last valid year
            } else {
                this.year = lastValidYear // Keep last known valid year
            }

            this.month = getMonthNameByNumber(month!.toString())!
            this.day = day.toString().padStart(2, '0')
        }
        const hourRegex = /T(\d{2})/
        const minuteRegex = /:(\d{2})\:/
        const secondRegex = /:([0-9]{2})(?:\.|Z)/
        const millisecondRegex = /\.(\d{3})/
        const hourMatch = newISO.match(hourRegex)
        const minuteMatch = newISO.match(minuteRegex)
        const secondMatch = newISO.match(secondRegex)
        const millisecondMatch = newISO.match(millisecondRegex)
        if (hourMatch) {
            this.initHoursValue = hourMatch[1]
        }
        if (minuteMatch) {
            this.initMinutesValue = minuteMatch[1]
        }
        if (secondMatch) {
            this.initSecondsValue = secondMatch[1]
        }
        if (millisecondMatch) {
            this.initMillisecondsValue = millisecondMatch[1]
        }
        this.setDates()
    }

    @Listen('ruxdayselected')
    handleDaySelected(event: CustomEvent) {
        const detail: DayInfo = event.detail
        this.selectedDay = detail
        //get all rux-day's associated with this element
        // const days = this.el.shadowRoot?.querySelectorAll('rux-day')
        //loop through the days and set the selected attribute to true for the day that was clicked
        if (!this.ruxDays) {
            return
        }
        this.setSelectedDay(detail.dayNumber)
        //update the month based on isFuture or isPast
        if (detail.isFutureDay) {
            //if the month is December, then the month should be January and year should be incremented
            if (this.month === 'December') {
                this.month = getMonthNameByNumber('01')!
                this.year = (parseInt(this.year) + 1).toString()
            } else {
                const plus1 = Number(getMonthValueByName(this.month)) + 1
                this.month = getMonthNameByNumber(
                    plus1.toString().padStart(2, '0')
                )!
            }
        }
        if (detail.isPastDay) {
            //if the month is January, then the month should be December and year should be decremented
            if (this.month === 'January') {
                this.month = getMonthNameByNumber('12')!
                this.year = (parseInt(this.year) - 1).toString()
            } else {
                const minus1 = Number(getMonthValueByName(this.month)) - 1
                this.month = getMonthNameByNumber(
                    minus1.toString().padStart(2, '0')
                )!
            }
        }
        let iso
        if (!this.isJulian) {
            iso = this.compileIso(undefined, Number(this.selectedDay.dayNumber))
        } else {
            //selected day in this case will be a 3 digit Julian date. Need to convert that back to a regular date.
            iso = this.compileIso(
                undefined,
                parseInt(
                    julianToGregorianDay(this.selectedDay.dayNumber, this.year)
                )
            )
        }
        this.ruxCalendarDateTimeUpdated.emit({ iso: iso })
    }

    /**
     * Updates the width of the timepicker inputs based on the precision set.
     */
    private updateTimepickerWidth() {
        let width
        switch (this.precision) {
            case 'min':
                width = 'calc(100% / 2.5)'
                break
            case 'sec':
                width = 'calc(100% / 4)'
                break
            case 'ms':
                width = 'calc(100% / 5.5)'
                break
            default:
                width = 'calc(100% / 5.5)'
        }
        this.el.style.setProperty('--timepicker-width', width)
    }

    /**
     *
     * @param month
     * @param day
     * @returns Compiled ISO string using the current values. Uses values from the time inputs. Should be called when calendar changes the ISO, not when datepicker does.
     */
    private compileIso(month?: number, day?: number) {
        const monthValue = getMonthValueByName(this.month)
        const year = parseInt(this.year)
        const hours = parseInt(this.hourInput?.value || '0')
        const minutes = parseInt(this.minuteInput?.value || '0')
        const seconds = parseInt(this.secondsInput?.value || '0')
        const milliseconds = parseInt(this.millisecondInput?.value || '0')
        if (this.isJulian) {
            //convert julian day, if given, to gregorian day
            if (!day) {
                //if no day is passed in, use the selectedDay's dayNumber
                day = parseInt(
                    julianToGregorianDay(this.selectedDay!.dayNumber, this.year)
                )
            } else {
                //if a day was passed in, use that instead
                day = parseInt(julianToGregorianDay(day.toString(), this.year))
            }
        }

        const date = new Date(
            Date.UTC(
                year,
                (month || parseInt(monthValue!)) - 1,
                day || parseInt(this.currentDay.split('T')[0].split('-')[2]),
                hours,
                minutes,
                seconds,
                milliseconds
            )
        )
        return date.toISOString()
    }

    private async setSelectedDay(dayNumber?: string) {
        if (!this.ruxDays) {
            return
        }
        //wait for new ruxDays to be rendered
        await this.getRuxDays()
        if (dayNumber) {
            //If in gregorian mode, the day number has no leading 0's. Need to remove those in order to match.
            if (!this.isJulian) {
                dayNumber = removeLeadingZero(dayNumber)
            }

            this.ruxDays.forEach((day) => {
                if (
                    day.dayNumber === dayNumber &&
                    !day.isFutureDay &&
                    !day.isPastDay
                ) {
                    this.selectedDay = {
                        dayNumber: day.dayNumber,
                        isPastDay: day.isPastDay,
                        isFutureDay: day.isFutureDay,
                        element: day,
                        selected: true,
                    }
                    day.selected = true
                    return
                } else {
                    day.selected = false
                }
            })
        }
    }

    connectedCallback() {
        this.handleForwardMonth = this.handleForwardMonth.bind(this)
        this.handleBackwardMonth = this.handleBackwardMonth.bind(this)
        this.handleTimeIncrementDecrement = this.handleTimeIncrementDecrement.bind(
            this
        )
        this.handleTimeChange = this.handleTimeChange.bind(this)
        //If ISO isn't passed down from datepicker, then datepicker is rendered in a default state so there is no ISO. We set one here to
        //render the current date in the calendar.
        //* There should only be 2 scenarios here: a datepicker with no given (placeholder) value, and a datepicker with a valid placeholder value.
        if (!this.iso) {
            this.iso = new Date().toISOString()
            this.initHoursValue = '00'
            this.initMinutesValue = '00'
            this.initSecondsValue = '00'
            this.initMillisecondsValue = '000'
        } else {
            //get the init hours, min, sec, and ms from the given iso. On this connected callback call, there will either be no iso (handled above) or a valid default iso.
            const timeRes = getTimeFromIso(this.iso)
            this.initHoursValue = timeRes.hours.padStart(2, '0') // ensure 2 digits
            this.initMinutesValue = timeRes.minutes.padStart(2, '0') // ensure 2 digits
            this.initSecondsValue = timeRes.seconds.padStart(2, '0') // ensure 2 digits
            this.initMillisecondsValue = timeRes.milliseconds.padStart(3, '0') // ensure 3 digits
        }
        //get the month, day and year from the ISO string
        const date = new Date(this.iso)
        //if date isn't valid, log a warning
        if (isNaN(date.getTime())) {
            return
        }
        this.year = date.getUTCFullYear().toString()
        this.month = getMonthNameByNumber(
            (date.getUTCMonth() + 1).toString().padStart(2, '0')
        )!
        this.day = date.getUTCDate().toString().padStart(2, '0')
        if (this.isJulian) this.day = getDayOfYearFromIso(this.iso)

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

    private async getRuxDays() {
        this.ruxDays = await this.waitForRuxDays()
    }
    componentWillUpdate() {
        this.updateTimepickerWidth()
        this.initHoursValue = this.initHoursValue.padStart(2, '0')
        this.initMinutesValue = this.initMinutesValue.padStart(2, '0')
        this.initSecondsValue = this.initSecondsValue.padStart(2, '0')
        //3 for MS, but will change in future
        this.initMillisecondsValue = this.initMillisecondsValue.padStart(3, '0')
    }
    componentWillLoad() {
        this.updateTimepickerWidth()
        if (!this.selectedDay) {
            this.getRuxDays().then(() => {
                if (!this.ruxDays) {
                    return
                }
                this.ruxDays.forEach((day) => {
                    if (day.selected) {
                        this.selectedDay = {
                            dayNumber: day.dayNumber,
                            isPastDay: day.isPastDay,
                            isFutureDay: day.isFutureDay,
                            element: day,
                            selected: day.selected,
                        }
                    } else {
                        // If no day is selected at this point, then the datepicker gave an initial ISO string.
                        // Need to find the day that matches the day in the ISO string
                        const date = new Date(this.iso)
                        const day = date.getUTCDate()
                        const dayNumber = day.toString()
                        const selectedDay = Array.from(this.ruxDays!).find(
                            (day) =>
                                day.dayNumber === dayNumber &&
                                !day.isFutureDay &&
                                !day.isPastDay
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
    componentDidLoad() {
        if (this.day && !this.selectedDay) {
            this.setSelectedDay(this.day)
        }
    }
    setDates() {
        // const date = new Date(
        //     Date.UTC(
        //         parseInt(this.year),
        //         parseInt(getMonthValueByName(this.month)!) - 1,
        //         parseInt(this.day),
        //         parseInt(this.initHoursValue)
        //             ? parseInt(this.initHoursValue)
        //             : 0,
        //         parseInt(this.initMinutesValue)
        //             ? parseInt(this.initMinutesValue)
        //             : 0,
        //         parseInt(this.initSecondsValue)
        //             ? parseInt(this.initSecondsValue)
        //             : 0,
        //         parseInt(this.initMillisecondsValue)
        //             ? parseInt(this.initMillisecondsValue)
        //             : 0
        //     )
        // )
        // if (isNaN(date.getTime())) {
        //     console.warn('Invalid date:', date)
        //     console.warn('Everything used to try and make this date: ', {
        //         year: parseInt(this.year),
        //         month: parseInt(getMonthValueByName(this.month)!) - 1,
        //         day: parseInt(this.day),
        //         hours: parseInt(this.initHoursValue),
        //         minutes: parseInt(this.initMinutesValue),
        //         seconds: parseInt(this.initSecondsValue),
        //         milliseconds: parseInt(this.initMillisecondsValue),
        //     })
        //     return
        // }
        const year = parseInt(this.year)
        const month = parseInt(getMonthValueByName(this.month)!) - 1
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
        if (this.isJulian) {
            //convert all days in this.days to be the day-of-the-year number, rather than just 1-31
            this.days = this.days.map((day) => {
                if (day.currentMonth) {
                    const date = new Date(
                        Date.UTC(year, month, parseInt(day.day))
                    ).toISOString()

                    const jday = getDayOfYearFromIso(date)
                    return {
                        ...day,
                        day: jday,
                    }
                }
                if (day.futureDay) {
                    const date = new Date(
                        Date.UTC(year, month + 1, parseInt(day.day))
                    ).toISOString()
                    const jday = getDayOfYearFromIso(date)

                    return {
                        ...day,
                        day: jday,
                    }
                }
                if (day.pastDay) {
                    const date = new Date(
                        Date.UTC(year, month - 1, parseInt(day.day))
                    ).toISOString()
                    const jday = getDayOfYearFromIso(date)

                    return {
                        ...day,
                        day: jday,
                    }
                }
                return {
                    ...day,
                    day: day.day.toString().padStart(3, '0'),
                }
            })
        }

        this.year = year.toString()
        if (this.day && !this.selectedDay) {
            this.setSelectedDay(this.day)
        }
        this.setYears()
    }

    setYears() {
        this.years = Array.from(
            { length: this.maxYear - this.minYear + 1 },
            (_, i) => this.minYear + i
        )
    }

    handleForwardMonth = () => {
        const monthNum = getMonthValueByName(this.month)
        const actual = parseInt(monthNum!) + 1
        if (actual > 12) {
            // if the month is greater than 12, then it should be January of next year
            this.month = getMonthNameByNumber('01')!
            this.year = (parseInt(this.year) + 1).toString()
        } else {
            this.month = getMonthNameByNumber(
                actual.toString().padStart(2, '0')
            )!
        }
        this.iso = this.compileIso()
    }
    handleBackwardMonth = () => {
        const monthNum = getMonthValueByName(this.month)
        const actual = parseInt(monthNum!) - 1
        if (actual < 1) {
            // if the month is less than 1, then it should be December of the previous year
            this.month = getMonthNameByNumber('12')!
            this.year = (parseInt(this.year) - 1).toString()
        } else {
            // otherwise just use the month number
            this.month = getMonthNameByNumber(
                actual.toString().padStart(2, '0')
            )!
        }
        this.iso = this.compileIso()
    }

    handleMonthChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        const month = months.find((month) => month.value === target.value)
        if (month) {
            this.month = month.label
            this.iso = this.compileIso(parseInt(month.value))
        }
        this.ruxCalendarDateTimeUpdated.emit({ iso: this.iso })
    }
    handleYearChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        //We know value will be of type string because we're not using a multiselect for year
        const value = target.value as string
        this.year = value

        this.iso = this.compileIso()
        this.ruxCalendarDateTimeUpdated.emit({ iso: this.iso })
    }

    handleTimeIncrementDecrement(
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

    handleTimeChange(e: Event, max: number, min: number = 0, part: string) {
        //if the incoming value is a letter or symbol, prevent default and return
        const regex = /^[0-9]+$/
        if (!regex.test((e.target as HTMLInputElement).value)) {
            e.preventDefault()
            return
        }
        const target = e.target as HTMLInputElement
        if (parseInt(target.value) > max) {
            target.value = max.toString()
        }
        if (parseInt(target.value) < min) {
            target.value = min.toString()
        }
        if (part !== 'ms') {
            if (target.value.length > 2 && !(parseInt(target.value) > 0)) {
                target.value = '00'
                target.value = target.value.replace(/^0+/, '') || '0'
            }
        } else {
            if (target.value.length > 3 && !(parseInt(target.value) > 0)) {
                // if the value is greater than 3 digits and not greater than 0, reset to 000
                target.value = '000'
            }
        }
        if (target.value.startsWith('0') && parseInt(target.value) > 0) {
            // if the value starts with a leading zero and is greater than 0, remove the leading zero
            target.value = target.value.replace(/^0+/, '') || '0'
        }
        if (
            !this.arrowKeyPressed &&
            target.value.length === 2 &&
            part !== 'ms'
        ) {
            if (part === 'hour') this.minuteInput.focus()
            if (part === 'min' && this.precision !== 'min')
                this.secondsInput.focus()
            if (part === 'sec' && this.precision !== 'sec')
                this.millisecondInput.focus()
        }
        this.arrowKeyPressed = false

        const iso = this.compileIso(
            undefined,
            parseInt(this.selectedDay!.dayNumber!)
        )
        this.ruxCalendarDateTimeUpdated.emit({ iso: iso })
    }
    /**
     *
     * @param dayNum
     * @param futureDay
     * @param pastDay
     * @returns a boolean depending on if the day number matches the selected day, and if the day is not in the future or past
     */
    private determineSelected(
        dayNum: string,
        futureDay: boolean,
        pastDay: boolean
    ) {
        if (!this.selectedDay) {
            return false
        }
        if (dayNum === this.selectedDay.dayNumber && !futureDay && !pastDay) {
            return true
        } else return false
    }

    render() {
        const {
            handleForwardMonth,
            handleBackwardMonth,
            handleTimeIncrementDecrement,
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
                                isToday={
                                    day.isToday &&
                                    !day.pastDay &&
                                    !day.futureDay
                                }
                                isPastDay={day.pastDay}
                                isFutureDay={day.futureDay}
                                selected={this.determineSelected(
                                    day.day,
                                    day.futureDay,
                                    day.pastDay
                                )}
                            ></rux-day>
                        ))}
                    </div>
                    <div class="rux-calendar-timepicker">
                        <span class="T">T</span>
                        <div class="timepicker-hours input">
                            <input
                                type="number"
                                min="0"
                                max="23"
                                maxLength={2}
                                placeholder="hh"
                                ref={(el) =>
                                    (this.hourInput = el as HTMLInputElement)
                                }
                                value={this.initHoursValue}
                                class="part"
                                onInput={(e) =>
                                    this.handleTimeChange(e, 23, 0, 'hour')
                                }
                                onKeyDown={(evt) => {
                                    if (
                                        ['ArrowUp', 'ArrowDown'].includes(
                                            evt.key
                                        )
                                    ) {
                                        this.arrowKeyPressed = true
                                    }
                                    if (
                                        ['e', 'E', '+', '-', '.'].includes(
                                            evt.key
                                        )
                                    ) {
                                        evt.preventDefault()
                                    }
                                }}
                            />
                            <div class="inc-dec-arrows">
                                <rux-icon
                                    icon="arrow-drop-up"
                                    size="24px"
                                    onClick={() =>
                                        handleTimeIncrementDecrement(
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
                                        handleTimeIncrementDecrement(
                                            this.hourInput,
                                            false,
                                            true
                                        )
                                    }
                                ></rux-icon>
                            </div>
                        </div>
                        <span>:</span>
                        <div class={'timepicker-min input'}>
                            <input
                                type="number"
                                min="0"
                                max="59"
                                maxLength={2}
                                placeholder="mm"
                                ref={(el) =>
                                    (this.minuteInput = el as HTMLInputElement)
                                }
                                value={this.initMinutesValue}
                                class="part"
                                onInput={(e) =>
                                    this.handleTimeChange(e, 59, 0, 'min')
                                }
                                onKeyDown={(evt) => {
                                    if (
                                        ['ArrowUp', 'ArrowDown'].includes(
                                            evt.key
                                        )
                                    ) {
                                        this.arrowKeyPressed = true
                                    }
                                    if (
                                        ['e', 'E', '+', '-', '.'].includes(
                                            evt.key
                                        )
                                    ) {
                                        evt.preventDefault()
                                    }
                                }}
                            />
                            <div class="inc-dec-arrows">
                                <rux-icon
                                    icon="arrow-drop-up"
                                    size="24px"
                                    onClick={() =>
                                        handleTimeIncrementDecrement(
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
                                        handleTimeIncrementDecrement(
                                            this.minuteInput,
                                            false,
                                            true
                                        )
                                    }
                                ></rux-icon>
                            </div>
                        </div>
                        {this.precision !== 'min' && <span>:</span>}
                        {
                            //only show if precision is set to seconds or miliseconds
                            (this.precision === 'sec' ||
                                this.precision === 'ms') && (
                                <div class="timepicker-sec input">
                                    <input
                                        type="number"
                                        min="0"
                                        max="59"
                                        maxLength={2}
                                        placeholder="ss"
                                        ref={(el) =>
                                            (this.secondsInput = el as HTMLInputElement)
                                        }
                                        value={this.initSecondsValue}
                                        class="part"
                                        onInput={(e) =>
                                            this.handleTimeChange(
                                                e,
                                                59,
                                                0,
                                                'sec'
                                            )
                                        }
                                        onKeyDown={(evt) => {
                                            if (
                                                [
                                                    'ArrowUp',
                                                    'ArrowDown',
                                                ].includes(evt.key)
                                            ) {
                                                this.arrowKeyPressed = true
                                            }
                                            if (
                                                [
                                                    'e',
                                                    'E',
                                                    '+',
                                                    '-',
                                                    '.',
                                                ].includes(evt.key)
                                            ) {
                                                evt.preventDefault()
                                            }
                                        }}
                                    />
                                    <div class="inc-dec-arrows">
                                        <rux-icon
                                            icon="arrow-drop-up"
                                            size="24px"
                                            onClick={() =>
                                                handleTimeIncrementDecrement(
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
                                                handleTimeIncrementDecrement(
                                                    this.secondsInput,
                                                    false,
                                                    true
                                                )
                                            }
                                        ></rux-icon>
                                    </div>
                                </div>
                            )
                        }
                        {this.precision !== 'ms' && <span class="Z">Z</span>}
                        {this.precision === 'ms' && <span>.</span>}
                        {this.precision === 'ms' && (
                            <div class="timepicker-ms input">
                                <input
                                    type="number"
                                    min="0"
                                    max="999"
                                    maxLength={3}
                                    placeholder="SSS"
                                    ref={(el) =>
                                        (this.millisecondInput = el as HTMLInputElement)
                                    }
                                    value={this.initMillisecondsValue}
                                    class="part"
                                    onInput={(e) =>
                                        this.handleTimeChange(e, 999, 0, 'ms')
                                    }
                                    onKeyDown={(evt) => {
                                        if (
                                            ['ArrowUp', 'ArrowDown'].includes(
                                                evt.key
                                            )
                                        ) {
                                            this.arrowKeyPressed = true
                                        }
                                        if (
                                            ['e', 'E', '+', '-', '.'].includes(
                                                evt.key
                                            )
                                        ) {
                                            evt.preventDefault()
                                        }
                                    }}
                                />
                                <div class="inc-dec-arrows">
                                    <rux-icon
                                        icon="arrow-drop-up"
                                        size="24px"
                                        onClick={() =>
                                            handleTimeIncrementDecrement(
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
                                            handleTimeIncrementDecrement(
                                                this.millisecondInput,
                                                false,
                                                true
                                            )
                                        }
                                    ></rux-icon>
                                </div>
                            </div>
                        )}
                        {this.precision === 'ms' && <span class="Z">Z</span>}
                    </div>
                </div>
            </Host>
        )
    }
}
