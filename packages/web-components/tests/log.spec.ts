import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Log', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-log></rux-log>
    `
        )
        const el = page.locator('rux-log').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/
