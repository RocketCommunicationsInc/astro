import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring-icon', () => {
    test('has no visual regression @vrt', async ({ astroVRTPage, page }) => {
        await astroVRTPage.goto('components/rux-monitoring-icon/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
