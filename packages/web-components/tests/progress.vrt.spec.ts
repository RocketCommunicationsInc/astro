import { test, expect } from './utils/_astro-fixtures'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Progress', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-progress/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
