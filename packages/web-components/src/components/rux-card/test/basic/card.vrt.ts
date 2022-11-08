import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Card', () => {
    test('it renders', async ({ page }) => {
        await page.goto('/components/rux-card/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
