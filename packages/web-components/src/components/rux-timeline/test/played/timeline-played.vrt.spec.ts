import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Timeline - Played', () => {
    test.use({ component: 'rux-timeline', testName: 'played' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
