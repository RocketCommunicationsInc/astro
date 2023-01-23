import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Accordion', () => {
    test.use({ component: 'rux-accordion' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
