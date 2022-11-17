import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Log', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-log/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
