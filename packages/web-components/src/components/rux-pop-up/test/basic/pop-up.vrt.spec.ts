import { test, expect } from '@playwright/test'

test.describe('Pop up', async () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto('/components/rux-pop-up/test/basic')
        await expect(page).toHaveScreenshot()
    })
})
