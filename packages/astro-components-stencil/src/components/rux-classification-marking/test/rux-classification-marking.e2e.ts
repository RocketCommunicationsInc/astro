import { newE2EPage } from '@stencil/core/testing';

describe('rux-classification-marking', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-classification-marking></rux-classification-marking>');

    const element = await page.find('rux-classification-marking');
    expect(element).toHaveClass('hydrated');
  });
});
