
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { format, getDayOfYear } from 'date-fns';
import { militaryTimezones } from './military-timezones';
import { type MilitaryTimezone } from './rux-clock.model';
import { TZDate } from '@date-fns/tz';
import style from './rux-clock.scss?inline'

/**
 * @part container - the container for the clock
 * @part date - the container for the date section of clock
 * @part date-label - the container for the date label
 * @part time - the container for the time section of clock
 * @part time-label - the container for the time label
 * @part aos - the container for the aos section of clock
 * @part aos-label - the container for the aos label
 * @part los - the container for the los section of clock
 * @part los-label - the container for the los label
 */
@customElement('rux-clock')
export class RuxClock extends LitElement {
    private _timer!: number;
    private _timezone: string = 'UTC'; // Internal converted timezone string
    private dayOfYear!: number;
    private tzFormat: string = 'z';
    private hasRun: boolean = false; // Used to manage initial vs. subsequent updates for dateIn mode

    @state() private _time!: string; // Current formatted time string
    @state() private _rawTime!: Date; // Date object used for calculations (either live or dateIn)
    @state() private convertedAos?: string; // Formatted AOS time
    @state() private convertedLos?: string; // Formatted LOS time

    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.
     */
    @property({ type: String }) aos?: string;

    /**
     * Prevents clock from ticking. Use with `date-in` for full control over the displayed time
     */
    @property({ type: Boolean }) static = false;

    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.
     */
    @property({ type: String }) los?: string;

    /**
     * Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    @property({ type: String }) timezone: string = 'UTC';

    /**
     * Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.
     */
    @property({ attribute: 'hide-timezone', type: Boolean })
    hideTimezone: boolean = false;

    /**
     * Hides the day of the year.
     */
    @property({ attribute: 'hide-date', type: Boolean })
    hideDate: boolean = false;

    /**
     * Hides all of the labels.
     */
    @property({ attribute: 'hide-labels', type: Boolean })
    hideLabels: boolean = false;

    /**
     * When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), sets the time and date of the clock.
     */
    @property({ attribute: 'date-in', type: String })
    dateIn?: string;

    /**
     * Applies a smaller clock style.
     */
    @property({ reflect: true, type: Boolean })
    small: boolean = false;

    // Getter for time (can be simplified to use `this._time` directly in render, but keeping for direct translation)
    get time(): string {
        return this._time;
    }

    override connectedCallback() {
        super.connectedCallback();
    }

    override disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(this._timer); // Ensure timer is cleared when component is removed
    }

    override firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
        super.firstUpdated(changedProperties);

        // Initial setup that runs once after properties are set for the first time
        this._convertTimezone(this.timezone);

        if (this.aos) {
            this.convertedAos = this._formatLosAosDateIn(this.aos);
        }
        if (this.los) {
            this.convertedLos = this._formatLosAosDateIn(this.los);
        }

        if (this.dateIn) {
            this._rawTime = new Date(this.dateIn);
            this._handleDateIn(); // This will set _time and potentially start timer
        } else {
            this._updateTime(); // Initial update for live clock
            if (!this.static) {
                this._startTimer(); // Start live clock timer
            }
        }
    }

    override updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);

        // Handle property changes (equivalent to Stencil's @Watch decorators)
        if (changedProperties.has('aos')) {
            this.convertedAos = this.aos ? this._formatLosAosDateIn(this.aos) : undefined;
        }
        if (changedProperties.has('los')) {
            this.convertedLos = this.los ? this._formatLosAosDateIn(this.los) : undefined;
        }

        if (changedProperties.has('dateIn')) {
            clearTimeout(this._timer); // Stop any existing timer when dateIn changes
            if (this.dateIn) {
                this._rawTime = new Date(this.dateIn);
                this.hasRun = false; // Reset hasRun when dateIn changes to ensure first-run logic
                this._handleDateIn(); // This sets _time and starts/manages timer based on static
            } else {
                // dateIn removed, switch to live clock
                this.hasRun = false; // Reset for live clock
                if (!this.static) {
                    this._startTimer(); // Start live clock timer
                }
                this._updateTime(); // Immediately update to current live time
            }
        }

        if (changedProperties.has('timezone')) {
            this._convertTimezone(this.timezone);
            // Re-format AOS/LOS and main time if timezone changes, as they depend on it
            if (this.aos) this.convertedAos = this._formatLosAosDateIn(this.aos);
            if (this.los) this.convertedLos = this._formatLosAosDateIn(this.los);
            this._updateTime(); // Update main clock to reflect new timezone
        }

        if (changedProperties.has('static')) {
            if (this.static) {
                clearTimeout(this._timer); // Static changed to true, stop timer
            } else {
                // Static changed to false
                if (this.dateIn) {
                    // If dateIn exists, reactivate its timer
                    this._handleDateIn(); // _handleDateIn will ensure the timer is running if not static
                } else {
                    // If no dateIn, reactivate live clock timer
                    this._startTimer();
                }
            }
        }
    }

    private _startTimer() {
        if (this._timer) {
            clearTimeout(this._timer); // Clear any existing timer before starting a new one
        }
        this._timer = window.setInterval(() => {
            this._updateTime();
        }, 1000);
    }

    private _formatTime(time: Date, timezone: string): string {
        return format(
            new TZDate(time, timezone),
            `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`,
        );
    }

    private _handleDateIn() {
        // _rawTime is expected to be already set by `updated` or `firstUpdated` before this call
        if (this._validateDateIn(this._rawTime)) {
            this._time = this._formatTime(this._rawTime, this._timezone); // Set initial display time for dateIn
            if (!this.static) {
                this._startTimer(); // Start timer to advance _rawTime
            }
        } else {
            console.warn(
                `The date-in value of ${this.dateIn} is not a valid date.`
            );
            this._time = 'Invalid Date'; // Indicate error
            clearTimeout(this._timer); // Stop any timer if dateIn becomes invalid
        }
    }

    /**
     * @param date a Date type to be validated
     * @returns A boolean representative of if the date provided is valid
     */
    private _validateDateIn(date: Date) {
        // If it's not valid then date.getTime() will be NaN, which isn't equal to itself
        return date.getTime() === date.getTime();
    }

    private _updateTime(): void {
        if (this.dateIn) {
            if (!this.hasRun) {
                // First run with dateIn: Initialize display based on _rawTime
                this._time = this._formatTime(this._rawTime, this._timezone);
                const clockDate = new TZDate(this._rawTime, this._timezone);
                this.dayOfYear = getDayOfYear(clockDate);
                this.hasRun = true;
            } else {
                // Subsequent runs with dateIn: advance _rawTime by one second
                let seconds = this._rawTime.getSeconds() + 1;
                this._rawTime.setSeconds(seconds); // This modifies _rawTime in place
                this._time = this._formatTime(this._rawTime, this._timezone);
                const clockDate = new TZDate(this._rawTime, this._timezone);
                this.dayOfYear = getDayOfYear(clockDate);
            }
        } else {
            // Live clock mode: Use current date/time
            const liveDate = new Date(Date.now());
            this._time = this._formatTime(liveDate, this._timezone);
            /**
             * Date.now() is a unix timestamp of the current time in UTC
             * We need to convert that to the Clock's defined timezone
             * before we get the day of the year.
             */
            const clockDate = new TZDate(liveDate, this._timezone);
            this.dayOfYear = getDayOfYear(clockDate);
            this.hasRun = false; // Reset hasRun if we switch back to live clock
        }
    }

    /**
     * @param dateTime A date string in unix or ISO formats
     * @returns A timezone local ISO formatted 24h time string
     */
    private _formatLosAosDateIn(dateTime: string | number): string {
        // If it's a string that looks like a number (unix timestamp), convert it to number
        if (typeof dateTime === 'string' && !isNaN(Number(dateTime)) && String(Number(dateTime)) === dateTime) {
            dateTime = Number(dateTime);
        }
        return format(new TZDate(`${dateTime}`, this._timezone), 'HH:mm:ss');
    }

    private _convertTimezone(timezone: string) {
        const _militaryTimezones = militaryTimezones as MilitaryTimezone;
        const militaryConvertedTz = _militaryTimezones[timezone.toUpperCase()];

        if (militaryConvertedTz) {
            this._timezone = militaryConvertedTz;
            this.tzFormat = timezone.toUpperCase() === 'Z' ? 'X' : 'O'; // 'X' for Zulu, 'O' for other military
        } else {
            this._timezone = timezone; // Use the provided timezone directly if not military
            this.tzFormat = 'zzz'; // Standard timezone abbreviation (e.g., EST, PST)
        }
    }

    static styles = css`
        ${unsafeCSS(style)}
    `;

    override render() {
        return html`
            <div class="rux-clock" part="container">
                ${!this.hideDate
                    ? html`
                          <div class="rux-clock__segment">
                              <div
                                  class="rux-clock__segment__value"
                                  aria-labelledby="rux-clock__day-of-year-label"
                                  part="date"
                              >
                                  ${this.dayOfYear?.toString().padStart(3, '0')}
                              </div>
                              ${!this.hideLabels
                                  ? html`
                                        <div
                                            class="rux-clock__segment__label"
                                            id="rux-clock__day-of-year-label"
                                            part="date-label"
                                        >
                                            Date
                                        </div>
                                    `
                                  : ''}
                          </div>
                      `
                    : ''}

                <div class="rux-clock__segment">
                    <div
                        class="rux-clock__segment__value"
                        aria-labelledby="rux-clock__time-label"
                        part="time"
                    >
                        ${this.time}
                    </div>
                    ${!this.hideLabels
                        ? html`
                              <div
                                  class="rux-clock__segment__label"
                                  id="rux-clock__time-label"
                                  part="time-label"
                              >
                                  Time
                              </div>
                          `
                        : ''}
                </div>

                ${this.aos
                    ? html`
                          <div class="rux-clock__segment rux-clock__aos">
                              <div
                                  class="rux-clock__segment__value"
                                  aria-labelledby="rux-clock__time-label--aos"
                                  id="rux-clock__time--aos"
                                  part="aos"
                              >
                                  ${this.convertedAos}
                              </div>
                              ${!this.hideLabels
                                  ? html`
                                        <div
                                            class="rux-clock__segment__label"
                                            id="rux-clock__time-label--aos"
                                            part="aos-label"
                                        >
                                            AOS
                                        </div>
                                    `
                                  : ''}
                          </div>
                      `
                    : ''}

                ${this.los
                    ? html`
                          <div class="rux-clock__segment rux-clock__los">
                              <div
                                  class="rux-clock__segment__value"
                                  aria-labelledby="rux-clock__time-label--los"
                                  id="rux-clock__time--los"
                                  part="los"
                              >
                                  ${this.convertedLos}
                              </div>
                              ${!this.hideLabels
                                  ? html`
                                        <div
                                            class="rux-clock__segment__label"
                                            id="rux-clock__time-label--los"
                                            part="los-label"
                                        >
                                            LOS
                                        </div>
                                    `
                                  : ''}
                          </div>
                      `
                    : ''}
            </div>
        `;
    }
}
