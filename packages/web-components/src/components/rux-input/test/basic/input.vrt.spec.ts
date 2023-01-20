import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('vrt', () => {
    test.use({ component: 'rux-input' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
