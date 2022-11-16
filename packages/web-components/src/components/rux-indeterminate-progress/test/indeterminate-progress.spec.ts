import { test, expect } from '../../../../tests/utils/_astro-fixtures'
test.describe('Indeterminate Progress', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-indeterminate-progress></rux-indeterminate-progress>
        `
        await page.setContent(template)
        const el = await page.locator('rux-indeterminate-progress')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
