import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Card', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-card>
                Content
            </rux-card>
        `
        await page.setContent(template)
        const el = await page.locator('rux-card')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
