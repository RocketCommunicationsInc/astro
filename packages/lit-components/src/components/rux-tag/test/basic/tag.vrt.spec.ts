import { test, expect } from '../../../../../tests/utils/_astro-fixtures'
test.describe('Tag', () => {
    test.use({ component: 'rux-tag' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
