import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Tree', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-tree/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
