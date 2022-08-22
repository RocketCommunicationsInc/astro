import { test, expect } from '@playwright/test'

test.describe('Checkbox', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3333')
    })
    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-button-group h-align="right">
            <rux-button secondary>Cancel</rux-button>
            <rux-button>Confrim</rux-button>
        </rux-button-group>
    `)
    })
    test('it sets attributes', async ({ page }) => {
        const el = page.locator('rux-button-group').first()

        await expect(el).toBeVisible()
        await expect(el).toHaveAttribute('h-align', 'right')
    })
})
