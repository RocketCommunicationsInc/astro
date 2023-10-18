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

    render() {
        console.log(this.start, this.end, this.interval, this.timezone)
        console.log(
            getRange(
                new Date(this.start),
                new Date(this.end),
                'day',
                1,
                this.timezone
            )
        )

        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map((time: any, index: any) => (
                        <span
                            class={{
                                'ruler-time': true,
                            }}
                            style={{
                                gridRow: '1',
                                gridColumn: this.getColumn(index),
                            }}
                        >
                            <rux-tooltip
                                message={`${
                                    this.dayRange[Math.floor(index / 24)]
                                } ${time}`}
                                placement="top"
                                delay={300}
                                strategy="fixed"
                                offset={8}
                                disable-auto-update="false"
                            >
                                <span>{time}</span>
                            </rux-tooltip>
                        </span>
                    ))}
                </div>
            </Host>
        )
    }
}
