import { Component, Host, h, Prop } from '@stencil/core';
import { collapseNotifications } from '../../utils/utils'
import { Status } from '../../common/commonTypes.module'

interface RangeItem {
  threshold: number,
  status: Status
}

@Component({
  tag: 'rux-monitoring-progress-icon',
  styleUrl: 'rux-monitoring-progress-icon.scss',
  shadow: true,
})
export class RuxMonitoringProgressIcon {
  /*
  * Displays a label below the icon
  */
  @Prop() label: string;
  /*
  * Displays a smaller label underneath the icon label 
  */
  @Prop() sublabel: string;
  /*
  * Displays this value as a percentage in the center of the donut graph, and styles a proportional segment of the graph. Progress can be positive or negative (the later useful for countdowns). The progress value must exist within the thresholds specified in the range property below.
  */
  @Prop({reflect: true}) progress: number
  /*
  * No	Items in this Array define thresholds for changing the status style of the progress icon. For each item in the Array, the icon will be styled with the given status while the progress value is less than the Array item’s threshold and equal to or greater than the next largest item‘s threshold. Both progress and the Array items’ threshold values can be positive or negative, so long as they are consistent and the threshold values span no more than 100 numbers. The component assumes the Array's first status threshold begins at 0.
  */
 @Prop() range: Array<RangeItem>
  /*
  * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon. Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'` for millions, and `'1.5B'` for billions. The badge uses `'∞'` for one trillion or higher.
  */
  @Prop() notifications: number = 0;


  render() {
    return (
      <Host>
        <rux-icon icon="progress" class="rux-status--${this.status}"></rux-icon>
        <div class="rux-advanced-status__progress">
          ${Math.ceil((this.progress / this.max) * 100)}%
        </div>
      </Host>
    );
  }

}

// export class RuxMonitoringProgressIcon extends RuxMonitoringIcon {
//   static get properties() {
//     return {
//       progress: {
//         type: Number,
//       },
//       range: {
//         type: Array,
//       },
//       min: {
//         type: Number,
//       },
//       max: {
//         type: Number,
//       },
//     };
//   }

//   constructor() {
//     super();

//     this.progress = 0;
//     this.max = 100;
//     this.min = 0;
//     this._circumference = 56 * 2 * Math.PI;
//   }

//   firstUpdated() {
//     super.connectedCallback();

//     if (Number.isInteger(parseInt(this.progress, 10))) {
//       if (!this.range) {
//         this.range = [
//           {
//             threshold: 17,
//             status: 'off',
//           },
//           {
//             threshold: 33,
//             status: 'standby',
//           },
//           {
//             threshold: 49,
//             status: 'normal',
//           },
//           {
//             threshold: 65,
//             status: 'caution',
//           },
//           {
//             threshold: 81,
//             status: 'serious',
//           },
//           {
//             threshold: 100,
//             status: 'critical',
//           },
//         ];
//       }
//       this.range = this.range.sort((a, b) => (a.threshold > b.threshold ? 1 : -1));

//       this.updateProgress();
//     }
//   }

//   updated(changedProperties) {
//     if (changedProperties.get('progress')) {
//       this.updateProgress();
//     }
//   }

//   updateProgress() {
//     this.status = this.range.find((range) => this.progress < range.threshold).status || this.range[0];

//     const graphProgress = this._circumference - (this.progress / this.max) * this._circumference;

//     this.style.setProperty('--monitoring-progress', graphProgress);
//   }

//   get iconTemplate() {
//     return html`
      // <rux-icon icon="progress" class="rux-status--${this.status}"></rux-icon>
      // <div class="rux-advanced-status__progress">
      //   ${Math.ceil((this.progress / this.max) * 100)}%
      // </div>
//     `;
//   }

//   static get styles() {
//     return [
//       super.styles,
//       css`
//         [data-progress] rux-icon {
//           transition: stroke-dashoffset 0.367s, stroke 0.367s;
//           transform-origin: 50% 50%;
//         }

//         .rux-advanced-status__progress {
//           font-family: var(--fontFamilyMono, 'monospace');
//           margin-top: -0.125rem;
//           margin-left: -0.125rem;
//           font-size: 0.8rem;

//           position: absolute;

//           display: flex;
//           justify-content: center;
//           align-items: center;

//           width: 100%;
//           height: 100%;

//           letter-spacing: -0.0625rem;
//           text-align: center;
//         }
//       `,
//     ];
//   }
// }
