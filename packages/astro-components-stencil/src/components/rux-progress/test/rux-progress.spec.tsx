import { newSpecPage } from '@stencil/core/testing';
import { RuxProgress } from '../rux-progress';

describe('rux-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxProgress],
      html: `<rux-progress></rux-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-progress>
    `);
  });
});
