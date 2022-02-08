import { Prop, Component, Element, Host, h } from '@stencil/core'
import { dateRange as getRange } from '../helpers'

@Component({
    tag: 'rux-ruler',
    styleUrl: 'rux-ruler.scss',
    shadow: true,
})
export class RuxRuler {
    /**
     * The track
     */
    @Prop() track: string = '1'
    @Prop() intervalIncrement = 1
    @Prop() interval: any = ''
    @Prop() startDate: any
    @Prop() endDate: any
    @Element() el!: HTMLRuxRulerElement

    get dateRange() {
        return getRange(
            new Date(this.startDate),
            new Date(this.endDate),
            this.interval,
            this.intervalIncrement
        )
    }

    getColumn(index: number) {
        let unitOfTime = 60
        if (this.interval === 'day') {
            unitOfTime = 24
        }

        // if (index === 0) {
        //     return `${2 + index} / ${(unitOfTime + 2) * index}`
        // } else {
        return `${unitOfTime * index + 2} / ${
            unitOfTime * (index * ++index) + 2
        }`
        // }
    }
    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map((time, index) => (
                        <span
                            class={{
                                'ruler-time': true,
                            }}
                            style={{
                                gridRow: `${this.track}`,
                                gridColumn: this.getColumn(index),
                            }}
                        >
                            {time}
                        </span>
                    ))}
                </div>
            </Host>
        )
    }
}
