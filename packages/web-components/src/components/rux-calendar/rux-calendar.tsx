import { Component, Host, h, Prop, Watch } from '@stencil/core'
import { getDay, getDaysInMonth } from 'date-fns'
// import { utcToZonedTime } from 'date-fns-tz'

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

    //? Any reason for these to be state vs private vars?
    private _date: Date = this.dateIn
        ? new Date(this.dateIn)
        : new Date(Date.now())
    private _month: number = this._date.getMonth() + 1 //+ 1 because getMonth returns 0 indexed array
    private _year: number = this._date.getFullYear()
    private _daysInMonth: number = getDaysInMonth(this._date)
    private _daysInMonthArr: Array<number> = []
    // private _nextMonth: number = this._month + 1 > 12 ? 1 : this._month + 1
    // private _prevMonth: number = this._month - 1 < 1 ? 12 : this._month - 1
    // private _dayOfWeek: number = getDay(this._date)

    connectedCallback() {
        this._fillDaysInMonthArr()
        //? I don't think this is needed but if something breaks try uncommenting it lol
        // if (this.dateIn) this._setStateWithDateIn()
    }

    //* Handle date in - all the state needs to be based off of the same time (date-in, or date now)
    private _setStateWithDateIn() {
        // set all state to use the new datein. Is there a better way?
        if (!this.dateIn) return
        this._date = new Date(this.dateIn)
        this._month = this._date.getMonth() + 1
        this._year = this._date.getFullYear()
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
                                <span>{(monthMap as any)[this._month]}</span>
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
                        <span>SUN</span>
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
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
                            //! I've got a T10 here because it was thinking that this was still Feb 28th when it should be
                            //! March 1st. Looks like a timezone issue.
                            let tempDateStr = new Date(
                                `${this._year}-${monthStr}-${dayStr}T10:00:00.000Z`
                            )

                            //using that date, get the day of the week
                            let dayOfWeek = getDay(tempDateStr)
                            if (day === 1) {
                                console.log(
                                    `${this._year}-${monthStr}-${dayStr}`
                                )
                                console.log(tempDateStr, 'temp date str')
                                console.log(dayOfWeek, 'day of week')
                            }

                            return (
                                <div
                                    class="calendar-day"
                                    style={{
                                        'grid-column': (
                                            dayOfWeek + 1
                                        ).toString(),
                                    }}
                                >
                                    {day}
                                </div>
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
