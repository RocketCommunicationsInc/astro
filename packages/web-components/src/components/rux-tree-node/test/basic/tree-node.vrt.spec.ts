import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Tree Node', () => {
    test.use({ component: 'rux-tree-node' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
