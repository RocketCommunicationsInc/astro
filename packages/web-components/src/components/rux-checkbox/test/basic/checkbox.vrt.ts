import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('checkbox', () => {
    test('it renders', async ({ page }) => {
        await page.goto('/components/rux-checkbox/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
