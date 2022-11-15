import { test, expect } from '@playwright/test'
import {
    startTestEnv,
    setBodyContent,
} from '../../../../tests/utils/_startTestEnv'

test.describe('Menu', async () => {
    startTestEnv()
    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-menu>
                <rux-menu-item>Item</rux-menu-item>
            </rux-menu>
        `
        )
        const menu = page.locator('rux-menu')
        await expect(menu).toBeVisible()
        await expect(menu).toHaveClass('hydrated')
    })

    test('it emits ruxmenuselected event with correct detail', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <rux-menu style="width: 300px;">
            <rux-menu-item>One</rux-menu-item>
            <rux-menu-item>Two</rux-menu-item>
            <rux-menu-item>Three</rux-menu-item>
        </rux-menu>
        `
        )
        page.addScriptTag({
            content: `
        document.addEventListener('ruxmenuselected', (e) => {
            console.log(e.detail.innerText)
        })
        `,
        })
        const menuItem = page.locator('rux-menu-item').first()
        page.on('console', (msg) => {
            expect(msg.text()).toBe('One')
        })

        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            menuItem.click(),
        ])
    })
    test('it only has one rux-menu-item selected at a time', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <rux-menu style="width: 300px;">
            <rux-menu-item>One</rux-menu-item>
            <rux-menu-item>Two</rux-menu-item>
            <rux-menu-item>Three</rux-menu-item>
        </rux-menu>
        `
        )
        const first = page.locator('rux-menu-item').first()
        const last = page.locator('rux-menu-item').last()

        await expect(first).not.toHaveAttribute('selected', '')
        await first.click()

        await expect(first).toHaveAttribute('selected', '')
        //this timeout prevents flake from the next function running too fast
        await last.click().then(() => page.waitForTimeout(500))

        await expect(last).toHaveAttribute('selected', '')
        await expect(first).not.toHaveAttribute('selected', '')
    })
})
