import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-container>
            Suscipit potenti habitant penatibus praesent quam class erat purus
            nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero
            maecenas dictumst donec dis cras ante finibus.
        </rux-container>
    `
}

const WithHeader = (args) => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            Proin nec ac est nascetur tristique mauris conubia mollis viverra
            justo, malesuada erat dui quisque habitant non maecenas inceptos.
        </rux-container>
    `
}

const WithTabBar = (args) => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div slot="tab-bar">
                <rux-tabs id="tab-set-id-1" small>
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-3" disabled> Tab 3 (disabled) </rux-tab>
                </rux-tabs>
            </div>
            <rux-tab-panels aria-labelledby="tab-set-id-1">
                <rux-tab-panel aria-labelledby="tab-id-1">
                    Tab 1 HTML content
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-2">
                    Tab 2 HTML content
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-3">
                    Tab 3 HTML content
                </rux-tab-panel>
            </rux-tab-panels>
        </rux-container>
    `
}

const WithToolbar = (args) => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div slot="toolbar">
                <rux-slider></rux-slider>
            </div>
            <div>
                Volutpat malesuada cubilia platea justo porttitor penatibus
                venenatis cursus vehicula blandit aliquam tellus conubia,
                phasellus erat accumsan nulla varius ultrices luctus torquent
                habitasse interdum iaculis tristique.
            </div>
        </rux-container>
    `
}

const WithFooter = (args) => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div>
                Sem neque faucibus netus malesuada congue dui cubilia blandit
                curae finibus tristique praesent penatibus commodo aliquam
                viverra nunc, molestie semper aptent taciti tincidunt vulputate
                nisi aenean sociosqu vitae leo tempor nibh maecenas lobortis.
            </div>
            <div slot="footer">
                <rux-button style="width: 100%;">Primary Button</rux-button>
            </div>
        </rux-container>
    `
}

const WithCards = (args) => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div slot="tab-bar">
                <rux-tabs id="card-tab-set" small>
                    <rux-tab id="card-tab-1">Tab 1</rux-tab>
                    <rux-tab id="card-tab-2">Tab 2</rux-tab>
                    <rux-tab id="card-tab-3" disabled>
                        Tab 3 (disabled)
                    </rux-tab>
                </rux-tabs>
            </div>
            <rux-tab-panels aria-labelledby="card-tab-set">
                <rux-tab-panel aria-labelledby="card-tab-1">
                    <div
                        style="display: grid; gap: 20px; grid-template-columns: repeat(3, minmax(0, 1fr));"
                    >
                        <rux-card>
                            <div
                                slot="header"
                                style="display: flex; align-items: center;"
                            >
                                Card Title
                                <rux-icon
                                    size="26px"
                                    icon="expand-more"
                                    style="margin-left: auto;"
                                ></rux-icon>
                            </div>
                            <div
                                style="display: flex; justify-content: center;"
                            >
                                <rux-clock style=""></rux-clock>
                            </div>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: center;"
                            >
                                <rux-button borderless>View all</rux-button>
                            </div>
                        </rux-card>
                        <rux-card>
                            <div
                                slot="header"
                                style="display: flex; align-items: center;"
                            >
                                Card Title
                                <rux-icon
                                    size="26px"
                                    icon="expand-more"
                                    style="margin-left: auto;"
                                ></rux-icon>
                            </div>
                            <div
                                style="display: flex; justify-content: center;"
                            >
                                <rux-clock style=""></rux-clock>
                            </div>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: center;"
                            >
                                <rux-button borderless>View all</rux-button>
                            </div>
                        </rux-card>
                        <rux-card>
                            <div
                                slot="header"
                                style="display: flex; align-items: center;"
                            >
                                Card Title
                                <rux-icon
                                    size="26px"
                                    icon="expand-more"
                                    style="margin-left: auto;"
                                ></rux-icon>
                            </div>
                            <div
                                style="display: flex; justify-content: center;"
                            >
                                <rux-clock style=""></rux-clock>
                            </div>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: center;"
                            >
                                <rux-button borderless>View all</rux-button>
                            </div>
                        </rux-card>
                        <rux-card>
                            <div
                                slot="header"
                                style="display: flex; align-items: center;"
                            >
                                Card Title
                                <rux-icon
                                    size="26px"
                                    icon="expand-more"
                                    style="margin-left: auto;"
                                ></rux-icon>
                            </div>
                            <div
                                style="display: flex; justify-content: center;"
                            >
                                <rux-clock style=""></rux-clock>
                            </div>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: center;"
                            >
                                <rux-button borderless>View all</rux-button>
                            </div>
                        </rux-card>
                        <rux-card>
                            <div
                                slot="header"
                                style="display: flex; align-items: center;"
                            >
                                Card Title
                                <rux-icon
                                    size="26px"
                                    icon="expand-more"
                                    style="margin-left: auto;"
                                ></rux-icon>
                            </div>
                            <div
                                style="display: flex; justify-content: center;"
                            >
                                <rux-clock style=""></rux-clock>
                            </div>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: center;"
                            >
                                <rux-button borderless>View all</rux-button>
                            </div>
                        </rux-card>
                        <rux-card>
                            <div
                                slot="header"
                                style="display: flex; align-items: center;"
                            >
                                Card Title
                                <rux-icon
                                    size="26px"
                                    icon="expand-more"
                                    style="margin-left: auto;"
                                ></rux-icon>
                            </div>
                            <div
                                style="display: flex; justify-content: center;"
                            >
                                <rux-clock style=""></rux-clock>
                            </div>
                            <div
                                slot="footer"
                                style="display: flex; justify-content: center;"
                            >
                                <rux-button borderless>View all</rux-button>
                            </div>
                        </rux-card>
                    </div>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="card-tab-2">
                    Tab 2 HTML content
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="card-tab-3">
                    Tab 3 HTML content
                </rux-tab-panel>
            </rux-tab-panels>
        </rux-container>
    `
}

const FullExample = (args) => {
    return html`
        <rux-container style="--body-padding: 0;">
            <div slot="header">Parent container title</div>
            <div slot="tab-bar">
                <rux-tabs id="tab-set-id-2" small>
                    <rux-tab id="tab-id-4">Tab 1</rux-tab>
                    <rux-tab id="tab-id-5">Tab 2</rux-tab>
                    <rux-tab id="tab-id-6" disabled> Tab 3 (disabled) </rux-tab>
                </rux-tabs>
            </div>
            <div slot="toolbar">
                <rux-slider></rux-slider>
            </div>
            <div>
                <rux-tab-panels aria-labelledby="tab-set-id-2">
                    <rux-tab-panel aria-labelledby="tab-id-4">
                        <rux-table>
                            <rux-table-header>
                                <rux-table-header-row>
                                    <rux-table-header-cell>
                                        Header text
                                    </rux-table-header-cell>
                                    <rux-table-header-cell>
                                        Header text
                                    </rux-table-header-cell>
                                    <rux-table-header-cell>
                                        Header text
                                    </rux-table-header-cell>
                                    <rux-table-header-cell>
                                        Header text
                                    </rux-table-header-cell>
                                </rux-table-header-row>
                            </rux-table-header>
                            <rux-table-body>
                                <rux-table-row>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                </rux-table-row>
                                <rux-table-row>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                </rux-table-row>
                                <rux-table-row>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                </rux-table-row>
                                <rux-table-row>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                    <rux-table-cell>Table text</rux-table-cell>
                                </rux-table-row>
                            </rux-table-body>
                        </rux-table>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-5">
                        <div style="padding: 1.25rem;">Tab 2 HTML content</div>
                    </rux-tab-panel>
                    <rux-tab-panel aria-labelledby="tab-id-6"
                        >Tab 3 HTML content</rux-tab-panel
                    >
                </rux-tab-panels>
            </div>
            <div slot="footer">
                <rux-button style="width: 100%;">Primary Button</rux-button>
            </div>
        </rux-container>
    `
}

export default {
    title: 'Components/Container',
    component: 'rux-container',
    argTypes: extractArgTypes('rux-container'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
}

export const WithHeader_ = {
    render: WithHeader.bind(),
    name: 'With Header',
}

export const WithTabBar_ = {
    render: WithTabBar.bind(),
    name: 'With Tab Bar',
}

export const WithToolbar_ = {
    render: WithToolbar.bind(),
    name: 'With Toolbar',
}

export const WithFooter_ = {
    render: WithFooter.bind(),
    name: 'With Footer',
}

export const WithCards_ = {
    render: WithCards.bind(),
    name: 'With Cards',
}

export const FullExample_ = {
    render: FullExample.bind(),
    name: 'Full Example',
}
