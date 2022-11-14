import { test, expect } from './utils/_astro-fixtures'
test.describe('Tag', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-tag/test/basic')
        await expect(page).toHaveScreenshot()
    })

})
