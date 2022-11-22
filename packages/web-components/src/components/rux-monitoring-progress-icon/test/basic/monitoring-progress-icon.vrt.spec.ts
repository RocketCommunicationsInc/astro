import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring Progress Icon', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(
            `/src/components/rux-monitoring-progress-icon/test/basic/index.html`
        )
        await expect(page).toHaveScreenshot()
    })
})
