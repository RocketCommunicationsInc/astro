import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Prop,
    h,
} from '@stencil/core'

export type DayInfo = {
    dayNumber: string
    isPastDay: boolean
    isFutureDay: boolean
    selected: boolean
    element?: HTMLRuxDayElement
}
@Component({
    tag: 'rux-day',
    styleUrl: 'rux-day.scss',
    shadow: true,
})
export class RuxCalendar {
    @Element() el!: HTMLRuxDayElement

    /**
     * @internal
     * Sets the displayed day number
     */
    @Prop() dayNumber: string = ''

    /**
     * @internal
     * sets the day as selected and adds relevant styling
     */
    @Prop({ attribute: 'selected', reflect: true, mutable: true })
    selected: boolean = false

    /**
     * @internal determines if the day is from a past or future month
     */
    @Prop() isPastFutureDay: boolean = false

    /**
     * @internal determines if the day is from a future month
     */
    @Prop() isFutureDay: boolean = false

    /**
     * @internal determines if the day is from a past month
     */
    @Prop() isPastDay: boolean = false
    /**
     * @internal determines if the day is today
     */
    @Prop() isToday: boolean = false

    /**
     * @internal
     * Emitted when a rux-day is selected. This event is listened for by the calendar in order to sync values.
     */
    @Event({ eventName: 'ruxdayselected' })
    ruxDaySelected!: EventEmitter<DayInfo>

    handleDayClick = () => {
        //Emitting if the day clicked is part of the previous or next month is important so that
        // the calendar can update the month and year accordingly when displaying the selected day within the
        // datepicker input
        // this.selected = true
        const info: DayInfo = {
            dayNumber: this.dayNumber,
            isPastDay: this.isPastDay,
            isFutureDay: this.isFutureDay,
            element: this.el,
            selected: this.selected,
        }
        this.ruxDaySelected.emit(info)
    }

    render() {
        const {
            dayNumber,
            isPastFutureDay,
            isToday,
            handleDayClick,
            selected: isSelected,
        } = this
        return (
            <Host onClick={handleDayClick}>
                {/*
                ? Consider making rux-day's buttons for auto-focus and tabbing
              */}
                <div
                    class={{
                        'rux-day': true,
                        'rux-day--past-future': isPastFutureDay,
                        'rux-day--selected': isSelected,
                        'rux-day--today': isToday,
                    }}
                >
                    {dayNumber}
                    {isToday && <span class="rux-day__today-indicator"></span>}
                </div>
            </Host>
        )
    }
}
