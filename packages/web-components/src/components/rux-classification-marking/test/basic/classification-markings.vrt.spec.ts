import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Classification Marking', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(
            `/src/components/rux-classification-marking/test/basic/index.html`
        )
        await expect(page).toHaveScreenshot()
    })

    // @TODO - Implement in VRT
    // test('it renders footer banner')

    // @TODO - Implement in VRT
    // test('it renders tags')
})
