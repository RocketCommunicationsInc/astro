import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('tabs vrt', () => {
    test.use({ component: 'rux-tabs' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('hover has no visual regression @vrt', async ({ astroVRTPage }) => {
        const el = astroVRTPage.locator('rux-tab[data-test-id="default"]')
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
    // test('focus state has no visual regression @vrt', async ({
    //     astroVRTPage,
    // }) => {
    //     await astroVRTPage.keyboard.press('Tab')
    //     await expect(astroVRTPage).toHaveScreenshot()
    // })
})
