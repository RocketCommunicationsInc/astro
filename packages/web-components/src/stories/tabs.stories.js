import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
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
                <rux-tab ?disabled="${args.disabled}" id="tab-id-3"
                    >Tab 3</rux-tab
                >
            </rux-tabs>
            <rux-tab-panels aria-labelledby="tab-set-id-1">
                <rux-tab-panel aria-labelledby="tab-id-1">
                    <div
                        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
                    >
                        <pre><<span>!-- Tab 1 HTML content --</span>></pre>
                    </div>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-2">
                    <div
                        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
                    >
                        <pre><<span>!-- Tab 2 HTML content --</span>></pre>
                    </div>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-3">
                    <div
                        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;"
                    >
                        <pre><<span>!-- Tab 3 HTML content --</span>></pre>
                    </div>
                </rux-tab-panel>
            </rux-tab-panels>
        </div>
    `
}

const Small = (args) => {
    return html`
        <div style="display: flex; flex-flow: column;">
            <div
                style="border: rgba(255,255,255, .25) dashed 1px; margin: 1vw 1vw 0; padding: 2px;"
            >
                <rux-tabs ?small="${args.small}" id="tab-set-id-2">
                    <rux-tab id="tab-id-2-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-2-3" disabled
                        >Tab 3 (disabled)
                    </rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-2">
                    <rux-tab-panel aria-labelledby="tab-id-2-1">
                        <pre
                            style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"
                        ><<span>!-- Small tab 1 HTML content --</span>></pre>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2-2">
                        <pre
                            style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"
                        ><<span>!-- Small tab 2 HTML content --</span>></pre>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-2-3">
                        <pre
                            style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"
                        ><<span>!-- Small tab 3 HTML content --</span>></pre>
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
    },

    argTypes: extractArgTypes('rux-tabs'),

    parameters: {
        actions: {
            handles: ['ruxselected rux-tabs'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        small: false,
    },
}

export const Small_ = {
    render: Small.bind(),
    name: 'Small',

    args: {
        small: true,
    },
}
