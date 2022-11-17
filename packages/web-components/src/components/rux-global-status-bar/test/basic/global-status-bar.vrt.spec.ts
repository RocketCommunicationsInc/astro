import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Global status bar', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(
            `/src/components/rux-global-status-bar/test/basic/index.html`
        )
        await expect(page).toHaveScreenshot()
    })
})
