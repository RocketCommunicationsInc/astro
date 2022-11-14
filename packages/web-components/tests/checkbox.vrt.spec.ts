import { test, expect } from './utils/_astro-fixtures'

test.describe('Checkbox', () => {
    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-checkbox/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
