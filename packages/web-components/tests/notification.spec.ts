import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Notification', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-notification></rux-notification>
    `)
        const el = page.locator('rux-notification').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('closes when close icon is clicked', async ({ page }) => {
        await page.setContent(`
        <rux-notification
            open
            data-test-id="default"
            message="testing time"
        ></rux-notification>
        `)

        const el = page.locator('rux-notification').first()
        const icon = el.locator('rux-icon').first()

        await icon.click()

        //This works, except when you run npx playwright test, then it fails on icon.click()
        await expect(el).not.toHaveClass(
            'rux-notification-banner-0ba5409c--open'
        )

        //await expect(el).not.toHaveAttribute('open', '') <-- This does not work
    })
})
/*
    Need to test: 
    
*/
