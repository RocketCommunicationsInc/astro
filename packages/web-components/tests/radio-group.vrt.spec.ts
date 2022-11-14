import { test, expect } from './utils/_astro-fixtures'

test.describe('vrt', () => {

    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-radio-group/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
