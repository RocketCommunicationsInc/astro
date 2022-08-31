import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Status', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-status></rux-status>
    `)
        const el = page.locator('rux-status').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has props status
*/
