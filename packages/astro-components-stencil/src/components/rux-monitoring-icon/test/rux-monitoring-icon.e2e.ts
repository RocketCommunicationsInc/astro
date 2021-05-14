import { newE2EPage } from '@stencil/core/testing';

describe('rux-monitoring-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-monitoring-icon></rux-monitoring-icon>');

    const element = await page.find('rux-monitoring-icon');
    expect(element).toHaveClass('hydrated');
  });
});
