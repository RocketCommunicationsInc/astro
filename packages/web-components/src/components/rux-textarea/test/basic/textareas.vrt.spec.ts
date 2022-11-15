import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Textarea', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-textarea/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
