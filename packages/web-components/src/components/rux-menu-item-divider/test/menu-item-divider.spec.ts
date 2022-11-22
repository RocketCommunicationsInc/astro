import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Menu Item Divider', async () => {
    test('it renders', async ({ page }) => {
        const template = `
                <rux-menu-item-divider>Item</rux-menu-item-divider>
            `

        await page.setContent(template)
        const menu = await page.locator('rux-menu-item-divider')
        await expect(menu).toBeVisible()
        await expect(menu).toHaveClass('hydrated')
    })
})
