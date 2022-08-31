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

        await page.waitForTimeout(1000)

        const el = page.locator('rux-notification').first()
        const icon = el.locator('rux-icon').first()

        await icon.click()

        await el
            .evaluate((e) => {
                console.log(e)
                return e.hasAttribute('open')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })
})
/*
    Need to test: 
    
*/
