import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Datepicker', () => {
    test.beforeEach(async ({ page }) => {
        const template =
            '<div style="width: 200px; margin: auto;"><rux-datepicker></rux-datepicker></div>'
        await page.setContent(template)
    })
    test('Calendar pops up when calendar icon is clicked', async ({ page }) => {
        const icon = page.locator('rux-icon').first()
        const popUp = page.locator('rux-pop-up')
        await expect(popUp).not.toHaveAttribute('open', '')
        await icon.click()
        await expect(popUp).toHaveAttribute('open', '')
    })
    test('Calendar date selection is reflected in input', async ({ page }) => {
        const datepicker = page.locator('rux-datepicker')
        const input = datepicker.locator('.aux-input')
        const icon = page.locator('rux-icon').first()
        await icon.click()
        const cal = datepicker.locator('rux-calendar')
        const day = await cal
            .locator('rux-day:not(.future-day):not(.past-day)')
            .first()
        await day.click()
        const currentDay = new Date(Date.now())
        const currDayString = `${currentDay.getFullYear()}-${
            currentDay.getMonth() + 1 < 10
                ? '0' + (currentDay.getMonth() + 1)
                : currentDay.getMonth() + 1
        }-01`

        await expect(input).toHaveAttribute('value', `${currDayString}`)
    })
    test('Input date selection is reflected in calendar', async ({ page }) => {
        const datepicker = page.locator('rux-datepicker')
        const input = datepicker.locator('.native-input')
        const icon = page.locator('rux-icon').first()
        //type date into input
        const inputDate = new Date(Date.now())

        await input.type(
            `${
                inputDate.getMonth() + 1
            }${inputDate.getDate()}${inputDate.getFullYear()}`
        )
        //open calendar
        await icon.click()
        //check if correct calendar day is selected
        const cal = datepicker.locator('rux-calendar')
        const selectedDay = cal.locator('[selected]')
        //selectedDay should have the text content of the day from inputDate
        const dayText = await selectedDay.innerText()
        expect(dayText).toBe(inputDate.getDate().toString())
    })
})
