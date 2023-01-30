import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Checkbox-group', () => {
    test.use({ component: 'rux-checkbox-group' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
