import { newSpecPage } from '@stencil/core/testing';
import { RuxMonitoringIcon } from '../rux-monitoring-icon';

describe('rux-monitoring-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxMonitoringIcon],
      html: `<rux-monitoring-icon></rux-monitoring-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-monitoring-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-monitoring-icon>
    `);
  });
});
