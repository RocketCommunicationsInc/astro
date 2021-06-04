import { Component, h, Prop, State, Watch } from '@stencil/core';
import { Status } from '../../common/commonTypes.module'
import MonitoringBadge from '../../common/functional-components/MonitoringBadge/MonitoringBadge'
import MonitoringLabel from '../../common/functional-components/MonitoringLabel'


export interface RangeItem {
  threshold: number,
  status: Status,
}

@Component({
  tag: 'rux-monitoring-progress-icon',
  styleUrl: 'rux-monitoring-progress-icon.scss',
  shadow: true,
})
export class RuxMonitoringProgressIcon {
  _circumference = 56 * 2 * Math.PI

  /**
  * Displays a label below the icon
  */
  @Prop() label!: string;

  /**
  * Displays a smaller label underneath the icon label 
  */
  @Prop() sublabel?: string;

  /**
  * Items in this Array define thresholds for changing the status style of the progress icon.
  * For each item in the Array, the icon will be styled with the given status while the progress value
  * is less than or equal to the Array item’s threshold and greater than the next smallest item‘s threshold.
  * Both progress and the Array items’ threshold values can be positive or negative.
  * If no min is specified, the component assumes the Array's first status threshold begins at 0.
  */
 @Prop({mutable: true}) range?: Array<RangeItem>

  /**
  * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
  * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'`
  * for millions, `'1.5B'` for billions, and `'∞'` for one trillion or higher.
  */
  @Prop() notifications?: number = 0

  /**
  * Sets the minimum value for the progress range. When progress is this number, it reads 0%.
  * When it is halfway between min and max, it will read 50%
  */
  @Prop() min?: number = 0

  /**
  * Sets the maximum value for the progress range. When progress is this number, it reads 100%.
  * When it is halfway between min and max, it will read 50%
  */
  @Prop() max?: number = 100

  /**
  * Displays this value as a percentage of where it lies between min and max
  * in the center of the donut graph and styles a proportional
  * segment of the graph. Progress can be positive or negative (the later useful for countdowns).
  * The progress value must exist within the thresholds specified in the range property below.
  */
  @Prop({reflect: true}) progress!: number

  @Watch('progress')
  checkProgress(newValue: number, oldValue: number) {
    if (newValue !== oldValue) {
      this.updateProgress()
    }
  }

  @State() _status: Status
  @State() _graphProgress: number = 0

  componentWillLoad() {
    if (Number.isInteger(this.progress)) {
      if (!this.range || this.range.length === 0) {
        this.range = [
          {
            threshold: 17,
            status: 'off',
          },
          {
            threshold: 33,
            status: 'standby',
          },
          {
            threshold: 49,
            status: 'normal',
          },
          {
            threshold: 65,
            status: 'caution',
          },
          {
            threshold: 81,
            status: 'serious',
          },
          {
            threshold: 100,
            status: 'critical',
          },
        ];
      }
      this.range = this.range.sort((a, b) => (a.threshold >= b.threshold ? 1 : -1));

      this.updateProgress();
    }
  }

  get status(): string {
    return this._status
  }

  updateProgress() {
    this._status = this.range.find((range) => this.progress <= range.threshold).status || this.range[0].status;
    this._graphProgress = this._circumference - ((this.progress - this.min) / (this.max - this.min)) * this._circumference;
  }

  render() {
    return (
      <div
        id="rux-advanced-status__icon"
        class="rux-advanced-status"
        title={`${this.notifications} ${this.label} ${this.sublabel}`}
      >
        <div class="rux-advanced-status__icon-group">
          <rux-status status={this._status}></rux-status>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class={`rux-status--${this._status}`}>
            <g id="progress">
              <circle 
                cx="60" 
                cy="60" 
                r="56" 
                fill="transparent" 
                stroke="rgba(40, 63, 88, 1)" 
                stroke-width="10" 
                transform="rotate(-90 61 60)"/>
              <circle 
                cx="60" 
                cy="60" 
                r="56" 
                fill="transparent" 
                stroke-dasharray="351.8583772 351.8583772" 
                stroke-dashoffset={this._graphProgress} 
                stroke-linecap="round" 
                stroke-width="10" 
                class="progress-ring__circle" 
                transform="rotate(-90 61 60)"
              />
            </g>
          </svg>
          <div class="rux-advanced-status__progress">
            {Math.ceil(((this.progress - this.min) / (this.max - this.min)) * 100)}%
          </div>
          
          <MonitoringBadge notifications={this.notifications} />
        </div>

        <MonitoringLabel label={this.label} sublabel={this.sublabel} />
      </div>
    );
  }

}

