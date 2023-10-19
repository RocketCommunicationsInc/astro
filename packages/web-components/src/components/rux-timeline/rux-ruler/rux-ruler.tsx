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
     * Controls wether or not tooltips will show on ruler ticks
     */
    @Prop() tooltips: boolean = false
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
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map(
                        ([time, tooltipTime]: any, index: any) => (
                            <span
                                class={{
                                    'ruler-time': true,
                                }}
                                style={{
                                    gridRow: '1',
                                    gridColumn: this.getColumn(index),
                                }}
                            >
                                {this.tooltips ? (
                                    <rux-tooltip
                                        message={tooltipTime}
                                        placement="top"
                                        delay={300}
                                        strategy="fixed"
                                        offset={8}
                                        disable-auto-update="false"
                                    >
                                        <span class="pointer">{time}</span>
                                    </rux-tooltip>
                                ) : (
                                    <span>{time}</span>
                                )}
                            </span>
                        )
                    )}
                </div>
            </Host>
        )
    }
}
