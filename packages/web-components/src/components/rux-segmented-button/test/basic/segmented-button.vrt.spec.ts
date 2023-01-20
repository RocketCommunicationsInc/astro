import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Segmented-button', () => {
    test.use({ component: 'rux-segmented-button' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
