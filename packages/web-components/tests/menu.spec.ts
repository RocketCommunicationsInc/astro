import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

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
        //! Replace with .not.toHaveAttribute when playwright issue is fixed
        await first
            .evaluate((e) => {
                return e.hasAttribute('selected')
            })
            .then((e) => {
                expect(e).not.toBeTruthy()
            })
        await first.click()
        await first
            .evaluate((e) => {
                return e.hasAttribute('selected')
            })
            .then((e) => expect(e).toBeTruthy())
        //this timeout prevents flake from the next function running too fast
        await last.click().then(() => page.waitForTimeout(500))
        await last
            .evaluate((e) => {
                return e.hasAttribute('selected')
            })
            .then((e) => expect(e).toBeTruthy())
        await first
            .evaluate((e) => {
                return e.hasAttribute('selected')
            })
            .then((e) => expect(e).not.toBeTruthy())
    })
})
