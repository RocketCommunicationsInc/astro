import { Component, Host, Prop, State, Watch, h } from '@stencil/core'

import { months } from '../rux-datetime-picker/utils'

@Component({
    tag: 'rux-calendar',
    styleUrl: 'rux-calendar.scss',
    shadow: true,
})
export class RuxCalendar {
    @Prop() iso: string = ''
    @Prop() minYear: number = 1900
    @Prop() maxYear: number = 2100

    @State() month: string = ''
    @State() year: string = ''
    @State() days: {
        day: string
        currentMonth: boolean
        isToday: boolean
    }[] = []
    @State() currentDay: string = ''

    private years: number[] = []

    @Watch('iso')
    handleIso() {
        console.log('iso change')
        this.setDates()
    }

    @Watch('month')
    @Watch('year')
    @Watch('days')
    handleDatesChange() {
        // console.log('dates change')
    }

    connectedCallback() {
        this.handleForwardMonth = this.handleForwardMonth.bind(this)
        this.handleBackwardMonth = this.handleBackwardMonth.bind(this)
        if (!this.iso) {
            this.iso = new Date().toISOString()
            console.log('setting iso to: ', this.iso)
        }
        //assign the current date in UTC time
        this.currentDay = new Date().toISOString()
        this.setDates()
    }

    setDates() {
        console.log('running set dates')
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
        console.log('handle forward month')
        const date = new Date(this.iso)
        date.setUTCMonth(date.getUTCMonth() + 1)
        console.log('iso before: ', this.iso)
        this.iso = date.toISOString()
        console.log('iso after: ', this.iso)
        // this.setDates()
    }
    handleBackwardMonth = () => {
        console.log('handle backward month')
        const date = new Date(this.iso)
        date.setUTCMonth(date.getUTCMonth() - 1)
        this.iso = date.toISOString()
        // this.setDates()
    }

    render() {
        const { handleForwardMonth, handleBackwardMonth } = this
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
                            <rux-select value={this.month} inline>
                                {months.map((month) => (
                                    <rux-option
                                        value={month.value}
                                        label={month.label}
                                    ></rux-option>
                                ))}
                            </rux-select>
                            <rux-select value={this.year} inline>
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
                            ></rux-day>
                        ))}
                    </div>
                </div>
            </Host>
        )
    }
}
