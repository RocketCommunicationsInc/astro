import { test, expect } from '../../../../../tests/utils/_astro-fixtures'
test.describe('Tag', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-tag/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
