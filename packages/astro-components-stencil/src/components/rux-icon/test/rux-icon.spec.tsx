import { newSpecPage } from '@stencil/core/testing';
import { RuxIcon } from '../rux-icon';

describe('rux-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxIcon],
      html: `<rux-icon></rux-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-icon>
    `);
  });
});
