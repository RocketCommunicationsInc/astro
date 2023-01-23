import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Pop up', async () => {
    test.use({ component: 'rux-pop-up' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
