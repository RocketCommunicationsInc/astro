import { militaryTimezones } from '../src/components/rux-clock/military-timezones'
import { test, expect } from './utils/_astro-fixtures'

test.describe('Clock', () => {

    test('it renders', async ({ astroPage }) => {
        const template = `<rux-clock></rux-clock>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    test('it converts time to timezone', async ({ astroPage }) => {
        const template = `
            <rux-clock timezone="America/Los_Angeles"></rux-clock>
        `
        const el = await astroPage.load(template)
        await expect(el).toHaveAttribute('timezone', 'America/Los_Angeles')
    })
    test('converts all military timezones', async ({ astroPage }) => {
        for (const timezone in militaryTimezones) {
            const template = `
                <rux-clock timezone="${timezone}"></rux-clock>
            `
            const el = await astroPage.load(template)
            await expect(el).toHaveAttribute('timezone', timezone)
        }
    })

    test('shows and updates los', async ({ astroPage }) => {
        const template = `<rux-clock los="1988-04-22T09:12:12.000Z"></rux-clock>`

        const el = await astroPage.load(template)

        await expect(el).toHaveAttribute('los', '1988-04-22T09:12:12.000Z')
    })
    test('shows and updates aos', async ({ astroPage }) => {
        const template = `<rux-clock aos="1988-04-22T09:12:12.000Z"></rux-clock>`

        const el = await astroPage.load(template)

        await expect(el).toHaveAttribute('aos', '1988-04-22T09:12:12.000Z')
    })
    test('converts aos/los unix timestamps when timezone is changed', async ({ astroPage }) => {
        const template = `
            <rux-clock aos="1638373590145" los="1638373590145"></rux-clock>
        `

        const el = await astroPage.load(template)

        await el.evaluate((node) =>
            node.setAttribute('timezone', 'America/Los_Angeles')
        )
        await expect(el).toHaveAttribute('timezone', 'America/Los_Angeles')
    })
    test('Uses the time passed into date-in if provided', async ({ astroPage }) => {
        const template = `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
        `

        const el = await astroPage.load(template)

        await expect(el).toHaveAttribute('date-in', '2022-04-22T23:59:55.000Z')
    })
    test('Can accept a unix timestamp for date-in', async ({ astroPage }) => {
        const template = `
            <rux-clock date-in="1652129256662"></rux-clock>
        `
        const el = await astroPage.load(template)

        await expect(el).toHaveAttribute('date-in', '1652129256662')
    })
    test('Can change the date when date-in is changed', async ({ astroPage }) => {
        const template = `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
        `
        const el = await astroPage.load(template)

        await el.evaluate((node) =>
            node.setAttribute('date-in', '2022-07-22T23:59:55.000Z')
        )
        await expect(el).toHaveAttribute('date-in', '2022-07-22T23:59:55.000Z')
    })
    test('can swap between unix and non-unix date-in values', async ({ astroPage }) => {
        const template = `<rux-clock></rux-clock>`
       
        const el = await astroPage.load(template)

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
