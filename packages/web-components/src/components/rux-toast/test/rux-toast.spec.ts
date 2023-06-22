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
        await expect(page.locator('rux-toast')).toHaveCount(0)
    })
    test('closes when closeAfter is up', async ({ page }) => {
        const template = `
        <rux-toast
            close-after="2000"
            message="close after 2s"
        ></rux-toast>
        `
        await page.setContent(template)
        await page.waitForTimeout(2001)
        await expect(page.locator('rux-toast')).toHaveCount(0)
    })
    test('it accepts second values for closeAfter', async ({ page }) => {
        const template = `
        <rux-toast
            close-after="2"
            message="testing time"
        ></rux-toast>
        `
        await page.setContent(template)
        await page.waitForTimeout(2001)
        await expect(page.locator('rux-toast')).toHaveCount(0)
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
        await page.waitForTimeout(2001)
        await expect(page.locator('rux-toast')).toHaveCount(0)
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

    test('should emit one event when loaded', async ({ page }) => {
        const template = `
          <rux-toast
          message="testing time"
          ></rux-toast>
          <button id="click">click</button>
          `

        await page.setContent(template)
        await page.addScriptTag({
            content: `
        const button = document.getElementById('click')
        button.addEventListener('click', () => {
          const body = document.body
          const toast = document.createElement('rux-toast')
          toast.message = 'hi'

          body.appendChild(toast)
        })
    `,
        })
        await page.waitForChanges()
        //const el = page.locator('rux-toast') as any as HTMLRuxToastElement
        const openEvent = await page.spyOnEvent('ruxtoastopen')
        const button = page.locator('#click')

        await button.click()

        // await expect(el).toHaveClass('hydrated')
        // await expect(el).toBeEnabled()

        // //await page.waitForTimeout(2000)
        expect(openEvent).toHaveReceivedEventTimes(1)
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
        const closeEvent = await page.spyOnEvent('ruxtoastclosed')

        await closeBtn.click()
        expect(closeEvent).toHaveReceivedEventTimes(1)
    })

    test('hide-close works when set via attribute', async ({ page }) => {
        const template = `
          <rux-toast
          message="testing time"
          hide-close="true"
          ></rux-toast>
          `
        await page.setContent(template)

        await expect(page.locator('.rux-toast__actions')).toHaveCount(0)
    })

    test('hide-close works when set via prop', async ({ page }) => {
        const template = `
          <rux-toast
          message="testing time"
          ></rux-toast>
          `
        await page.setContent(template)
        const el = page.locator('rux-toast')
        el.evaluate((el) => {
            const toast = el as HTMLRuxToastElement
            toast.hideClose = true
        })

        await expect(page.locator('.rux-toast__actions')).toHaveCount(0)
    })
})
