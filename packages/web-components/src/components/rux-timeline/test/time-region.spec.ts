import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Time-region', () => {
    test('it renders', async ({ page }) => {
        const template = `<rux-time-region></rux-time-region>`
        await page.setContent(template)
        const el = await page.locator('rux-time-region')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
