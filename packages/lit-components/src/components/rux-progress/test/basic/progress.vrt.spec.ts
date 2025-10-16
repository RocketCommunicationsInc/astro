import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Progress', () => {
    test.use({ component: 'rux-progress' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
