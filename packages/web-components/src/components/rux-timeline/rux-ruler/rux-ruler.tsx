import { Prop, Component, Element, Host, h } from '@stencil/core'
import { dateRange as getRange, dateRangeInMonths } from '../helpers'

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

    @Prop() jawn = 'normal'
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

    get dateRangeMo() {
        return dateRangeInMonths(
            new Date(this.start),
            new Date(this.end),
            this.interval,
            1,
            this.timezone
        )
    }

    getColumn(index: number) {
        if (this.jawn === 'normal') {
            let unitOfTime = 60
            if (this.interval === 'day') {
                unitOfTime = 24
            }

            const start = unitOfTime * index + 2
            const end = start + unitOfTime
            return `${unitOfTime * index + 2} / ${end}`
        } else {
            let unitOfTime = 60 * 24
            const start = unitOfTime * index + 2
            const end = start + unitOfTime
            return `${unitOfTime * index + 2} / ${end}`
        }
    }

    render() {
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    {this.jawn === 'normal'
                        ? this.dateRange.map((time: any, index: any) => (
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
                          ))
                        : this.dateRangeMo.map((time: any, index: any) => (
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
                    {/* {this.dateRangeMo.map((time: any, index: any) => (
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
                    ))} */}
                </div>
            </Host>
        )
    }
}
