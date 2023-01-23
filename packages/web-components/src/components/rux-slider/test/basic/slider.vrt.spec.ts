import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Slider', () => {
    test.use({ component: 'rux-slider' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
