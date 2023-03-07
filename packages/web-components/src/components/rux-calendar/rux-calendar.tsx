import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { getDaysInMonth } from 'date-fns'

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

    @State() dateNow: Date = this.dateIn
        ? new Date(this.dateIn)
        : new Date(Date.now())
    @State() month: number = this.dateNow.getMonth() + 1 //+ 1 because getMonth returns 0 indexed array
    @State() year: number = this.dateNow.getFullYear()
    @State() daysInMonth: number = getDaysInMonth(this.dateNow)
    @State() daysInMonthArr: Array<number> = []
    @State() nextMonth: number = this.month + 1 > 12 ? 1 : this.month + 1
    @State() prevMonth: number = this.month - 1 < 1 ? 12 : this.month - 1

    connectedCallback() {
        this._fillDaysInMonthArr()
        console.log(this.nextMonth, 'next month')
        console.log(this.prevMonth, 'prev monsth')
        // if (this.dateIn) this.handleDateInChange()
    }

    //* Handle date in - all the state needs to be based off of the same time (date-in, or date now)
    private _setStateWithDateIn() {
        // set all state to use the new datein. Is there a better way?
        if (!this.dateIn) return
        this.dateNow = new Date(this.dateIn)
        this.month = this.dateNow.getMonth() + 1
        this.year = this.dateNow.getFullYear()
        this.daysInMonth = getDaysInMonth(this.dateNow)
        this._fillDaysInMonthArr()
    }

    private _fillDaysInMonthArr() {
        this.daysInMonthArr = []
        //daysInMonth is a 0 indexed arr
        for (let i = 0; i < this.daysInMonth; i++) {
            let accountFor0 = i + 1
            this.daysInMonthArr.push(accountFor0)
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
                                <span>{(monthMap as any)[this.month]}</span>
                                <rux-icon
                                    icon="arrow-right"
                                    class="arrow-right-icon"
                                    size="34px"
                                ></rux-icon>
                            </div>
                            <div class="year-picker">
                                <rux-select size="small">
                                    <rux-option
                                        label={this.year.toString()}
                                        value={this.year.toString()}
                                    >
                                        {this.year}
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
                        {this.daysInMonthArr.map((day) => {
                            return <div class="calendar-day">{day}</div>
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
