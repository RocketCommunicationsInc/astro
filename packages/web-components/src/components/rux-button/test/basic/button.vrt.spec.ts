import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Button', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-button/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
