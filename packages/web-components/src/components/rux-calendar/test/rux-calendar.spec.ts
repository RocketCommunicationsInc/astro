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
            await expect(page.getByText('January')).toBeVisible()
        })
        // Need to test that the days are put under the correct heading. ie, if the first is a Monday, it's under Monday not Tuesday
        test('Days are in correct spot', async ({ page }) => {
            //grid-column: 1 === SUN
            //First of Jan is a Sun
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '1 / auto')
        })
    })
    test.describe('February', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-02-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for February', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(28)
        })
        test('Shows February as month', async ({ page }) => {
            await expect(page.getByText('February')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            // First of Feb 2023 is a Wed
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '4 / auto')
        })
        test('Shows correct days for February during a leap year', async ({
            page,
        }) => {
            const leapTemp = `<rux-calendar id="leap" date-in="2024-02-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(leapTemp)
            const cal = page.locator('#leap')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(29)
        })
    })
    test.describe('March', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-03-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for March', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows March as month', async ({ page }) => {
            await expect(page.getByText('March')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '4 / auto')
        })
    })
    test.describe('April', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-04-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for April', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(30)
        })
        test('Shows April as month', async ({ page }) => {
            await expect(page.getByText('April')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '7 / auto')
        })
    })
    test.describe('May', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-05-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for May', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows May as month', async ({ page }) => {
            await expect(page.getByText('May')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '2 / auto')
        })
    })
    test.describe('June', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-06-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for June', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(30)
        })
        test('Shows June as month', async ({ page }) => {
            await expect(page.getByText('June')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '5 / auto')
        })
    })
    test.describe('July', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-07-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for July', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows July as month', async ({ page }) => {
            await expect(page.getByText('July')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '7 / auto')
        })
    })
    test.describe('August', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-08-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for August', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows August as month', async ({ page }) => {
            await expect(page.getByText('August')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '3 / auto')
        })
    })
    test.describe('September', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-09-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for September', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(30)
        })
        test('Shows September as month', async ({ page }) => {
            await expect(page.getByText('September')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '6 / auto')
        })
    })
    test.describe('October', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-10-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for October', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows October as month', async ({ page }) => {
            await expect(page.getByText('October')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '1 / auto')
        })
    })
    test.describe('November', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-11-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for November', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(30)
        })
        test('Shows November as month', async ({ page }) => {
            await expect(page.getByText('November')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '4 / auto')
        })
    })
    test.describe('December', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-12-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for December', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const totalDays = await days.evaluateAll((days) => days.length)
            expect(totalDays).toEqual(31)
        })
        test('Shows December as month', async ({ page }) => {
            await expect(page.getByText('December')).toBeVisible()
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal.locator('rux-day').first()
            await expect(firstDay).toHaveCSS('grid-column', '6 / auto')
        })
    })
})
