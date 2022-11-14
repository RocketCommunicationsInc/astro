import { test, expect } from './utils/_astro-fixtures'

test.describe('Timeline', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-timeline/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
