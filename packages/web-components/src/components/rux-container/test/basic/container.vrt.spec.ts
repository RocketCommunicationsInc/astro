import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Container', () => {
    test.use({ component: 'rux-container' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
