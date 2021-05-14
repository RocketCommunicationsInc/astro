import { newSpecPage } from '@stencil/core/testing';
import { RuxStatus } from '../rux-status';

describe('rux-status', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxStatus],
      html: `<rux-status></rux-status>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-status>
        <mock:shadow-root>
        </mock:shadow-root>
      </rux-status>
    `);
  });
});