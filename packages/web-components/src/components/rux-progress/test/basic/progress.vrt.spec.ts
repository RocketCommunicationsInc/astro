import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Progress', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-progress/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
