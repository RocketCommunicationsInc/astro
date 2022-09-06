import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Table', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-table>
        <rux-table-header>
            <rux-table-header-row>                
                        <rux-table-header-cell>Current tag</rux-table-header-cell>                                            
                        <rux-table-header-cell>Original tag</rux-table-header-cell>
                        <rux-table-header-cell>Sensor</rux-table-header-cell>
                        <rux-table-header-cell>ASTAT</rux-table-header-cell>
                        <rux-table-header-cell>Obs time</rux-table-header-cell>
                        <rux-table-header-cell>Ob type</rux-table-header-cell>
                        <rux-table-header-cell>Az/Rt asc</rux-table-header-cell>
                        <rux-table-header-cell>El/Dec</rux-table-header-cell>                    
                        <rux-table-header-cell>Range</rux-table-header-cell>
                        <rux-table-header-cell>Range rate</rux-table-header-cell>                    
            </rux-table-header-row>
        </rux-table-header>
        <rux-table-body>
            
                    <rux-table-row selected="false">
                        <rux-table-cell>19999999</rux-table-cell>
                        <rux-table-cell>000011111</rux-table-cell>
                        <rux-table-cell>450</rux-table-cell>
                        <rux-table-cell>FULL</rux-table-cell>
                        <rux-table-cell>2020 158 01:23:45:678</rux-table-cell>
                        <rux-table-cell>OBTYPE_5</rux-table-cell>
                        <rux-table-cell>150</rux-table-cell>
                        <rux-table-cell>3500</rux-table-cell>
                        <rux-table-cell>7500</rux-table-cell>
                        <rux-table-cell>100</rux-table-cell>
                    </rux-table-row>
                
                    <rux-table-row selected="false">
                        <rux-table-cell>19999999</rux-table-cell>
                        <rux-table-cell>000011111</rux-table-cell>
                        <rux-table-cell>450</rux-table-cell>
                        <rux-table-cell>FULL</rux-table-cell>
                        <rux-table-cell>2020 158 01:23:45:678</rux-table-cell>
                        <rux-table-cell>OBTYPE_5</rux-table-cell>
                        <rux-table-cell>150</rux-table-cell>
                        <rux-table-cell>3500</rux-table-cell>
                        <rux-table-cell>7500</rux-table-cell>
                        <rux-table-cell>100</rux-table-cell>
                    </rux-table-row>
                </rux-table-body>
            </rux-table>
        `
        )
        const el = page.locator('rux-table')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})

/**
 * Need to test:
 * - Table wasn't being tested in Cypress at all. There isn't much to test.
 */
