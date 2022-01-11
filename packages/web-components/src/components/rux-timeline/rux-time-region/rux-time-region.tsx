import { Element, Prop, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    private ruxTrack: HTMLRuxTrackElement | null = null
    @Element() el!: HTMLRuxTimeRegionElement
    /**
     * The start time
     */
    @Prop() start: string = '0000'
    /**
     * The end time
     */
    @Prop() end: string = '2359'

    /**
     * The label
     */
    @Prop() label?: string

    /**
     * The track
     */
    @Prop() track: string = '1'

    componentWillLoad() {
        console.log('region track', this.track)
        this.ruxTrack = this.el.closest('rux-track')
        // console.log('track', this.ruxTrack);

        // const id = this.ruxTrack?.getAttribute('track-id')
        // if (!id) {
        // console.log('no id', this.ruxTrack?.trackId)
        // }
        // console.log('id', id);

        // this.track = id ? id : '1'
    }

    render() {
        return (
            <Host>
                <div
                    part="container"
                    class="rux-time-region"
                    style={{
                        gridRow: `${this.track}`,
                        gridColumn: `time-${this.start} / time-${this.end}`,
                    }}
                >
                    {this.track}
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
