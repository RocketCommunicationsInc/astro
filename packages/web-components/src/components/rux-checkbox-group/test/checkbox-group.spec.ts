import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Checkbox-group', () => {
    test('it sets label', async ({ page }) => {
        const template = `
            <rux-checkbox-group label="hello"></rux-checkbox-group>
        `
        await page.setContent(template)
        const el = await page.locator('rux-checkbox-group')

        await expect(el).toBeVisible()
        await expect(el).toHaveText('hello')
    })

    test('it renders help text', async ({ page }) => {
        const template = `
            <rux-checkbox-group help-text="Help text!"></rux-checkbox-group>
        `

        await page.setContent(template)
        const el = await page.locator('rux-checkbox-group')
        await expect(el).toContainText('Help text!')
    })
})
