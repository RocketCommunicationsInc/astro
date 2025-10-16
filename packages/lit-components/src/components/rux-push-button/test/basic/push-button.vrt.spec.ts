import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('push button', () => {
    test.use({ component: 'rux-push-button' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('default button hover has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        const el = astroVRTPage.locator(
            'rux-push-button[data-test-id="default"]'
        )
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('checked button hover has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        const el = astroVRTPage.locator(
            'rux-push-button[data-test-id="checked"]'
        )
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('focus state has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        await astroVRTPage.keyboard.press('Tab')
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
