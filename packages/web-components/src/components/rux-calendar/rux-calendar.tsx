import { Component, Host, h, Prop, Watch, Element, State } from '@stencil/core'
import { getDay, getDaysInMonth, lastDayOfMonth } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

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
     * Option to give the calendar a specfic month/year
     */
    @Prop({ attribute: 'date-in' }) dateIn?: string | number
    @Watch('dateIn')
    handleDateInChange() {
        //? Should we do some validation here to make sure the passed in date-in is a date string?
        console.log('heard datin change')
        this._setStateWithDateIn()
    }

    /*
      ? Using utcToZonedTime here so that we dont' need to edit it on connectedCallback if date-in is given.
      ? Using utcToZonedTime on default state (date-in not provided) because I _think_ without it, when
      ? it's the first of a month, we'll have that timezone issue where it'll say it's the prev month still.
    */
    private _currentDate: Date = utcToZonedTime(new Date(Date.now()), 'UTC')
    //* This _date state conrtols what each compuatation uses. If the month updates, it'll update
    //* this._date with that new month. Same for year.
    @State() _date: Date = this.dateIn
        ? utcToZonedTime(new Date(this.dateIn), 'UTC')
        : utcToZonedTime(new Date(Date.now()), 'UTC')
    @State() _month: number = this._date.getMonth() + 1

    @Watch('_month')
    handleMonthChange() {
        console.log('heard month change')
        this._updateDate(this._year, this._month)
    }

    // private _month: number = this._date.getMonth() + 1 //+ 1 because getMonth returns 0 indexed array
    private _year: number = this._date.getFullYear()
    private _currentDay: number = this._currentDate.getDate()
    private _daysInMonth: number = getDaysInMonth(this._date)
    private _daysInMonthArr: Array<number> = []
    // private _nextMonth: number = this._month + 1 > 12 ? 1 : this._month + 1
    private _prevMonth: number = this._month - 1 < 1 ? 12 : this._month - 1
    private _prevDaysToShow: { [key: string]: any } = {}
    private _nextDaysToShow: Array<Number> = this._findNextDaysToShow()
    // private _selectedMonth: number | string | null = this._month

    connectedCallback() {
        this._fillDaysInMonthArr()
        this._nextDaysToShow = this._findNextDaysToShow()
        this._handleSelectChange = this._handleSelectChange.bind(this)
    }

    //? Want to remove the selected prop from rux-day if changing month/year. Is this a good way to do it?
    //? what kind of side effects can this have? What other times will componentWillUpdate fire?
    //? Might become an issue when we use the month/year picker to change month/year?
    componentWillUpdate() {
        console.log('compWillUpdate fire')
        const days = this.el.shadowRoot!.querySelectorAll('rux-day')
        days.forEach((day) => {
            day.removeAttribute('selected')
        })
    }

    /**
     *
     * @param year the year
     * @param month the month
     * @param day optional: the day
     * This function updates _date with a new date from the given params. After _date is set with
     * the new info, it calls _updateState, which will update all other variables using the new _date.
     */
    private _updateDate(
        year?: number,
        month?: number,
        day?: number,
        dateIn?: number | string
    ) {
        if (!dateIn) {
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
            }
        } else {
            this._date = utcToZonedTime(new Date(this.dateIn!), 'UTC')
        }

        this._updateState()
    }
    /**
     * This function updates all relevant private variables/state. This is called in _updateDate, and
     * relies on the new Date to be set in that function.
     */
    private _updateState() {
        this._year = this._date.getFullYear()
        this._currentDay = this._currentDate.getDate()
        this._daysInMonth = getDaysInMonth(this._date)
        this._daysInMonthArr = []
        this._prevMonth = this._month - 1 < 1 ? 12 : this._month - 1
        this._nextDaysToShow = this._findNextDaysToShow()
        this._month = this._date.getMonth() + 1
        this._fillDaysInMonthArr()
    }

    //* Handle date in - all the state needs to be based off of the same time (date-in, or date now)
    private _setStateWithDateIn() {
        // set all private vars to use the new datein. Is there a better way?
        if (!this.dateIn) return
        //* Convert the date to be UTC so that we don't get timezone issues.
        // this._date = utcToZonedTime(new Date(this.dateIn), 'UTC')
        this._updateDate(undefined, undefined, undefined, this.dateIn)
    }

    private _fillDaysInMonthArr() {
        this._daysInMonthArr = []
        //daysInMonth is a 0 indexed arr
        for (let i = 0; i < this._daysInMonth; i++) {
            let accountFor0 = i + 1
            this._daysInMonthArr.push(accountFor0)
        }
    }

    /**
     *
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
            // same with FDoM being a sat (6) and having 30 days in the month.

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
     *
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
     *
     * @param monthNum the month number, 1-12
     * @returns An array from the keys in the _prevDaysToShow variable. Used to map thru and render rux-days
     */
    private _findPrevDaysToShow(monthNum: number) {
        //! I'm going to leave this in because it works, but as you can see from the _findNextDaysToShow
        //! func, just returning a normal array works. Grid is slotting it correclty still, so idk if we need
        //! to know the dayOfWeek.

        //! update: yeah it's way too complex for no good reason, afaict. If you remove the
        //! inline grid styles from where this function is being called, everything still works.
        const newDate = utcToZonedTime(
            new Date(`${this._year}-${this._padMonth(monthNum)}-01`),
            'UTC'
        )
        //try clearing it
        this._prevDaysToShow = {}
        // Stop if the last day of the month in prevMonth is a Saturday (5). This means that the first day of
        // the curent month will be Sunday, so we won't be rendering anything from the prevMonth.
        if (newDate.getDay() === 5) return
        const lastDayOfWeek = lastDayOfMonth(newDate).getDay()

        //Fill in our _prevDaysToShow with keys being the day of the week (0-5) and values being the
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

    private _handleSelectChange(e: Event) {
        console.log('heard select change')
        const tar = e.target as HTMLSelectElement
        this._month = parseInt(tar.value)
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
                                size="34px"
                            ></rux-icon>
                            <div class="month-picker">
                                <select
                                    id="displayed-month"
                                    onChange={this._handleSelectChange}
                                    // size="small"
                                    // value={this._month.toString()}
                                >
                                    {Object.keys(monthMap).map((key) => {
                                        return (
                                            <option
                                                label={monthMap[parseInt(key)]}
                                                value={key}
                                                selected={
                                                    this._month ===
                                                    parseInt(key)
                                                        ? true
                                                        : false
                                                }
                                            ></option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div class="year-picker">
                                <rux-select size="small">
                                    <rux-option
                                        label={this._year.toString()}
                                        value={this._year.toString()}
                                    >
                                        {this._year}
                                    </rux-option>
                                </rux-select>
                            </div>
                            <rux-icon
                                icon="keyboard-arrow-right"
                                class="arrow-right-icon"
                                size="34px"
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
                    <div class="calendar-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </Host>
        )
    }
}

//! Known Bugs
/*
  Worried about timezone issue coming up again. We're changing everything to be UTC in the logic, will that make
  it so that at some point the day will be off in differnet timezones?



*/
