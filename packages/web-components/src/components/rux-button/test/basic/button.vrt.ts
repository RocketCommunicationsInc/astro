import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Button', () => {
    test('it renders', async ({ page }) => {
        await page.goto('/components/rux-button/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
