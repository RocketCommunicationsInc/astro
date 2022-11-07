import { test, expect } from './utils/_astro-fixtures'

test.describe('Button Group', () => {

    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-button-group>
                <rux-button>Cancel</rux-button>
                <rux-button>Confirm</rux-button>
            </rux-button-group>
        `
        const el = await astroPage.load(template);
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
