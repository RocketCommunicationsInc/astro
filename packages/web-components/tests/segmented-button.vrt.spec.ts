import { test, expect } from './utils/_astro-fixtures'

test.describe('Segmented-button', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-segmented-button/test/basic')
        await expect(page).toHaveScreenshot()
    })

})
