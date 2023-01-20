import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Tree', () => {
    test.use({ component: 'rux-tree' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
