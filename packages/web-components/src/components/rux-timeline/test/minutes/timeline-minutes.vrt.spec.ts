import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Timeline - minutes', () => {
    test.use({ component: 'rux-timeline', testName: 'minutes' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
