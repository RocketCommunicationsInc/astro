import { test, expect } from './utils/_astro-fixtures'

test.describe('Radio', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-radio/test/basic')
        await expect(page).toHaveScreenshot()
    })

})