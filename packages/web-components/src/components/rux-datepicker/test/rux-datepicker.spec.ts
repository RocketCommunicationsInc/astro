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
        let currentMonth: string | number =
            new Date(Date.now()).getUTCMonth() + 1 > 12
                ? 1
                : new Date(Date.now()).getUTCMonth() + 1
        const currentYear = new Date(Date.now()).getUTCFullYear()
        let todayNum: string | number = new Date(Date.now()).getUTCDate()
        if (todayNum < 9) {
            todayNum = '0' + todayNum
        }
        if (currentMonth < 10) {
            currentMonth = '0' + currentMonth
        }

        const icon = page.locator('rux-icon').first()
        const input = page.locator('rux-input').locator('#rux-input-1')
        const days = await page.locator('rux-day').all()
        let dayToClick: any
        days.forEach(async (day) => {
            let inner = await day.innerText()
            if (Number(inner) === todayNum) {
                dayToClick = day
            }
        })
        await expect(input).toHaveValue('')
        await icon.click()
        expect(dayToClick).toBeTruthy()
        await dayToClick!.click()
        await expect(input).toHaveValue(
            `${currentYear}-${currentMonth}-${todayNum}`
        )
    })
})
