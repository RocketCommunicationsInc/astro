import { newSpecPage } from '@stencil/core/testing'
import { RuxMonitoringIcon } from '../rux-monitoring-icon'

describe('rux-monitoring-icon', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxMonitoringIcon],
            html: `<rux-monitoring-icon
        icon="altitude"
        label="Altitude for satellite X"
        sublabel="100000m"
        status="standby"
        notifications="10210"
      ></rux-monitoring-icon>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('errors with invalid status', async () => {
        const monitorIcon = new RuxMonitoringIcon()

        expect(() => {
            monitorIcon.validateStatus('')
        }).toThrowError('valid status required')
    })
})
