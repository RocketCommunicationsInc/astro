import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('vrt', () => {
    test('has no visual regression @vrt', async ({ astroVRTPage, page }) => {
        await astroVRTPage.goto('components/rux-input/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
