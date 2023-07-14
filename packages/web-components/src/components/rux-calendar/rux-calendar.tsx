import { Component, Host, h, Prop, Watch, Element, State } from '@stencil/core'
import { getDay, getDaysInMonth, lastDayOfMonth } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { hasSlot } from '../../utils/utils'

type MonthMap = {
    [key: number]: string
}

const monthMap: MonthMap = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

@Component({
    tag: 'rux-calendar',
    styleUrl: 'rux-calendar.scss',
    shadow: true,
})
export class RuxCalendar {
    @Element() el!: HTMLRuxCalendarElement

    /**
     * Max date that the calendar will go to. Needs to be a valid date string.
     */
    @Prop() max?: string

    /**
     * Min date that the calendar will go to. Needs to be a valid date string.
     */
    @Prop() min?: string

    /**
     * Option to give the calendar a specfic month/year
     */
    @Prop({ attribute: 'date-in', reflect: true }) dateIn?: string | number
    @Watch('dateIn')
    handleDateInChange() {
        this._setStateWithDateIn()
    }

    @State() _date: Date = this.dateIn
        ? utcToZonedTime(new Date(this.dateIn), 'UTC')
        : utcToZonedTime(new Date(Date.now()), 'UTC')

    @State() _month: number = this._date.getMonth() + 1 //getMonth returns a 0 indexed num, so we add 1
    @State() _year: number = this._date.getFullYear()
    @State() _hasFooter = hasSlot(this.el, 'footer')

    @Watch('_month')
    handleMonthWatch() {
        this._updateDate(this._year, this._month)
    }

    @Watch('_year')
    handleYearWatch() {
        this._updateDate(this._year, this._month)
    }

    @Watch('min')
    @Watch('max')
    handleMinMaxChange() {
        if (this.max) this._maxDate = new Date(this.max)
        if (this.min) this._minDate = new Date(this.min)
        this._handleYears(this._maxDate, this._minDate)
    }

    private _currentDate: Date = new Date(Date.now())
    private _currentDay: number = this._currentDate.getDate()
    private _prevMonth: number = this._currentDate.getMonth() - 2
    private _nextMonth: number = this._currentDate.getMonth() + 2
    private _daysInMonth: number = 28 | 29 | 30 | 31
    private _daysInMonthArr: Array<number> = []
    private _prevDaysToShow: { [key: string]: any } = {}
    private _nextDaysToShow: Array<Number> = []
    private _allYearsArr: Array<Number> = []

    private _maxDate: Date = this.max
        ? new Date(this.max)
        : new Date(Date.now())
    private _minDate: Date = this.min
        ? new Date(this.min)
        : new Date(Date.now())

    private _maxYearArr: Array<number> = []
    private _minYearArr: Array<number> = []

    connectedCallback() {
        this._updateState()
        this._fillDaysInMonthArr()
        this._nextDaysToShow = this._findNextDaysToShow()
        this._handleBackwardArrow = this._handleBackwardArrow.bind(this)
        this._handleForwardArrow = this._handleForwardArrow.bind(this)
        this._handleMonthChange = this._handleMonthChange.bind(this)
        this._handleYearChange = this._handleYearChange.bind(this)

        if (this.dateIn) {
            this._setStateWithDateIn()
        }
        this._handleYears(this._maxDate, this._minDate)
    }

    componentWillUpdate() {
        //remove any selected attributes from days
        const days = this.el.shadowRoot!.querySelectorAll('rux-day')
        days.forEach((day) => {
            if (day.selected) day.removeAttribute('selected')
        })
    }

    /**
     * Fills in the year-picker according to the min and max dates provided.
     * @param maxDate the maximun date that the calendar can go
     * @param minDate the minimun date the calendar can go
     */
    private _handleYears(maxDate: Date, minDate: Date) {
        //clear arrs
        this._minYearArr = []
        this._maxYearArr = []
        //maxDiff is the difference in years from the current/date-in date, to the max date.
        const maxDiff = maxDate.getFullYear() - this._date.getFullYear()
        const minDiff = this._date.getFullYear() - minDate.getFullYear()

        //fill in arrays
        for (let i = 1; i <= maxDiff; i++) {
            this._maxYearArr.push(this._date.getFullYear() + i)
        }
        for (let i = 1; i <= minDiff; i++) {
            this._minYearArr.push(this._date.getFullYear() - i)
        }
        // combine min and max
        this._allYearsArr = this._minYearArr.concat(this._maxYearArr)
        this._allYearsArr.push(this._year)
        this._allYearsArr.sort()
    }

    /**
     * This function updates _date with a new date from the given params. After _date is set with
     * the new info, it calls _updateState, which will update all other variables using the new _date.
     * @param year the year
     * @param month the month
     * @param day optional: the day
     */
    private _updateDate(year?: number, month?: number, day?: number) {
        if (year && month) {
            if (day) {
                this._date = utcToZonedTime(
                    new Date(`${year}-${this._padNum(month)}-${day}`),
                    'UTC'
                )
            } else {
                this._date = utcToZonedTime(
                    new Date(`${year}-${this._padNum(month)}-01`),
                    'UTC'
                )
            }
        } else {
            this._date = utcToZonedTime(new Date(this.dateIn!), 'UTC')
        }

        this._updateState()
    }
    /**
     * This function updates all relevant private variables/state.
     */
    private _updateState() {
        this._year = this._date.getFullYear()
        this._currentDay = this._currentDate.getDate()
        this._daysInMonth = getDaysInMonth(this._date)
        this._daysInMonthArr = []
        this._prevMonth = this._month - 1 < 1 ? 12 : this._month - 1
        this._nextMonth = this._month + 1 >= 13 ? 1 : this._month + 1
        this._nextDaysToShow = this._findNextDaysToShow()
        this._month = this._date.getMonth() + 1
        this._maxDate = this.max
            ? new Date(this.max)
            : new Date(`${this._date.getFullYear() + 11}-01-01`)
        this._minDate = this.min
            ? new Date(this.min)
            : new Date(`${this._date.getFullYear() - 9}-01-01`)
        this._fillDaysInMonthArr()
    }

    /**
     * Handle date in - all the state needs to be based off of the same time (date-in, or date now)
     * This function will determine the date for all other state to be based off of, and then call
     * _updateDate().
     * returns early if this._dateIn is falsey.
     */
    private _setStateWithDateIn() {
        if (!this.dateIn) return
        if (new Date(Number(this.dateIn)).getTime() > 0) {
            //unix time
            this.dateIn = Number(this.dateIn)
        }
        this._updateDate()
    }

    /**
     * Util for filling in this._daysInMonthArr. Accounts for the 0 index.
     */
    private _fillDaysInMonthArr() {
        this._daysInMonthArr = []
        //daysInMonth is a 0 indexed arr
        for (let i = 0; i < this._daysInMonth; i++) {
            let accountFor0 = i + 1
            this._daysInMonthArr.push(accountFor0)
        }
    }

    /**
     * Determines the days to show from the next month, if any.
     * @returns An array of the correct amount of days to render to fill out the 6 week grid.
     */
    private _findNextDaysToShow() {
        let lastDay = lastDayOfMonth(this._date)
        const dayOfWeekOfLastDay = lastDay.getDay()

        let returnArr = []
        if (dayOfWeekOfLastDay === 6) {
            returnArr = [1, 2, 3, 4, 5, 6, 7]
        } else {
            let dateFromFirstDay = utcToZonedTime(
                new Date(`${this._year}-${this._padNum(this._month)}-01`),
                'UTC'
            )
            let firstDayOfCurrMonth = dateFromFirstDay.getDay()
            let differenceInFirstWeek = 7 - (dayOfWeekOfLastDay + 1)
            if (
                (firstDayOfCurrMonth === 5 &&
                    getDaysInMonth(dateFromFirstDay) === 31) ||
                (firstDayOfCurrMonth === 6 &&
                    getDaysInMonth(dateFromFirstDay) === 30) ||
                (firstDayOfCurrMonth === 6 &&
                    getDaysInMonth(dateFromFirstDay) === 31)
            ) {
                //just finish out the week
                for (let i = 1; i < differenceInFirstWeek + 1; i++) {
                    returnArr.push(i)
                }
            } else {
                //need to finish the 5th week, and do the 6th week.
                for (let i = 1; i < differenceInFirstWeek + 8; i++) {
                    returnArr.push(i)
                }
            }
        }
        return returnArr
    }

    /**
     * Determines the days from the previous month to show on the calendar, if any.
     * @param monthNum the month number, 1-12
     * @returns An array from the keys in the _prevDaysToShow variable. Used to map thru and render rux-days
     */
    private _findPrevDaysToShow(monthNum: number) {
        //* If the current month is 01, then the prev month is 12, and the year is this._year-1.
        let newDate: Date
        if (monthNum === 12) {
            newDate = utcToZonedTime(
                new Date(`${this._year - 1}-${this._padNum(monthNum)}-01`),
                'UTC'
            )
        } else {
            newDate = utcToZonedTime(
                new Date(`${this._year}-${this._padNum(monthNum)}-01`),
                'UTC'
            )
        }
        this._prevDaysToShow = {}
        //* Stop if the last day of the month in prevMonth is a Saturday (6). This means that the first day of
        //* the curent month will be Sunday, so we won't be rendering anything from the prevMonth.
        const lastDayOfWeek = lastDayOfMonth(newDate).getDay()
        if (lastDayOfWeek === 6) return

        // Fill in our _prevDaysToShow with keys being the day of the week (0-6) and values being the
        // day of the month (24, 25, ect)
        for (let i = 0; i <= lastDayOfWeek; i++) {
            // get the last day of the month.
            let lastDay = lastDayOfMonth(newDate).getDate()
            // subtract i from last day, that will give us the other days we need to show.
            let dayToUse = lastDay - i
            // this lastDayOfWeek - i puts the day number in the correct day of week spot.
            this._prevDaysToShow[lastDayOfWeek - i] = dayToUse
        }

        //return an array from the keys so that we can map thru it in the JSX
        return Array.from(Object.keys(this._prevDaysToShow))
    }

    /**
     * Util for creating new dates, where the month needs to be prefixed by a '0' if less than 10.
     * @param num the month number to pad
     * @returns a string that concatenates a '0' to the month if the month is less than 10. Example: 9 -> 09
     */
    private _padNum(num: number) {
        let paddedNum = num.toString()
        if (num <= 9) {
            paddedNum = '0' + num.toString()
        }
        return paddedNum
    }

    /**
     * Updates this._month when the month picker value changes.
     * @param e The select change event.
     */
    private _handleMonthChange(e: Event) {
        const target = e.target as HTMLSelectElement
        this._month = parseInt(target.value)
    }

    /**
     * Updates this._year when the year picker value changes.
     * @param e The select change event
     */
    private _handleYearChange(e: Event) {
        const target = e.target as HTMLSelectElement
        this._year = parseInt(target.value)
    }

    /**
     * Handles changing the date when the backward arrow is used.
     */
    private _handleBackwardArrow() {
        // if it's 12, go to one,ect.
        // increase date by 1 month, set state
        if (this._prevMonth === 12) {
            this._year = this._year - 1
        }

        this._updateDate(this._year, this._prevMonth)
    }

    /**
     * Handles changing the date when the forward arrow is used.
     */
    private _handleForwardArrow() {
        if (this._nextMonth === 1) this._year = this._year + 1
        this._updateDate(this._year, this._nextMonth)
    }

    render() {
        return (
            <Host>
                <div class="rux-calendar">
                    <div class="calendar-header">
                        <slot name="header">
                            <rux-icon
                                icon="keyboard-arrow-left"
                                class="arrow-left-icon"
                                size="1.25rem"
                                id="backward-month"
                                onClick={this._handleBackwardArrow}
                            ></rux-icon>
                            <div class="month-year-selects">
                                <rux-select
                                    onRuxchange={this._handleMonthChange}
                                    size="small"
                                    value={this._month.toString()}
                                    id="month-picker"
                                    inline
                                >
                                    {Object.keys(monthMap).map((key) => {
                                        return (
                                            <rux-option
                                                label={monthMap[parseInt(key)]}
                                                value={key}
                                            ></rux-option>
                                        )
                                    })}
                                </rux-select>
                                <rux-select
                                    size="small"
                                    value={this._year.toString()}
                                    onRuxchange={this._handleYearChange}
                                    id="year-picker"
                                    inline
                                >
                                    {this._allYearsArr.map((year) => {
                                        return (
                                            <rux-option
                                                label={year.toString()}
                                                value={year.toString()}
                                            ></rux-option>
                                        )
                                    })}
                                </rux-select>
                            </div>
                            <rux-icon
                                icon="keyboard-arrow-right"
                                class="arrow-right-icon"
                                size="1.25rem"
                                id="forward-month"
                                onClick={this._handleForwardArrow}
                            ></rux-icon>
                        </slot>
                    </div>
                    <div class="calendar-body">
                        <span class="week-header">Sun</span>
                        <span class="week-header">Mon</span>
                        <span class="week-header">Tue</span>
                        <span class="week-header">Wed</span>
                        <span class="week-header">Thu</span>
                        <span class="week-header">Fri</span>
                        <span class="week-header">Sat</span>
                        {this._findPrevDaysToShow(this._prevMonth)?.map(
                            (day) => {
                                return (
                                    <rux-day
                                        style={{
                                            'grid-column': (
                                                parseInt(day) + 1
                                            ).toString(),
                                        }}
                                        class="past-future-day"
                                    >
                                        {this._prevDaysToShow[day]}
                                    </rux-day>
                                )
                            }
                        )}
                        {this._daysInMonthArr.map((day) => {
                            const dayStr = this._padNum(day)
                            const monthStr = this._padNum(this._month)

                            //Create a new Date from the day we're on
                            let tempDateStr = utcToZonedTime(
                                new Date(`${this._year}-${monthStr}-${dayStr}`),
                                'UTC'
                            )
                            //using that date, get the day of the week
                            let dayOfWeek = getDay(tempDateStr)
                            let isCurrentDay = false

                            //* day needs to match current day and be in the IRL month and year in order
                            //* to get the 'today' class.
                            if (
                                day === this._currentDay &&
                                this._year ===
                                    this._currentDate.getFullYear() &&
                                this._month === this._currentDate.getMonth() + 1
                            ) {
                                isCurrentDay = true
                            }

                            return (
                                <rux-day
                                    style={{
                                        'grid-column': (
                                            dayOfWeek + 1
                                        ).toString(),
                                    }}
                                    class={{
                                        today: isCurrentDay,
                                    }}
                                >
                                    {day}
                                    {isCurrentDay ? (
                                        <div
                                            slot="today-dot"
                                            class="today-dot"
                                        ></div>
                                    ) : null}
                                </rux-day>
                            )
                        })}
                        {this._nextDaysToShow.map((dayOfMonth) => {
                            return (
                                <rux-day class="past-future-day">
                                    {dayOfMonth}
                                </rux-day>
                            )
                        })}
                    </div>
                    {this._hasFooter ? (
                        <div class="calendar-footer">
                            <slot name="footer"></slot>
                        </div>
                    ) : null}
                </div>
            </Host>
        )
    }
}
