import { newE2EPage } from '@stencil/core/testing';

describe('rux-pop-up-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-pop-up-menu></rux-pop-up-menu>');

    const element = await page.find('rux-pop-up-menu');
    expect(element).toHaveClass('hydrated');
  });
});
