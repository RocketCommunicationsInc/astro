import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Radio', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-radio/test/basic')
        await expect(page).toHaveScreenshot()
    })
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-radio>hello</rux-radio>
        `
        )
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-radio').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -Gets checked state on click/click-off
    -Does not check when disabled
    -Does not uncheck when disabled and checked
    -Form tests?
*/
