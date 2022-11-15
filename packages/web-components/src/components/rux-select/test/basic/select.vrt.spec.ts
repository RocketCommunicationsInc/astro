import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Select', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-select/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
