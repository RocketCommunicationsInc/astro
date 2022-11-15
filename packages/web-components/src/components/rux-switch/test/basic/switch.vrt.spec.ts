import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('switch vrt', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-switch/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
