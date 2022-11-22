import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Track', () => {
    test('it renders', async ({ page }) => {
        const template = `<rux-track></rux-track>`
        await page.setContent(template)
        const el = await page.locator('rux-track')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
