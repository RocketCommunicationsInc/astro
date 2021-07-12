import { newSpecPage } from '@stencil/core/testing';
import { RuxPopUpMenu } from '../rux-pop-up-menu';

describe('rux-pop-up-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxPopUpMenu],
      html: `<button aria-controls="menu">Button</button><rux-pop-up-menu id="menu"></rux-pop-up-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-pop-up-menu aria-hidden="true" id="menu">
        <mock:shadow-root>
          <ul aria-expanded="false" role="menu">
            <slot></slot>
          </ul>
          <slot name="menu-end"></slot>
        </mock:shadow-root>
      </rux-pop-up-menu>
    `);
  })
  it('opens and closes the menu with the public methods', async () => {
    const page = await newSpecPage({
      components: [RuxPopUpMenu],
      html: `<button aria-controls="menu">Button</button><rux-pop-up-menu id="menu"></rux-pop-up-menu>`,
    });
    const menu = page.doc.querySelector('rux-pop-up-menu')
    expect(await menu.isOpen()).toBe(false)

    // Open Menu Method
    expect(await menu.show()).toBe(true)
    expect(await menu.isOpen()).toBe(true)
    // try to open again, should return false as it's already open
    expect(await menu.show()).toBe(false)
    expect(await menu.isOpen()).toBe(true)

    // Close Menu Method
    expect(await menu.close()).toBe(true)
    expect(await menu.isOpen()).toBe(false)
    // Try to close menu again, should return false as it's already closed
    expect(await menu.close()).toBe(false)
    expect(await menu.isOpen()).toBe(false)

    // Toggle Method
    // Toggle Open
    expect(await menu.toggle()).toBe(true)
    expect(await menu.isOpen()).toBe(true)
    // Toggle Closed
    expect(await menu.toggle()).toBe(false)
    expect(await menu.isOpen()).toBe(false)
  })
});
