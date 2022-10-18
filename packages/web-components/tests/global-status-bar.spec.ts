import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Global status bar', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-global-status-bar></rux-global-status-bar>
        `
        )
        const el = page.locator('rux-global-status-bar')
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders with icon and app meta', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0"></rux-global-status-bar>
            `
        )
        const el = page.locator('rux-global-status-bar')
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders with icon, app meta and slotted content', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0">
                <div>Tab links<div>
                <button slot="right-side">Emergency shut off</button>
            </rux-global-status-bar>
            `
        )
        const el = page.locator('rux-global-status-bar')
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
