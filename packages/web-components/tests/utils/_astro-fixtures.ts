import { test as base } from '@playwright/test'
import { AstroComponentPage } from './AstroComponentPage'
import { AstroFormPage } from './AstroFormPage'

type AstroFixtures = {
    astroPage: AstroComponentPage,
	astroFormPage: AstroFormPage
}

export const test = base.extend<AstroFixtures>({
    astroPage: async ({ page }, use) => {
        // Set up the fixture.
        const astroPage = new AstroComponentPage(page)
        await astroPage.goto()

        // Use the fixture value in the test.
        await use(astroPage)

        // Clean up the fixture.
        //   await todoPage.removeAll();
    },
	astroFormPage: async ({ page }, use) => {
        // Set up the fixture.
        const astroPage = new AstroFormPage(page)
        await astroPage.goto()

        // Use the fixture value in the test.
        await use(astroPage)

        // Clean up the fixture.
        //   await todoPage.removeAll();
    }
})
export { expect } from '@playwright/test'
