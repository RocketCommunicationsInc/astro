import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('vrt', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-push-button/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
