import { newSpecPage } from '@stencil/core/testing'
import { RuxSegmentedButton } from '../rux-segmented-button'

describe('rux-segmented-button', () => {
    it('builds', async () => {
        const button = new RuxSegmentedButton()
        expect(button).toBeTruthy()
    })

    it('selects first item by default', async () => {
        const data = [
            { label: 'First segment' },
            { label: 'Second segment' },
            { label: 'Third segment' },
        ]
        const page = await newSpecPage({
            components: [RuxSegmentedButton],
            html: `<rux-segmented-button></rux-segmented-button>`,
        })

        page.root.data = data
        page.waitForChanges()

        expect(page.root.selected).toBe('First segment')
    })

    it('selects item from data array', async () => {
        const data = [
            { label: 'First segment' },
            { label: 'Second segment', selected: true },
            { label: 'Third segment' },
        ]
        const page = await newSpecPage({
            components: [RuxSegmentedButton],
            html: `<rux-segmented-button></rux-segmented-button>`,
        })

        page.root.data = data
        page.waitForChanges()

        expect(page.root.selected).toBe('Second segment')
    })

    it('selects item from selected attribute', async () => {
        const data = [
            { label: 'First segment' },
            { label: 'Second segment' },
            { label: 'Third segment' },
        ]
        const page = await newSpecPage({
            components: [RuxSegmentedButton],
            html: `<rux-segmented-button selected="Third segment"></rux-segmented-button>`,
        })

        page.root.data = data
        page.waitForChanges()

        expect(page.root.selected).toBe('Third segment')
    })
})
