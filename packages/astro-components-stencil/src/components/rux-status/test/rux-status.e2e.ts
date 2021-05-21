import { newE2EPage } from '@stencil/core/testing';

describe('rux-status', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-status></rux-status>');

    const element = await page.find('rux-status');
    expect(element).toHaveClass('hydrated');
  });
});
