import { test, expect } from './utils/_astro-fixtures'

test.describe('Slider', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-slider/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
