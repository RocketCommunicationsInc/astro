import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Pop up', async () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-pop-up-menu id="popup-menu-1" open>
        <rux-menu-item>Item 1</rux-menu-item>
        <rux-menu-item-divider></rux-menu-item-divider>
        <rux-menu-item value="2"
            >Item 2 with an exceedingly long title that overruns
            the width</rux-menu-item
        >
        <rux-menu-item disabled
            >Item 3 is disabled</rux-menu-item
        >
        <rux-menu-item value="Item 4"
            >Item 4 has a string value</rux-menu-item
        >
        <rux-menu-item href="https://www.astrouxds.com"
            >Item 5 is an anchor</rux-menu-item
        >
    </rux-pop-up-menu>
        `
        )
        const el = page.locator('rux-pop-up-menu')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    /**
     * Need to test:
     *  - 7.0 functionality. All tests from 6.0 are useless.
     *      -
     */
})
