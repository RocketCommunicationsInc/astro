import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Classification Marking', () => {
    test('has no visual regression @vrt', async ({ astroVRTPage, page }) => {
        await astroVRTPage.goto(
            'components/rux-classification-marking/test/basic'
        )
        await expect(page).toHaveScreenshot()
    })

    // @TODO - Implement in VRT
    // test('it renders footer banner')

    // @TODO - Implement in VRT
    // test('it renders tags')
})
