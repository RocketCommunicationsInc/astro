import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Table', () => {
    test.use({ component: 'rux-table' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('hover has no visual regression @vrt', async ({ astroVRTPage }) => {
        const el = astroVRTPage.locator('rux-table-row[data-test-id="default"]')
        await el.hover()
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
