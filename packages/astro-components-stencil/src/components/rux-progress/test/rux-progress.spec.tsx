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
        <progress class="rux-progress"></progress>
          <slot></slot>
        </mock:shadow-root>
      </rux-progress>
    `);
  });
  it('returns progress as string', async() => {
    const progress = new RuxProgress()
    progress.value = 10;
    const string = progress.getProgressAsString()
    expect(string).toBe('10%');
  })

  it('returns zero percent if no value is given', async() => {
    const progress = new RuxProgress()
    const string = progress.getProgressAsString()
    expect(string).toBe('0%');
  })
});
