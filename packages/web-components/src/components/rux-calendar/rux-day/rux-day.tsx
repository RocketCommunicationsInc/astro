import { Component, Host, Prop, h } from '@stencil/core'

@Component({
    tag: 'rux-day',
    styleUrl: 'rux-day.scss',
    shadow: true,
})
export class RuxCalendar {
    @Prop() dayNumber: string = ''

    /**
     * @internal determines if the day is from a past or future month
     */
    @Prop() isPastFutureDay: boolean = false

    /**
     * @internal determines if the day is today
     */
    @Prop() isToday: boolean = false
    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-day': true,
                        'rux-day--past-future': this.isPastFutureDay,
                        'rux-day--today': this.isToday,
                    }}
                >
                    {this.dayNumber}
                    {this.isToday && (
                        <span class="rux-day__today-indicator"></span>
                    )}
                </div>
            </Host>
        )
    }
}
