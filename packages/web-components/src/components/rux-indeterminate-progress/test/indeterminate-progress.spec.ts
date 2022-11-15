import { test, expect } from '../../../../tests/utils/_astro-fixtures'
test.describe('Indeterminate Progress', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-indeterminate-progress></rux-indeterminate-progress>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
