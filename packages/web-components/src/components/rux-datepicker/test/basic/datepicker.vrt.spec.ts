import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Datepicker', () => {
    test.use({ component: 'rux-datepicker' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
