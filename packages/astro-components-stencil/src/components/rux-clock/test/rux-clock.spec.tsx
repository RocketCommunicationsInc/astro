import { newSpecPage } from '@stencil/core/testing';
import { RuxClock } from '../rux-clock';

describe('rux-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxClock],
      html: `<rux-clock></rux-clock>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-clock>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-clock>
    `);
  });
});
