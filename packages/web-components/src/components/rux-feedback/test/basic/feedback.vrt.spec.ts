import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Feedback', () => {
    test.use({ component: 'rux-feedback' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
