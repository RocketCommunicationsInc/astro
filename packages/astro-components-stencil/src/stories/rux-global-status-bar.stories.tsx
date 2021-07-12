import { html, render } from 'lit-html'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

//@ts-ignore
import readme from '../components/rux-global-status-bar/readme.md'

export default {
    title: 'Components/Global Status Bar',
    decorators: [withKnobs],
    parameters: {
        readme: {
            sidebar: readme,
        },
    },
}

export const GlobalStatusBar = () => {
    const includeIconKnob = boolean('Include Icon', true)
    const includeAppStateKnob = boolean('Include App State', false)
    const includeUsernameKnob = boolean('Include Username', false)
    const appDomainKnob = text('App Domain', 'Astro')
    const appNameKnob = text('App Name', 'Dashboard')
    const appVersionKnob = text('Version', '4.0 alpha')
    const menuIconKnob = text('Menu Icon', 'apps')

    return html`
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                .includeIcon="${includeIconKnob}"
                .includeAppState="${includeAppStateKnob}"
                .includeUsername="${includeUsernameKnob}"
                .appDomain="${appDomainKnob}"
                .appName="${appNameKnob}"
                .appVersion="${appVersionKnob}"
                .menuIcon="${menuIconKnob}"
            >
            </rux-global-status-bar>
        </div>
    `
}

GlobalStatusBar.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}

export const GlobalStatusBarWithAppState = () => {
    const includeIconKnob = boolean('Include Icon', true)
    const includeAppStateKnob = boolean('Include App State', true)
    const includeUsernameKnob = boolean('Include Username', true)
    const appDomainKnob = text('App Domain', 'Astro')
    const appNameKnob = text('App Name', 'Dashboard')
    const appVersionKnob = text('Version', '4.0 alpha')
    const menuIconKnob = text('Menu Icon', 'apps')

    return html`
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                .includeIcon="${includeIconKnob}"
                .includeAppState="${includeAppStateKnob}"
                .includeUsername="${includeUsernameKnob}"
                .appDomain="${appDomainKnob}"
                .appName="${appNameKnob}"
                .appVersion="${appVersionKnob}"
                .menuIcon="${menuIconKnob}"
            >
            </rux-global-status-bar>
        </div>
    `
}

GlobalStatusBarWithAppState.storyName =
    'Global Status Bar with App State and Username'

GlobalStatusBarWithAppState.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}

export const GlobalStatusBarWithSlotContent = () => {
    const includeIconKnob = boolean('Include Icon', true)
    const includeAppStateKnob = boolean('Include App State', true)
    const includeUsernameKnob = boolean('Include Username', true)
    const appDomainKnob = text('App Domain', 'Astro')
    const appNameKnob = text('App Name', 'Dashboard')
    const appVersionKnob = text('Version', '4.0 alpha')
    const menuIconKnob = text('Menu Icon', 'apps')

    return html`
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                class="dark-theme"
                .includeIcon="${includeIconKnob}"
                .includeAppState="${includeAppStateKnob}"
                .includeUsername="${includeUsernameKnob}"
                .appDomain="${appDomainKnob}"
                .appName="${appNameKnob}"
                .appVersion="${appVersionKnob}"
                .menuIcon="${menuIconKnob}"
            >
                <rux-clock></rux-clock>
                <rux-button slot="right-side">Emergency shut off</rux-button>
            </rux-global-status-bar>
        </div>
    `
}

GlobalStatusBarWithSlotContent.storyName = 'Global Status Bar with Slot Content'

GlobalStatusBarWithSlotContent.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}

export const GlobalStatusBarWithTabs = () => {
    const includeIconKnob = boolean('Include Icon', true)
    const includeAppStateKnob = boolean('Include App State', true)
    const includeUsernameKnob = boolean('Include Username', true)
    const appDomainKnob = text('App Domain', 'Astro')
    const appNameKnob = text('App Name', 'Dashboard')
    const appVersionKnob = text('Version', '4.0 alpha')
    const menuIconKnob = text('Menu Icon', 'apps')

    return html`
        <div style="display: flex; justify-content: center; flex-wrap: wrap;">
            <rux-global-status-bar
                class="dark-theme"
                .includeIcon="${includeIconKnob}"
                .includeAppState="${includeAppStateKnob}"
                .includeUsername="${includeUsernameKnob}"
                .appDomain="${appDomainKnob}"
                .appName="${appNameKnob}"
                s
                .appVersion="${appVersionKnob}"
                .menuIcon="${menuIconKnob}"
            >
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-3">Tab 3</rux-tab>
                </rux-tabs>
                <rux-button slot="right-side">Emergency shut off</rux-button>
            </rux-global-status-bar>
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

GlobalStatusBarWithTabs.storyName = 'Global Status Bar with Tabs'

GlobalStatusBarWithTabs.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}
