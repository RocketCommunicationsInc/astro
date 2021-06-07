import { newE2EPage } from '@stencil/core/testing';

describe('rux-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-notification></rux-notification>');

    const element = await page.find('rux-notification');
    expect(element).toHaveClass('hydrated');
  });
});
