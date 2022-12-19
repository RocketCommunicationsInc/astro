import { test, expect } from '../../../../../tests/utils/_astro-fixtures'
test.describe('Tag', () => {
    test('has no visual regression @vrt @dark', async ({ page }) => {
        await page.goto(`/src/components/rux-tag/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })

    test('has no visual regression @vrt @light', async ({ page }) => {
        await page.goto(`/src/components/rux-tag/test/basic/index.html`)
        await page.evaluate(() => {
            document.body.classList.add('light-theme')
        })
        await expect(page).toHaveScreenshot()
    })
})
