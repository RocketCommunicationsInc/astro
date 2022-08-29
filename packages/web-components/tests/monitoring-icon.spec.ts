import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Monitoring-icon', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-monitoring-icon></rux-monitoring-icon>
    `)
        const el = page.locator('rux-monitoring-icon').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    - it sets attributes:
        - status="normal"
        -data-dashlane-observed="true"
*/
