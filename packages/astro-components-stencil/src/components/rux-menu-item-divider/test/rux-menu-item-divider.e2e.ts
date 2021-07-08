import { newE2EPage } from '@stencil/core/testing';

describe('rux-menu-item-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-menu-item-divider></rux-menu-item-divider>');

    const element = await page.find('rux-menu-item-divider');
    expect(element).toHaveClass('hydrated');
  });
});
