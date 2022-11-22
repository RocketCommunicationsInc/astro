import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Menu', async () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-menu>
                <rux-menu-item>Item</rux-menu-item>
            </rux-menu>
        `
        await page.setContent(template)
        const menu = await page.locator('rux-menu')
        await expect(menu).toBeVisible()
        await expect(menu).toHaveClass('hydrated')
    })

    test('it emits ruxmenuselected event with correct detail', async ({
        page,
    }) => {
        const template = `
        <rux-menu style="width: 300px;">
            <rux-menu-item>One</rux-menu-item>
            <rux-menu-item>Two</rux-menu-item>
            <rux-menu-item>Three</rux-menu-item>
        </rux-menu>
        `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxmenuselected', (e) => {
            console.log(e.detail.innerText)
        })
        `,
        })
        const menuItem = await page.locator('rux-menu-item').first()
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
        const template = `
        <rux-menu style="width: 300px;">
            <rux-menu-item>One</rux-menu-item>
            <rux-menu-item>Two</rux-menu-item>
            <rux-menu-item>Three</rux-menu-item>
        </rux-menu>
        `
        await page.setContent(template)
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
