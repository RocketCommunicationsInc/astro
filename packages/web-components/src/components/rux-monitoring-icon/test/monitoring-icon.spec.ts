import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Monitoring-icon', () => {
    test('it throws an error with an invalid status', async ({ page }) => {
        const template = `
        <rux-monitoring-icon status="nope"></rux-monitoring-icon>
        `
        await page.setContent(template)
        page.on('console', (msg) => {
            expect(msg).toEqual('valid status required')
        })
    })
})
