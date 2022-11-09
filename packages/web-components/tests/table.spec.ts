import { test, expect } from './utils/_astro-fixtures'

test.describe('Table', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-table/test/basic')
        await expect(page).toHaveScreenshot()
    })

    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-table>
                <rux-table-header>
                    <rux-table-header-row>                
                        <rux-table-header-cell>Current tag</rux-table-header-cell>                                            
                        <rux-table-header-cell>Original tag</rux-table-header-cell>
                        <rux-table-header-cell>Sensor</rux-table-header-cell>
                    </rux-table-header-row>
                </rux-table-header>
                <rux-table-body>
                    <rux-table-row selected="false">
                        <rux-table-cell>19999999</rux-table-cell>
                        <rux-table-cell>000011111</rux-table-cell>
                        <rux-table-cell>450</rux-table-cell>
                    </rux-table-row>
                        
                    <rux-table-row selected="false">
                        <rux-table-cell>19999999</rux-table-cell>
                        <rux-table-cell>000011111</rux-table-cell>
                        <rux-table-cell>450</rux-table-cell>
                    </rux-table-row>
                </rux-table-body>
            </rux-table>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})

/**
 * Need to test:
 * - Table wasn't being tested in Cypress at all. There isn't much to test.
 */
