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
            <rux-datetime-picker label="Julian Default" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040" data-testid="julian-default" julian-format data-testid="julian-default"></rux-datetime-picker>
                  <rux-datetime-picker label="Julian Default" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040" data-testid="julian-value" julian-format value="2025-123T12:12:12.222" data-testid="julian-value"></rux-datetime-picker>
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
    test('Datepicker emits single ruxChange event when changing month via the select menu', async ({
        page,
    }) => {
        const defaultDp = page.getByTestId('given-value')
        const changeEvent = await page.spyOnEvent('ruxchange')
        await openCalendar(page, 'given-value', true)
        await defaultDp.locator('select').first().selectOption('October')
        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
    test('Datepicker emits single ruxChange event when changing year via the select menu', async ({
        page,
    }) => {
        const defaultDp = page.getByTestId('given-value')
        const changeEvent = await page.spyOnEvent('ruxchange')
        await openCalendar(page, 'given-value', true)
        await defaultDp.locator('select').last().selectOption('2024')
        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
})
