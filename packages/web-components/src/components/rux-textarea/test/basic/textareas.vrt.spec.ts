import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Textarea', () => {
    test.use({ component: 'rux-textarea' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
