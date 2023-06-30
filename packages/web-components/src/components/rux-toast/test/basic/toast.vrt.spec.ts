import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Toast', () => {
    test.use({ component: 'rux-toast' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
