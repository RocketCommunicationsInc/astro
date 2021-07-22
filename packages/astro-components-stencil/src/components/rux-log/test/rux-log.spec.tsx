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
        expect(page.root).toEqualHtml(`
      <rux-log>
        <mock:shadow-root>
        <slot name="table">
               <rux-table>
                 <slot name="table-header">
                   <rux-table-header class="relative">
                     <slot name="table-header-row">
                       <rux-table-header-row>
                         <rux-table-header-cell>
                           Time
                         </rux-table-header-cell>
                         <rux-table-header-cell></rux-table-header-cell>
                         <rux-table-header-cell class="rux-log__header-event-cell">
                           <div class="header-event-container">
                             Event
                             <rux-input-field class="rux-log__filter" small="" type="search"></rux-input-field>
                           </div>
                         </rux-table-header-cell>
                       </rux-table-header-row>
                     </slot>
                   </rux-table-header>
                 </slot>
                 <slot name="table-body">
                 <rux-table-body>
                              <rux-table-row>
                                <rux-table-cell>
                                  <rux-datetime hour="2-digit" minute="2-digit" second="2-digit" time-zone="UTC"></rux-datetime>
                                </rux-table-cell>
                                <rux-table-cell>
                                  <rux-status status="off"></rux-status>
                                </rux-table-cell>
                                <rux-table-cell>
                                  Antenna DGS 1 went offline.
                                </rux-table-cell>
                              </rux-table-row>
                              <rux-table-row>
                                <rux-table-cell>
                                  <rux-datetime hour="2-digit" minute="2-digit" second="2-digit" time-zone="UTC"></rux-datetime>
                                </rux-table-cell>
                                <rux-table-cell>
                                  <rux-status status="serious"></rux-status>
                                </rux-table-cell>
                                <rux-table-cell>
                                  USA-177 experienced solar panel misalignment.
                                </rux-table-cell>
                              </rux-table-row>
                              <rux-table-row>
                                <rux-table-cell>
                                  <rux-datetime hour="2-digit" minute="2-digit" second="2-digit" time-zone="UTC"></rux-datetime>
                                </rux-table-cell>
                                <rux-table-cell>
                                  <rux-status status="caution"></rux-status>
                                </rux-table-cell>
                                <rux-table-cell>
                                  USA-168 suffered power degradation.
                                </rux-table-cell>
                              </rux-table-row>
                            </rux-table-body>
                 </slot>
               </rux-table>
             </slot>
        </mock:shadow-root>
      </rux-log>
    `)
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

        const input = page.root.shadowRoot.querySelector('rux-input-field')
        input.value = 'USA'
        await page.waitForChanges()
        input.dispatchEvent(new Event('rux-input'))

        await page.waitForChanges()
        expect(page.root.filter).toBe('USA')
    })
})
