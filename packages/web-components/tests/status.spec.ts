import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Status', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-status status="standby"></rux-status>
    `
        )
        const el = page.locator('rux-status').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
        await expect(el).toHaveAttribute('status', 'standby')
    })
})
