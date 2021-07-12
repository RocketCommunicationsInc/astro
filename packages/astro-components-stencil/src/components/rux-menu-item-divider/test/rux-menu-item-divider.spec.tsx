import { newSpecPage } from '@stencil/core/testing';
import { RuxMenuItemDivider } from '../rux-menu-item-divider';

describe('rux-menu-item-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxMenuItemDivider],
      html: `<rux-menu-item-divider></rux-menu-item-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-menu-item-divider>
        <mock:shadow-root>
          <li role="separator"></li>
        </mock:shadow-root>
      </rux-menu-item-divider>
    `);
  });
});
