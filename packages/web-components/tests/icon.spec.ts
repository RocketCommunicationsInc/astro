import { test, expect } from './utils/_astro-fixtures'

test.describe('Icon', () => {

    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-icon/test/basic')
        await expect(page).toHaveScreenshot()
    })

    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-icon icon="altitude"></rux-icon>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/
