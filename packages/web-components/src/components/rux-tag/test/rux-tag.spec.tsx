import { newSpecPage } from '@stencil/core/testing'
import { RuxTag } from '../rux-tag'

describe('rux-tag', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag></rux-tag>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders pass status', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag status="pass"><rux-tag>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders fail status', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag status="fail"><rux-tag>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders unk status', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag status="unknown"><rux-tag>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders default unk status if status is invalid', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag status="bad"></rux-tag>`,
        })
        const tag = document.querySelector('rux-tag')
        expect(tag!.shadowRoot!.children[0].innerHTML).toEqual('UNK')
        expect(page.root).toMatchSnapshot()
    })
    it('renders tag-text slot', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag>
          <div>Custom Text</div>
        </rux-tag>`,
        })
        const tag = document.querySelector('rux-tag div')
        expect(tag?.innerHTML).toEqual('Custom Text')
        expect(page.root).toMatchSnapshot()
    })
})
