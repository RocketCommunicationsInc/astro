import { Watch, Prop, State, Component, Host, h } from '@stencil/core'
import { getDay, getDayOfYear } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import { militaryTimezones } from './military-timezones'
import { MilitaryTimezone } from './rux-clock.model'

/**
 * @part date - the container for the date section of clock
 * @part date-label - the container for the date label
 * @part time - the conatiner for the time section of clock
 * @part time-label - the container for the time label
 * @part aos - the container for the aos section of clock
 * @part aos-label - the container for the aos label
 * @part los - the container for the los section of clock
 * @part los-label - the container for the los label
 */
@Component({
    tag: 'rux-clock',
    styleUrl: 'rux-clock.scss',
    shadow: true,
})
export class RuxClock {
    private _timer!: number
    private _timezone: string = 'UTC'
    private dayOfYear!: number
    private tzFormat: string = 'z'
    private convertedAos?: string
    private convertedLos?: string
    private hasRun: boolean = false

    @State() _time!: string
    @State() _rawTime!: Date
    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.
     */
    @Prop() aos?: string
    @Watch('aos')
    updateAos(newValue: string) {
        this.convertedAos = this._formatLosAos(newValue)
    }

    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.
     */
    @Prop() los?: string
    @Watch('los')
    updateLos(newValue: string) {
        this.convertedLos = this._formatLosAos(newValue)
    }

    /**
     * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    @Prop() timezone: string = 'UTC'
    /**
     * Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.
     */
    @Prop({
        attribute: 'hide-timezone',
    })
    hideTimezone: boolean = false

    /**
     * Hides the day of the year.
     */
    @Prop({
        attribute: 'hide-date',
    })
    hideDate: boolean = false

    /**
     * Hides all of the labels.
     */
    @Prop({
        attribute: 'hide-labels',
    })
    hideLabels: boolean = false

    /**
     * When supplied with a valid date string overrides the date on the standard clock.
     */
    @Prop({ attribute: 'date-in' }) dateIn?: string

    /**
     * Applies a smaller clock style.
     */
    @Prop({ reflect: true }) small: boolean = false

    @Watch('timezone')
    timezoneChanged() {
        this._convertTimezone(this.timezone)
        if (this.aos) this.convertedAos = this._formatLosAos(this.aos)
        if (this.los) this.convertedLos = this._formatLosAos(this.los)
        this._updateTime()
    }

    get time(): string {
        return this._time
    }

    connectedCallback() {
        this._convertTimezone(this.timezone)
        if (this.dateIn) this._time = this.dateIn
        this._timer = window.setInterval(() => {
            this._updateTime()
        }, 1000)
        if (this.aos) this.convertedAos = this._formatLosAos(this.aos)
        if (this.los) this.convertedLos = this._formatLosAos(this.los)
    }

    disconnectedCallback() {
        clearTimeout(this._timer)
    }

    componentWillLoad() {
        this._timezone = this.timezone
        this._convertTimezone(this.timezone)
        this._updateTime()
    }

    private _formatTime(time: Date, timezone: string): string {
        return format(
            utcToZonedTime(time, timezone),
            `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`,
            { timeZone: timezone }
        )
    }

    private _updateTime(): void {
        // If date in is provided, we can't use Date.now()
        if (this.dateIn) {
            // The first time it runs with date in, we need to create a Date obj from that date-in
            // so that we can modify it every _upateTime call
            if (!this.hasRun) {
                this._rawTime = new Date(this.dateIn)
                this._time = this._formatTime(this._rawTime, this._timezone)
                this.dayOfYear = getDayOfYear(this._rawTime)
                this.hasRun = true
            } else {
                //raw time holds the date value we need to increment
                let seconds = this._rawTime.getSeconds() + 1
                this._rawTime.setSeconds(seconds)
                this._time = this._formatTime(this._rawTime, this._timezone)
                this.dayOfYear = getDayOfYear(this._rawTime)
                // let day = this._time[0] + this.time[1]
                // if (day === '00' && seconds === 60) {
                //     this.dayOfYear = this.dayOfYear + 1
                // }
            }
        } else {
            this._time = this._formatTime(new Date(Date.now()), this._timezone)
            /**
             * Date.now() is a unix timestamp of the current time in UTC
             * We need to convert that to the Clock's defined timezone
             * before we get the day of the year.
             */
            const localDate = new Date(Date.now())
            const clockDate = utcToZonedTime(localDate, this._timezone)
            this.dayOfYear = getDayOfYear(clockDate)
        }
    }

    /**
     * @param dateTime A date string in unix or ISO formats
     * @returns A timezone local ISO formatted 24h time string
     */

    private _formatLosAos(dateTime: string | number): string {
        // Check for unix timestamp
        if (new Date(Number(dateTime)).getTime() > 0) {
            dateTime = Number(dateTime)
        }
        return format(utcToZonedTime(dateTime, this._timezone), 'HH:mm:ss')
    }

    private _convertTimezone(timezone: string) {
        const _militaryTimezones = militaryTimezones as MilitaryTimezone
        this._timezone = _militaryTimezones[timezone.toUpperCase()]
        this.tzFormat = 'O'
        if (!this._timezone) {
            this._timezone = timezone
            this.tzFormat = 'zzz'
        } else if (timezone.toUpperCase() == 'Z') {
            this.tzFormat = 'X'
        }
    }

    render() {
        return (
            <Host>
                {!this.hideDate && (
                    <div class="rux-clock__segment">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__day-of-year-label"
                            part="date"
                        >
                            {this.dayOfYear.toString().padStart(3, '0')}
                        </div>
                        {!this.hideLabels && (
                            <div
                                class="rux-clock__segment__label"
                                id="rux-clock__day-of-year-label"
                                part="date-label"
                            >
                                Date
                            </div>
                        )}
                    </div>
                )}

                <div class="rux-clock__segment">
                    <div
                        class="rux-clock__segment__value"
                        aria-labelledby="rux-clock__time-label"
                        part="time"
                    >
                        {this.time}
                    </div>
                    {!this.hideLabels && (
                        <div
                            class="rux-clock__segment__label"
                            id="rux-clock__time-label"
                            part="time-label"
                        >
                            Time
                        </div>
                    )}
                </div>

                {this.aos && (
                    <div class="rux-clock__segment rux-clock__aos">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__time-label--aos"
                            id="rux-clock__time--aos"
                            part="aos"
                        >
                            {this.convertedAos}
                        </div>
                        {!this.hideLabels && (
                            <div
                                class="rux-clock__segment__label"
                                id="rux-clock__time-label--aos"
                                part="aos-label"
                            >
                                AOS
                            </div>
                        )}
                    </div>
                )}

                {this.los && (
                    <div class="rux-clock__segment rux-clock__los">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__time-label--los"
                            id="rux-clock__time--los"
                            part="los"
                        >
                            {this.convertedLos}
                        </div>
                        {!this.hideLabels && (
                            <div
                                class="rux-clock__segment__label"
                                id="rux-clock__time-label--los"
                                part="los-label"
                            >
                                LOS
                            </div>
                        )}
                    </div>
                )}
            </Host>
        )
    }
}
