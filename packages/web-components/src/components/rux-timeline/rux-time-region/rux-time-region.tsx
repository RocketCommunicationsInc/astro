import { Element, Prop, Component, Host, h } from '@stencil/core'
import { format } from 'date-fns'

/**
 * @slot (default) - The content of the Time Region
 */
@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    @Element() el!: HTMLRuxTimeRegionElement
    /**
     * The start time
     */
    @Prop({ reflect: true }) start: any
    /**
     * The end time
     */
    @Prop({ reflect: true }) end: any

    /**
     * Optionally hide the bottom right timestamp.
     */
    @Prop({ attribute: 'hide-timestamp' }) hideTimestamp = false

    /**
     * Short hand attribute for displaying a Status icon and appropriate border color.
     */
    @Prop() status?: 'normal' | 'critical' | 'serious' | 'caution' | 'standby'

    /**
     * Visually displays the selected state
     */
    @Prop() selected = false

    get formattedTime() {
        if (!this.start || !this.end) {
            return false
        }

        try {
            return (
                format(new Date(this.start), 'HH:mm') +
                '-' +
                format(new Date(this.end), 'HH:mm')
            )
        } catch (e) {
            return false
        }
    }

    render() {
        return (
            <Host>
                <div
                    part="container"
                    class={{
                        'rux-time-region': true,
                        'rux-time-region--normal': this.status === 'normal',
                        'rux-time-region--critical': this.status === 'critical',
                        'rux-time-region--serious': this.status === 'serious',
                        'rux-time-region--caution': this.status === 'caution',
                        'rux-time-region--standby': this.status === 'standby',
                        'rux-time-region--selected': this.selected,
                    }}
                >
                    <div class="rux-time-region__content">
                        {this.status ? (
                            <rux-status
                                class={{
                                    'light-theme': this.selected,
                                }}
                                status={this.status}
                            ></rux-status>
                        ) : null}
                        <slot></slot>
                    </div>
                    {!this.hideTimestamp ? (
                        <div class="rux-time-region__datetime">
                            {this.formattedTime}
                        </div>
                    ) : null}
                </div>
            </Host>
        )
    }
}
