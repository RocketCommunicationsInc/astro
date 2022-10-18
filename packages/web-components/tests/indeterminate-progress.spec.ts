import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Indeterminate Progress', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-indeterminate-progress></rux-indeterminate-progress>
            `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-indeterminate-progress').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
