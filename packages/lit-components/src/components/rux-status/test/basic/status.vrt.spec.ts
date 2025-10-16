import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Status', () => {
    test.use({ component: 'rux-status' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
