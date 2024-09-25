import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                include-icon="${args.includeIcon}"
                app-domain="${args.appDomain}"
                app-name="${args.appName}"
                app-version="${args.appVersion}"
                menu-icon="${args.menuIcon}"
                username="${args.username}"
                app-state-color="${args.appStateColor}"
                app-state="${args.appState}"
            >
            </rux-global-status-bar>
        </div>
    `
}

const GlobalStatusBarWithAppState = (args) => {
    return html`
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                include-icon="${args.includeIcon}"
                app-state="${args.appState}"
                app-state-color="${args.appStateColor}"
                username="${args.username}"
                app-domain="${args.appDomain}"
                app-name="${args.appName}"
                app-version="${args.appVersion}"
                menu-icon="${args.menuIcon}"
            >
            </rux-global-status-bar>
        </div>
    `
}

const GlobalStatusBarWithSlotContent = (args) => {
    return html`
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                include-icon="${args.includeIcon}"
                app-state="${args.appState}"
                app-state-color="${args.appStateColor}"
                username="${args.username}"
                app-domain="${args.appDomain}"
                app-name="${args.appName}"
                app-version="${args.appVersion}"
                menu-icon="${args.menuIcon}"
            >
                <rux-clock></rux-clock>
                <rux-button slot="right-side">Emergency shut off</rux-button>
            </rux-global-status-bar>
        </div>
    `
}

const GlobalStatusBarWithTabs = (args) => {
    return html`
        <rux-global-status-bar
            include-icon="${args.includeIcon}"
            app-state="${args.appState}"
            app-state-color="${args.appStateColor}"
            username="${args.username}"
            app-domain="${args.appDomain}"
            app-name="${args.appName}"
            app-version="${args.appVersion}"
            menu-icon="${args.menuIcon}"
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
    `
}

const OtherVariants = () => {
    return html`
        <style>
            h4 {
                text-align: center;
            }
        </style>
        <h4>No Icon</h4>
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                app-state="Production"
                username="Username"
                app-name="Dashboard"
                app-domain="Astro"
                app-version="4.0 Alpha"
            >
            </rux-global-status-bar>
        </div>
        <br />
        <h4>No App Name</h4>
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                include-icon
                app-domain="astro"
                menu-icon="apps"
                username="Username"
                app-state="Production"
                app-version="4.0 Alpha"
            >
            </rux-global-status-bar>
        </div>
        <br />
        <h4>No App Domain</h4>
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                include-icon
                menu-icon="apps"
                username="Username"
                app-state="Production"
                app-version="4.0 Alpha"
                app-name="Dashboard"
            >
            </rux-global-status-bar>
        </div>
        <br />
        <h4>No App Version</h4>
        <div style="display: flex; justify-content: center;">
            <rux-global-status-bar
                include-icon
                menu-icon="apps"
                username="Username"
                app-state="Production"
                app-name="Dashboard"
                app-domain="Astro"
            >
            </rux-global-status-bar>
        </div>
    `
}

export default {
    title: 'Components/Global Status Bar',
    component: 'rux-global-status-bar',
    argTypes: extractArgTypes('rux-global-status-bar'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        appDomain: 'Astro',
        appName: 'Dashboard',
        appVersion: '4.0 Alpha',
        menuIcon: 'apps',
        includeIcon: true,
        appState: '',
        appStateColor: '',
        username: '',
    },

    argTypes: {
        appStateColor: {
            control: {
                type: 'select',
            },
        },
    },
}

export const WithAppState = {
    render: GlobalStatusBarWithAppState.bind(),

    args: {
        appState: 'Production',
        appStateColor: 'tag1',
        username: 'Joan Smith',
        appDomain: 'Astro',
        appName: 'Dashboard',
        appVersion: '4.0 Alpha',
        menuIcon: 'apps',
        includeIcon: true,
    },

    argTypes: {
        appStateColor: {
            control: {
                type: 'select',
            },
        },
    },

    name: 'With App State',
}

export const WithSlotContent = {
    render: GlobalStatusBarWithSlotContent.bind(),

    args: {
        appState: 'Production',
        appStateColor: 'tag1',
        username: 'Joan Smith',
        appDomain: 'Astro',
        appName: 'Dashboard',
        appVersion: '4.0 Alpha',
        menuIcon: 'apps',
        includeIcon: true,
    },

    argTypes: {
        appStateColor: {
            control: {
                type: 'select',
            },
        },
    },

    name: 'With Slot Content',
}

export const WithTabs = {
    render: GlobalStatusBarWithTabs.bind(),

    args: {
        appState: 'Production',
        appStateColor: 'tag1',
        username: 'Joan Smith',
        appDomain: 'Astro',
        appName: 'Dashboard',
        appVersion: '4.0 Alpha',
        menuIcon: 'apps',
        includeIcon: true,
    },

    argTypes: {
        appStateColor: {
            control: {
                type: 'select',
            },
        },
    },

    name: 'With Tabs',
}

export const OtherVariants_ = {
    render: OtherVariants.bind(),
    name: 'Other Variants',
}
