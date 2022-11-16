import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Container', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-container>Content</rux-container>
        `
        await page.setContent(template)
        const el = await page.locator('rux-container')

        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
