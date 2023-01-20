import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('switch vrt', () => {
    test.use({ component: 'rux-switch' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
