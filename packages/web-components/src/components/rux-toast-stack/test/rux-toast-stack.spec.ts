import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Toast-Stack', () => {
    test('it renders', async ({ page }) => {
        const template = `
          <rux-toast-stack></rux-toast-stack>
          `
        await page.setContent(template)
        const el = page.locator('rux-toast-stack').first()
        await expect(el).toHaveClass('hydrated')
    })
    test('it has default position prop reflected', async ({ page }) => {
        const template = `
      <rux-toast-stack
      ></rux-toast-stack>
      `
        await page.setContent(template)

        const el = page.locator('rux-toast-stack')

        await expect(el).toHaveAttribute('position', 'top-right')
    })

    test('position prop is reflected', async ({ page }) => {
        const template = `
        <rux-toast-stack
        ></rux-toast-stack>
        `
        await page.setContent(template)
        const el = page.locator('rux-toast-stack')
        el.evaluate((el: HTMLRuxToastStackElement) => {
            el.position = 'top-left'
        })

        await expect(el).toHaveAttribute('position', 'top-left')
    })

    test('position can be set via attribute', async ({ page }) => {
        const template = `
        <rux-toast-stack
        ></rux-toast-stack>
        `
        await page.setContent(template)
        const el = page.locator('rux-toast-stack')
        el.evaluate((el: HTMLRuxToastStackElement) => {
            el.position = 'top-left'
        })

        await expect(el).toHaveAttribute('position', 'top-left')
    })

    test('it can create toasts', async ({ page }) => {
        const template = `
        <rux-toast-stack
        ></rux-toast-stack>
      `
        await page.setContent(template)

        const el = page.locator('rux-toast-stack')

        el.evaluate((el: HTMLRuxToastStackElement) => {
            el.addToast({
                message: 'message',
            })
        })

        const toast = el.locator('rux-toast')
        const messageContainer = toast.locator('.rux-toast__content')
        await expect(messageContainer).toContainText('message')
    })
})
