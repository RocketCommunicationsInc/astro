import { Component, h, Element, Prop, Watch } from '@stencil/core'
import { Status, StatusTypes } from '../../common/commonTypes.module'
import MonitoringBadge from '../../common/functional-components/MonitoringBadge/MonitoringBadge'
import MonitoringLabel from '../../common/functional-components/MonitoringLabel'

/**
 * @part container - the components container
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 * @part status-icon - the components status symbol
 */
@Component({
    tag: 'rux-monitoring-icon',
    styleUrl: 'rux-monitoring-icon.scss',
    shadow: true,
})
export class RuxMonitoringIcon {
    @Element() el!: HTMLRuxMonitoringIconElement
    /**
     * Styles the icon according to the Astro Status colors.
     * Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`.
     */
    @Prop({ reflect: true }) status: Status = 'normal'

    /**
     * Displays a label below the icon
     */
    @Prop() label!: string

    /**
     * Displays a smaller label underneath the icon label
     */
    @Prop() sublabel?: string

    /**
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @Prop() icon: string = 'antenna-transmit'

    /**
     * The size of a chosen Astro icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    @Prop() size: string = '2.5rem'

    /**
     * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
     * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,
     * `'1.5M'` for millions, `'1.5B'` for billions, and uses `'∞'` for one trillion or higher.
     */
    @Prop() notifications: number = 0

    componentDidRender() {
        this.handleNotificatonWidth()
    }

    @Watch('status')
    validateStatus(newValue: string) {
        const statusTypes = {
            off: true,
            standby: true,
            normal: true,
            caution: true,
            serious: true,
            critical: true,
        } as StatusTypes
        if (!statusTypes[newValue]) {
            throw new Error('valid status required')
        }
    }

    handleNotificatonWidth() {
        const badge = this.el.shadowRoot!.querySelector(
            '.rux-advanced-status__badge'
        )
        if (badge) {
            /** Size and position of the icon. */
            const iconRect = this.el.getBoundingClientRect()
            /** Size and position of the badge. */
            const badgeRect = badge.getBoundingClientRect()
            /** Offset between the right-edge of the badge and the right-edge of the icon. */
            const offset = badgeRect.right - iconRect.right
            // if the offset is greater than zero, increase the minimum width of the badge
            if (offset > 0) {
                this.el.style.minWidth = iconRect.width + offset + 'px'
            }
        }
    }

    render() {
        return (
            <div
                id="rux-advanced-status__icon"
                class="rux-advanced-status"
                part="container"
            >
                <div class="rux-advanced-status__icon-group">
                    <div class="rux-advanced-status__status">
                        <rux-status
                            status={this.status}
                            part="status-icon"
                        ></rux-status>
                    </div>

                    <rux-icon
                        icon={this.icon}
                        class={`rux-status--${this.status}`}
                        size={this.size}
                        exportparts="icon"
                    ></rux-icon>
                    <MonitoringBadge notifications={this.notifications} />
                </div>

                <MonitoringLabel label={this.label} sublabel={this.sublabel} />
            </div>
        )
    }
}
