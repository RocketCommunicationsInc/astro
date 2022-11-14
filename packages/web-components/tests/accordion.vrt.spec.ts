import { test, expect } from './utils/_astro-fixtures'


test.describe('Accordion', () => {
    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-accordion/test/basic')
        await expect(page).toHaveScreenshot()
    })
})