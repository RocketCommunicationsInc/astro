import { newSpecPage } from '@stencil/core/testing';
import { RuxNotification } from '../rux-notification';

describe('rux-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxNotification],
      html: `<rux-notification></rux-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-notification>
    `);
  });
});
