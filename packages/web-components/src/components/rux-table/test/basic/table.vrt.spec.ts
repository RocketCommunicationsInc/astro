import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Table', () => {
    test.use({ component: 'rux-table' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
