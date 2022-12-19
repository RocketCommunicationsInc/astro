import { test, expect } from '../../../../tests/utils/_astro-fixtures'
test.describe('Ruler', () => {
    test('it renders', async ({ page }) => {
        const template = `<rux-ruler></rux-ruler>`
        await page.setContent(template)
        const el = page.locator('rux-ruler').first()
        await expect(el).toHaveClass('hydrated')
    })
})
