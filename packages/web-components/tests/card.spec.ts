import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Card', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-card style="width: 50%; margin: auto">
                <div slot="header">Card Title</div>
                <div>whatup</div>
                <div slot="footer">
                    <rux-button style="width: 100%">save</rux-button>
                </div>
            </rux-card>
        `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-card').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
