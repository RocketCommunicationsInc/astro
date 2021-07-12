import { html, render } from 'lit-html'
import { boolean, withKnobs } from '@storybook/addon-knobs'

//@ts-ignore
import readme from '../components/rux-tabs/readme.md'

export default {
    title: 'Components/Tabs',
    decorators: [withKnobs],
    parameters: {
        readme: {
            sidebar: readme,
        },
    },
}

export const Tabs = () => {
    const smallKnob = boolean('Small', false)
    const disabledKnob = boolean('Disabled 3rd Tab', true)

    return html`
        <style>
            pre {
                margin: 0;
            }
        </style>
        <div style="display: flex; flex-flow: column;">
            <rux-tabs ?small="${smallKnob}" id="tab-set-id-1">
                <rux-tab id="tab-id-1">Tab 1</rux-tab>
                <rux-tab id="tab-id-2">Tab 2</rux-tab>
                <rux-tab ?disabled="${disabledKnob}" id="tab-id-3"
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

Tabs.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}

export const TabsCompact = () => html`
    <div style="display: flex; flex-flow: column;">
        <div
            style="border: rgba(255,255,255, .25) dashed 1px; margin: 1vw 1vw 0; padding: 2px;"
        >
            <rux-tabs small id="tab-set-id-2">
                <rux-tab id="tab-id-2-1">Tab 1</rux-tab>
                <rux-tab id="tab-id-2-2">Tab 2</rux-tab>
                <rux-tab id="tab-id-2-3" disabled>Tab 3 (disabled) </rux-tab>
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

TabsCompact.story = {
    name: 'Tabs (Small)',

    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}
