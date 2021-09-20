import { newSpecPage } from '@stencil/core/testing'
import { RuxGlobalStatusBar } from '../rux-global-status-bar'

describe('rux-global-status-bar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxGlobalStatusBar],
            html: `<rux-global-status-bar></rux-global-status-bar>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-global-status-bar menu-icon="apps">
        <mock:shadow-root>
          <header>
            <slot name="left-side"></slot>
            <slot name="app-meta"></slot>
            <div class="slotted-content">
              <slot></slot>
            </div>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
      </rux-global-status-bar>
    `)
    })

    it('renders with icon and app meta', async () => {
        const page = await newSpecPage({
            components: [RuxGlobalStatusBar],
            html: `<rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0"></rux-global-status-bar>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0" menu-icon="apps">
        <mock:shadow-root>
          <header>
            <slot name="left-side">
              <rux-icon icon="apps" size="small" class="shifted-up"></rux-icon>
            </slot>
            <slot name="app-meta">
              <div class="app-meta">
                <div class="app-info-wrapper">
                  <h1 class="app-domain">ASTRO</h1>
                  <h1 class="app-name">TEST APP NAME</h1>
                  <span class="app-version">test v1.0</span>
                </div>
                <div class="app-state-wrapper">
                  <div class="app-state"  style="background-color: var(--color-tag-1-600);" >App State</div>
                  <div class="username">Username</div>
                </div>
              </div>
            </slot>
            <div class="slotted-content">
              <slot></slot>
            </div>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
      </rux-global-status-bar>
    `)
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
        expect(page.root).toEqualHtml(`
      <rux-global-status-bar include-icon app-state="App State" username="Username" app-domain="ASTRO" app-name="Test App Name" app-version="test v1.0" menu-icon="apps">
        <mock:shadow-root>
          <header>
            <slot name="left-side">
              <rux-icon icon="apps" size="small" class="shifted-up"></rux-icon>
            </slot>
            <slot name="app-meta">
              <div class="app-meta">
                <div class="app-info-wrapper">
                  <h1 class="app-domain">ASTRO</h1>
                  <h1 class="app-name">TEST APP NAME</h1>
                  <span class="app-version">test v1.0</span>
                </div>
                <div class="app-state-wrapper">
                  <div class="app-state"  style="background-color: var(--color-tag-1-600);">App State</div>
                  <div class="username">Username</div>
                </div>
              </div>
            </slot>
            <div class="slotted-content">
              <slot></slot>
            </div>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
        <div>Tab links<div>
        <button slot="right-side">Emergency shut off</button>
      </rux-global-status-bar>
    `)
    })
})
