import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Toast', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-toast message="hello there"></rux-toast>
            `
        await page.setContent(template)
        const el = page.locator('rux-toast').first()
        await expect(el).toHaveClass('hydrated')
    })
    test('closes when close icon is clicked', async ({ page }) => {
        const template = `
        <rux-toast
            data-test-id="default"
            message="testing close"
        ></rux-toast>
        `
        await page.setContent(template)

        const el = page.locator('rux-toast')
        const icon = el.locator('rux-icon')

        await icon.click()
        await page.waitForTimeout(100)
        expect(el).toBeUndefined()
    })
    test('closes when closeAfter is up', async ({ page }) => {
        const template = `
        <rux-toast
            close-after="2000"
            message="close after 2s"
        ></rux-toast>
        `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        await page.waitForTimeout(2001)
        expect(el).toBeUndefined()
    })
    test('it accepts second values for closeAfter', async ({ page }) => {
        const template = `
        <rux-toast
            close-after="2"
            message="testing time"
        ></rux-toast>
        `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        await page.waitForTimeout(2001)
        expect(el).not.toBeDefined()
    })
    test('closeAfter defaults to 2000 if closeAfter is > 10s', async ({
        page,
    }) => {
        const template = `
        <rux-toast
            close-after="11"
            message="testing time"
        ></rux-toast>
        `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        await page.waitForTimeout(2001)
        expect(el).not.toBeDefined()
    })
    test('closeAfter defaults to 2000 if closeAfter is < 2s', async ({
        page,
    }) => {
        const template = `
        <rux-toast
            close-after="1"
            message="testing time"
        ></rux-toast>
        `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        await page.waitForTimeout(1100)
        expect(el).toBeDefined()
    })

    test('should emit one event when closed', async ({ page }) => {
        const template = `
            <rux-toast
            message="testing time"
            ></rux-toast>
            `
        await page.setContent(template)

        const el = page.locator('rux-toast')
        const closeBtn = el.locator('rux-icon')
        const closeEvent = await page.spyOnEvent('ruxToastClosed')

        await closeBtn.click()
        expect(closeEvent).toHaveReceivedEventTimes(1)
    })

    test('it renders the message prop text when used with slots', async ({
        page,
    }) => {
        const template = `
            <rux-toast message="Message Prop">
                <span>Message Slot</span>
            </rux-toast>
        `
        await page.setContent(template)
        const messageContainer = page.locator('.rux-toast__content')
        await expect(messageContainer).toContainText('Message Prop')
    })

    test('it creates a toast stack when there is not one', async ({ page }) => {
        const template = `
        <rux-toast message="Message">
        </rux-toast>
        `
        await page.setContent(template)
        const toastStack = page.locator('rux-toast-stack')
        expect(toastStack).toBeDefined()
    })

    test('it adds itself to an existing toast stack if not inside one already', async ({
        page,
    }) => {
        const template = `
          <rux-toast-stack></rux-toast-stack>
          <rux-toast message="Message">
          </rux-toast>
      `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        expect(el).toBeVisible()
        const toastStack = page.locator('rux-toast-stack')

        const elInToastStack = toastStack.locator('rux-toast')

        expect(elInToastStack).toBeDefined()
    })

    test('it destroys the toast stack if it is the last toast and gets closed', async ({
        page,
    }) => {
        const template = `
          <rux-toast-stack>
            <rux-toast message="Message"></rux-toast>
          </rux-toast-stack>
      `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        const toastStack = page.locator('rux-toast-stack')
        const closeIcon = el.locator('rux-icon')

        await closeIcon.click()

        expect(el).toBeUndefined()
        expect(toastStack).toBeUndefined()
    })
})
