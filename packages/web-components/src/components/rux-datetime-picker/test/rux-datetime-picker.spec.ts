import { expect, test } from '../../../../tests/utils/_astro-fixtures'

test.describe('Datepicker', () => {
    test('it renders', async ({ page }) => {
        const template = `<rux-datetime-picker></rux-datetime-picker>`
        await page.setContent(template)
        const el = page.locator('rux-datetime-picker')
        await expect(el).toBeVisible()
    })
})
test.describe('Datepicker methods', () => {
    test('should log a warning for invalid ISO strings', async ({ page }) => {
        const invalidIsoStrings = [
            'invalid-date',
            '1',
            '13',
            '133',
            'x',
            'Mon Apr 07 2025 11:59:24 GMT-0600 (Mountain Daylight Time)',
            'YYYY-MM-DD',
            'YYYY-MM-DDTHH:mm:ss.SSSZ',
        ]

        const warnings: string[] = []
        page.on('console', (msg) => {
            if (
                msg.type() === 'warning' &&
                msg.text().toString().includes('rux-datetime-picker')
            ) {
                warnings.push(msg.text())
            }
        })

        for (const isoString of invalidIsoStrings) {
            await page.setContent(`
            <rux-datetime-picker value="${isoString}"></rux-datetime-picker>
        `)
        }
        expect(warnings.length).toBe(invalidIsoStrings.length)
    })

    test('should not log a warning for valid ISO strings', async ({ page }) => {
        const validIsoStrings = [
            '2025',
            '2025-01',
            '2025-01-01',
            '2025-01-01T12Z',
            '2025-01-01T12:34Z',
            '2025-01-01T12:34:56Z',
            '2025-01-01T12:34:56.789Z',
            '2025-056T17:25:24.211Z',
            '2025-056T17:25:24Z',
            '2025-056T17:25Z',
            '2025-056T17Z',
            '2025-056',
        ]

        const warnings: string[] = []
        page.on('console', (msg) => {
            if (
                msg.type() === 'warning' &&
                msg.text().toString().includes('rux-datetime-picker')
            ) {
                warnings.push(msg.text())
            }
        })

        for (const isoString of validIsoStrings) {
            await page.setContent(`
            <rux-datetime-picker value="${isoString}"></rux-datetime-picker>
        `)
        }

        expect(warnings.length).toBe(0)
    })
})
