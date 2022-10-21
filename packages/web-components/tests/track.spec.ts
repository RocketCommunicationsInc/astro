import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Track', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-track></rux-track>
        `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-track').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
