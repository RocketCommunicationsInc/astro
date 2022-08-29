import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'
// import { test, expect } from './_fixture'

test.describe('Button', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-button>Hello</rux-button>
    `)
        const el = page.locator('rux-button').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it sets attributes', async ({ page }) => {
        await page.setContent(`
        <rux-button id="attr" type="submit" secondary disabled>Hello</rux-button>
    `)
        const el = page.locator('#attr')
        await expect(el).toBeVisible()
        await expect(el).toHaveAttribute('disabled', '')
        await expect(el).toHaveAttribute('secondary', '')
        await expect(el).toHaveAttribute('type', 'submit')
    })
})
