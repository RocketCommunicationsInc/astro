import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Classification Marking', () => {
    test.use({ component: 'rux-classification-marking' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    // @TODO - Implement in VRT
    // test('it renders footer banner')

    // @TODO - Implement in VRT
    // test('it renders tags')
})
