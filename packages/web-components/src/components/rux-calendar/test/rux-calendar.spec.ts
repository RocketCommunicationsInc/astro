import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Calendar', () => {
    test.describe('January', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-01-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for January', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows January as month', async ({ page }) => {
            await expect(page.getByText('January'))
        })
    })
})
