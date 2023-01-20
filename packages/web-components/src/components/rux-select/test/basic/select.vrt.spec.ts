import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Select', () => {
    test.use({ component: 'rux-select' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
