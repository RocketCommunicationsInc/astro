import { newSpecPage } from '@stencil/core/testing'
import { RuxGlobalStatusBar } from '../rux-global-status-bar'

describe('rux-global-status-bar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxGlobalStatusBar],
            html: `<rux-global-status-bar></rux-global-status-bar>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders with icon and app meta', async () => {
        const page = await newSpecPage({
            components: [RuxGlobalStatusBar],
            html: `<rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0"></rux-global-status-bar>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders with icon, app meta and slotted content', async () => {
        const page = await newSpecPage({
            components: [RuxGlobalStatusBar],
            html: `<rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0">
                <div>Tab links<div>
                <button slot="right-side">Emergency shut off</button>
            </rux-global-status-bar>`,
        })
        page.waitForChanges()
        expect(page.root).toMatchSnapshot()
    })
})
