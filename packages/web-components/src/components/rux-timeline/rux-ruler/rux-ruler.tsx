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
    @Prop() interval: any = ''
    @Prop() startDate: any
    @Prop() endDate: any
    @Element() el!: HTMLRuxRulerElement

    get dateRange() {
        return getRange(
            new Date(this.startDate),
            new Date(this.endDate),
            this.interval,
            1
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
                    {this.dateRange.map((time, index) => (
                        <span
                            class={{
                                'ruler-time': true,
                            }}
                            style={{
                                gridRow: '1',
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
