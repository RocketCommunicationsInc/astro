import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Toast-Stack', () => {
    test.use({ component: 'rux-toast-stack' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
