import { Element, Prop, Component, Host, h } from '@stencil/core'
import { formatInTimeZone } from 'date-fns-tz'

/**
 * @slot (default) - The content of the Time Region
 * @part container - The component's container
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 * @part timestamp - The time region's timestamp
 */
@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    @Element() el!: HTMLRuxTimeRegionElement
    /**
     * The start date. Must be an ISO string "2021-02-02T05:00:00Z".
     */
    @Prop({ reflect: true }) start = ''
    /**
     * The end date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    @Prop({ reflect: true }) end = ''
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

    /**
     * @internal - The Time Regions's time zone. Set automatically from the parent Track component.
     */
    @Prop() timezone = 'UTC'

    get formattedTime() {
        if (!this.start || !this.end) {
            return false
        }

        try {
            return (
                formatInTimeZone(new Date(this.start), this.timezone, 'HH:mm') +
                '-' +
                formatInTimeZone(new Date(this.end), this.timezone, 'HH:mm')
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
                        <div class="rux-time-region__datetime" part="timestamp">
                            {this.formattedTime}
                        </div>
                    ) : null}
                </div>
            </Host>
        )
    }
}
