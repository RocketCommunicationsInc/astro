import { test, expect } from './utils/_astro-fixtures'

test.describe('Card', () => {

    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-card>
                Content
            </rux-card>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    test('has no visual regression', async ({page}) => {
        await page.goto('/components/rux-card/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
