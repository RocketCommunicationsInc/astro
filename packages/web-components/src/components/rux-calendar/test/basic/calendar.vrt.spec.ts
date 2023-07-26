import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Calendar', () => {
    test.use({ component: 'rux-calendar' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
