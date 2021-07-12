import { newSpecPage } from '@stencil/core/testing';
import { RuxMenuItem } from '../rux-menu-item';

describe('rux-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxMenuItem],
      html: `<rux-menu-item></rux-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-menu-item>
        <mock:shadow-root>
          <li>
            <div>
              <slot name="start"></slot>
              <slot></slot>
            </div>
          </li>
        </mock:shadow-root>
      </rux-menu-item>
    `);
  })
  it('changes to anchor tag based on an href prop', async () => {
    const page = await newSpecPage({
      components: [RuxMenuItem],
      html: `<rux-menu-item href="https://www.astrouxds.com"></rux-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-menu-item href="https://www.astrouxds.com">
        <mock:shadow-root>
          <li>
            <a href="https://www.astrouxds.com">
              <slot name="start"></slot>
              <slot></slot>
            </a>
          </li>
        </mock:shadow-root>
      </rux-menu-item>
    `);
  })
});
