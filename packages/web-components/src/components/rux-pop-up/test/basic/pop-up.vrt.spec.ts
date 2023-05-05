import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Pop up', async () => {
    test.use({ component: 'rux-pop-up' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('focus state has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        await astroVRTPage.keyboard.press('Tab')
        await expect(astroVRTPage).toHaveScreenshot()
    })
    test('trigger movement has no visual regression @vrt', async ({
        astroVRTPage,
    }) => {
        const emptyDiv = astroVRTPage.locator('#default')

        await emptyDiv.evaluate((el) => {
            el.style.marginBottom = '80px'
        })
        await expect(astroVRTPage).toHaveScreenshot()
    })
})
