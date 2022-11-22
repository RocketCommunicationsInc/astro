import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Checkbox-group', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(
            `/src/components/rux-checkbox-group/test/basic/index.html`
        )
        await expect(page).toHaveScreenshot()
    })
})
