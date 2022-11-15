import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Track', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `<rux-track></rux-track>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
