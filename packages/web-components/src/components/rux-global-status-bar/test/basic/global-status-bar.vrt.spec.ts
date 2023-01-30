import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Global status bar', () => {
    test.use({ component: 'rux-global-status-bar' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
