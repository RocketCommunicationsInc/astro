import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Progress', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <body>
            <rux-progress></rux-progress>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="100" max="100"></rux-progress>
            </div>
        </body>
    `)
        const el = page.locator('rux-progress').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has props value, hide-label and max
*/
