import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Tabs', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <div style="display: flex; flex-flow: column">
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-3">Tab 3</rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-1">
                    <rux-tab-panel aria-labelledby="tab-id-1">
                        <div
                            style="
                                padding: 1vw;
                                border: rgba(255, 255, 255, 0.15) dashed 1px;
                                font-family: monospace;
                            "
                        >
                            <pre><<span>!-- Tab 1 HTML content --</span>></pre>
                        </div>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2">
                        <div
                            style="
                                padding: 1vw;
                                border: rgba(255, 255, 255, 0.15) dashed 1px;
                                font-family: monospace;
                            "
                        >
                            <pre><<span>!-- Tab 2 HTML content --</span>></pre>
                        </div>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-3">
                        <div
                            style="
                                padding: 1vw;
                                border: rgba(255, 255, 255, 0.15) dashed 1px;
                                font-family: monospace;
                            "
                        >
                            <pre><<span>!-- Tab 3 HTML content --</span>></pre>
                        </div>
                    </rux-tab-panel>
                </rux-tab-panels>
            </div>
        `
        )
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-tabs').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('first tab is selected by default', async ({ page }) => {
        //Arrange
        const tab1 = page.locator('#tab-id-1')
        const tab2 = page.locator('#tab-id-2')

        // Assert
        await expect(tab1).toHaveAttribute('selected', '')
        await tab2
            .evaluate((e) => {
                return e.hasAttribute('selected')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })
    test('selects tab when user clicks', async ({ page }) => {
        //Arrange
        const tab1 = page.locator('#tab-id-1')
        const tab2 = page.locator('#tab-id-2')
        const tab1Child = tab1.locator('.rux-tab')
        const tab2Child = tab2.locator('.rux-tab')

        //Act
        await tab2Child.click({ force: true })

        //Assert
        await expect(tab2).toHaveAttribute('selected', '')
        await tab1
            .evaluate((e) => {
                return e.hasAttribute('selected')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })

        //Act
        await tab1Child.click({ force: true })

        //Assert
        await expect(tab1).toHaveAttribute('selected', '')
    })
    test('shows correct panel when its tab is clicked', async ({ page }) => {
        //Arrange
        const ruxTabPanel1 = page.locator('rux-tab-panel').nth(0)
        const ruxTabPanel2 = page.locator('rux-tab-panel').nth(1)
        const ruxTabPanel3 = page.locator('rux-tab-panel').nth(2)
        const tabId2 = page.locator('#tab-id-2')
        const tab2Child = tabId2.locator('.rux-tab')

        //Assert
        await expect(ruxTabPanel1).not.toHaveClass('hydrated hidden')
        await expect(ruxTabPanel2).toHaveClass('hydrated hidden')
        await expect(ruxTabPanel3).toHaveClass('hydrated hidden')

        //Act
        await tab2Child.click({ force: true })

        //Assert
        await expect(ruxTabPanel1).toHaveClass('hydrated hidden')
        await expect(ruxTabPanel2).not.toHaveClass('hydrated hidden')
        await expect(ruxTabPanel3).toHaveClass('hydrated hidden')
    })
})
/*
    Need to test: 
    
*/
