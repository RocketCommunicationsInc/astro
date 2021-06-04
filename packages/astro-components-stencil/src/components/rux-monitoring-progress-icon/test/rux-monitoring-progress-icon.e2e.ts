import { newE2EPage } from '@stencil/core/testing';

describe('rux-monitoring-progress-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-monitoring-progress-icon></rux-monitoring-progress-icon>');

    const element = await page.find('rux-monitoring-progress-icon');
    expect(element).toHaveClass('hydrated');
  });
});
