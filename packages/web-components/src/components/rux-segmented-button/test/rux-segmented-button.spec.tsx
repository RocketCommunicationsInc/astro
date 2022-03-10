import { newSpecPage, SpecPage } from '@stencil/core/testing'
import { RuxSegmentedButton } from '../rux-segmented-button'
import { h } from '@stencil/core'

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
    it('does fire change event', async () => {
        const data = [
            { label: 'First segment' },
            { label: 'Second segment' },
            { label: 'Third segment' },
        ]
        let page: SpecPage

        const buttonSpy = jest.fn()

        page = await newSpecPage({
            components: [RuxSegmentedButton],
            template: () => (
                <rux-segmented-button
                    onRuxchange={(ev: any) => buttonSpy(ev)}
                ></rux-segmented-button>
            ),
        })!
        page.root.data = data
        const btn = page.doc?.querySelector('rux-segmented-button')
        // btn!.data = data;
        page.waitForChanges()
        //? Was trying to get the label to click since maybe it's not clicking correct spot
        // console.log(btn!.children, 'btn')
        // const ul = btn?.shadowRoot?.querySelector('ul')
        // console.log(ul, 'UL')
        // const firstLi = ul?.querySelector('li')
        // console.log(firstLi, 'LI')
        page.waitForChanges()
        btn!.click()
        page.waitForChanges()
        expect(buttonSpy).toHaveBeenCalledTimes(1)
    })
})
