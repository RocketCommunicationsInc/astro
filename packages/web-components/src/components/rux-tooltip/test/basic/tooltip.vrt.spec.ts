import { test, expect } from '@playwright/test'

test.describe('Tooltip', async () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-tooltip/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
