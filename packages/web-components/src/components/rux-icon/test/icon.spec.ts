import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Icon', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-icon icon="altitude"></rux-icon>
        `
        await page.setContent(template)
        const el = await page.locator('rux-icon')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/
