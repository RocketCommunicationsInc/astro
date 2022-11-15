import { test, expect } from '@playwright/test'
import {
    startTestEnv,
    setBodyContent,
} from '../../../../tests/utils/_startTestEnv'

test.describe('Menu Item Divider', async () => {
    startTestEnv()
    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
                <rux-menu-item-divider>Item</rux-menu-item-divider>
            `
        )
        const menu = page.locator('rux-menu-item-divider')
        await expect(menu).toBeVisible()
        await expect(menu).toHaveClass('hydrated')
    })
})
