import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Icon', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-icon icon="altitude"></rux-icon>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/
