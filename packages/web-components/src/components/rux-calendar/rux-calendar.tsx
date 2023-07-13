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
    @Prop({ attribute: 'date-in' }) dateIn?: string | number
    @Watch('dateIn')
    handleDateInChange() {
        //? Should we do some validation here to make sure the passed in date-in is a date string?
        this._setStateWithDateIn()
    }

    /*
      ? Using utcToZonedTime here so that we dont' need to edit it on connectedCallback if date-in is given.
      ? Using utcToZonedTime on default state (date-in not provided) because I _think_ without it, when
      ? it's the first of a month, we'll have that timezone issue where it'll say it's the prev month still.
    */

    @State() _test: Date = new Date(Date.now())
    //* This _date state controls the date that each compuatation uses. If the month updates, it'll update
    //* this._date with that new month. Same for year.
    //? Could we add a watch to this._date that will run the updateDate/State funcs?
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
        // this._handleYears(this._maxDate, this._minDate)
        this._updateDate(this._year, this._month)
    }

    //? Might need later when/if we tackle dynamic min/max changes
    // @Watch('min')
    // @Watch('max')
    // handleMinMaxChange() {
    //     console.log('heard min or max change')
    // }

    private _currentDate: Date = new Date(Date.now())
    private _currentDay: number = this._currentDate.getDate()
    private _prevMonth: number = this._currentDate.getMonth() - 2
    private _nextMonth: number = this._currentDate.getMonth() + 2
    private _daysInMonth: number = 28 | 29 | 30 | 31
    private _daysInMonthArr: Array<number> = []
    private _prevDaysToShow: { [key: string]: any } = {}
    private _nextDaysToShow: Array<Number> = []
    private _allYearsArr: Array<Number> = []

    //! might be a bug here. might need to make the else be 10 from .now()
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
        this._handleMonthChange = this._handleMonthChange.bind(this)
        this._handleYearChange = this._handleYearChange.bind(this)

        if (this.dateIn) {
            this._setStateWithDateIn()
        }
        this._handleYears(this._maxDate, this._minDate)
    }

    componentDidLoad() {
        // attach event listeners to back and forward month arrows
        this.el
            .shadowRoot!.querySelector('#backward-month')
            ?.addEventListener('click', () => {
                this._handleBackwardArrow()
            })
        this.el
            .shadowRoot!.querySelector('#forward-month')
            ?.addEventListener('click', () => {
                this._handleForwardArrow()
            })
    }
    //? Want to remove the selected prop from rux-day if changing month/year. Is this a good way to do it?
    //? what kind of side effects can this have? What other times will componentWillUpdate fire?
    //? Might become an issue when we use the month/year picker to change month/year?
    componentWillUpdate() {
        const days = this.el.shadowRoot!.querySelectorAll('rux-day')
        days.forEach((day) => {
            day.removeAttribute('selected')
        })
    }

    private _handleYears(maxDate: Date, minDate: Date) {
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
                    new Date(`${year}-${this._padMonth(month)}-${day}`),
                    'UTC'
                )
            } else {
                this._date = utcToZonedTime(
                    new Date(`${year}-${this._padMonth(month)}-01`),
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
     * @returns returns early if this._dateIn is falsey.
     */
    private _setStateWithDateIn() {
        // set all private vars to use the new datein. Is there a better way?
        if (!this.dateIn) return
        //* Convert the date to be UTC so that we don't get timezone issues.
        // this._date = utcToZonedTime(new Date(this.dateIn), 'UTC')
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
            //dayOfWeekOfLastDay is 0-6
            //if its 2, then you need to finish that week, plus the next week. so:
            // 2 + 5 + 7
            //need to account for months who's last day is in the 6th row, ie April. In these cases we only need to finish out the week.
            // this only happens when the first day of the month is a Friday (for months with 31 days) or sat (for months with 30)
            // get first day of month, and the number of days in the month.
            // if first day of month is fri (5) and there are 31 days, that'll bleed into the 6th week.
            // same with first day of month being a sat (6) and having 30 days in the month.

            let dateFromFirstDay = utcToZonedTime(
                new Date(`${this._year}-${this._padMonth(this._month)}-01`),
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
     * Util for creating new dates, where the month needs to be prefixed by a '0' if less than 10.
     * @param monthNum the month number to pad
     * @returns a string that concatenates a '0' to the month if the month is less than 9. Example: 9 -> 09
     */
    private _padMonth(monthNum: number) {
        let paddedMonth = monthNum.toString()
        if (monthNum <= 9) {
            paddedMonth = '0' + monthNum.toString()
        }
        return paddedMonth
    }

    /**
     * Determines the days from the previous month to show on the calendar, if any.
     * @param monthNum the month number, 1-12
     * @returns An array from the keys in the _prevDaysToShow variable. Used to map thru and render rux-days
     */
    private _findPrevDaysToShow(monthNum: number) {
        //! I'm going to leave this in because it works, but as you can see from the _findNextDaysToShow
        //! func, just returning a normal array works. Grid is slotting it correclty still, so idk if we need
        //! to know the dayOfWeek.

        //! update: yeah it's way too complex for no good reason, afaict. If you remove the
        //! inline grid styles from where this function is being called, everything still works.

        //* If the current month is 01, then the prev month is 12, and the year is this._year-1.
        let newDate: Date
        if (monthNum === 12) {
            newDate = utcToZonedTime(
                new Date(`${this._year - 1}-${this._padMonth(monthNum)}-01`),
                'UTC'
            )
        } else {
            newDate = utcToZonedTime(
                new Date(`${this._year}-${this._padMonth(monthNum)}-01`),
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
        //? Only doing this because I couldn't get Object.keys(prevDaysToShow).forEach to
        //? Actually render the rux-days in the JSX
        //return an array from the keys so that we can map thru it in the JSX
        return Array.from(Object.keys(this._prevDaysToShow))
    }

    /**
     * Updates this._month when the month picker value changes.
     * @param e The select change event.
     */
    private _handleMonthChange(e: Event) {
        const tar = e.target as HTMLSelectElement
        this._month = parseInt(tar.value)
    }

    private _handleYearChange(e: Event) {
        const tar = e.target as HTMLSelectElement
        this._year = parseInt(tar.value)
    }

    private _handleBackwardArrow() {
        // if it's 12, go to one,ect.
        // increase date by 1 month, set state
        if (this._prevMonth === 12) {
            this._year = this._year - 1
        }

        this._updateDate(this._year, this._prevMonth)
    }
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
                            ></rux-icon>
                            <div class="month-year-selects">
                                <rux-select
                                    onRuxchange={this._handleMonthChange}
                                    size="small"
                                    value={this._month.toString()}
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
                            //* Need to add a '0' to the day/month if it's >= 9, otherwise its invalid
                            let dayStr = day.toString()
                            if (day <= 9) {
                                dayStr = '0' + dayStr
                            }
                            let monthStr = this._month.toString()
                            if (this._month <= 9) {
                                monthStr = '0' + monthStr
                            }
                            //? Could replace monthStr and dayStr with padMonth func. Might need to
                            //? rename it ot padMonthDay if I'm gonna use it for day, tho

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
