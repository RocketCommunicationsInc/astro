import { newSpecPage } from '@stencil/core/testing'
import { RuxIndeterminateProgress } from '../rux-indeterminate-progress'

describe('rux-indeterminate-progress', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxIndeterminateProgress],
            html: `<rux-indeterminate-progress></rux-indeterminate-progress>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
