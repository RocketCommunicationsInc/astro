import { test, expect } from './utils/_astro-fixtures'

test.describe('Status', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-status/test/basic')
        await expect(page).toHaveScreenshot()
    })

    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-status status="standby"></rux-status>
        `
        const el = await astroPage.load(template)
        
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
