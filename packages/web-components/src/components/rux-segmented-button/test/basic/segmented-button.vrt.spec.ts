import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Segmented-button', () => {
    test.use({ component: 'rux-segmented-button' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('hover has no visual regression @vrt', async ({ astroVRTPage }) => {
        const el = astroVRTPage
            .locator('rux-segmented-button[data-test-id="default"] ul li')
            .first()
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
