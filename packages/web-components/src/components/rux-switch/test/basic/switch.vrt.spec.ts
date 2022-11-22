import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('switch vrt', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-switch/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
