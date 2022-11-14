import { test, expect } from './utils/_astro-fixtures'

test.describe('Global status bar', () => {

    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-global-status-bar/test/basic')
        await expect(page).toHaveScreenshot()
    })

})
