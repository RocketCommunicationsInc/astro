import { Prop, Component, Element, Host, h } from '@stencil/core'
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
    get dateRange() {
        return getRange(
            new Date(this.start),
            new Date(this.end),
            this.interval,
            1,
            this.timezone
        )
    }

    get dayRange() {
        return getRange(
            new Date(this.start),
            new Date(this.end),
            'day',
            1,
            this.timezone
        )
    }

    getColumn(index: number) {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }

        const start = unitOfTime * index + 2
        const end = start + unitOfTime
        return `${unitOfTime * index + 2} / ${end}`
    }

    timePattern = /^00:.+$/

    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map((time: any, index: any) => {
                        const newDay = this.timePattern.test(time)
                            ? this.dayRange[Math.floor(index / 24)]
                            : ''
                        return (
                            <span
                                key={index}
                                class={{
                                    'ruler-time': true,
                                    'ruler-new-day-cell': newDay !== '',
                                }}
                                style={{
                                    gridRow: '1',
                                    gridColumn: this.getColumn(index),
                                }}
                            >
                                {time}
                                {this.interval === 'hour' ? (
                                    <span class="ruler-new-day-display">
                                        {newDay}
                                    </span>
                                ) : null}
                            </span>
                        )
                    })}
                </div>
            </Host>
        )
    }
}
