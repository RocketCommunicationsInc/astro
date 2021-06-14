import { newE2EPage } from '@stencil/core/testing';

describe('rux-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-menu-item></rux-menu-item>');

    const element = await page.find('rux-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
