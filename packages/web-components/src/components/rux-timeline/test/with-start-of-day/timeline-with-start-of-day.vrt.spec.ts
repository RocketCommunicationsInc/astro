import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Timeline - With Start of Day', () => {
    test.use({ component: 'rux-timeline', testName: 'with-start-of-day' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
