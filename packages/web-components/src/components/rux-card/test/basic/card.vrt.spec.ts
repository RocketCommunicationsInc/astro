import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Card', () => {
    test.use({ component: 'rux-card' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
