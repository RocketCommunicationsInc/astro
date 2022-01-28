import { Prop, Component, Element, Host, h } from '@stencil/core'
import {
    format,
    addHours,
    differenceInHours,
    addDays,
    addMonths,
    differenceInDays,
    differenceInMonths,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz/esm'
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

    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.dateRange.map((time, index) => (
                        <span
                            class={{
                                'ruler-time': true,
                                'ruler-time__first': index === 0,
                            }}
                            style={{ gridRow: `${this.track}` }}
                        >
                            {time}
                        </span>
                    ))}
                </div>
            </Host>
        )
    }
}
