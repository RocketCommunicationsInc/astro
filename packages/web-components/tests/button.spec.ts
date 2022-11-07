import { test, expect } from './utils/_astro-fixtures'

test.describe('Button', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `<rux-button>Hello</rux-button>`
        const el = await astroPage.load(template)

        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

})
