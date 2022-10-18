import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Container', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-container
                style="width: 840px; margin: auto; --body-padding: 0"
            >
                <div slot="header">Parent container title</div>
                <div slot="tab-bar">
                    <rux-tabs id="tab-set-id-1" small>
                        <rux-tab id="tab-id-1">Tab 1</rux-tab>
                        <rux-tab id="tab-id-2">Tab 2</rux-tab>
                        <rux-tab id="tab-id-3" disabled=""
                            >Tab 3 (disabled)
                        </rux-tab>
                    </rux-tabs>
                </div>
                <div slot="toolbar">
                    <rux-slider></rux-slider>
                </div>

                <div>
                    <rux-tab-panels aria-labelledby="tab-set-id-1">
                        <rux-tab-panel aria-labelledby="tab-id-1">
                            <rux-table>
                                <rux-table-header>
                                    <rux-table-header-row>
                                        <rux-table-header-cell>
                                            Header text
                                        </rux-table-header-cell>
                                        <rux-table-header-cell>
                                            Header text
                                        </rux-table-header-cell>
                                        <rux-table-header-cell>
                                            Header text
                                        </rux-table-header-cell>
                                        <rux-table-header-cell>
                                            Header text
                                        </rux-table-header-cell>
                                    </rux-table-header-row>
                                </rux-table-header>
                                <rux-table-body>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                    <rux-table-row>
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                        <rux-table-cell
                                            >Table text</rux-table-cell
                                        >
                                    </rux-table-row>
                                </rux-table-body>
                            </rux-table>
                        </rux-tab-panel>
                        <rux-tab-panel aria-labelledby="tab-id-2"
                            >Tab 2 HTML content</rux-tab-panel
                        >
                        <rux-tab-panel aria-labelledby="tab-id-3"
                            >Tab 3 HTML content</rux-tab-panel
                        >
                    </rux-tab-panels>
                </div>
                <div slot="footer">
                    <rux-button>Primary Button</rux-button>
                </div>
            </rux-container>
        `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-container').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
