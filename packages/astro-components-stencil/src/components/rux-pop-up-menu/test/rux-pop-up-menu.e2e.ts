import { newE2EPage } from '@stencil/core/testing';

describe('rux-pop-up-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-pop-up-menu></rux-pop-up-menu>');

    const element = await page.find('rux-pop-up-menu');
    expect(element).toHaveClass('hydrated');
  })
  it('opens menu when clicking on target element', async () => {
    const page = await newE2EPage()
    await page.setContent(
      `<button aria-controls="pop-up-menu">C Button</button>
      <rux-pop-up-menu id="pop-up-menu" open>
        <rux-menu-item>Item 1</rux-menu-item>
        <rux-menu-item-divider></rux-menu-item-divider>
        <rux-menu-item value="2"
            >Item 2 with an exceedingly long title that overruns the
            width</rux-menu-item
        >
        <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
      </rux-pop-up-menu>
      `
    )
    const button = await page.find('button')
    const menu = await page.find('rux-pop-up-menu')
    // Menu is added in closed state
    expect(menu).not.toHaveAttribute('open')
    await button.click()
    // Test opening menu
    expect(menu).toHaveAttribute('open')
  })
});
