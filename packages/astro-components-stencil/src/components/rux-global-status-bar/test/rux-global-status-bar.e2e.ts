import { newE2EPage } from '@stencil/core/testing';

describe('rux-global-status-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-global-status-bar></rux-global-status-bar>');

    const element = await page.find('rux-global-status-bar');
    expect(element).toHaveClass('hydrated');
  });
});
