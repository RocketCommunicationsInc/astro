import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Log', () => {
    test.use({ component: 'rux-log' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
