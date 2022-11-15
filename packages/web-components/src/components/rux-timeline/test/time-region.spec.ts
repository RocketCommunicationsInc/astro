import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Time-region', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `<rux-time-region></rux-time-region>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
