import { newSpecPage } from '@stencil/core/testing';
import { RuxMonitoringProgressIcon } from '../rux-monitoring-progress-icon';

describe('rux-monitoring-progress-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxMonitoringProgressIcon],
      html: `<rux-monitoring-progress-icon></rux-monitoring-progress-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-monitoring-progress-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-monitoring-progress-icon>
    `);
  });
});
