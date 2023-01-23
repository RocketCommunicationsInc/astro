import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Accordion', () => {
    test('has no visual regression @vrt @dark', async ({ page }) => {
        await page.goto(`/src/components/rux-accordion/test/basic/index.html`)
        await expect(page).toHaveScreenshot()
    })

    test('has no visual regression @vrt @light', async ({ page }) => {
        await page.goto(`/src/components/rux-accordion/test/basic/index.html`)
        await page.evaluate(() => {
            document.body.classList.add('light-theme')
        })
        await expect(page).toHaveScreenshot()
    })

    test('focus state has no visual regression @vrt @dark', async ({
        page,
    }) => {
        await page.goto(`/src/components/rux-accordion/test/basic/index.html`)
        await page.evaluate(() => {
            const focused = document
                .getElementById('focused')
                ?.shadowRoot?.querySelector('summary')
            focused?.focus()
        })
        await expect(page).toHaveScreenshot()
    })

    test('focus state has no visual regression @vrt @light', async ({
        page,
    }) => {
        await page.goto(`/src/components/rux-accordion/test/basic/index.html`)
        await page.evaluate(() => {
            document.body.classList.add('light-theme')
            const focused = document
                .getElementById('focused')
                ?.shadowRoot?.querySelector('summary')
            focused?.focus()
        })
        await expect(page).toHaveScreenshot()
    })
})
