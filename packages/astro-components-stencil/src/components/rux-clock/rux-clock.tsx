import { Watch, Prop, State, Component, Host, h } from '@stencil/core'
import { getDayOfYear } from 'date-fns'
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'
import { militaryTimezones } from './military-timezones'
import { MilitaryTimezone } from './rux-clock.model'

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

    @State() _time!: string
    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.
     */
    @Prop() aos?: number

    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.
     */
    @Prop() los?: string

    /**
     * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    @Prop({ mutable: true }) timezone: string = 'UTC'
    /**
     * Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.
     */
    @Prop() hideTimezone?: boolean

    /**
     * Hides the day of the year.
     */
    @Prop() hideDate?: boolean

    /**
     * Applies a smaller clock style.
     */
    @Prop() small?: boolean

    @Watch('timezone')
    timezoneChanged() {
        this.convertTimezone(this.timezone)
        this._updateTime()
    }

    constructor() {
        this._timezone = this.timezone
        this._updateTime()
    }

    get time(): string {
        return this._time
    }

    connectedCallback() {
        this.convertTimezone(this.timezone)

        this._timer = window.setInterval(() => {
            this._updateTime()
        }, 1000)
    }

    disconnectedCallback() {
        clearTimeout(this._timer)
    }

    formatTime(time: Date, timezone: string): string {
        return format(
            utcToZonedTime(time, timezone),
            `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`,
            { timeZone: timezone }
        )
    }

    private _updateTime(): void {
        this._time = this.formatTime(new Date(Date.now()), this._timezone)
        this.dayOfYear = getDayOfYear(
            zonedTimeToUtc(new Date(Date.now()), this._timezone)
        )
    }

    convertTimezone(timezone: string) {
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
                {!this.hideDate ? (
                    <div class="rux-clock__segment rux-clock__day-of-the-year">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__day-of-year-label"
                        >
                            {this.dayOfYear}
                        </div>
                        <div
                            class="rux-clock__segment__label"
                            id="rux-clock__day-of-year-label"
                        >
                            Date
                        </div>
                    </div>
                ) : (
                    ''
                )}

                <div class="rux-clock__segment rux-clock__time">
                    <div
                        class="rux-clock__segment__value"
                        aria-labelledby="rux-clock__time-label"
                    >
                        {this.time}
                    </div>
                    <div
                        class="rux-clock__segment__label"
                        id="rux-clock__time-label"
                    >
                        Time
                    </div>
                </div>

                {this.aos ? (
                    <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__time-label--aos"
                            id="rux-clock__time--aos"
                        >
                            {format(
                                utcToZonedTime(this.aos, this._timezone),
                                'HH:mm:ss'
                            )}
                        </div>
                        <div
                            class="rux-clock__segment__label"
                            id="rux-clock__time-label--aos"
                        >
                            AOS
                        </div>
                    </div>
                ) : (
                    ''
                )}

                {this.los ? (
                    <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
                        <div
                            class="rux-clock__segment__value"
                            aria-labelledby="rux-clock__time-label--los"
                            id="rux-clock__time--los"
                        >
                            {format(
                                utcToZonedTime(this.los, this._timezone),
                                'HH:mm:ss'
                            )}
                        </div>
                        <div
                            class="rux-clock__segment__label"
                            id="rux-clock__time-label--los"
                        >
                            LOS
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </Host>
        )
    }
}
