import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'
//import { RuxMonitoringIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-icon'


test.describe('Monitoring-icon', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-monitoring-icon/test/basic')
        await expect(page).toHaveScreenshot()
    })

    startTestEnv()

    
    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-monitoring-icon></rux-monitoring-icon>
    `
        )
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
