import { militaryTimezones } from '../military-timezones'
import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Clock', () => {
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
        await expect(el).toHaveAttribute('timezone', 'America/Los_Angeles')
    })
    test('converts all military timezones', async ({ page }) => {
        for (const timezone in militaryTimezones) {
            const template = `
                <rux-clock timezone="${timezone}"></rux-clock>
            `
            await page.setContent(template)
            const el = await page.locator('rux-clock')
            await expect(el).toHaveAttribute('timezone', timezone)
        }
    })

    test('shows and updates los', async ({ page }) => {
        const template = `<rux-clock los="1988-04-22T09:12:12.000Z"></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await expect(el).toHaveAttribute('los', '1988-04-22T09:12:12.000Z')
    })
    test('shows and updates aos', async ({ page }) => {
        const template = `<rux-clock aos="1988-04-22T09:12:12.000Z"></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await expect(el).toHaveAttribute('aos', '1988-04-22T09:12:12.000Z')
    })
    test('converts aos/los unix timestamps when timezone is changed', async ({
        page,
    }) => {
        const template = `
            <rux-clock aos="1638373590145" los="1638373590145"></rux-clock>
        `

        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await el.evaluate((node) =>
            node.setAttribute('timezone', 'America/Los_Angeles')
        )
        await expect(el).toHaveAttribute('timezone', 'America/Los_Angeles')
    })
    test('Uses the time passed into date-in if provided', async ({ page }) => {
        const template = `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
        `

        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await expect(el).toHaveAttribute('date-in', '2022-04-22T23:59:55.000Z')
    })
    test('Can accept a unix timestamp for date-in', async ({ page }) => {
        const template = `
            <rux-clock date-in="1652129256662"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await expect(el).toHaveAttribute('date-in', '1652129256662')
    })
    test('Can change the date when date-in is changed', async ({ page }) => {
        const template = `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
        `
        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await el.evaluate((node) =>
            node.setAttribute('date-in', '2022-07-22T23:59:55.000Z')
        )
        await expect(el).toHaveAttribute('date-in', '2022-07-22T23:59:55.000Z')
    })
    test('can swap between unix and non-unix date-in values', async ({
        page,
    }) => {
        const template = `<rux-clock></rux-clock>`

        await page.setContent(template)
        const el = await page.locator('rux-clock')

        await el.evaluate((node) =>
            node.setAttribute('date-in', '2022-07-22T23:59:55.000Z')
        )
        await expect(el).toHaveAttribute('date-in', '2022-07-22T23:59:55.000Z')
        await el.evaluate((node) =>
            node.setAttribute('date-in', '1652129256662')
        )
        await expect(el).toHaveAttribute('date-in', '1652129256662')
    })
    /*
        Need to test: 
        - timein
        - timezone changes
    */
})
