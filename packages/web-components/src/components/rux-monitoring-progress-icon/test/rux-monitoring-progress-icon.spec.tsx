import { newSpecPage } from '@stencil/core/testing'
import { RuxMonitoringProgressIcon } from '../rux-monitoring-progress-icon'

describe('rux-monitoring-progress-icon', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxMonitoringProgressIcon],
            html: `
      <rux-monitoring-progress-icon
        progress=70
        max="100"
        label="Label"
        sublabel="sublabel"
        notifications="345678"
      ></rux-monitoring-progress-icon>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('applies custom range arrays properly', () => {
        const progressIcon = new RuxMonitoringProgressIcon()
        progressIcon.min = 100
        progressIcon.max = 1100
        progressIcon.progress = 675
        progressIcon.range = [
            {
                threshold: 300,
                status: 'standby',
            },
            {
                threshold: 775,
                status: 'normal',
            },
            {
                threshold: 1100,
                status: 'serious',
            },
        ]
        progressIcon._updateProgress()
        expect(progressIcon.status).toBe('normal')
        expect(
            Math.ceil(
                ((progressIcon.progress - progressIcon.min) /
                    (progressIcon.max - progressIcon.min)) *
                    100
            )
        ).toBe(58)

        progressIcon.progress = 1100
        progressIcon._updateProgress()
        expect(progressIcon.status).toBe('serious')
    })

    it('works with empty range array', () => {
        const progressIcon = new RuxMonitoringProgressIcon()

        progressIcon.progress = 50
        progressIcon.range = []
        progressIcon.componentWillLoad()
        expect(progressIcon.status).toBe('caution')
    })
    it('changes progress value to equal max if passed in progress is greater', () => {
        const progressIcon = new RuxMonitoringProgressIcon()
        progressIcon.progress = 101
        progressIcon.componentWillLoad()
        expect(progressIcon.progress).toEqual(progressIcon.max)
    })
    it('changes progress value to equal min if passed in progress is less', () => {
        const progressIcon = new RuxMonitoringProgressIcon()
        progressIcon.progress = -10
        progressIcon.componentWillLoad()
        expect(progressIcon.progress).toEqual(progressIcon.min)
    })
})
