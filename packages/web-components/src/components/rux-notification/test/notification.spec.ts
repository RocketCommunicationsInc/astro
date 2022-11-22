import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Notification', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-notification open message="hello there"></rux-notification>
            `
        await page.setContent(template)
        const el = page.locator('rux-notification').first()
        await expect(el).toHaveClass('hydrated')
    })
    test('closes when close icon is clicked', async ({ page }) => {
        const template = `
        <rux-notification
            open
            data-test-id="default"
            message="testing time"
        ></rux-notification>
        `
        await page.setContent(template)

        const el = page.locator('rux-notification')
        const icon = el.locator('rux-icon')

        await icon.click()
        await page.waitForTimeout(100)
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('closes when closeAfter is up', async ({ page }) => {
        const template = `
        <rux-notification
            open
            close-after="2000"
            message="testing time"
        ></rux-notification>
        `
        await page.setContent(template)
        const el = await page.locator('rux-notification')
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it accepts second values for closeAfter', async ({ page }) => {
        const template = `
        <rux-notification
            open
            close-after="2"
            message="testing time"
        ></rux-notification>
        `
        await page.setContent(template)
        const el = await page.locator('rux-notification')
        await page.waitForTimeout(2000)
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => expect(e).toBeFalsy())
    })
    test('closeAfter defaults to 2000 if closeAfter is > 10s', async ({
        page,
    }) => {
        const template = `
        <rux-notification
            open
            close-after="11"
            message="testing time"
        ></rux-notification>
        `
        await page.setContent(template)
        const el = await page.locator('rux-notification')
        await page.waitForTimeout(2100)
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => expect(e).toBeFalsy())
    })
    test('closeAfter defaults to 2000 if closeAfter is < 2s', async ({
        page,
    }) => {
        const template = `
        <rux-notification
            open
            close-after="1"
            message="testing time"
        ></rux-notification>
        `
        await page.setContent(template)
        const el = await page.locator('rux-notification')
        await page.waitForTimeout(1100)
        await expect(el).toHaveAttribute('open', '')
    })

    test('should emit one event when closed', async ({ page }) => {
        const template = `    
            <rux-notification
            open
            message="testing time"
            ></rux-notification>
            `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
        document.addEventListener('ruxclosed', () => {
            console.log('notification closed');
        })
        `,
        })
        const el = await page.locator('rux-notification')
        const closeBtn = await el.locator('rux-icon')
        page.on('console', (msg) => {
            expect(msg.text()).toBe('notification closed')
        })
        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            closeBtn.click(),
        ])
    })

    test('it renders the message prop text when used with slots', async ({
        page,
    }) => {
        const template = `
            <rux-notification open message="Message Prop">
                <span slot="prefix">Slot Prefix</span>
            </rux-notification>
        `
        await page.setContent(template)
        const messageContainer = await page.locator(
            '.rux-notification-banner__content'
        )
        await expect(messageContainer).toContainText('Message Prop')
    })
})
/*
    Need to test: 
        small prop - could probably test the size of the notification 
        
*/
