import { test, expect } from './utils/_astro-fixtures'

test.describe('Container', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-container>Content</rux-container>
        `
        const el = await astroPage.load(template)

        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
