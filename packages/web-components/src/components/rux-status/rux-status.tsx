import { Prop, Host, Component, h, Watch, Element } from '@stencil/core'
import { Status, StatusTypes } from '../../common/commonTypes.module'
// import DarkStatus from './statuses/dark-theme'
import StatusSVG from './statuses/light-theme'
/**
 * @part status - the container of the rux-status symbol
 */

@Component({
    tag: 'rux-status',
    styleUrl: 'rux-status.scss',
    shadow: true,
})
export class RuxStatus {
    /**
     * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
     */
    @Prop({ reflect: true }) status?: Status = 'normal'

    @Element() el!: HTMLRuxStatusElement

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
            throw new Error(
                `rux-status: status of ${this.status} is not valid. Please use a valid status.`
            )
        }
    }

    connectedCallback() {
        if (this.status) this.validateStatus(this.status)
    }

    render() {
        return (
            <Host status={this.status}>
                <div
                    part="status"
                    class="status-wrapper"
                    innerHTML={this.status && StatusSVG[this.status]}
                ></div>
            </Host>
        )
    }
}
