import { newSpecPage } from '@stencil/core/testing';
import { RuxMonitoringProgressIcon } from '../rux-monitoring-progress-icon';

describe('rux-monitoring-progress-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxMonitoringProgressIcon],
      html: `
      <rux-monitoring-progress-icon
        progress=70
        max="100"
        label="Label"
        sublabel="sublabel"
        notifications="345678"
      ></rux-monitoring-progress-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-monitoring-progress-icon label="Label" max="100" notifications="345678" progress="70" sublabel="sublabel">
        <mock:shadow-root>
          <div class="rux-advanced-status" id="rux-advanced-status__icon" title="345678 Label sublabel">
            <div class="rux-advanced-status__icon-group">
              <rux-status status="serious"></rux-status>
              <svg class="rux-status--serious" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <g id="progress">
                  <circle cx="60" cy="60" fill="transparent" r="56" stroke="rgba(40, 63, 88, 1)" stroke-width="10" transform="rotate(-90 61 60)"></circle>
                  <circle class="progress-ring__circle" cx="60" cy="60" fill="transparent" r="56" stroke-dasharray="351.8583772 351.8583772" stroke-dashoffset="105.55751316061708" stroke-linecap="round" stroke-width="10" transform="rotate(-90 61 60)"></circle>
                </g>
              </svg>
              <div class="rux-advanced-status__progress">
                70%
              </div>
              <div class="rux-advanced-status__badge">
                345K
              </div>
            </div>
            <div class="rux-advanced-status__label">
              Label
              <span class="rux-advanced-status__sublabel">
                sublabel
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </rux-monitoring-progress-icon>
    `);
  });

  it('applies custom range arrays properly', () => {
    const progressIcon = new RuxMonitoringProgressIcon()
    progressIcon.min = 100
    progressIcon.max = 1100
    progressIcon.progress = 675
    progressIcon.range = [
      {
        threshold: 300,
        status: 'standby'
      },
      {
        threshold: 775,
        status: 'normal'
      },
      {
        threshold: 1100,
        status: 'serious'
      },
    ]
    progressIcon.updateProgress()
    expect(progressIcon.status).toBe('normal')
    expect(Math.ceil(((progressIcon.progress - progressIcon.min) / (progressIcon.max - progressIcon.min)) * 100)).toBe(58)

    progressIcon.progress = 1100
    progressIcon.updateProgress()
    expect(progressIcon.status).toBe('serious')
  })

  it('works with empty range array', () => {
    const progressIcon = new RuxMonitoringProgressIcon()

    progressIcon.progress = 50
    progressIcon.range = []
    progressIcon.componentWillLoad()
    expect(progressIcon.status).toBe('caution')
  })
});