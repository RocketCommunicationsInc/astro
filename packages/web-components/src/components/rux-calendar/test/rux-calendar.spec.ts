import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Calendar', () => {
    test.describe('January', () => {
        test.beforeEach(async ({ page }) => {
            const template = `<rux-calendar date-in="2023-01-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(template)
        })
        test('Shows correct days for January', async ({ page }) => {
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal
                .locator('rux-day:not(.past-day):not(.future-day)')
                .first()
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
                .first()
            await expect(firstDay).toHaveCSS('grid-column', '4 / auto')
        })
        test('Shows correct days for February during a leap year', async ({
            page,
        }) => {
            const leapTemp = `<rux-calendar id="leap" date-in="2024-02-01T00:00:00.000Z"></rux-calendar>`
            await page.setContent(leapTemp)
            const cal = page.locator('#leap')
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
            const days = cal.locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
                .locator('rux-day:not(.past-day):not(.future-day)')
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
        test('Year changes when backward arrow click and month is Jan', async ({
            page,
        }) => {
            //If going back a month when month is currently Jan, the year should change as well.
            const template = `<rux-calendar id="jan" date-in="01-01-2023"></rux-calendar>`
            await page.setContent(template)
            const cal = page.locator('#jan')
            const backwardArrow = cal.locator('#backward-month')
            let yearVal = await cal
                .locator('#year-picker')
                .locator('select')
                .inputValue()
            let monthVal = await cal
                .locator('#month-picker')
                .locator('select')
                .inputValue()
            expect(yearVal).toBe('2023')
            expect(monthVal).toBe('1')
            await backwardArrow.click()
            await page.waitForChanges()
            yearVal = await cal
                .locator('#year-picker')
                .locator('select')
                .inputValue()
            monthVal = await cal
                .locator('#month-picker')
                .locator('select')
                .inputValue()
            expect(yearVal).toBe('2022')
            expect(monthVal).toBe('12')
        })
        test('Year changes when forward arrow is clicked and month is Dec', async ({
            page,
        }) => {
            //If going forward a month when month is currently Dec, the year should change as well.
            const template = `<rux-calendar id="dec" date-in="12-01-2022"></rux-calendar>`
            await page.setContent(template)
            const cal = page.locator('#dec')
            const forwardArrow = cal.locator('#forward-month')
            let yearVal = await cal
                .locator('#year-picker')
                .locator('select')
                .inputValue()
            let monthVal = await cal
                .locator('#month-picker')
                .locator('select')
                .inputValue()
            expect(yearVal).toBe('2022')
            expect(monthVal).toBe('12')
            await forwardArrow.click()
            await page.waitForChanges()
            yearVal = await cal
                .locator('#year-picker')
                .locator('select')
                .inputValue()
            monthVal = await cal
                .locator('#month-picker')
                .locator('select')
                .inputValue()
            expect(yearVal).toBe('2023')
            expect(monthVal).toBe('1')
        })
    })
    test.describe('Date in prop', () => {
        test('Date in sets calendar date', async ({ page }) => {
            const template = `<rux-calendar date-in="2023-01-01"></rux-calendar>`
            await page.setContent(template)
            const monthPicker = page.locator('#month-picker').locator('select')
            const yearPicker = page.locator('#year-picker').locator('select')
            const monthVal = await monthPicker.inputValue()
            const yearVal = await yearPicker.inputValue()
            expect(monthVal).toBe('1')
            expect(yearVal).toBe('2023')
        })
        test('Date in prop can be dynamically changed', async ({ page }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)

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
                cal.setAttribute('date-in', '1997-04-27')
            )
            await page.waitForChanges()
            monthVal = await monthPicker.inputValue()
            yearVal = await yearPicker.inputValue()
            expect(monthVal).toBe('4')
            expect(yearVal).toBe('1997')
        })
        test('Date in prop can be an epoch/unix time', async ({ page }) => {
            //01-01-2023
            const template = `<rux-calendar date-in="1672531200000"></rux-calendar>`
            await page.setContent(template)
            const monthPicker = page.locator('#month-picker').locator('select')
            const yearPicker = page.locator('#year-picker').locator('select')
            let monthVal = await monthPicker.inputValue()
            let yearVal = await yearPicker.inputValue()
            expect(monthVal).toBe('1')
            expect(yearVal).toBe('2023')
        })
    })
    test.describe('Past/Future days', () => {
        test('Calendar always has the correct number of days', async ({
            page,
        }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)
            // Calendar should always have 42 days (7 days, 6 rows)
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(42))
        })
        test('Calendar fills in grid when switching years', async ({
            page,
        }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)
            // Calendar should always have 42 days (7 days, 6 rows)
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const yearPicker = page.locator('#year-picker').locator('select')
            await yearPicker.selectOption('2030')
            let yearVal = await yearPicker.inputValue()
            expect(yearVal).toBe('2030')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(42))
        })
        test('Calendar fills in grid when switching months', async ({
            page,
        }) => {
            const template = `<rux-calendar></rux-calendar>`
            await page.setContent(template)
            // Calendar should always have 42 days (7 days, 6 rows)
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day')
            const monthPicker = page.locator('#month-picker').locator('select')
            //Select a diff month then current month
            let monthPickerDefault:
                | string
                | number = await monthPicker.inputValue()
            monthPickerDefault = Number(monthPickerDefault)
            let setMonth = monthPickerDefault + 1
            if (new Date(Date.now()).getMonth() + 1 === monthPickerDefault) {
                if (monthPickerDefault === 12) setMonth = 1
            }

            await monthPicker.selectOption(setMonth.toString())
            let monthVal = await monthPicker.inputValue()
            expect(monthVal).toBe(setMonth.toString())
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(42))
        })
        //? Don't know how extensive we want to get - tests would need to be pretty specific for monht/year combos
        test('Month has correct number of past and future days', async ({
            page,
        }) => {
            const template = `<rux-calendar date-in="03-01-2023"></rux-calendar>`
            await page.setContent(template)
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day.future-day, rux-day.past-day')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(11))
        })
        test('Leap year has correct number of past/future days', async ({
            page,
        }) => {
            const template = `<rux-calendar date-in="02-01-2024"></rux-calendar>`
            await page.setContent(template)
            const cal = page.locator('rux-calendar')
            const days = cal.locator('rux-day.future-day, rux-day.past-day')
            await days
                .evaluateAll((days) => {
                    return days.length
                })
                .then((len) => expect(len).toEqual(13))
        })
    })
    test.describe('Min and max dates', () => {
        test('Year picker fills in only years between min and max dates', async ({
            page,
        }) => {
            const template = `<rux-calendar date-in="01-01-2023" max="03-01-2023" min="12-01-2022"></rux-calendar>`
            await page.setContent(template)
            //year picker should only have 2023 and 2022
            const yearPicker = page.locator('#year-picker').locator('select')
            const options = await yearPicker.locator('option').all()
            expect(options.length).toBe(2)
        })
    })
    test('Calendar value gets updated when a date is selected', async ({
        page,
    }) => {
        const template = `<rux-calendar date-in="01-01-2023"></rux-calendar>`
        await page.setContent(template)
        const cal = page.locator('rux-calendar')
        const time = new Date('01-01-2023')
        await expect(cal).not.toHaveAttribute('value', '')
        const dayToSelect = page.getByText('1', { exact: true }).first()
        await dayToSelect.click()
        await expect(cal).toHaveAttribute('value', time.toISOString())
    })
})
