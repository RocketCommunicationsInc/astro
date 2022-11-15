import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring Progress Icon', () => {
    test('has no visual regression @vrt', async ({ astroVRTPage, page }) => {
        await astroVRTPage.goto(
            'components/rux-monitoring-progress-icon/test/basic'
        )
        await expect(page).toHaveScreenshot()
    })
})
