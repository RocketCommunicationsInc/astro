import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Notification', () => {
    test.use({ component: 'rux-notification' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
