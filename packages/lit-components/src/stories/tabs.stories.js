import { html } from 'lit-html'
import '../components/rux-tabs/rux-tabs.ts'

const Base = (args) => {
    return html`
        <style>
            pre {
                margin: 0;
            }
        </style>
        <div style="display: flex; flex-flow: column;">
            <rux-tabs ?small="${args.small}" id="tab-set-id-1">
                <rux-tab id="tab-id-1">Tab 1</rux-tab>
                <rux-tab id="tab-id-2">Tab 2</rux-tab>
                <rux-tab ?disabled="${args.disabled}" id="tab-id-3">Tab 3</rux-tab>
            </rux-tabs>
            <rux-tab-panels aria-labelledby="tab-set-id-1">
                <rux-tab-panel aria-labelledby="tab-id-1">
                    <div style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;">
                        <pre>Tab 1 HTML content</pre>
                    </div>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-2">
                    <div style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;">
                        <pre>Tab 2 HTML content</pre>
                    </div>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-3">
                    <div style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;">
                        <pre>Tab 3 HTML content</pre>
                    </div>
                </rux-tab-panel>
            </rux-tab-panels>
        </div>
    `
}

const SmallExample = () => {
    return html`
        <div style="display: flex; flex-flow: column;">
            <div style="border: rgba(255,255,255, .25) dashed 1px; margin: 1vw 1vw 0; padding: 2px;">
                <rux-tabs small id="tab-set-id-2">
                    <rux-tab id="tab-id-2-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-2-3" disabled>Tab 3 (disabled)</rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-2">
                    <rux-tab-panel aria-labelledby="tab-id-2-1">
                        <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;">Small tab 1 HTML content</pre>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2-2">
                        <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;">Small tab 2 HTML content</pre>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2-3">
                        <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;">Small tab 3 HTML content</pre>
                    </rux-tab-panel>
                </rux-tab-panels>
            </div>
        </div>
    `
}

export default {
    title: 'Components/Tabs',
    component: 'rux-tabs',
    subcomponents: {
        RuxTab: 'rux-tab',
        RuxTabPanels: 'rux-tab-panels',
        RuxTabPanel: 'rux-tab-panel',
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        small: false,
        disabled: false,
    },
}

export const Small = {
    render: SmallExample.bind(),
    name: 'Small',
}

export const WithDisabled = {
    render: Base.bind(),
    name: 'With Disabled Tab',
    args: {
        small: false,
        disabled: true,
    },
}
