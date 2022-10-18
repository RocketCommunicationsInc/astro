import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'
import { militaryTimezones } from '../src/components/rux-clock/military-timezones'

test.describe('Clock', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock></rux-clock>
        `
        )
        const el = page.locator('rux-clock')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it handles attributes', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-clock hide-date hide-labels></rux-clock>
    `
        )
        const el = page.locator('rux-clock')
        await expect(el).toHaveAttribute('hide-date', '')
        await expect(el).toHaveAttribute('hide-labels', '')
    })
    test('it converts time to timezone', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock timezone="America/Los_Angeles"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await expect(el).toHaveAttribute('timezone', 'America/Los_Angeles')
    })
    test('converts all military timezones', async ({ page }) => {
        for (const timezone in militaryTimezones) {
            await setBodyContent(
                page,
                `
                <rux-clock timezone="${timezone}"></rux-clock>
                `
            )
            let el = page.locator('rux-clock').first()
            await expect(el).toHaveAttribute('timezone', timezone)
        }
    })
    test('shows and updates los', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock los="1988-04-22T09:12:12.000Z"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await expect(el).toHaveAttribute('los', '1988-04-22T09:12:12.000Z')
    })
    test('shows and updates aos', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock aos="1988-04-22T09:12:12.000Z"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await expect(el).toHaveAttribute('aos', '1988-04-22T09:12:12.000Z')
    })
    test('converts aos/los unix timestamps when timezone is changed', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-clock aos="1638373590145" los="1638373590145"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await el.evaluate((node) =>
            node.setAttribute('timezone', 'America/Los_Angeles')
        )
        await expect(el).toHaveAttribute('timezone', 'America/Los_Angeles')
    })
    test('Uses the time passed into date-in if provided', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await expect(el).toHaveAttribute('date-in', '2022-04-22T23:59:55.000Z')
    })
    test('Can accept a unix timestamp for date-in', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock date-in="1652129256662"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await expect(el).toHaveAttribute('date-in', '1652129256662')
    })
    test('Can change the date when date-in is changed', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-clock date-in="2022-04-22T23:59:55.000Z"></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
        await el.evaluate((node) =>
            node.setAttribute('date-in', '2022-07-22T23:59:55.000Z')
        )
        await expect(el).toHaveAttribute('date-in', '2022-07-22T23:59:55.000Z')
    })
    test('can swap between unix and non-unix date-in values', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-clock></rux-clock>
            `
        )
        const el = page.locator('rux-clock')
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
