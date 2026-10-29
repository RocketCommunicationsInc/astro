import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Icon', () => {
    test.use({ component: 'rux-icon' })

    test('has no visual regression @vrt', async ({ astroVRTPage }) => {
        await expect(astroVRTPage).toHaveScreenshot()
    })

    test('loads the selected icon and updates it when the icon changes', async ({
        astroVRTPage,
    }) => {
        const icon = astroVRTPage.locator('rux-icon').first()
        const svg = icon.locator('svg')

        await expect(svg).toHaveCount(1)
        const initialSvg = await svg.evaluate((element) => element.outerHTML)

        await icon.evaluate((element) => element.setAttribute('icon', 'search'))

        await expect
            .poll(() => svg.evaluate((element) => element.outerHTML))
            .not.toBe(initialSvg)
    })
})
