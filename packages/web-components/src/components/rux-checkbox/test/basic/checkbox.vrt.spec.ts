import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Checkbox', () => {
    test.use({ component: 'rux-checkbox' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
