import { test, expect } from './utils/_astro-fixtures'

test.describe('Tree Node', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-tree-node/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
