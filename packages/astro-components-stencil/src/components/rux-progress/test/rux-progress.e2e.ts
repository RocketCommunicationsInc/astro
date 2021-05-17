import { newE2EPage } from '@stencil/core/testing';

describe('rux-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-progress></rux-progress>');

    const element = await page.find('rux-progress');
    expect(element).toHaveClass('hydrated');
  });
});
