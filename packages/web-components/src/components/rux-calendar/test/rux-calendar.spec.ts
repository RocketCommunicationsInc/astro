import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Calendar', () => {
    test.describe('January', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-01-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for January', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows January as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('1')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day:not(.past-future-day)').first()
            const first = days.first()
            //First day of 2023-01 is a Sunday
            await expect(first).toHaveCSS('grid-column', '1 / auto')
        })
    })
    test.describe('February', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-02-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for February', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(28))
        })
        test('Shows February as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('2')
        })
        test('Days are in correct spot', async ({ page }) => {
            // First of Feb 2023 is a Wed
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
            await expect(firstDay).toHaveCSS('grid-column', '4 / auto')
        })
        test('Shows correct days for February during a leap year', async ({
            page,
        }) => {
            const leapTemp = `<rux-calendar id="leap" date-in="2024-02-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(leapTemp)
            const cal = page.locator('#leap')
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(29))
        })
    })
    test.describe('March', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-03-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for March', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows March as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('3')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(30))
        })
        test('Shows April as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('4')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows May as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('5')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(30))
        })
        test('Shows June as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('6')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows July as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('7')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows August as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('8')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(30))
        })
        test('Shows September as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('9')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows October as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('10')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(30))
        })
        test('Shows November as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('11')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-future-day)')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(31))
        })
        test('Shows December as month', async ({ page }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            await expect(monthPicker).toHaveValue('12')
        })
        test('Days are in correct spot', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
            await expect(firstDay).toHaveCSS('grid-column', '6 / auto')
        })
    })
    test.describe('Month picker', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)
        })
        test('Month picker shows correct month by default', async ({
            page,
        }) => {
            const monthPicker = page.locator('#month-picker').locator('select')
            const currentMonth = new Date(Date.now()).getMonth() + 1
            const selectValue = await monthPicker.inputValue()
            //assert that month picker displays the current month. compare vals
            expect(selectValue).toEqual(currentMonth.toString())
        })
        test('Month picker can change the month correctly', async ({
            page,
        }) => {
            // Choose december, test if days are in correct spot for december.
            //? This is kind of weird - when we reach 2024 this will fail because december will have it's days in different spots.
            const monthPicker = page.locator('#month-picker').locator('select')
            await monthPicker.selectOption('12')
            const selectValue = await monthPicker.inputValue()
            expect(selectValue).toEqual('12')
            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
            await expect(firstDay).toHaveCSS('grid-column', '6 / auto')
        })
    })
    test.describe('Year picker', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)
        })
        test('Year picker shows correct year by default', async ({ page }) => {
            const yearPicker = page.locator('#year-picker').locator('select')
            const currentYear = new Date(Date.now()).getFullYear()
            const yearValue = await yearPicker.inputValue()
            expect(yearValue).toEqual(currentYear.toString())
        })
        test('Year picker can correctly switch the calendar year', async ({
            page,
        }) => {
            const yearPicker = page.locator('#year-picker').locator('select')
            await yearPicker.selectOption('2030')
            const yearValue = await yearPicker.inputValue()
            expect(yearValue).toEqual('2030')
            const month = new Date(Date.now()).getMonth() + 1
            const newDate = new Date(`2030-${month}-01`)
            const dayOfWeek = newDate.getDay() + 1

            const cal = page.locator('rux-calendar')
            const firstDay = cal
                .locator('rux-day:not(.past-future-day)')
                .first()
            await expect(firstDay).toHaveCSS(
                'grid-column',
                `${dayOfWeek} / auto`
            )
        })
    })
    test.describe('Month Arrows', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)
        })
        test('Forward arrow moves month forward 1', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const forwardArrow = cal.locator('#forward-month')
            const monthPicker = page.locator('#month-picker').locator('select')
            const currDate = new Date(Date.now())
            const currMonth = currDate.getMonth() + 1
            let monthPickerValue = await monthPicker.inputValue()
            expect(monthPickerValue).toBe(currMonth.toString())
            await forwardArrow.click()
            await page.waitForChanges()
            monthPickerValue = await monthPicker.inputValue()
            expect(monthPickerValue).toBe((currMonth + 1).toString())
        })
        test('Backward arrow moves month backward 1', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const backwardArrow = cal.locator('#backward-month')
            const monthPicker = page.locator('#month-picker').locator('select')
            const currDate = new Date(Date.now())
            const currMonth = currDate.getMonth() + 1
            let monthPickerValue = await monthPicker.inputValue()
            expect(monthPickerValue).toBe(currMonth.toString())
            await backwardArrow.click()
            await page.waitForChanges()
            monthPickerValue = await monthPicker.inputValue()
            expect(monthPickerValue).toBe((currMonth - 1).toString())
        })
    })
    test.describe('Date in prop', () => {
        test('Date in sets calendar date', async ({ page }) => {
            const template = `<rux-calendar date-in="2023-01-01"></rux-calendar>`
            page.setContent(template)
            const monthPicker = page.locator('#month-picker').locator('select')
            const yearPicker = page.locator('#year-picker').locator('select')
            const monthVal = await monthPicker.inputValue()
            const yearVal = await yearPicker.inputValue()
            expect(monthVal).toBe('1')
            expect(yearVal).toBe('2023')
        })
        test('Date in prop can be dynamically changed', async ({ page }) => {
            const template = `<rux-calendar></rux-calendar>`
            page.setContent(template)

            const newDate = new Date(Date.now())
            const month = newDate.getMonth() + 1
            const year = newDate.getFullYear()
            const monthPicker = page.locator('#month-picker').locator('select')
            const yearPicker = page.locator('#year-picker').locator('select')
            let monthVal = await monthPicker.inputValue()
            let yearVal = await yearPicker.inputValue()
            expect(monthVal).toBe(month.toString())
            expect(yearVal).toBe(year.toString())
            const cal = page.locator('rux-calendar')
            await cal.evaluate((cal) =>
                cal.setAttribute('date-in', '2023-01-01')
            )
            await page.waitForChanges()
            monthVal = await monthPicker.inputValue()
            yearVal = await yearPicker.inputValue()
            expect(monthVal).toBe('1')
            expect(yearVal).toBe('2023')
        })
    })
})

//* Need to test:
/*
  * Date changes successfully with date-in prop
  * Date in prop can dynamically change and year/month/days will update correclty
  * date-in can recieve an epoch num date or a date string
  * the rux-day that is today IRL gets the today class. That class does not exisit on other months/years
  * Each month has the previous days, current month days, and next month days in the correct location
  *   * as well as correct amount of prev, curr and next days.

*/
