import { Component, Host, h, Prop, Watch, Element } from '@stencil/core'
import { getDay, getDaysInMonth } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const monthMap = {
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
    @Prop({ attribute: 'date-in' }) dateIn?: string
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
    private _date: Date = this.dateIn
        ? utcToZonedTime(new Date(this.dateIn), 'UTC')
        : utcToZonedTime(new Date(Date.now()), 'UTC')
    private _month: number = this._date.getMonth() + 1 //+ 1 because getMonth returns 0 indexed array
    private _year: number = this._date.getFullYear()
    private _currentDay: number = this._currentDate.getDate()
    private _daysInMonth: number = getDaysInMonth(this._date)
    private _daysInMonthArr: Array<number> = []

    //? May need these if we show past/future dates
    // private _nextMonth: number = this._month + 1 > 12 ? 1 : this._month + 1
    // private _prevMonth: number = this._month - 1 < 1 ? 12 : this._month - 1
    // private _dayOfWeek: number = getDay(this._date)

    connectedCallback() {
        this._fillDaysInMonthArr()
    }

    //? Want to remove the selected prop from rux-day if changing month/year. Is this a good way to do it?
    //? what kind of side effects can this have? What other times will componentWillUpdate fire?
    componentWillUpdate() {
        console.log('compWillUpdate fire')
        const days = this.el.shadowRoot!.querySelectorAll('rux-day')
        days.forEach((day) => {
            day.removeAttribute('selected')
        })
    }

    //* Handle date in - all the state needs to be based off of the same time (date-in, or date now)
    private _setStateWithDateIn() {
        // set all private vars to use the new datein. Is there a better way?
        if (!this.dateIn) return
        //* Convert the date to be UTC so that we don't get timezone issues.
        this._date = utcToZonedTime(new Date(this.dateIn), 'UTC')
        this._month = this._date.getMonth() + 1
        this._year = this._date.getFullYear()
        this._currentDay = this._currentDate.getDate()
        this._daysInMonth = getDaysInMonth(this._date)

        // this._nextMonth = this._month + 1 > 12 ? 1 : this._month + 1
        // this._prevMonth = this._month - 1 < 1 ? 12 : this._month - 1
        // this._dayOfWeek = getDay(this._date)

        this._fillDaysInMonthArr()
    }

    private _fillDaysInMonthArr() {
        this._daysInMonthArr = []
        //daysInMonth is a 0 indexed arr
        for (let i = 0; i < this._daysInMonth; i++) {
            let accountFor0 = i + 1
            this._daysInMonthArr.push(accountFor0)
        }
    }
    render() {
        return (
            <Host>
                <div class="rux-calendar">
                    <div class="calendar-header">
                        <slot name="header">
                            <div class="month-picker">
                                <rux-icon
                                    icon="arrow-left"
                                    class="arrow-left-icon"
                                    size="34px"
                                ></rux-icon>
                                <span id="displayed-month">
                                    {(monthMap as any)[this._month]}
                                </span>
                                <rux-icon
                                    icon="arrow-right"
                                    class="arrow-right-icon"
                                    size="34px"
                                ></rux-icon>
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
                        </slot>
                    </div>
                    <div class="calendar-body">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        {this._daysInMonthArr.map((day) => {
                            // get day of the week, add a class (or something) to the returned div that
                            // adds a grid-column css
                            // Get a new date from the specifc day of the given month/year

                            //* Need to add a '0' to the day/month if it's >= 9, otherwise its invalid
                            let dayStr = day.toString()
                            if (day <= 9) {
                                dayStr = '0' + dayStr
                            }
                            let monthStr = this._month.toString()
                            if (this._month <= 9) {
                                monthStr = '0' + monthStr
                            }

                            //Create a new Date from the day we're on
                            let tempDateStr = utcToZonedTime(
                                new Date(
                                    `${this._year}-${monthStr}-${dayStr}T00:00:00.000Z`
                                ),
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
  Selected a date will persist that seleceted state on a different months day
   (ie, click the 1st on Jan, change month, 1st still selected)

  Worried about timezone issue coming up again. We're changing everything to be UTC in the logic, will that make
  it so that at some point the day will be off in differnet timezones?



*/
