import { test, expect } from '../../../../tests/utils/_astro-fixtures'

function delay(time: any) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    })
}

test.describe('Clock', () => {
    /**
     * Create a fake for Date. We use Dec 31, 2020 because
     * 2020 is a leap year so we can test 366 days.
     */
    test.beforeEach(async ({ page }) => {
        const fakeNow = new Date('December 31 2020 20:02:03Z').valueOf()

        await page.addInitScript(`{
          // Extend Date constructor to default to fakeNow
          Date = class extends Date {
            constructor(...args) {
              if (args.length === 0) {
                super(${fakeNow});
              } else {
                super(...args);
              }
            }
          }
          // Override Date.now() to start from fakeNow
          const __DateNowOffset = ${fakeNow} - Date.now();
          const __DateNow = Date.now;
          Date.now = () => __DateNow() + __DateNowOffset;
        }`)
    })

    test('it renders', async ({ page }) => {
        const template = `<rux-clock></rux-clock>`
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    test('it converts time to timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="America/Los_Angeles"></rux-clock>
        `
        await page.setContent(template)

        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await expect(segment).toHaveText('12:02:03 PST')
    })

    test('converts Alpha military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="A"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('21:02:03 GMT+1')
    })

    test('converts B military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="B"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('22:02:03 GMT+2')
    })

    test('converts Charlie military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="C"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('23:02:03 GMT+3')
    })

    test('converts Delta military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="D"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('00:02:03 GMT+4')
    })

    test('converts Echo military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="E"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('01:02:03 GMT+5')
    })

    test('converts Foxtrot military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="F"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('02:02:03 GMT+6')
    })

    test('converts Golf military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="G"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('03:02:03 GMT+7')
    })

    test('converts Hotel military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="H"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('04:02:03 GMT+8')
    })

    test('converts India military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="I"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('05:02:03 GMT+9')
    })

    test('converts Kilo military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="K"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('06:02:03 GMT+10')
    })

    test('converts Lima military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="L"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('07:02:03 GMT+11')
    })

    test('converts Mike military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="M"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('08:02:03 GMT+12')
    })

    test('converts November military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="N"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('19:02:03 GMT-1')
    })

    test('converts Oscar military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="O"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('18:02:03 GMT-2')
    })

    test('converts Papa military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="P"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('17:02:03 GMT-3')
    })

    test('converts Quebec military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="Q"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('16:02:03 GMT-4')
    })

    test('converts Romeo military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="R"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('15:02:03 GMT-5')
    })

    test('converts Sierra military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="S"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('14:02:03 GMT-6')
    })

    test('converts Tango military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="T"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('13:02:03 GMT-7')
    })

    test('converts Uniform military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="U"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('12:02:03 GMT-8')
    })

    test('converts Victor military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="V"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('11:02:03 GMT-9')
    })

    test('converts Whiskey military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="W"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('10:02:03 GMT-10')
    })

    test('converts Xray military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="X"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('09:02:03 GMT-11')
    })

    test('converts Yankee military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="Y"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('08:02:03 GMT-12')
    })

    test('converts Zulu military timezone', async ({ page }) => {
        const template = `
            <rux-clock timezone="Z"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)
        await expect(segment).toHaveText('20:02:03 Z')
    })

    test('shows and updates los', async ({ page }) => {
        const template = `<rux-clock los="1988-04-22T09:12:12.000Z"></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(2)

        await expect(segment).toHaveText('09:12:12')

        await el.evaluate((clock) => {
            clock.setAttribute('los', '1988-04-22T10:12:12.000Z')
        })

        await expect(segment).toHaveText('10:12:12')
    })
    test('shows and updates aos', async ({ page }) => {
        const template = `<rux-clock aos="1988-04-22T09:12:12.000Z"></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(2)

        await expect(segment).toHaveText('09:12:12')
        await el.evaluate((clock) => {
            clock.setAttribute('aos', '1988-04-22T10:12:12.000Z')
        })
        await expect(segment).toHaveText('10:12:12')
    })

    test('converts aos/los unix timestamps when timezone is changed', async ({
        page,
    }) => {
        const template = `
            <rux-clock aos="1638373590145" los="1638373590145"></rux-clock>
        `

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const aosSegment = await el.locator('.rux-clock__segment__value').nth(2)

        const losSegment = await el.locator('.rux-clock__segment__value').nth(3)

        await expect(aosSegment).toHaveText('15:46:30')
        await expect(losSegment).toHaveText('15:46:30')

        await el.evaluate((node) =>
            node.setAttribute('timezone', 'America/Los_Angeles')
        )
        await expect(aosSegment).toHaveText('07:46:30')
        await expect(losSegment).toHaveText('07:46:30')
    })

    test('Uses the time passed into date-in if provided', async ({ page }) => {
        const template = `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
        `

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await expect(segment).toHaveText('23:59:55 UTC')
    })

    test('Can accept a unix timestamp for date-in', async ({ page }) => {
        const template = `
            <rux-clock date-in="1652129256662"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await expect(segment).toHaveText('20:47:40 UTC')
    })
    test('Can change the date when date-in is changed', async ({ page }) => {
        const template = `
            <rux-clock date-in="2022-04-22T21:59:55.000Z"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await expect(segment).toHaveText('21:59:55 UTC')
        await el.evaluate((node) =>
            node.setAttribute('date-in', '2022-04-22T22:00:00.000Z')
        )
        // Testing minutes only bc seconds can be flaky
        await expect(segment).toContainText('22:00')
    })
    test('can swap between unix and non-unix date-in values', async ({
        page,
    }) => {
        const template = `<rux-clock></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await el.evaluate((node) =>
            node.setAttribute('date-in', '2022-07-22T23:59:55.000Z')
        )

        // Testing minutes only bc seconds can be flaky
        await expect(segment).toContainText('23:59')
        await el.evaluate((node) =>
            node.setAttribute('date-in', '1652129256662')
        )
        await expect(segment).toContainText('20:47')
    })

    test('can display a static datetime', async ({ page }) => {
        const template = `<rux-clock static></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await expect(segment).toContainText('20:02:03')
        await delay(2000)
        await expect(segment).toContainText('20:02:03')
        await el.evaluate((node) => {
            node.setAttribute('date-in', '1988-04-22T12:12:12.000Z')
        })
        await expect(segment).toContainText('12:12:12')
    })

    test('can display a static datetime with datein', async ({ page }) => {
        const template = `<rux-clock static date-in="1988-04-22T12:12:12.000Z"></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')
        const segment = await el.locator('.rux-clock__segment__value').nth(1)

        await expect(segment).toContainText('12:12:12')
        await delay(2000)
        await expect(segment).toContainText('12:12:12')
    })

    /*
        Need to test: 
        - timein
        - timezone changes
    */
})
