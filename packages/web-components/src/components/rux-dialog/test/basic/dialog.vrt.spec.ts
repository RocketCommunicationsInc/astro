import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Dialog', () => {
    test.use({ component: 'rux-dialog' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('focus state has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        await astroVRTPage.keyboard.press('Tab')
        await astroVRTPage.keyboard.press('Tab')
        await astroVRTPage.keyboard.press('Tab')
        await astroVRTPage.keyboard.press('Tab') // for some reason it takes 4 tabs to get to the buttons on the test page
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
