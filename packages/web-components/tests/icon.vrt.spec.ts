import { test, expect } from './utils/_astro-fixtures'

test.describe('Icon', () => {

    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-icon/test/basic')
        await expect(page).toHaveScreenshot()
    })

})
