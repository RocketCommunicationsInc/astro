import { newSpecPage } from '@stencil/core/testing'
import { RuxLog } from '../rux-log'
import { LogRow } from '../rux-log.model'

describe('rux-log', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxLog],
            html: `<rux-log></rux-log>`,
        })

        const logData = [
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'serious',
                message: 'USA-177 experienced solar panel misalignment.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'caution',
                message: 'USA-168 suffered power degradation.',
            },
        ] as LogRow[]

        page.root.data = logData
        await page.waitForChanges()
        expect(page.root).toMatchSnapshot()
    })

    it('filters', async () => {
        const logData = [
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'serious',
                message: 'USA-177 experienced solar panel misalignment.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'caution',
                message: 'USA-168 suffered power degradation.',
            },
        ] as LogRow[]

        const log = new RuxLog()
        log.data = logData
        log.filter = 'Antenna DGS'

        expect(log.filteredData).toStrictEqual([
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
        ])
    })

    it('sets filter', async () => {
        const page = await newSpecPage({
            components: [RuxLog],
            html: `<rux-log></rux-log>`,
        })

        const input = page.root.shadowRoot.querySelector('rux-input')
        input.value = 'USA'
        await page.waitForChanges()
        input.dispatchEvent(new Event('ruxinput'))

        await page.waitForChanges()
        expect(page.root.filter).toBe('USA')
    })
})
