import { test, expect } from './utils/_astro-fixtures'

test.describe('Checkbox-group', () => {

    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-checkbox-group>
                <rux-checkbox>one</rux-checkbox>
                <rux-checkbox>two</rux-checkbox>
                <rux-checkbox>three</rux-checkbox>
            </rux-checkbox-group>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    test('it sets label', async ({ astroPage }) => {
        const template = `
            <rux-checkbox-group label="hello"></rux-checkbox-group>
        `
        const el = await astroPage.load(template)

        await expect(el).toBeVisible()
        await expect(el).toHaveText('hello')
    })

    test('it renders help text', async ({ astroPage }) => {
        const template = `
            <rux-checkbox-group help-text="Help text!"></rux-checkbox-group>
        `
        
        const el = await astroPage.load(template)
        await expect(el).toContainText('Help text!')
    })
})
