import { newSpecPage } from '@stencil/core/testing';
import { RuxGlobalStatusBar } from '../rux-global-status-bar';

describe('rux-global-status-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html: `<rux-global-status-bar></rux-global-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-global-status-bar>
    `);
  });
});
