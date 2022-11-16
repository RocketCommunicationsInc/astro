import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Status', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-status status="standby"></rux-status>
        `
        await page.setContent(template)
        const el = await page.locator('rux-status')

        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
