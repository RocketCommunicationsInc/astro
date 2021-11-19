/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Component, Host, h, Prop, Watch } from '@stencil/core'
import { Status } from '../../common/commonTypes.module'

@Component({
    tag: 'rux-notification',
    styleUrl: 'rux-notification.scss',
    shadow: true,
})
export class RuxNotification {
    /**
     *  Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided).
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false
    /**
     *  Message for the notification banner.
     */
    @Prop() message: string = ''
    /**
     *  The background color. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/).
     */
    @Prop({ reflect: true }) status: Status = 'standby'
    /**
     *  If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it.
     */
    @Prop({ attribute: 'close-after', mutable: true }) closeAfter?: number

    private _timeoutRef: number | null = null

    @Watch('open')
    watchHandler() {
        this._updated()
    }
    connectedCallback() {
        this._updated()
    }

    private _updated() {
        if (this._closeAfter && this.open) {
            this._timeoutRef = window.setTimeout(() => {
                this.open = false
            }, this._closeAfter)
        }
    }

    private _onClick() {
        if (this._timeoutRef) {
            clearTimeout(this._timeoutRef)
        }
        this.open = false
    }

    get _closeAfter() {
        //* as long as it's less than 1000, they put in seconds. Convert that here.
        if (this.closeAfter && this.closeAfter <= 999) {
            //it's in seconds
            this.closeAfter *= 1000 // change into ms
        }

        if (
            (this.closeAfter && this.closeAfter > 10000) ||
            (this.closeAfter && this.closeAfter < 2000)
        ) {
            // if this number is larger than 10s or smaller than 2s, enforce minimum 2s delay
            this.closeAfter = 2000
        }

        return this.closeAfter
    }
    render() {
        return (
            <Host>
                <div class="rux-notification__message">{`${this.message}`}</div>
                <rux-icon
                    role="button"
                    label="Close notification"
                    onClick={() => this._onClick()}
                    icon="close"
                    size="36px"
                ></rux-icon>
            </Host>
        )
    }
}
