import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Notification', () => {
    test('has no visual regression @vrt', async ({ astroVRTPage, page }) => {
        await astroVRTPage.goto('components/rux-notification/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
