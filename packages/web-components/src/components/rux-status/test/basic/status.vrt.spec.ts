import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Status', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-status/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
