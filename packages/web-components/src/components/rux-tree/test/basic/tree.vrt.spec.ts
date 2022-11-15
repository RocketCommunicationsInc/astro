import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Tree', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-tree/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
