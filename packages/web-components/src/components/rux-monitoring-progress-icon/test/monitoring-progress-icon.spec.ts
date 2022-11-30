import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring Progress Icon', () => {
    test('it applies custom range arrays properly', async ({ page }) => {
        const template = `
            <rux-monitoring-progress-icon
            progress=675
            min="100"
            max="1100"
            label="Label"
            sublabel="sublabel"
            notifications="345678"
            ></rux-monitoring-progress-icon>
            `
        await page.setContent(template)
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
        const template = `
            <rux-monitoring-progress-icon></rux-monitoring-progress-icon>
            `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const monitoringProgressIcon = document.querySelector('rux-monitoring-progress-icon');
            const range = []
            monitoringProgressIcon.range = range
            monitoringProgressIcon.progress = 50

            `,
        })
        const el = await page.locator('rux-monitoring-progress-icon')
        const statusIcon = await el.locator('rux-status').first()
        await expect(statusIcon).toHaveAttribute('status', 'off')
    })
    test('changes progress value to equal max if passed in progress is greater', async ({
        page,
    }) => {
        const template = `
            <rux-monitoring-progress-icon min="0" max="100" progress="101"></rux-monitoring-progress-icon>
            `
        await page.setContent(template)
        const el = await page.locator('rux-monitoring-progress-icon')
        const max = await el.getAttribute('max')
        const prog = await el.getAttribute('progress')
        expect(max).toEqual(prog)
    })
    test('changes progress value to equal min if passed in progress is less', async ({
        page,
    }) => {
        const template = `
            <rux-monitoring-progress-icon min="0" max="100" progress="-10"></rux-monitoring-progress-icon>
            `
        await page.setContent(template)
        const el = page.locator('rux-monitoring-progress-icon')
        const min = await el.getAttribute('min')
        const prog = await el.getAttribute('progress')
        expect(min).toEqual(prog)
    })
})
