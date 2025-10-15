import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Breadcrumb', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-breadcrumb/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })

    test('Focus state has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-breadcrumb/test/basic/index.html`)
        await page.keyboard.press('Tab')
        await expect(page).toHaveScreenshot()
    })
})
