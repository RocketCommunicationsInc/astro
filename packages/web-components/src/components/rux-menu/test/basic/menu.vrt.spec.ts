import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Menu', () => {
    test.use({ component: 'rux-menu' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('hover has no visual regression @vrt', async ({ astroVRTPage }) => {
        const el = astroVRTPage.locator('rux-menu-item[data-test-id="default"]')
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
