import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Container', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-container/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
