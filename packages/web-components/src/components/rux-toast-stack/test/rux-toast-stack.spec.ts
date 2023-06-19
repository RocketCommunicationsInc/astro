import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Toast', () => {
    test('it renders', async ({ page }) => {
        const template = `
          <rux-toast-stack></rux-toast-stack>
          `
        await page.setContent(template)
        const el = page.locator('rux-toast-stack').first()
        await expect(el).toHaveClass('hydrated')
    })
    test('it has position attribute reflected', async ({ page }) => {
        const template = `
      <rux-toast-stack
      ></rux-toast-stack>
      `
        await page.setContent(template)

        const el = page.locator('rux-toast-stack')

        expect(el).toHaveAttribute('position', 'top-right')
    })

    test('it can create toasts', async ({ page }) => {
        const template = `
        <rux-toast-stack
        ></rux-toast-stack>
      `
        await page.setContent(template)

        const el = page.locator('rux-toast-stack')

        el.evaluate((el) => {
            el.addToast({
                message: 'message',
                status: 'normal',
                hideClose: false,
            })
        })

        const toast = el.locator('rux-toast')
        const messageContainer = toast.locator('.rux-toast__content')
        await expect(messageContainer).toContainText('message')
    })
})
