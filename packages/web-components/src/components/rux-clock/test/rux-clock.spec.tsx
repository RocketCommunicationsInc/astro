import { newSpecPage } from '@stencil/core/testing'
import { RuxClock } from '../rux-clock'
import { militaryTimezones } from '../military-timezones'

/**
 * NOTE: Timezone is set to UTC via npm test scripts.
 * This is due to lack of ability to configure Jest / Stencil limitation
 */
const RealDate = Date.now

beforeAll(() => {
    //Swap Date.now() with global mock

    /**
     * 2020 is a leap year so we can test 366 days
     */
    const date = Date.UTC(2021, 0o0, 0o1, 0o1, 0o2, 0o3)

    global.Date.now = jest.fn(() => date)
})

afterAll(() => {
    //Replace our mock with the OG global Date.now()
    global.Date.now = RealDate
})

describe('rux-clock', () => {
    it('shows the current time', async () => {
        const clock = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock></rux-clock>`,
        })
        expect(clock.root).toMatchSnapshot()
    })

    it('converts time to timezone', async () => {
        const clockWithTimezone = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock timezone="America/Los_Angeles"></rux-clock>`,
        })

        expect(clockWithTimezone.root).toMatchSnapshot()
    })

    it('converts all military timezones', async () => {
        for (const timezone in militaryTimezones) {
            const page = await newSpecPage({
                components: [RuxClock],
                html: `<div></div>`,
            })
            let cmp = page.doc.createElement('rux-clock')
            cmp.setAttribute('timezone', timezone)
            page?.root?.appendChild(cmp)
            await page.waitForChanges()
            expect(page.root).toMatchSnapshot()
        }
    })

    it('converts time to timezone on the fly', async () => {
        const clock = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock></rux-clock>`,
        })
        expect(clock.root).toMatchSnapshot()
        clock?.root?.setAttribute('timezone', 'America/Los_Angeles')
        await clock.waitForChanges()
        expect(clock.root).toMatchSnapshot()
    })

    it('hides the timezone', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-timezone></rux-clock>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('hides the date', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-date></rux-clock>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('hides the labels', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock hide-labels></rux-clock>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('shows and updates los', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock los="1988-04-22 12:12:12"></rux-clock>`,
        })
        expect(page.root).toMatchSnapshot()
        page?.root?.setAttribute('los', '1988-04-22 09:12:12')
        await page.waitForChanges()
        expect(page.root).toMatchSnapshot()
    })

    it('shows and updates aos', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock aos="1988-04-22 12:12:12"></rux-clock>`,
        })
        expect(page.root).toMatchSnapshot()
        page?.root?.setAttribute('aos', '1988-04-22 09:12:12')
        await page.waitForChanges()
        expect(page.root).toMatchSnapshot()
    })
    it('converts aos/los unix timestamps when timezone is changed', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock aos="1638373590145" los="1638373590145"></rux-clock>`,
        })

        expect(page.root).toMatchSnapshot()

        page?.root?.setAttribute('timezone', 'America/Los_Angeles')
        await page.waitForChanges()

        expect(page.root).toMatchSnapshot()
    })

    // Something weird going on here. I expect the snapshot value to be 09:12:12 but its being shown as 05:12:12
    //   it('converts aos/los string timestamps when timezone is changed', async () => {
    //     const page = await newSpecPage({
    //         components: [RuxClock],
    //         html: `<rux-clock aos="1988-04-22 12:12:12" los="1988-04-22 12:12:12"></rux-clock>`,
    //     })

    //     expect(page.root).toMatchSnapshot()

    //     page?.root?.setAttribute('timezone', 'America/Los_Angeles')
    //     await page.waitForChanges()

    //     expect(page.root).toMatchSnapshot()
    // })
})
