import { test, expect } from './utils/_astro-fixtures'

test.describe('Table', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-table/test/basic')
        await expect(page).toHaveScreenshot()
    })

})
