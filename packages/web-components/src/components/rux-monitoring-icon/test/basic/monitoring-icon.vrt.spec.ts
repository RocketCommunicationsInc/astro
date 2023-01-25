import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring-icon', () => {
    test.use({ component: 'rux-monitoring-icon' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
