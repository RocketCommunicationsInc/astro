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
            //need to use given value datepicker here since decrementing a 0 value won't do anything
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
