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
        //month might need off by 1 support
        const currDayString = `${currentDay.getFullYear()}/01/${currentDay.getMonth()}`
        //! Need to decide what format we want the date values to be. YYYY-MM-DD? YYY/MM/DD? YYY/DD/MM ?
        //! prob whatever safari supports, I think that is YYYY/DD/MM
        await expect(input).toHaveAttribute('value', `${currDayString}`)
    })
})
