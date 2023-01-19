// import { test as base } from '@playwright/test'
import { test as base } from "@astrouxds/stencil-playwright";
import { Page } from "@playwright/test";
// import { AstroComponentPage } from './AstroComponentPage'
// import { AstroFormPage } from './AstroFormPage'
// import { AstroVRTPage } from './AstroVRTPage'

export type TestOptions = {
    theme: 'dark' | 'light';
    component: string
    astroVRTPage: Page
  };

export const test = base.extend<TestOptions>({
    theme: ['dark', { option: true }],
    component: ['rux-foo', { option: true }],
    astroVRTPage: async ({ theme, component, page }, use) => {
        await page.goto(`/src/components/${component}/test/basic/index.html`)
        // Set up the fixture.
        if (theme === 'light') {
                await page.evaluate(() => {
                    document.body.classList.add('light-theme')
                })
        }

        // Use the fixture value in the test.
        await use(page)
    },
    // astroPage: async ({ page }, use) => {
    //     // Set up the fixture.
    //     const astroPage = new AstroComponentPage(page)
    //     await astroPage.goto()

    //     // Use the fixture value in the test.
    //     await use(astroPage)

    //     // Clean up the fixture.
    //     //   await todoPage.removeAll();
    // },
	// astroFormPage: async ({ page }, use) => {
    //     // Set up the fixture.
    //     const astroPage = new AstroFormPage(page)
    //     await astroPage.goto()

    //     // Use the fixture value in the test.
    //     await use(astroPage)

    //     // Clean up the fixture.
    //     //   await todoPage.removeAll();
    // }
})
export { expect } from '@playwright/test'
