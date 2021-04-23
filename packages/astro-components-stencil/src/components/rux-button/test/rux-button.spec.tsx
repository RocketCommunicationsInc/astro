import { newSpecPage } from '@stencil/core/testing';
import { RuxButton } from '../rux-button';

describe('rux-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxButton],
      html: `<rux-button></rux-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-button>
    `);
  });
});
