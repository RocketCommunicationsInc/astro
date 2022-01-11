import { Prop, Component, Host, h } from '@stencil/core'

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

    get times() {
        const times = []
        for (let i = 0; i < 24; i++) {
            times.push((i < 10 ? '0' : '') + `${i}:00`)
        }
        return times
    }

    render() {
        console.log('times', this.times)
        return (
            <Host>
                <div class="rux-ruler rux-track">
                    <span
                        class="ruler-time"
                        style={{ gridRow: `${this.track}` }}
                    ></span>
                    {this.times.map((time, index) => (
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
