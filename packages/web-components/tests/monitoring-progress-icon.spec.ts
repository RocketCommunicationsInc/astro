import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Monitoring Progress Icon', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-monitoring-progress-icon
                progress=70
                max="100"
                label="Label"
                sublabel="sublabel"
                notifications="345678"
            ></rux-monitoring-progress-icon>
            `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-monitoring-progress-icon').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
