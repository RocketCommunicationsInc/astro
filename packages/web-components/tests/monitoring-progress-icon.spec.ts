import { test, expect } from '@playwright/test'
import { setBodyContent, startTestEnv } from './utils/_startTestEnv'

test.describe('Monitoring Progress Icon', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-monitoring-progress-icon
            progress=70
            max="100"
            label="Label"
            sublabel="sublabel"
            notifications="345678"
            ></rux-monitoring-progress-icon>
            `
        )
        const el = page.locator('rux-monitoring-progress-icon')
        await expect(el).toHaveClass('hydrated')
    })
    test('it applies custom range arrays properly', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-monitoring-progress-icon
            progress=675
            min="100"
            max="1100"
            label="Label"
            sublabel="sublabel"
            notifications="345678"
            ></rux-monitoring-progress-icon>
            `
        )
        await page.addScriptTag({
            content: `
            const monitoringProgressIcon = document.querySelector('rux-monitoring-progress-icon');
            const range = [
                {
                    threshold: 300,
                    status: 'standby',
                },
                {
                    threshold: 775,
                    status: 'normal',
                },
                {
                    threshold: 1100,
                    status: 'serious',
                }
            ]
            monitoringProgressIcon.range = range
            monitoringProgressIcon.progress = 875

            `,
        })
        const el = page.locator('rux-monitoring-progress-icon')
        const statusIcon = el.locator('rux-status').first()
        await expect(statusIcon).toHaveAttribute('status', 'serious')
    })
    test('it works with empty range array', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-monitoring-progress-icon></rux-monitoring-progress-icon>
            `
        )
        await page.addScriptTag({
            content: `
            const monitoringProgressIcon = document.querySelector('rux-monitoring-progress-icon');
            const range = []
            monitoringProgressIcon.range = range
            monitoringProgressIcon.progress = 50

            `,
        })
        const el = page.locator('rux-monitoring-progress-icon')
        const statusIcon = el.locator('rux-status').first()
        await expect(statusIcon).toHaveAttribute('status', 'caution')
    })
    test('changes progress value to equal max if passed in progress is greater', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-monitoring-progress-icon min="0" max="100" progress="101"></rux-monitoring-progress-icon>
            `
        )
        //Timeout needed so page can render and swap out over-large progress value for the max
        await page.waitForTimeout(1100)
        const el = page.locator('rux-monitoring-progress-icon')
        const max = await el.getAttribute('max')
        const prog = await el.getAttribute('progress')
        expect(max).toEqual(prog)
    })
    test('changes progress value to equal min if passed in progress is less', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-monitoring-progress-icon min="0" max="100" progress="-10"></rux-monitoring-progress-icon>
            `
        )
        //Timeout needed so page can render and swap out over-large progress value for the max
        await page.waitForTimeout(1100)
        const el = page.locator('rux-monitoring-progress-icon')
        const min = await el.getAttribute('min')
        const prog = await el.getAttribute('progress')
        expect(min).toEqual(prog)
    })
})
