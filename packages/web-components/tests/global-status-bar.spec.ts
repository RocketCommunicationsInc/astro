import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Global status bar', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-global-status-bar></rux-global-status-bar>
        `)
        const el = page.locator('rux-global-status-bar')
        await expect(el).toHaveClass('hydrated')
    })
    /**
     * Need to test:
     * - Attributes
     * - It can render other comps, ie clock?
     * -
     */
})
