import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Notification', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-notification></rux-notification>
    `
        )
        const el = page.locator('rux-notification').first()
        await expect(el).toHaveClass('hydrated')
    })
    test('closes when close icon is clicked', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-notification
            open
            data-test-id="default"
            message="testing time"
        ></rux-notification>
        `
        )

        const el = page.locator('rux-notification')
        const icon = el.locator('rux-icon')

        await icon.click()
        await page.waitForTimeout(100)
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => expect(e).toBeFalsy())
    })
    test('closes when closeAfter is up', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-notification
            open
            close-after="2000"
            message="testing time"
        ></rux-notification>
        `
        )
        const el = page.locator('rux-notification')
        await page.waitForTimeout(2100)
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => expect(e).toBeFalsy())
    })
})
/*
    Need to test: 
        small prop - could probably test the size of the notification 
        
*/
