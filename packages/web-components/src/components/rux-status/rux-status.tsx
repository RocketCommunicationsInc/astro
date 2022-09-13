import { Prop, Host, Component, h, Watch, State, Element } from '@stencil/core'
import { Status, StatusTypes } from '../../common/commonTypes.module'
import DarkStatus from './statuses/dark-theme'
import LightStatus from './statuses/light-theme'

@Component({
    tag: 'rux-status',
    styleUrl: 'rux-status.scss',
    shadow: true,
})

/**
 * @part status - the container of the rux-status symbol
 */
export class RuxStatus {
    /**
     * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
     */
    @Prop({ reflect: true }) status?: Status

    @Element() el!: HTMLRuxStatusElement

    @State() theme: string = 'dark'

    /**
     * Mutation observer to watch for class changes on body. Allows for theme switching.
     */
    private classObserver = new MutationObserver((mutations) => {
        mutations.forEach((mu) => {
            //Only want to listen for specifc types
            if (mu.type !== 'attributes' && mu.attributeName !== 'class') return
            this._determineTheme()
        })
    })

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
        this._determineTheme()

        const config = { attributes: true }
        //Observe classlist changes for body and rux-status (this.el)
        this.classObserver.observe(document.querySelector('body')!, config)
        this.classObserver.observe(this.el, config)
    }

    disconnectedCallback() {
        this.classObserver.disconnect()
    }
    private _determineTheme() {
        if (
            this.el.classList.contains('light-theme') ||
            document.querySelector('body')?.classList.contains('light-theme')
        ) {
            this.theme = 'light'
        } else this.theme = 'dark'
    }

    render() {
        return (
            <Host status={this.status}>
                <div
                    part="status"
                    class="status-wrapper"
                    innerHTML={
                        this.status && this.theme === 'dark'
                            ? DarkStatus[this.status]
                            : this.status && this.theme === 'light'
                            ? LightStatus[this.status]
                            : undefined
                    }
                ></div>
            </Host>
        )
    }
}
