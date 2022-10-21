import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Time-region', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-time-region></rux-time-region>
        `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-time-region').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
