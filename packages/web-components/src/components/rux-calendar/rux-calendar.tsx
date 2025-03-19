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
    getMonthNameByNumber,
    getMonthValueByName,
    months,
    ordinalDayToDate,
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
    @Prop() incomingYear: string = ''
    @Prop() incomingMonth: string = ''
    @Prop() incomingDay: string = ''
    @Prop() isJulian: boolean = false
    @Event({ eventName: 'ruxcalendardatetimeupdated' })
    ruxCalendarDateTimeUpdated!: EventEmitter<{ iso: string }>
    @Event({ eventName: 'datetimeupdated' })
    datetimeUpdated!: EventEmitter<{ iso: string }>

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
    handleIso() {
        this.setDates()
    }

    @Watch('incomingYear')
    handleIncomingYear() {
        if (this.incomingYear.length === 4) {
            this.year = this.incomingYear
            this.iso = this.compileIso()
        }
    }

    @Watch('incomingMonth')
    handleIncomingMonth() {
        const monthName = getMonthNameByNumber(
            this.incomingMonth.padStart(2, '0')
        )
        if (monthName) {
            this.month = monthName
        }
    }
    //TODO:
    //? Having incomingDay, month and year may be excessive. rux-calendar gets a triggered re-render each time this.iso changes,
    //? and this.iso comes straight from rux-datepicker. When rux-datepicker has it's inputs changed at all,
    //? it updates it's iso, thus updating rux-calendar. What we could do instead is
    //? each time iso changes, see if the year/month/day are filled in yet. If they aren't, don't do anything.
    //? if they are, do the logic that is currently handled by incomingDay/Month/Year but extrapolate the values from the iso string rather
    //? than getting them as props from rux-datepicker.
    @Watch('incomingDay')
    handleIncomingDay() {
        if (!this.ruxDays) {
            console.warn('no ruxDays found in Incoming Day Watch')
            return
        }
        if (this.incomingDay.length === 2) {
            const compiledIso = this.compileIso(
                Number(this.incomingMonth),
                Number(this.incomingDay)
            )
            this.iso = compiledIso
            this.setSelectedDay(removeLeadingZero(this.incomingDay))
        }
        if (this.incomingDay.length === 3) {
            const date = ordinalDayToDate(this.incomingDay, this.incomingYear)
            //get the month from the date
            const month = date.slice(5, 7).padStart(2, '0')
            let day = date.slice(-2)
            this.iso = this.compileIso(Number(month), Number(day))

            this.setSelectedDay(removeLeadingZero(day))
        }
    }

    @Listen('ruxdayselected')
    handleDaySelected(event: CustomEvent) {
        const detail: DayInfo = event.detail
        this.selectedDay = detail
        //get all rux-day's associated with this element
        // const days = this.el.shadowRoot?.querySelectorAll('rux-day')
        //loop through the days and set the selected attribute to true for the day that was clicked
        if (!this.ruxDays) {
            console.warn('no ruxDays found in handleDaySelected')
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

        const iso = this.compileIso(
            undefined,
            Number(this.selectedDay.dayNumber)
        )
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
                width = 'calc(100% / 5)'
                break
            default:
                width = 'calc(100% / 5)'
        }
        this.el.style.setProperty('--timepicker-width', width)
    }

    /**
     *
     * @param month
     * @param day
     * @returns Compiled ISO string using the current values. Uses values from the time inputs.
     */
    private compileIso(month?: number, day?: number) {
        const monthValue = getMonthValueByName(this.month)
        const year = parseInt(this.year)
        const hours = parseInt(this.hourInput?.value || '0')
        const minutes = parseInt(this.minuteInput?.value || '0')
        const seconds = parseInt(this.secondsInput?.value || '0')
        const milliseconds = parseInt(this.millisecondInput?.value || '0')

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
            console.warn('no ruxDays found in setSelectedDay')
            return
        }
        //wait for new ruxDays to be rendered
        await this.getRuxDays()
        if (dayNumber) {
            this.ruxDays.forEach((day) => {
                if (
                    day.dayNumber === dayNumber &&
                    !day.isFutureDay &&
                    !day.isPastDay
                ) {
                    day.selected = true
                    this.selectedDay = {
                        dayNumber: day.dayNumber,
                        isPastDay: day.isPastDay,
                        isFutureDay: day.isFutureDay,
                        element: day,
                        selected: day.selected,
                    }

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
        if (!this.iso) {
            this.iso = new Date().toISOString()
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

    private async getRuxDays() {
        this.ruxDays = await this.waitForRuxDays()
    }
    componentWillUpdate() {
        this.updateTimepickerWidth()
    }
    componentWillLoad() {
        this.updateTimepickerWidth()
        if (!this.selectedDay) {
            this.getRuxDays().then(() => {
                // this.ruxDays = res;
                if (!this.ruxDays) {
                    console.warn('No rux-days found')
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
        //if the month is January, then the year should be decremented
        if (date.getUTCMonth() === 0) {
            date.setUTCFullYear(date.getUTCFullYear() - 1)
        }

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
        this.ruxCalendarDateTimeUpdated.emit({ iso: this.iso })
    }
    handleYearChange = (event: CustomEvent) => {
        const target = event.target as HTMLRuxSelectElement
        //We know value will be of type string because we're not using a multiselect for year
        const value = target.value as string
        this.year = value
        const date = new Date(this.iso)
        date.setUTCFullYear(parseInt(value))
        this.iso = date.toISOString()
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
        if (target.value.length === 2 && part !== 'ms') {
            if (part === 'hour') this.minuteInput.focus()
            if (part === 'min' && this.precision !== 'min')
                this.secondsInput.focus()
            if (part === 'sec' && this.precision !== 'sec')
                this.millisecondInput.focus()
        }
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
                                isToday={day.isToday}
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
                                onInput={(e) =>
                                    this.handleTimeChange(e, 23, 0, 'hour')
                                }
                                onKeyDown={(evt) =>
                                    ['e', 'E', '+', '-'].includes(evt.key) &&
                                    evt.preventDefault()
                                }
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
                                placeholder="mm"
                                ref={(el) =>
                                    (this.minuteInput = el as HTMLInputElement)
                                }
                                value={this.initMinutesValue}
                                class="part"
                                onInput={(e) =>
                                    this.handleTimeChange(e, 59, 0, 'min')
                                }
                                onKeyDown={(evt) =>
                                    ['e', 'E', '+', '-'].includes(evt.key) &&
                                    evt.preventDefault()
                                }
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
                                        onKeyDown={(evt) =>
                                            ['e', 'E', '+', '-'].includes(
                                                evt.key
                                            ) && evt.preventDefault()
                                        }
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
                        {this.precision === 'ms' && <span>.</span>}
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
                                    onInput={(e) =>
                                        this.handleTimeChange(e, 999, 0, 'ms')
                                    }
                                    onKeyDown={(evt) =>
                                        ['e', 'E', '+', '-'].includes(
                                            evt.key
                                        ) && evt.preventDefault()
                                    }
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
                    </div>
                </div>
            </Host>
        )
    }
}
