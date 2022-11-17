import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Notification', () => {
    test('has no visual regression @vrt', async ({ page }) => {
        await page.goto(
            `/src/components/rux-notification/test/basic/index.html`,
            { waitUntil: 'networkidle' }
        )
        await page.waitForFunction(() => document.fonts.check('1em Roboto'))

        await expect(page).toHaveScreenshot()
    })
})
