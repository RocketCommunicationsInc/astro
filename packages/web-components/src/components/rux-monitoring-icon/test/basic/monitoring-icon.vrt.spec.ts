import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring-icon', () => {
    test('has no visual regression @vrt @dark', async ({ page }) => {
        await page.goto(
            `/src/components/rux-monitoring-icon/test/basic/index.html`,
            { waitUntil: 'networkidle' }
        )
        await page.waitForFunction(() => document.fonts.check('1em Roboto'))
        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms))
        await delay(2000)
        await page.waitForChanges()
        await expect(page).toHaveScreenshot()
    })

    test('has no visual regression @vrt @light', async ({ page }) => {
        await page.goto(
            `/src/components/rux-monitoring-icon/test/basic/index.html`,
            { waitUntil: 'networkidle' }
        )
        await page.waitForFunction(() => document.fonts.check('1em Roboto'))
        await page.evaluate(() => {
            document.body.classList.add('light-theme')
        })
        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms))
        await delay(2000)
        await page.waitForChanges()
        await expect(page).toHaveScreenshot()
    })
})
