import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Tree Node', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-tree-node/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
