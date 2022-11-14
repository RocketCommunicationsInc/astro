import { test, expect } from './utils/_astro-fixtures'

test.describe('Card', () => {

    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-card/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
