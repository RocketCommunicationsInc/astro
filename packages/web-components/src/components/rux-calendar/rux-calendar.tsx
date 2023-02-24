import { Component, Host, h, Prop, State } from '@stencil/core'
import { getDaysInMonth } from 'date-fns'

const monthMap = {
    1: 'January',
    2: 'February',
    3: 'March',
}

@Component({
    tag: 'rux-calendar',
    styleUrl: 'rux-calendar.scss',
    shadow: true,
})
export class RuxCalendar {
    // I want the month and year pickers to be there by default, but true by default props are bad
    // @Prop({ attribute: "month-picker"}) monthPicker: boolean = true
    // @Prop({ attribute: "year-picker"}) yearPicker: boolean = true

    /**
     * Option to give the calendar a specfic month/year
     */
    @Prop({ attribute: 'date-in' }) dateIn?: string

    @State() dateNow: Date = new Date(Date.now())
    @State() month: number = new Date(Date.now()).getMonth() + 1 //+ 1 because getMonth returns 0 for jan
    @State() year: number = new Date(Date.now()).getFullYear()
    @State() daysInMonth: number = getDaysInMonth(new Date(Date.now()))
    @State() daysInMonthArr: Array<number> = []

    connectedCallback() {
        this._fillDaysInMonthArr()
    }

    //* Handle date in - all the state needs to be based off of the same time (date-in, or date now)
    // private _setStateWithDateIn() {
    //   if(!this.dateIn) return
    //   this.dateNow =
    // }

    private _fillDaysInMonthArr() {
        for (let i = 0; i < this.daysInMonth; i++) {
            this.daysInMonthArr.push(i)
        }
        let newLast = this.daysInMonthArr.pop()
        newLast = newLast! += 1
        let newFirst = this.daysInMonthArr.shift()
        newFirst = newFirst! += 1
        this.daysInMonthArr.push(newLast)
        this.daysInMonthArr.unshift(newFirst)
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
                                <rux-icon
                                    icon="arrow-left"
                                    class="arrow-left-icon"
                                    size="34px"
                                ></rux-icon>
                                <span>{this.year}</span>
                                <rux-icon
                                    icon="arrow-right"
                                    class="arrow-right-icon"
                                    size="34px"
                                ></rux-icon>
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
