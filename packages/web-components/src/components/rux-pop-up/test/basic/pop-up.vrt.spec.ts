import { test, expect } from '@playwright/test'

test.describe('Pop up', async () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(`/src/components/rux-pop-up/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })
})
