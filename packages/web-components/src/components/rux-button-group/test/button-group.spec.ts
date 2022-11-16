import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Button Group', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-button-group>
                <rux-button>Cancel</rux-button>
                <rux-button>Confirm</rux-button>
            </rux-button-group>
        `
        await page.setContent(template)
        const el = await page.locator('rux-button-group')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
