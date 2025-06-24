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
    getMonthFromDayOfYear,
    getMonthNameByNumber,
    getMonthValueByName,
    getTimeFromIso,
    isLeapYear,
    julianToGregorianDay,
    months,
    removeLeadingZero,
} from '../rux-datetime-picker/utils'

import { DayInfo } from './rux-day/rux-day'
import { Precision } from '../rux-datetime-picker/utils/types'

type EventSource =
    | 'monthChange'
    | 'yearChange'
    | 'timeChange'
    | 'daySelected'
    | undefined

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
    private lastSelectedDay?: DayInfo & {
        originMonth?: string
        originYear?: string
    }
    private pendingDayNumber: string | null = null
    private skipDayFocus: boolean = false
    private focusTimeout: number | undefined
    /**
     * The iso string to be used to display the date in the calendar
     */
    @Prop({ mutable: true }) iso: string = ''
    /**
     * The minimum year the calendar can use
     */
    @Prop() minYear: number = 1900
    /**
     * The maximum year the calendar can use
     */
    @Prop() maxYear: number = 2100
    /**
     * Determines the precision of the time picker down to milliseconds. When the calendar is within a rux-datepicker, the precision is set from
     * the datepicker component.
     */
    @Prop() precision: Precision = 'min'

    /**
     * Controls whether or not the calendar displays dates in Julian
     */
    @Prop() isJulian: boolean = false
    /**
     * @internal
     * Emits the iso and the source of the change. This event is listened to by rux-datetime-picker in order to
     * sync values.
     */
    @Event({ eventName: 'ruxcalendardatetimeupdated' })
    ruxCalendarDateTimeUpdated!: EventEmitter<{
        iso: string
        source: EventSource
    }>

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
        selected?: boolean
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
            if (!this.isJulian) {
                if (matches[2]) {
                    month = matches[2]
                    day = parseInt(matches[3], 10)
                }
            } else {
                if (matches[2] && matches[2].length === 3) {
                    const julianDay = parseInt(matches[2], 10)
                    const date = new Date(
                        Date.UTC(parseInt(year || lastValidYear), 0, julianDay)
                    )
                    month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Get zero-padded month
                    day = date.getUTCDate() // Get day of the month
                }
            }
            // Ensure year is exactly 4 digits long
            if (year.length === 4) {
                this.year = year
                lastValidYear = this.year // Update last valid year
            } else {
                this.year = lastValidYear // Keep last known valid year
            }
            if (month) {
                this.month = getMonthNameByNumber(month.toString())!
            }
            this.day = (day ? day : this.day).toString().padStart(2, '0')
        }
        const hourRegex = /T(\d{2})/
        const minuteRegex = /:(\d{2})\:/
        const secondRegex = /:([0-9]{2})(?:\.|Z)/
        const msDigits = this.precision === 'us' ? 6 : 3
        const millisecondRegex = new RegExp(`\\.(\\d{1,${msDigits}})`)
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
            // Pad to correct length for display
            this.initMillisecondsValue = millisecondMatch[1].padEnd(
                msDigits,
                '0'
            )
        }

        if (this.month && this.day) {
            this.setDates()
        }
    }

    @Watch('month')
    handleMonthWatch(newMonth: string, oldMonth: string) {
        if (newMonth !== oldMonth) {
            if (this.selectedDay) {
                this.selectedDay = null
            }
            if (
                newMonth === this.lastSelectedDay?.originMonth &&
                this.lastSelectedDay.originYear === this.year
            ) {
                this.setSelectedDay(this.lastSelectedDay.dayNumber, true)
            }
        }
    }

    @Watch('year')
    handleYearWatch(newYear: string, oldYear: string) {
        if (newYear === oldYear) return
        if (newYear !== oldYear) {
            this.selectedDay = null
        }
        if (
            newYear === this.lastSelectedDay?.originYear &&
            this.month === this.lastSelectedDay.originMonth
        ) {
            this.setSelectedDay(this.lastSelectedDay.dayNumber, true)
        }
    }

    @Listen('ruxdayselected')
    handleDaySelected(event: CustomEvent) {
        const detail: DayInfo = event.detail

        this.selectedDay = detail
        //update the month based on isFuture or isPast

        if (detail.isFutureDay) {
            //if the month is December, then the month should be January and year should be incremented
            if (this.month === 'December') {
                this.month = getMonthNameByNumber('01')!
                this.year = (parseInt(this.year) + 1).toString()
                // this.setSelectedDay(detail.dayNumber)
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
        this.setSelectedDay(detail.dayNumber, true)
        const iso = this.compileIso()
        this.ruxCalendarDateTimeUpdated.emit({
            iso: iso,
            source: 'daySelected',
        })
    }

    /**
     *
     * @param e The Event listened for
     */
    @Listen('ruxdatepickerchange', { target: 'document' })
    handleDtpChange(e: CustomEvent) {
        if (this.isJulian && e.detail.length < 3) {
            return
        }
        this.day = e.detail
        this.setSelectedDay(this.day)
    }

    /**
     * Updates the width of the timepicker inputs based on the precision set.
     */
    private updateTimepickerWidth() {
        let width
        switch (this.precision) {
            case 'hour':
                width = '80%'
                break
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
    private compileIso(month?: number) {
        const monthValue = getMonthValueByName(this.month)
        const year = parseInt(this.year)
        const hours = parseInt(this.hourInput?.value || '0')
        const minutes = parseInt(this.minuteInput?.value || '0')
        const seconds = parseInt(this.secondsInput?.value || '0')
        const msInput = this.millisecondInput?.value || '0'
        const milliseconds = parseInt(msInput)
        const nextMonth = new Date(Date.UTC(year, parseInt(monthValue!), 0))
        const daysInMonth = nextMonth.getUTCDate()
        let dayToUse: number
        if (this.selectedDay) {
            if (!this.isJulian) {
                if (parseInt(this.selectedDay.dayNumber) > daysInMonth) {
                    dayToUse = daysInMonth
                } else {
                    dayToUse = parseInt(this.selectedDay.dayNumber)
                }
            } else {
                const gregDay = julianToGregorianDay(
                    this.selectedDay.dayNumber,
                    year.toString()
                )
                dayToUse = parseInt(gregDay)
            }
        } else {
            dayToUse = daysInMonth
        }

        // If not microsecond precision, use native Date
        if (this.precision !== 'us') {
            const date = new Date(
                Date.UTC(
                    year,
                    (month || parseInt(monthValue!)) - 1,
                    dayToUse,
                    hours,
                    minutes,
                    seconds,
                    milliseconds
                )
            )
            return date.toISOString()
        }

        // If microsecond precision, manually build ISO string
        // Pad all values to correct length
        const MM = (month || parseInt(monthValue!)).toString().padStart(2, '0')
        const DD = dayToUse.toString().padStart(2, '0')
        const HH = hours.toString().padStart(2, '0')
        const mm = minutes.toString().padStart(2, '0')
        const ss = seconds.toString().padStart(2, '0')
        const us = msInput.padStart(6, '0') // microseconds, always 6 digits

        return `${year}-${MM}-${DD}T${HH}:${mm}:${ss}.${us}Z`
    }

    /**
     *
     * @param dayNumber the number of day to be selected
     * Loops through ruxDays and sets the given day number match to be selected.
     */
    private setSelectedDay(dayNumber: string, bypass: boolean = false) {
        //if in julian, make sure it's padded to 3 digits.
        //if not in julian, make sure it has no leading 0s.

        if (this.isJulian) {
            dayNumber = dayNumber.padStart(3, '0')
            const dayNum = parseInt(dayNumber)
            const isLeap = isLeapYear(parseInt(this.year))
            if (isLeap && dayNum > 366) {
                dayNumber = '366'
            }
            if (!isLeap && dayNum > 365) {
                dayNumber = '365'
            }
            if (dayNum < 1) {
                dayNumber = '001'
            }
            this.month = getMonthFromDayOfYear(dayNumber, parseInt(this.year))!
        } else {
            dayNumber = removeLeadingZero(dayNumber)
        }
        this.pendingDayNumber = dayNumber
        this.days.forEach((day) => {
            if (bypass) {
                if (dayNumber === day.day) {
                    this.selectedDay = {
                        dayNumber: day.day,
                        isPastDay: day.pastDay,
                        isFutureDay: day.futureDay,
                        selected: true,
                    }
                    day.selected = true
                }
            } else {
                if (dayNumber === day.day && !day.futureDay && !day.pastDay) {
                    this.selectedDay = {
                        dayNumber: day.day,
                        isPastDay: day.pastDay,
                        isFutureDay: day.futureDay,
                        selected: true,
                    }
                    day.selected = true
                }
            }
        })
        if (!this.selectedDay) {
            return
        } else {
            this.lastSelectedDay = this.selectedDay
            this.lastSelectedDay.originMonth = this.month
            this.lastSelectedDay.originYear = this.year
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
            this.initMillisecondsValue =
                this.precision === 'us' ? '000000' : '000'
        } else {
            //get the init hours, min, sec, and ms from the given iso. On this connected callback call, there will either be no iso (handled above) or a valid default iso.
            const timeRes = getTimeFromIso(this.iso, this.precision === 'us')
            this.initHoursValue = timeRes.hours.padStart(2, '0') // ensure 2 digits
            this.initMinutesValue = timeRes.minutes.padStart(2, '0') // ensure 2 digits
            this.initSecondsValue = timeRes.seconds.padStart(2, '0') // ensure 2 digits
            this.initMillisecondsValue =
                this.precision === 'us'
                    ? timeRes.milliseconds.padStart(6, '0')
                    : timeRes.milliseconds.padStart(3, '0') // ensure 3 digits
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

    componentWillUpdate() {
        this.updateTimepickerWidth()
        this.initHoursValue = this.initHoursValue.padStart(2, '0')
        this.initMinutesValue = this.initMinutesValue.padStart(2, '0')
        this.initSecondsValue = this.initSecondsValue.padStart(2, '0')
        this.initMillisecondsValue =
            this.precision === 'us'
                ? this.initMillisecondsValue.padStart(6, '0')
                : this.initMillisecondsValue.padStart(3, '0')
    }
    componentWillLoad() {
        this.updateTimepickerWidth()
        if (this.day && !this.selectedDay) {
            this.setSelectedDay(this.day)
        }
    }
    componentWillRender() {
        //if there's a pending day to select, select it.
        if (this.pendingDayNumber) {
            this.setSelectedDay(this.pendingDayNumber, true)
            this.pendingDayNumber = null // Clear the pending day
        }
        const allDays = this.el.shadowRoot?.querySelectorAll('rux-day') || []
        allDays.forEach((day) => {
            day.shadowRoot?.querySelector('button')?.blur()
        })
        if (this.focusTimeout) {
            clearTimeout(this.focusTimeout)
            this.focusTimeout = undefined
        }
        // Don't want to shift focus to rux-day if just typing into timepicker inputs.
        if (this.skipDayFocus) {
            // this.skipDayFocus = false
            return
        }
        // This solves an issue where selecting a rux-day from a previous or next month (a grayed out day) would
        // correctly select it and shift month and year (if needed), but would set focus on the wrong rux-day el.
        this.focusTimeout = window.setTimeout(() => {
            // If skipDayFocus was set after scheduling, don't proceed
            if (this.skipDayFocus) {
                return
            }
            const allDays =
                this.el.shadowRoot?.querySelectorAll('rux-day') || []
            allDays.forEach((day) => {
                if (
                    day.shadowRoot
                        ?.querySelector('button')
                        ?.classList.contains('rux-day--selected')
                ) {
                    day.shadowRoot?.querySelector('button')?.focus()
                }
            })
        }, 0)
    }
    /**
     * Sets date state and fills in the calendar with the correct number of days. Also sets selected day if necessary.
     */
    setDates() {
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
        this.setYears()
    }

    /**
     * Fills in this.years with valid years based on minYear and maxYear
     */
    setYears() {
        this.years = Array.from(
            { length: this.maxYear - this.minYear + 1 },
            (_, i) => this.minYear + i
        )
    }

    /**
     * Logic for moving forward one month via the month arrow
     */
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

    /**
     * Logic for moving backward one month via the month arrow
     */
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

    /**
     * @param event HTMLRuxSelect ruxchange event
     * Handles changing the month via the month select menu. Emits a `ruxCalendarDateTimeUpdated` event.
     */
    handleMonthChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        const month = months.find((month) => month.value === target.value)
        if (month) {
            this.month = month.label
            this.iso = this.compileIso(parseInt(month.value))
        }
    }

    /**
     * @param event HTMLRuxSelect ruxchange event
     * Handles changing the year via the year select menu. Emits a `ruxCalendarDateTimeUpdated` event.
     */
    handleYearChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        //We know value will be of type string because we're not using a multiselect for year
        const value = target.value as string
        this.year = value

        this.iso = this.compileIso()
    }

    /**
     * @param el The input element being interacted with
     * @param increment True if adding value
     * @param decrement True if subtracting value
     * Logic for incrementing or decrementing the given input's value using the arrow icons.
     * Emits a `ruxCalendarDateTimeUpdated` event.
     */
    handleTimeIncrementDecrement(
        el: HTMLInputElement,
        increment?: boolean,
        decrement?: boolean
    ) {
        this.skipDayFocus = true
        const isMs =
            el.getAttribute('maxlength') === '3' ||
            el.getAttribute('maxlength') === '6'

        const isUs = this.precision === 'us'
        //connect the rux-icons of the custom spinwheel to the correct input, and increment or decrement accordingly.
        if (el.value === '') {
            isMs && !isUs ? (el.value = '000') : (el.value = '00')
            if (isUs) el.value = '000000'
        }

        if (increment) {
            // Wrap between min and max values.
            // Incrementing from the max of an input should move the value
            // of that input to the min, and vice versa.
            const nextValue = parseInt(el.value) + 1
            if (!isMs) {
                if (nextValue > parseInt(el.max)) {
                    el.value = el.min.padStart(2, '0')
                } else {
                    el.value = nextValue.toString().padStart(2, '0')
                }
            } else {
                if (nextValue > parseInt(el.max)) {
                    el.value = isUs
                        ? el.min.padStart(6, '0')
                        : el.min.padStart(3, '0')
                } else {
                    el.value = isUs
                        ? nextValue.toString().padStart(6, '0')
                        : nextValue.toString().padStart(3, '0')
                }
            }
        }
        if (decrement) {
            const nextValue = parseInt(el.value) - 1
            if (!isMs) {
                if (nextValue < parseInt(el.min)) {
                    el.value = el.max.padStart(2, '0')
                } else {
                    el.value = nextValue.toString().padStart(2, '0')
                }
            } else {
                if (nextValue < parseInt(el.min)) {
                    el.value = isUs
                        ? el.max.padStart(6, '0')
                        : el.max.padStart(3, '0')
                } else {
                    el.value = isUs
                        ? nextValue.toString().padStart(6, '0')
                        : nextValue.toString().padStart(3, '0')
                }
            }
        }

        // manually dispatch the change event. This is necessary because the input value is being updated
        // programmatically via the arrows, and that doesn't
        // emit a change event by default.
        const event = new CustomEvent('change', { bubbles: true })
        el.dispatchEvent(event)

        const iso = this.compileIso()
        this.ruxCalendarDateTimeUpdated.emit({ iso: iso, source: 'timeChange' })
        setTimeout(() => {
            this.skipDayFocus = false
        }, 0)
    }

    /**
     * @param e The input's change event
     * @param max The max amount of the input
     * @param min The min amount of the input
     * @param part The time part of the input - hour, min, sec, ms
     * Handles changes in the time inputs via user typing.
     */
    handleTimeChange(e: Event, max: number, min: number = 0, part: string) {
        //if the incoming value is a letter or symbol, prevent default and return
        const regex = /^[0-9]+$/
        if (!regex.test((e.target as HTMLInputElement).value)) {
            e.preventDefault()
            return
        }
        this.skipDayFocus = true
        const target = e.target as HTMLInputElement
        if (parseInt(target.value) > max) {
            target.value = max.toString()
        }
        if (parseInt(target.value) <= min) {
            if (part !== 'ms') target.value = min.toString().padStart(2, '0')
            else {
                target.value =
                    this.precision === 'ms'
                        ? min.toString().padStart(3, '0')
                        : min.toString().padStart(6, '0')
            }
        }
        if (part !== 'ms') {
            if (target.value.length > 2 && !(parseInt(target.value) > 0)) {
                target.value = '00'
                target.value = target.value.replace(/^0+/, '') || '0'
            }
        } else {
            if (
                part === 'ms' &&
                this.precision !== 'us' &&
                target.value.length > 3 &&
                !(parseInt(target.value) > 0)
            ) {
                // if the value is longer than 3 digits and not greater than 0, reset to 000
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
            if (part === 'hour') {
                this.minuteInput.focus()
            }
            if (part === 'min' && this.precision !== 'min')
                this.secondsInput.focus()
            if (part === 'sec' && this.precision !== 'sec')
                this.millisecondInput.focus()
        }
        this.arrowKeyPressed = false
        const iso = this.compileIso()
        this.ruxCalendarDateTimeUpdated.emit({ iso: iso, source: 'timeChange' })
        // We need skipDayFocus to be false after the render cycle as to not reintroduce the focus bug with rux-day clicking.
        setTimeout(() => {
            this.skipDayFocus = false
        }, 0)
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

    /**
     *
     * @param e A focus event
     * This makes it so when an input is clicked, the contents get selected so that typing into it
     * is a better experience.
     */
    private _highlightInput = (e: FocusEvent) => {
        const target = e.target as HTMLInputElement
        target.select()
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
                                onRuxchange={(e: CustomEvent) => {
                                    e.stopPropagation()
                                    this.handleMonthChange(e)
                                }}
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
                                onRuxchange={(e: CustomEvent) => {
                                    e.stopPropagation()
                                    this.handleYearChange(e)
                                }}
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
                    {this.precision !== 'day' && (
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
                                    onFocus={(e: FocusEvent) =>
                                        this._highlightInput(e)
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
                                        class="inc-arrow"
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
                                        class="dec-arrow"
                                    ></rux-icon>
                                </div>
                            </div>
                            {this.precision !== 'hour' && <span>:</span>}
                            {this.precision !== 'hour' && (
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
                                            this.handleTimeChange(
                                                e,
                                                59,
                                                0,
                                                'min'
                                            )
                                        }
                                        onFocus={(e: FocusEvent) =>
                                            this._highlightInput(e)
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
                                                    this.minuteInput,
                                                    true,
                                                    false
                                                )
                                            }
                                            class="inc-arrow"
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
                                            class="dec-arrow"
                                        ></rux-icon>
                                    </div>
                                </div>
                            )}
                            {this.precision !== 'min' &&
                                this.precision !== 'hour' && <span>:</span>}
                            {
                                //only show if precision is set to seconds or miliseconds
                                (this.precision === 'sec' ||
                                    this.precision === 'ms' ||
                                    this.precision === 'us') && (
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
                                            onFocus={(e: FocusEvent) =>
                                                this._highlightInput(e)
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
                                                class="inc-arrow"
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
                                                class="dec-arrow"
                                            ></rux-icon>
                                        </div>
                                    </div>
                                )
                            }
                            {(this.precision === 'ms' ||
                                this.precision === 'us') && <span>.</span>}
                            {(this.precision === 'ms' ||
                                this.precision === 'us') && (
                                <div class="timepicker-ms input">
                                    <input
                                        type="number"
                                        min="0"
                                        max={
                                            this.precision === 'us'
                                                ? '999999'
                                                : '999'
                                        }
                                        maxLength={
                                            this.precision === 'us' ? 6 : 3
                                        }
                                        placeholder={
                                            this.precision === 'us'
                                                ? 'SSSSSS'
                                                : 'SSS'
                                        }
                                        ref={(el) =>
                                            (this.millisecondInput = el as HTMLInputElement)
                                        }
                                        value={this.initMillisecondsValue}
                                        class="part"
                                        onInput={(e) =>
                                            this.handleTimeChange(
                                                e,
                                                this.precision === 'us'
                                                    ? 999999
                                                    : 999,
                                                0,
                                                'ms'
                                            )
                                        }
                                        onFocus={(e: FocusEvent) =>
                                            this._highlightInput(e)
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
                                                    this.millisecondInput,
                                                    true,
                                                    false
                                                )
                                            }
                                            class="inc-arrow"
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
                                            class="dec-arrow"
                                        ></rux-icon>
                                    </div>
                                </div>
                            )}
                            <span class="Z">Z</span>
                        </div>
                    )}
                </div>
            </Host>
        )
    }
}
