import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Timeline', () => {
    test.use({ component: 'rux-timeline' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
