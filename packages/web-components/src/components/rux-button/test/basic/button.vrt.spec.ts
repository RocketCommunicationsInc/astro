import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Button', () => {
    test.use({ component: 'rux-button' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('primary button hover has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        const el = astroVRTPage.locator(
            'rux-button[data-test-id="primary"] button'
        )
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('secondary button hover has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        const el = astroVRTPage.locator(
            'rux-button[data-test-id="secondary"] button'
        )
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('borderless button hover has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        const el = astroVRTPage.locator(
            'rux-button[data-test-id="borderless"] button'
        )
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
