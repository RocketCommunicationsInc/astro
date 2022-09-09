import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Button Group', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
        <rux-button-group h-align="right">
            <rux-button secondary>Cancel</rux-button>
            <rux-button>Confrim</rux-button>
        </rux-button-group>
    `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-button-group').first()
        await expect(el).toBeVisible()
        // await expect(el).toHaveClass('hydrated')
    })
    test('it sets attributes', async ({ page }) => {
        const el = page.locator('rux-button-group').first()

        await expect(el).toBeVisible()
        await expect(el).toHaveAttribute('h-align', 'right')
    })
})
