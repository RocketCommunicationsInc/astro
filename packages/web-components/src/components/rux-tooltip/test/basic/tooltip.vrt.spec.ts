import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Tooltip', () => {
    test.use({ component: 'rux-tooltip' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
