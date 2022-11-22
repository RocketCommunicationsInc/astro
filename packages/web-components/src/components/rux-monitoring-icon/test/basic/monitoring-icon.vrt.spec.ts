import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring-icon', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(
            `/src/components/rux-monitoring-icon/test/basic/index.html`
        )
        await expect(page).toHaveScreenshot()
    })
})
