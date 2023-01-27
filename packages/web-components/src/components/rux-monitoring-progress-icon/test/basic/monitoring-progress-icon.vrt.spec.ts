import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring Progress Icon', () => {
    test.use({ component: 'rux-monitoring-progress-icon' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
