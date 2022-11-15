import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Status', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-status status="standby"></rux-status>
        `
        const el = await astroPage.load(template)

        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
