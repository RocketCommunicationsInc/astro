import { Watch, Prop, Component, Host, h } from '@stencil/core';
import { getDayOfYear } from 'date-fns';
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';


@Component({
  tag: 'rux-clock',
  styleUrl: 'rux-clock.css',
  shadow: true,
})
export class RuxClock {
  private _timezone: string = 'UTC';
  private tzFormat: string = 'z';
  private _timer: number;
  private militaryTimezones = {
      "A": "+01:00",
      "B": "+02:00",
      "C": "+03:00",
      "D": "+04:00",
      "E": "+05:00",
      "F": "+06:00",
      "G": "+07:00",
      "H": "+08:00",
      "I": "+09:00",
      "K": "+10:00",
      "L": "+11:00",
      "M": "+12:00",
      "N": "-01:00",
      "O": "-02:00",
      "P": "-03:00",
      "Q": "-04:00",
      "R": "-05:00",
      "S": "-06:00",
      "T": "-07:00",
      "U": "-08:00",
      "V": "-09:00",
      "W": "-10:00",
      "X": "-11:00",
      "Y": "-12:00",
      "Z": "+00:00"
  }

  @Prop() aos: number;
  @Prop() los: string;
  @Prop({ mutable: true }) timezone: string = 'UTC'
  @Prop() hideTimezone: boolean = false;
  @Prop() hideDate: boolean = false;
  @Prop() small: boolean;
  @Prop({ mutable: true }) time: string;
  @Prop({ mutable: true }) dayOfYear: number;


  @Watch('timezone')
  watchHandler() {
    this.convertTimezone(this.timezone);
  }

  connectedCallback() {
    this._timezone = this.timezone;

    this.updateTime();

    // @ts-ignore
    this._timer = setInterval(() => {
      this.updateTime();
    }, 1000);

  }

  disconnectedCallback() {
    clearTimeout(this._timer);
  }

  private updateTime() {
    this.time = format(utcToZonedTime(new Date(), this._timezone), `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`, { timeZone: this._timezone });
    this.dayOfYear = getDayOfYear(zonedTimeToUtc(new Date(), this._timezone));
  }

  private convertTimezone(timezone) {
    this._timezone = this.militaryTimezones[timezone.toUpperCase()];
    this.tzFormat = 'O';
    if (!this._timezone) {
      this._timezone = timezone;
      this.tzFormat = 'zzz';
    } else if (timezone.toUpperCase() == 'Z') {
      this.tzFormat = 'X';
    }
  }

  render() {

    return (
      <Host>
        <div class="rux-clock__segment rux-clock__day-of-the-year">
          <div class="rux-clock__segment__value" aria-labelledby="rux-clock__day-of-year-label">
            {this.dayOfYear}
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
        </div>
        <div class="rux-clock__segment rux-clock__time">
          <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
            {this.time}
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">
            Time
        </div>
        </div>

        {this.aos
          ?
          <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--aos">
              {format(utcToZonedTime(this.aos, this._timezone), 'HH:mm:ss')}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label--aos">
              AOS
              </div>
          </div>
          : ''}

        {this.los
          ?
          <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--los">
              {format(utcToZonedTime(this.los, this._timezone), 'HH:mm:ss')}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label--los">
              LOS
              </div>
          </div>
          : ''
        }
      </Host>
    );
  }

}
