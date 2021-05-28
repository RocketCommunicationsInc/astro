import { newSpecPage } from '@stencil/core/testing';
import { RuxGlobalStatusBar } from '../rux-global-status-bar';

describe('rux-global-status-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html: `<rux-global-status-bar></rux-global-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar>
        <mock:shadow-root>
          <header>
            <slot name="left-side"></slot>
            <div class="app-meta" hidden>
              <h1><span class="app-version"></span></h1>
            </div>
            <slot></slot>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
      </rux-global-status-bar>
    `);
  });

  it('renders with app meta', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html: `<rux-global-status-bar appname="Test App Name" version="test v1.0"></rux-global-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar appname="Test App Name" version="test v1.0">
        <mock:shadow-root>
          <header>
            <slot name="left-side"></slot>
            <div class="app-meta">
              <h1>Test App Name<span class="app-version">test v1.0</span></h1>
            </div>
            <slot></slot>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
      </rux-global-status-bar>
    `);
  });

  it('renders with app meta and slotted content', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html:
        `<rux-global-status-bar appname="Test App Name" version="test v1.0">
          <i slot="left-side">Menu Icon</i>
          <div>Tab links<div>
          <button slot="right-side">Master on/off</button>
        </rux-global-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar appname="Test App Name" version="test v1.0">
        <mock:shadow-root>
          <header>
            <slot name="left-side"></slot>
            <div class="app-meta">
              <h1>Test App Name<span class="app-version">test v1.0</span></h1>
            </div>
            <slot></slot>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
        <i slot="left-side">Menu Icon</i>
        <div>Tab links<div>
        <button slot="right-side">Master on/off</button>
      </rux-global-status-bar>
    `);
  });
});
