import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Global status bar', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `<rux-global-status-bar></rux-global-status-bar>`
        const el = await astroPage.load(template)
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders app meta', async ({ astroPage }) => {
        const template = `
            <rux-global-status-bar app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0"></rux-global-status-bar>
        `
        const el = await astroPage.load(template)
        await expect(el).toContainText('App State')
        await expect(el).toContainText('Username')
        await expect(el).toContainText('ASTRO')
        await expect(el).toContainText('Test App Name')
        await expect(el).toContainText('test v1.0')
    })
    test('it renders with icon, app meta and slotted content', async ({
        astroPage,
    }) => {
        const template = `
            <rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0">
                <div>Tab links<div>
                <button slot="right-side">Emergency shut off</button>
            </rux-global-status-bar>
        `
        const el = await astroPage.load(template)
        const slottedButton = el.locator('button')

        await expect(el).toHaveClass('hydrated')
        await expect(slottedButton).toHaveAttribute('slot', 'right-side')
    })
    /**
     * Need to test:
     * - Attributes
     * - It can render other comps, ie clock?
     * -
     */
})
