import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Button', () => {
    test('it renders', async ({ page }) => {
        await page.goto('/components/rux-button/test/basic')
        await expect(page).toHaveScreenshot()
    })

    test('hover', async ({ page }) => {
        await page.goto('/components/rux-button/test/basic')
        const el = await page.locator('rux-button').first()
        await el.hover()
        await expect(el).toHaveScreenshot()
    })
})
