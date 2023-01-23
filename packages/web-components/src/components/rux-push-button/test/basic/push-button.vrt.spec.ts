import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('push button', () => {
    test.use({ component: 'rux-push-button' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
