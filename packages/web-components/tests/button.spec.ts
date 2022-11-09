import { test, expect } from './utils/_astro-fixtures'

test.describe('Button', () => {
    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-button/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
