import { expect, test } from '../../../../tests/utils/_astro-fixtures'

/**
 * Helper function to open calendar, since we'll be doing that a lot.
 * This will ensure the calendar is not open to start, click the calendar icon, and then ensure that it is open and return the calendar element.
 */
async function openCalendar(
    page: any,
    selector: string = 'rux-datetime-picker',
    isTestId: boolean = false
) {
    let dtp
    if (!isTestId) {
        dtp = await page.locator(selector)
    } else {
        dtp = await page.getByTestId(selector)
    }
    const calBtn = await dtp.locator('.calendar-icon')
    const calPopUp = await dtp.locator(`rux-pop-up`)
    await expect(calBtn).toBeVisible()
    // Ensure the calendar is initially closed
    await expect(calPopUp).not.toHaveAttribute('open', '')

    // Click the calendar button to open the calendar
    await calBtn.click()

    // Ensure the calendar is now open
    await expect(calPopUp).toHaveAttribute('open', '')

    return calPopUp
}

test.describe('Datepicker', () => {
    test('it renders', async ({ page }) => {
        const template = `<rux-datetime-picker></rux-datetime-picker>`
        await page.setContent(template)
        const el = page.locator('rux-datetime-picker')
        await expect(el).toBeVisible()
    })
    test('calendar opens when icon is clicked', async ({ page }) => {
        const template = `<rux-datetime-picker></rux-datetime-picker>`
        await page.setContent(template)
        const calendarPopup = await openCalendar(page)
        await expect(calendarPopup).toBeVisible()
    })
    test.describe('Copying and Pasting', () => {
        test.beforeEach(async ({ page }) => {
            const template = `
                <rux-datetime-picker data-testid="default"></rux-datetime-picker>
                <textarea data-testid="textarea"></textarea>
                <rux-datetime-picker data-testid="julian" julian-format></rux-datetime-picker>`
            await page.setContent(template)
        })
        test('Pasting in complete ISO strings works on default datepicker', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await expect(dp).toHaveAttribute('value', '')
            // Find the year input inside the datepicker
            const yearInput = await dp.locator('input.year')
            // Focus the year input to ensure it is ready for paste
            await yearInput.focus()
            // Simulate a paste event with clipboard data only if the input exists
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="default"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData(
                        'text/plain',
                        '2025-10-05T01:02:03.123Z'
                    )
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })

            // Now assert the value
            await expect(dp).toHaveAttribute(
                'value',
                '2025-10-05T01:02:03.123Z'
            )
        })
        test('Pasting in complete ISO strings works in Julian datepicker', async ({
            page,
        }) => {
            const dp = page.getByTestId('julian')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="julian"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData(
                        'text/plain',
                        '2025-278T01:02:03.123Z'
                    )
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute('value', '2025-278T01:02:03.123Z')
        })
        test('Pasting partial ISO strings works in default datepicker - YYYY', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="default"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '2025')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute(
                'value',
                '2025-01-01T00:00:00.000Z'
            )
        })
        test('Pasting partial ISO strings works in julian datepicker - YYYY', async ({
            page,
        }) => {
            const dp = page.getByTestId('julian')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="julian"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '2025')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute('value', '2025-001T00:00:00.000Z')
        })
        test('Pasting partial ISO strings works in julian datepicker - DDD', async ({
            page,
        }) => {
            const dp = page.getByTestId('julian')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="julian"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '278')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            //so that these tests don't break in 2026
            const currentYear = new Date().getUTCFullYear()
            await expect(dp).toHaveAttribute(
                'value',
                `${currentYear}-278T00:00:00.000Z`
            )
        })
        test('Pasting partial ISO strings works in default datepicker - DD', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="default"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '05')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            //so that these tests don't break in 2026
            const currentYear = new Date().getUTCFullYear()
            await expect(dp).toHaveAttribute(
                'value',
                `${currentYear}-05-01T00:00:00.000Z`
            )
        })
        test('Pasting partial ISO strings works in default datepicker - YYYY-DD', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="default"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '2025-05')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute(
                'value',
                `2025-05-01T00:00:00.000Z`
            )
        })
        test('Pasting partial ISO strings works in julian datepicker - YYYY-DDD', async ({
            page,
        }) => {
            const dp = page.getByTestId('julian')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="julian"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '2025-278')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute('value', `2025-278T00:00:00.000Z`)
        })
        test('Pasting partial ISO strings works in julian datepicker - YYYY-DD', async ({
            page,
        }) => {
            const dp = page.getByTestId('julian')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="julian"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '2025-05')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute('value', `2025-005T00:00:00.000Z`)
        })
        test('Pasting partial Julian ISO strings works in default datepicker - YYYY-DDD', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await expect(dp).toHaveAttribute('value', '')
            const yearInput = await dp.locator('input.year')
            await yearInput.focus()
            await page.evaluate(() => {
                const dp = document.querySelector('[data-testid="default"]')
                const input =
                    dp &&
                    dp.shadowRoot &&
                    dp.shadowRoot.querySelector('input.year')
                if (input) {
                    const clipboardData = new DataTransfer()
                    clipboardData.setData('text/plain', '2025-056')
                    const pasteEvent = new ClipboardEvent('paste', {
                        bubbles: true,
                        cancelable: true,
                        clipboardData,
                    })
                    input.dispatchEvent(pasteEvent)
                }
            })
            await expect(dp).toHaveAttribute(
                'value',
                `2025-02-25T00:00:00.000Z`
            )
        })
    })
    test.describe('datepicker inputs', () => {
        test.describe('year input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker max-year="3000" min-year="2000"></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('Year input only accepts valid values', async ({ page }) => {
                //Year input should only accept number characters.
                const dp = page.locator('rux-datetime-picker')
                const yearInput = dp.locator('input.year')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('E')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('+')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('2')
                await expect(yearInput).toHaveValue('2')
                await yearInput.type('025')
                await expect(yearInput).toHaveValue('2025')
            })
            test('Year input does not exceed max-year prop', async ({
                page,
            }) => {
                const dp = page.locator('rux-datetime-picker')
                const yearInput = dp.locator('input.year')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('4000')
                await expect(yearInput).toHaveValue('3000')
            })
            test('Year input does not go below min-year prop', async ({
                page,
            }) => {
                const dp = page.locator('rux-datetime-picker')
                const yearInput = dp.locator('input.year')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('1000')
                await expect(yearInput).toHaveValue('2000')
            })
        })
        test.describe('Month input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker max-year="3000" min-year="2000"></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('Month input only accepts valid characters', async ({
                page,
            }) => {
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                await expect(monthInput).toHaveValue('')
                await monthInput.type('E')
                await expect(monthInput).toHaveValue('')
                await monthInput.type('+ab-')
                await expect(monthInput).toHaveValue('')
                await monthInput.type('03')
                await expect(monthInput).toHaveValue('03')
            })
            test('Month input cannot be greater than 12', async ({ page }) => {
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                await expect(monthInput).toHaveValue('')
                await monthInput.type('13')
                await expect(monthInput).toHaveValue('12')
            })
            test('Month input cannot be 0', async ({ page }) => {
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                await expect(monthInput).toHaveValue('')
                await monthInput.type('00')
                await expect(monthInput).toHaveValue('01')
            })
            test('Month input auto completes when the first digit typed in is > 1', async ({
                page,
            }) => {
                //When typing in a num > 1 into the month input, the only valid number the month could be is
                //the num typed in with a padded 0. ie, 02, 03, ect.
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                await expect(monthInput).toHaveValue('')
                await monthInput.type('2')
                await expect(monthInput).toHaveValue('02')
                await monthInput.clear()
                await expect(monthInput).toHaveValue('')
                await monthInput.type('9')
                await expect(monthInput).toHaveValue('09')
            })
        })
        test.describe('Day Input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('Day input only accepts valid characters', async ({
                page,
            }) => {
                const dayInput = page.locator('rux-datetime-picker input.day')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('E')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('+-ejHo')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('12')
                await expect(dayInput).toHaveValue('12')
            })
            test('Day input value cannot exceed 31 if the month input does not have a value', async ({
                page,
            }) => {
                const dayInput = page.locator('rux-datetime-picker input.day')
                await dayInput.type('32')
                await expect(dayInput).toHaveValue('31')
            })
            test('Day input cannot exceed the amount of days in the month of the months input value', async ({
                page,
            }) => {
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                const dayInput = page.locator('rux-datetime-picker input.day')
                await expect(monthInput).toHaveValue('')
                await monthInput.type('04')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('31')
                await expect(dayInput).toHaveValue('30')
            })
            test('Day inputs max accounts for leap years', async ({ page }) => {
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                const dayInput = page.locator('rux-datetime-picker input.day')
                const yearInput = page.locator('rux-datetime-picker input.year')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('2024')
                await expect(yearInput).toHaveValue('2024')
                await expect(monthInput).toHaveValue('')
                await monthInput.type('02')
                await expect(monthInput).toHaveValue('02')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('30')
                await expect(dayInput).toHaveValue('29')
            })
            test('Day inputs max accounts for non-leap years', async ({
                page,
            }) => {
                const monthInput = page.locator(
                    'rux-datetime-picker input.month'
                )
                const dayInput = page.locator('rux-datetime-picker input.day')
                const yearInput = page.locator('rux-datetime-picker input.year')
                await expect(yearInput).toHaveValue('')
                await yearInput.type('2025')
                await expect(yearInput).toHaveValue('2025')
                await expect(monthInput).toHaveValue('')
                await monthInput.type('02')
                await expect(monthInput).toHaveValue('02')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('30')
                await expect(dayInput).toHaveValue('28')
            })
            test('Day input cannot be 00', async ({ page }) => {
                const dayInput = page.locator('rux-datetime-picker input.day')
                await expect(dayInput).toHaveValue('')
                await dayInput.type('00')
                await expect(dayInput).toHaveValue('01')
            })
        })
        test.describe('Hour input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('Hour input accepts only valid characters', async ({
                page,
            }) => {
                const hourInput = page.locator('rux-datetime-picker input.hour')
                await expect(hourInput).toHaveValue('')
                await hourInput.type('Eda+-_')
                await expect(hourInput).toHaveValue('')
                await hourInput.type('12')
                await expect(hourInput).toHaveValue('12')
            })
            test('Hour input cannot exceed 23', async ({ page }) => {
                const hourInput = page.locator('rux-datetime-picker input.hour')
                await expect(hourInput).toHaveValue('')
                await hourInput.type('24')
                await expect(hourInput).toHaveValue('23')
            })
        })
        test.describe('Minute input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('min input accepts only valid characters', async ({
                page,
            }) => {
                const minInput = page.locator('rux-datetime-picker input.min')
                await expect(minInput).toHaveValue('')
                await minInput.type('Eda+-_')
                await expect(minInput).toHaveValue('')
                await minInput.type('12')
                await expect(minInput).toHaveValue('12')
            })
            test('min input cannot exceed 59', async ({ page }) => {
                const minInput = page.locator('rux-datetime-picker input.min')
                await expect(minInput).toHaveValue('')
                await minInput.type('60')
                await expect(minInput).toHaveValue('59')
            })
            test('min input is auto focused after hour input value is filled', async ({
                page,
            }) => {
                const hourInput = page.locator('rux-datetime-picker input.hour')
                const minInput = page.locator('rux-datetime-picker input.min')
                await expect(minInput).toHaveValue('')
                await expect(hourInput).toHaveValue('')
                await hourInput.type('13')
                await expect(minInput).toBeFocused()
            })
        })
        test.describe('Seconds input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('sec input accepts only valid characters', async ({
                page,
            }) => {
                const secInput = page.locator('rux-datetime-picker input.sec')
                await expect(secInput).toHaveValue('')
                await secInput.type('Eda+-_')
                await expect(secInput).toHaveValue('')
                await secInput.type('12')
                await expect(secInput).toHaveValue('12')
            })
            test('sec input cannot exceed 59', async ({ page }) => {
                const secInput = page.locator('rux-datetime-picker input.sec')
                await expect(secInput).toHaveValue('')
                await secInput.type('60')
                await expect(secInput).toHaveValue('59')
            })
            test('sec input is auto focused after minute input value is filled', async ({
                page,
            }) => {
                const minInput = page.locator('rux-datetime-picker input.min')
                const secInput = page.locator('rux-datetime-picker input.sec')
                await expect(secInput).toHaveValue('')
                await expect(minInput).toHaveValue('')
                await minInput.type('13')
                await expect(secInput).toBeFocused()
            })
        })
        test.describe('Ms input', () => {
            test.beforeEach(async ({ page }) => {
                const template = `<rux-datetime-picker></rux-datetime-picker>`
                await page.setContent(template)
            })
            test('ms input accepts only valid characters', async ({ page }) => {
                const msInput = page.locator('rux-datetime-picker input.ms')
                await expect(msInput).toHaveValue('')
                await msInput.type('Eda+-_')
                await expect(msInput).toHaveValue('')
                await msInput.type('123')
                await expect(msInput).toHaveValue('123')
            })
            test('ms input is auto focused after seconds input value is filled', async ({
                page,
            }) => {
                const secInput = page.locator('rux-datetime-picker input.sec')
                const msInput = page.locator('rux-datetime-picker input.ms')
                await expect(msInput).toHaveValue('')
                await expect(secInput).toHaveValue('')
                await secInput.type('13')
                await expect(msInput).toBeFocused()
            })
        })
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

test.describe('Datepicker event emissions', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
        <div style="
                width: 350px;
                margin: 1rem auto;
                display: flex;
                gap: 1rem;
                flex-direction: column;
            ">
                <rux-datetime-picker label="Default" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040" data-testid="default"></rux-datetime-picker>
      <rux-datetime-picker label="Given Value" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040" data-testid="given-value" value="2025-04-15T12:12:12.222"></rux-datetime-picker>

    `
        await page.setContent(template)
    })
    test('Default datepicker emits single ruxchange event on clicking a day', async ({
        page,
    }) => {
        const defaultDp = page.getByTestId('default')
        const changeEvent = await page.spyOnEvent('ruxchange')
        await openCalendar(page, 'default', true)
        await defaultDp.locator('rux-day').first().click()
        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
    //* Commenting out ruxChange event tests for select menus - current design guidance dictates that
    //* The value does not change until a user selects a day.
    // test('Datepicker emits single ruxChange event when changing month via the select menu', async ({
    //     page,
    // }) => {
    //     const defaultDp = page.getByTestId('given-value')
    //     const changeEvent = await page.spyOnEvent('ruxchange')
    //     await openCalendar(page, 'given-value', true)
    //     await defaultDp.locator('select').first().selectOption('October')
    //     expect(changeEvent).toHaveReceivedEventTimes(1)
    // })
    // test('Datepicker emits single ruxChange event when changing year via the select menu', async ({
    //     page,
    // }) => {
    //     const defaultDp = page.getByTestId('given-value')
    //     const changeEvent = await page.spyOnEvent('ruxchange')
    //     await openCalendar(page, 'given-value', true)
    //     await defaultDp.locator('select').last().selectOption('2024')
    //     expect(changeEvent).toHaveReceivedEventTimes(1)
    // })
    test('Datepicker emits single ruxInput event on time change via arrows', async ({
        page,
    }) => {
        const inputEvent = await page.spyOnEvent('ruxinput')
        const dp = page.getByTestId('default')
        await openCalendar(page, 'default', true)

        //Test up arrow click on seconds input
        const secInput = dp.locator('.timepicker-sec input')
        const secArrowInc = dp.locator('.timepicker-sec .inc-arrow')
        await secInput.hover()
        await secArrowInc.click()
        expect(inputEvent).toHaveReceivedEventTimes(1)
    })
    test.describe('onInput', () => {
        test('datepicker emits onInput event when datepicker inputs are typed into', async ({
            page,
        }) => {
            const template = `<rux-datetime-picker></rux-datetime-picker>`
            await page.setContent(template)
            const inputEvent = await page.spyOnEvent('ruxinput')
            const dp = page.locator('rux-datetime-picker')
            const yearInput = dp.locator('input.year')
            const monthInput = dp.locator('input.month')
            const dayInput = dp.locator('input.day')
            const hourInput = dp.locator('input.hour')
            const minInput = dp.locator('input.min')
            const secInput = dp.locator('input.sec')
            const msInput = dp.locator('input.ms')
            await yearInput.type('2025')
            await expect(inputEvent).toHaveReceivedEventTimes(4)
            await expect(dp).toHaveAttribute('value', '2025')
            await monthInput.type('12')
            await expect(inputEvent).toHaveReceivedEventTimes(6)
            await expect(dp).toHaveAttribute('value', '2025-12')
            await dayInput.type('12')
            await expect(inputEvent).toHaveReceivedEventTimes(8)
            await expect(dp).toHaveAttribute('value', '2025-12-12')
            await hourInput.type('12')
            await expect(inputEvent).toHaveReceivedEventTimes(10)
            await expect(dp).toHaveAttribute('value', '2025-12-12T12Z')
            await minInput.type('12')
            await expect(inputEvent).toHaveReceivedEventTimes(12)
            await expect(dp).toHaveAttribute('value', '2025-12-12T12:12Z')
            await secInput.type('12')
            await expect(inputEvent).toHaveReceivedEventTimes(14)
            await expect(dp).toHaveAttribute('value', '2025-12-12T12:12:12Z')
            await msInput.type('333')
            await expect(inputEvent).toHaveReceivedEventTimes(17)
            await expect(dp).toHaveAttribute(
                'value',
                '2025-12-12T12:12:12.333Z'
            )
        })
        test('datepicker emits onInput event when time inputs are typed into', async ({
            page,
        }) => {
            await page.setContent(
                `<rux-datetime-picker value="2025-10-05T00:00:00.000Z" data-testid="default"></rux-datetime-picker>`
            )
            const dp = await page.locator('rux-datetime-picker')
            const inputEvent = await page.spyOnEvent('ruxinput')

            await openCalendar(page, 'default', true)
            //get hour input in time picker, type into it
            const hourInput = await dp.locator('.timepicker-hours input')
            await hourInput.type('12')
            await expect(inputEvent).toHaveReceivedEventTimes(2)
            await expect(dp).toHaveAttribute(
                'value',
                '2025-10-05T12:00:00.000Z'
            )
        })
    })
})
test.describe('Timepicker functionality', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
<div style="
width: 350px;
margin: 1rem auto;
display: flex;
gap: 1rem;
flex-direction: column;
">
<rux-datetime-picker data-testid="default"></rux-datetime-picker>
<rux-datetime-picker
data-testid="given-value" value="2025-04-15T12:12:12.222Z"></rux-datetime-picker>
<rux-datetime-picker data-testid="cycle-up" value="2025-01-05T23:59:59.999Z"></rux-datetime-picker>
</div>
`
        await page.setContent(template)
    })
    test.describe('Hour Input', () => {
        test('Hour input can have its time incremented via the up arrow icon', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            const hourInput = dp.locator('.timepicker-hours input')
            const hourArrowInc = dp.locator('.timepicker-hours .inc-arrow')
            await expect(hourInput).toHaveValue('00')
            await hourInput.hover()
            await hourArrowInc.click()
            await expect(hourInput).toHaveValue('01')
        })
        test('Hour input can have its time decremented via the down arrow icon', async ({
            page,
        }) => {
            // given value is 2025-04-15T12:12:12.222
            const dp = page.getByTestId('given-value')
            await openCalendar(page, 'given-value', true)
            const hourInput = dp.locator('.timepicker-hours input')
            const hourArrowDec = dp.locator('.timepicker-hours .dec-arrow')
            await expect(hourInput).toHaveValue('12')
            await hourInput.hover()
            await hourArrowDec.click()
            await expect(hourInput).toHaveValue('11')
        })
        test('Hour input only accepts valid characters', async ({ page }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const hourInput = dp.locator('.timepicker-hours input')
            await hourInput.type('E')
            await expect(hourInput).toHaveValue('00')
            await hourInput.type('-')
            await expect(hourInput).toHaveValue('00')
            await hourInput.type('+')
            await expect(hourInput).toHaveValue('00')
            await hourInput.type('e')
            await expect(hourInput).toHaveValue('00')
            await hourInput.type('1')
            await expect(hourInput).toHaveValue('01')
        })
        test('Hour input will reset value to 23 if given value is > 23', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const hourInput = dp.locator('.timepicker-hours input')
            await hourInput.type('99')
            await expect(hourInput).toHaveValue('23')
        })
        test('Hour input will cycle to 0 from 23 when using the increment arrow', async ({
            page,
        }) => {
            const dp = page.getByTestId('cycle-up')
            await openCalendar(page, 'cycle-up', true)
            const hourInput = dp.locator('.timepicker-hours input')
            const hourArrowInc = dp.locator('.timepicker-hours .inc-arrow')
            await expect(hourInput).toHaveValue('23')
            //need to hover over the input because the arrows only appear on hover.
            await hourInput.hover()
            //increment using the arrow icon, hour value should become 0.
            await hourArrowInc.click()
            await expect(hourInput).toHaveValue('00')
        })
        test('Hour input will cycle to 23 from 0 when using the decrement arrow', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const hourInput = dp.locator('.timepicker-hours input')
            const hourArrowDec = dp.locator('.timepicker-hours .dec-arrow')
            await expect(hourInput).toHaveValue('00')
            //need to hover over the input because the arrows only appear on hover.
            await hourInput.hover()
            //increment using the arrow icon, hour value should become 0.
            await hourArrowDec.click()
            await expect(hourInput).toHaveValue('23')
        })
    })
    test.describe('Minute Input', () => {
        test('Minute input can have its time incremented via the up arrow icon', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            const minInput = dp.locator('.timepicker-min input')
            const minArrowInc = dp.locator('.timepicker-min .inc-arrow')
            await expect(minInput).toHaveValue('00')
            await minInput.hover()
            await minArrowInc.click()
            await expect(minInput).toHaveValue('01')
        })
        test('Minute input can have its time decremented via the up arrow icon', async ({
            page,
        }) => {
            const dp = page.getByTestId('given-value')
            await openCalendar(page, 'given-value', true)
            const minInput = dp.locator('.timepicker-min input')
            const minArrowDec = dp.locator('.timepicker-min .dec-arrow')
            await expect(minInput).toHaveValue('12')
            await minInput.hover()
            await minArrowDec.click()
            await expect(minInput).toHaveValue('11')
        })
        test('Min input only accepts valid characters', async ({ page }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const minInput = dp.locator('.timepicker-min input')
            await minInput.type('E')
            await expect(minInput).toHaveValue('00')
            await minInput.type('-')
            await expect(minInput).toHaveValue('00')
            await minInput.type('+')
            await expect(minInput).toHaveValue('00')
            await minInput.type('e')
            await expect(minInput).toHaveValue('00')
            await minInput.type('1')
            await expect(minInput).toHaveValue('01')
        })
        test('Min input will reset value to 59 if given value is > 59', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const minInput = dp.locator('.timepicker-min input')
            await minInput.type('99')
            await expect(minInput).toHaveValue('59')
        })
    })
    test.describe('Seconds input', () => {
        test('Sec input can have its time incremented via the arrow icon', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            const secInput = dp.locator('.timepicker-sec input')
            const secArrowInc = dp.locator('.timepicker-sec .inc-arrow')
            await expect(secInput).toHaveValue('00')
            await secInput.hover()
            await secArrowInc.click()
            await expect(secInput).toHaveValue('01')
        })
        test('Sec input can have its time decremented via the up arrow icon', async ({
            page,
        }) => {
            const dp = page.getByTestId('given-value')
            await openCalendar(page, 'given-value', true)
            const secInput = dp.locator('.timepicker-sec input')
            const secArrowDec = dp.locator('.timepicker-sec .dec-arrow')
            await expect(secInput).toHaveValue('12')
            await secInput.hover()
            await secArrowDec.click()
            await expect(secInput).toHaveValue('11')
        })
        test('Sec input only accepts valid characters', async ({ page }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const secInput = dp.locator('.timepicker-sec input')
            await secInput.type('E')
            await expect(secInput).toHaveValue('00')
            await secInput.type('-')
            await expect(secInput).toHaveValue('00')
            await secInput.type('+')
            await expect(secInput).toHaveValue('00')
            await secInput.type('e')
            await expect(secInput).toHaveValue('00')
            await secInput.type('1')
            await expect(secInput).toHaveValue('01')
        })
        test('Sec input will reset value to 59 if given value is > 59', async ({
            page,
        }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const secInput = dp.locator('.timepicker-sec input')
            await secInput.type('99')
            await expect(secInput).toHaveValue('59')
        })
    })
    test.describe('Ms input', () => {
        //2025-04-15T12:12:12.222Z
        test('MS input can have its time incremented via the arrow icon', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            const msInput = dp.locator('.timepicker-ms input')
            const msArrowInc = dp.locator('.timepicker-ms .inc-arrow')
            await expect(msInput).toHaveValue('000')
            await msInput.hover()
            await msArrowInc.click()
            await expect(msInput).toHaveValue('001')
        })
        test('Ms input can have its time decremented via the up arrow icon', async ({
            page,
        }) => {
            const dp = page.getByTestId('given-value')
            await openCalendar(page, 'given-value', true)
            const msInput = dp.locator('.timepicker-ms input')
            const msArrowDec = dp.locator('.timepicker-ms .dec-arrow')
            await expect(msInput).toHaveValue('222')
            await msInput.hover()
            await msArrowDec.click()
            await expect(msInput).toHaveValue('221')
        })
        test('Ms input only accepts valid characters', async ({ page }) => {
            const dp = page.getByTestId('default')
            await openCalendar(page, 'default', true)
            const msInput = dp.locator('.timepicker-ms input')
            await msInput.type('E')
            await expect(msInput).toHaveValue('000')
            await msInput.type('-')
            await expect(msInput).toHaveValue('000')
            await msInput.type('+')
            await expect(msInput).toHaveValue('000')
            await msInput.type('e')
            await expect(msInput).toHaveValue('000')
            await msInput.type('1')
            await expect(msInput).toHaveValue('001')
        })
    })
})
test.describe('Calendar month, year, days and selection', () => {
    test('A calendar rendered with Jan will swap its month to December on backward month arrow click', async ({
        page,
    }) => {
        const template = `<rux-datetime-picker value="2025-01-15T00:00:00.000Z"></rux-datetime-picker>`
        await page.setContent(template)
        const dp = page.locator('rux-datetime-picker')
        await openCalendar(page, 'rux-datetime-picker')
        const backwardMonthArrow = dp
            .locator('.rux-calendar-header rux-button')
            .first()
        const monthSelect = dp
            .locator('.select-wrapper rux-select')
            .first()
            .locator('select')
        await expect(monthSelect).toHaveValue('01')
        await backwardMonthArrow.click()
        await expect(monthSelect).toHaveValue('12')
    })
    test('A calendar rendered with Dec will swap its month to Jan on forward month arrow click', async ({
        page,
    }) => {
        const template = `<rux-datetime-picker value="2025-12-15T00:00:00.000Z"></rux-datetime-picker>`
        await page.setContent(template)
        const dp = page.locator('rux-datetime-picker')
        await openCalendar(page, 'rux-datetime-picker')
        const forwardMonthArrow = dp
            .locator('.rux-calendar-header rux-button')
            .last()
        const monthSelect = dp
            .locator('.select-wrapper rux-select')
            .first()
            .locator('select')
        await expect(monthSelect).toHaveValue('12')
        await forwardMonthArrow.click()
        await expect(monthSelect).toHaveValue('01')
    })
    test.describe('Day selection', () => {
        test.beforeEach(async ({ page }) => {
            const template = `
                <rux-datetime-picker data-testid="default" value="2025-10-05T00:00:00.000Z"></rux-datetime-picker>
                <rux-datetime-picker data-testid="default-backward-year-change" value="2026-01-05T00:00:00.000Z"></rux-datetime-picker>
                <rux-datetime-picker julian-format data-testid="julian-backward-year-change" value="2026-005T00:00:00.000Z"></rux-datetime-picker>
                <rux-datetime-picker data-testid="default-forward-year-change" value="2026-12-25T00:00:00.000Z"></rux-datetime-picker>
                <rux-datetime-picker julian-format data-testid="julian-forward-year-change" value="2025-359T00:00:00.000Z"></rux-datetime-picker>
                <rux-datetime-picker julian-format data-testid="default-julian" value="2025-278T00:00:00.000Z"></rux-datetime-picker>
      `
            await page.setContent(template)
        })
        test('A datepicker with a given value selects the correct day by default', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            // value given is Oct 5, assert that is selected
            const selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('5')
        })
        test('A julian datepicker with a given value selects the correct day by default', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').last()
            await openCalendar(page, 'default-julian', true)
            // value given is Oct 5, assert that is selected. In j-day of a non-leap year, that's the 278th day.
            const selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('278')
        })
        test('A datepicker with a given value changes selected day to a day clicked within the same month', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            // value given is Oct 5, assert that is selected
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('5')
            // clicking a day far enough in the month that it won't be a day belonging to the last month
            const dayToClick = dp.locator('rux-day').nth(13)
            await dayToClick.click()
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('11')
        })
        test('A juilan datepicker with a given value changes selected day to a day clicked within the same month', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').last()
            await openCalendar(page, 'default-julian', true)
            // value given is Oct 5, assert that is selected
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('278')
            const dayToClick = dp.locator('rux-day').nth(13)
            await dayToClick.click()
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('284')
        })
        test('A datepicker with a given value will correctly shift months and selected day when selecting a day from a previous month', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('5')
            const dayToClick = dp.locator('rux-day').nth(0) //this would be the 28th of Sep
            //get month
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            await expect(monthSelect).toHaveValue('10')
            await dayToClick.click()
            await expect(monthSelect).toHaveValue('09')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('28')
        })
        test('A julian datepicker with a given value will correctly shift months and selected day when selecting a day from a previous month', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').last()
            await openCalendar(page, 'default-julian', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('278')
            const dayToClick = dp.locator('rux-day').nth(0) //this would be the 28th of Sep
            //get month
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            await expect(monthSelect).toHaveValue('10')
            await dayToClick.click()
            await expect(monthSelect).toHaveValue('09')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('271')
        })
        test('A datepicker with a given value will correctly shift months and selected day when selecting a day from a future month', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').first()
            await openCalendar(page, 'default', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('5')
            const dayToClick = dp.locator('rux-day').nth(41) //each month has 42 rux-days, 41 selects the last accounting for 0 index.
            //get month
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            await expect(monthSelect).toHaveValue('10')
            await dayToClick.click()
            await expect(monthSelect).toHaveValue('11')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('8')
        })
        test('A julian datepicker with a given value will correctly shift months and selected day when selecting a day from a future month', async ({
            page,
        }) => {
            const dp = page.locator('rux-datetime-picker').last()
            await openCalendar(page, 'default-julian', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('278')
            const dayToClick = dp.locator('rux-day').nth(41)
            //get month
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            await expect(monthSelect).toHaveValue('10')
            await dayToClick.click()
            await expect(monthSelect).toHaveValue('11')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('312')
        })
        test('A datepicker with a given value in Jan will correctly swap month, year and selected day when choosing a day from the previous Dec month', async ({
            page,
        }) => {
            const dp = page.getByTestId('default-backward-year-change')
            await openCalendar(page, 'default-backward-year-change', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('5')
            const dayToClick = dp.locator('rux-day').nth(0)
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            const yearSelect = dp
                .locator('.select-wrapper rux-select')
                .last()
                .locator('select')
            await expect(monthSelect).toHaveValue('01')
            await expect(yearSelect).toHaveValue('2026')

            await dayToClick.click()
            await expect(monthSelect).toHaveValue('12')
            await expect(yearSelect).toHaveValue('2025')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('28')
        })
        test('A julian datepicker with a given value in Jan will correctly swap month, year and selected day when choosing a day from the previous Dec month', async ({
            page,
        }) => {
            const dp = page.getByTestId('julian-backward-year-change')
            await openCalendar(page, 'julian-backward-year-change', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('005')
            const dayToClick = dp.locator('rux-day').nth(0)
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            const yearSelect = dp
                .locator('.select-wrapper rux-select')
                .last()
                .locator('select')
            await expect(monthSelect).toHaveValue('01')
            await expect(yearSelect).toHaveValue('2026')

            await dayToClick.click()
            await expect(monthSelect).toHaveValue('12')
            await expect(yearSelect).toHaveValue('2025')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('362')
        })
        test('A datepicker with a given value in Dec will correctly swap month, year and selected day when choosing a day from the next Jan month', async ({
            page,
        }) => {
            const dp = page.getByTestId('default-forward-year-change')
            await openCalendar(page, 'default-forward-year-change', true)
            let selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('25')
            const dayToClick = dp.locator('rux-day').nth(41)
            const monthSelect = dp
                .locator('.select-wrapper rux-select')
                .first()
                .locator('select')
            await expect(monthSelect).toHaveValue('12')
            await dayToClick.click()
            await expect(monthSelect).toHaveValue('01')
            selectedDay = dp.locator('rux-day[selected] button')
            await expect(selectedDay).toHaveText('9')
        })
    })
    test.describe(
        'A selected day remains in the given month and year until a new day is selected',
        () => {
            test('A default datepicker with a given day will retain its selected day on a forward month change', async ({
                page,
            }) => {
                const template = `<rux-datetime-picker value="2025-10-05T00:00:00.000Z"></rux-datetime-picker>`
                await page.setContent(template)
                await openCalendar(page)
                const dp = page.locator('rux-datetime-picker')
                const selectedDay = dp.locator('rux-day[selected] button')
                await expect(selectedDay).toHaveText('5')
                const forwardMonthArrow = dp
                    .locator('.rux-calendar-header rux-button')
                    .last()
                //move forward a month, there should be no selected day
                await forwardMonthArrow.click()
                const selectedDayAfterMonthChange = dp.locator(
                    'rux-day[selected] button'
                )
                //ensure that no rux-day element was selected
                await expect(selectedDayAfterMonthChange).toHaveCount(0)
                //click backward month to go back to where the selected day should be
                const backwardMonthArrow = dp
                    .locator('.rux-calendar-header rux-button')
                    .first()
                await backwardMonthArrow.click()
                const selectedDayAfterComingBack = dp.locator(
                    'rux-day[selected] button'
                )
                await expect(selectedDayAfterComingBack).toHaveText('5')
            })
            test('A default datepicker with a given day will retain its selected day on a backward month change', async ({
                page,
            }) => {
                const template = `<rux-datetime-picker value="2025-10-05T00:00:00.000Z"></rux-datetime-picker>`
                await page.setContent(template)
                await openCalendar(page)
                const dp = page.locator('rux-datetime-picker')
                const selectedDay = dp.locator('rux-day[selected] button')
                await expect(selectedDay).toHaveText('5')

                //move back a month, there should be no selected day
                const backwardMonthArrow = dp
                    .locator('.rux-calendar-header rux-button')
                    .first()
                await backwardMonthArrow.click()
                const selectedDayAfterMonthChange = dp.locator(
                    'rux-day[selected] button'
                )
                //ensure that no rux-day element was selected
                await expect(selectedDayAfterMonthChange).toHaveCount(0)
                //click forward month to go back to where the selected day should be
                const forwardMonthArrow = dp
                    .locator('.rux-calendar-header rux-button')
                    .last()
                await forwardMonthArrow.click()
                const selectedDayAfterComingBack = dp.locator(
                    'rux-day[selected] button'
                )
                await expect(selectedDayAfterComingBack).toHaveText('5')
            })
            test('A julian datepicker with a given day will retain its selected day on month change', async ({
                page,
            }) => {
                const template = `<rux-datetime-picker julian-format value="2025-278T00:00:00.000Z"></rux-datetime-picker>`
                await page.setContent(template)
                await openCalendar(page)
                const dp = page.locator('rux-datetime-picker')
                const selectedDay = dp.locator('rux-day[selected] button')
                await expect(selectedDay).toHaveText('278')

                //move back a month, there should be no selected day
                const backwardMonthArrow = dp
                    .locator('.rux-calendar-header rux-button')
                    .first()
                await backwardMonthArrow.click()
                let selectedDayAfterMonthChange = dp.locator(
                    'rux-day[selected] button'
                )
                //ensure that no rux-day element was selected
                await expect(selectedDayAfterMonthChange).toHaveCount(0)
                //click forward month to go back to where the selected day should be
                const forwardMonthArrow = dp
                    .locator('.rux-calendar-header rux-button')
                    .last()
                await forwardMonthArrow.click()
                let selectedDayAfterComingBack = dp.locator(
                    'rux-day[selected] button'
                )
                await expect(selectedDayAfterComingBack).toHaveText('278')
                //test going forward a month and then coming back
                await forwardMonthArrow.click()
                selectedDayAfterMonthChange = dp.locator(
                    'rux-day[selected] button'
                )
                await expect(selectedDayAfterMonthChange).toHaveCount(0)
                //go back to oct, ensure 278 still selected
                await backwardMonthArrow.click()
                selectedDayAfterComingBack = dp.locator(
                    'rux-day[selected] button'
                )
                await expect(selectedDayAfterComingBack).toHaveText('278')
            })
        }
    )

    //TODO: a completely default datepicker (<rux-datetime-picker>) will render selected day correctly
    //TODO: precision prop tests
})
