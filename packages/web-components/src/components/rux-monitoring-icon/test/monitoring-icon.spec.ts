import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring-icon', () => {
    test('it renders', async ({ page }) => {
        const template = `
        <rux-monitoring-icon></rux-monitoring-icon>
    `
        await page.setContent(template)
        const el = page.locator('rux-monitoring-icon').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    //TODO this is code from Jest that needs to be recreated in Playwright
    // test('it errors with invalid status', async ({ }) => {
    //     const monitorIcon = new RuxMonitoringIcon()

    //     expect(() => {
    //         monitorIcon.validateStatus('')
    //     }).toThrowError('valid status required')
    // })
})
/*
    Need to test: 
    - it sets attributes:
        - status="normal"
        -data-dashlane-observed="true"
        -errors with invalid status
*/
