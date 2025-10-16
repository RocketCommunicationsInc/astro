import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Log', () => {
    test('it sets filter', async ({ page }) => {
        const template = `
            <rux-log id="testing"></rux-log>
            `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const log = document.getElementById('testing')
            const data = [
                {
                    timestamp: new Date(1557503698781),
                    status: 'off',
                    message: 'Antenna DGS 1 went offline.',
                },
                {
                    timestamp: new Date(1557503698781),
                    status: 'serious',
                    message: 'USA-177 experienced solar panel misalignment.',
                },
                {
                    timestamp: new Date(1557503698781),
                    status: 'caution',
                    message: 'USA-168 suffered power degradation.',
                }
            ]

            log.data = data
            `,
        })

        const input = await page.waitForSelector('rux-input')
        await input.click({ force: true })
        await input.type('USA')
        await page.keyboard.press('Enter')

        const filterNotification = page.locator('.rux-log__notification')

        await expect(filterNotification).toContainText(
            'A filter with USA is enabled. 1 of 3 records are currently hidden.'
        )
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/
