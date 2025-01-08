import { Component, Element, Host, Prop, h } from '@stencil/core'

import { dateRange as getRange } from '../helpers'

@Component({
    tag: 'rux-ruler',
    styleUrl: 'rux-ruler.scss',
    shadow: true,
})
export class RuxRuler {
    @Element() el!: HTMLRuxRulerElement
    /**
     * @internal The Timeline's interval. Set automatically from the parent Timeline component
     */
    @Prop() interval: any = ''
    /**
     * @internal The Timeline's start date. Set automatically from the parent Timeline component
     */
    @Prop() start: string = ''
    /**
     * @internal The Timeline's end date. Set automatically from the parent Timeline component
     */
    @Prop() end: string = ''

    /**
     * @internal - The Ruler's time zone. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) timezone = 'UTC'

    /**
     * Display the day (MM/DD) at 00:00. Only works when Timeline interval is set to 'hour'.
     */
    @Prop({ attribute: 'show-start-of-day' }) showStartOfDay? = false

    get dateRange() {
        return getRange(
            new Date(this.start),
            new Date(this.end),
            this.interval,
            1,
            this.timezone
        )
    }

    getColumn(index: number) {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }
        // same as for days
        if (this.interval === 'week') {
            unitOfTime = 24
        }
        if (this.interval === 'month') {
            unitOfTime = 24
        }

        const start = unitOfTime * index + 2
        const end = start + unitOfTime
        return `${unitOfTime * index + 2} / ${end}`
    }

    timePattern = /^00:.+$/

    shouldShowDate(time: string) {
        if (this.interval !== 'hour') {
            return false
        }

        if (!this.showStartOfDay) {
            return false
        }

        return this.timePattern.test(time)
    }

    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map(
                        ([time, newDayDate]: any, index: any) => {
                            const newDay = this.timePattern.test(time)
                                ? newDayDate
                                : ''
                            return (
                                <span
                                    key={index}
                                    class={{
                                        'ruler-time': true,
                                        'ruler-new-day-cell': this.shouldShowDate(
                                            time
                                        ),
                                    }}
                                    style={{
                                        gridRow: '1',
                                        gridColumn: this.getColumn(index),
                                    }}
                                >
                                    {time}
                                    {this.shouldShowDate(time) ? (
                                        <span class="ruler-new-day-display">
                                            {newDay}
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </span>
                            )
                        }
                    )}
                </div>
            </Host>
        )
    }
}
