import { h } from '@stencil/core'
import { newSpecPage, SpecPage } from '@stencil/core/testing'
import { RuxModal } from '../rux-modal'

describe('rux-modal', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxModal],
            html: `<rux-modal></rux-modal>`,
        })
        expect(page.root).toEqualHtml(`
            <rux-modal>
                <mock:shadow-root></mock:shadow-root>
            </rux-modal>
        `)
    })
    it('should emit one event when closed', async () => {
        const clickSpy = jest.fn()
        let page: SpecPage

        page = await newSpecPage({
            components: [RuxModal],
            template: () => (
                <div>
                    <div id="click">Something to click</div>
                    <rux-modal
                        click-to-close
                        open
                        onRuxmodalclosed={(ev: any) => clickSpy(ev)}
                    >
                        <div slot="header">Header</div>
                    </rux-modal>
                </div>
            ),
        })!

        page.doc?.addEventListener('onruxclosed', () => {
            console.log('heard')
        })
        const modal = page.doc?.querySelector('rux-modal')
        expect(modal!.open).toBe(true)
        const div = page.doc?.getElementById('click')
        // modal!.open = false
        div!.click()
        // expect(modal!.open).toBe(false)
        expect(clickSpy).toBeCalledTimes(1)
    })
})
