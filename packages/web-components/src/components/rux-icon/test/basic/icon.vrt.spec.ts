import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Icon', () => {
    test.use({ component: 'rux-icon' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
