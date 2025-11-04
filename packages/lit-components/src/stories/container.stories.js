import { html } from 'lit-html'
import '../components/rux-container/rux-container.ts'
import '../components/rux-tabs/rux-tabs.ts'
import '../components/rux-slider/rux-slider.ts'
import '../components/rux-button/rux-button.ts'

const Base = () => {
    return html`
        <rux-container>
            Suscipit potenti habitant penatibus praesent quam class erat purus nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero maecenas dictumst donec dis cras
            ante finibus.
        </rux-container>
    `
}

const Header = () => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            Proin nec ac est nascetur tristique mauris conubia mollis viverra justo, malesuada erat dui quisque habitant non maecenas inceptos.
        </rux-container>
    `
}

const TabBar = () => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div slot="tab-bar">
                <rux-tabs id="tab-set-id-1" small>
                    <rux-tab id="tab-id-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-3" disabled>Tab 3 (disabled)</rux-tab>
                </rux-tabs>
            </div>
            <rux-tab-panels aria-labelledby="tab-set-id-1">
                <rux-tab-panel aria-labelledby="tab-id-1"> Tab 1 HTML content </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-2"> Tab 2 HTML content </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-3"> Tab 3 HTML content </rux-tab-panel>
            </rux-tab-panels>
        </rux-container>
    `
}

const Toolbar = () => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div slot="toolbar">
                <rux-slider></rux-slider>
            </div>
            <div>
                Volutpat malesuada cubilia platea justo porttitor penatibus venenatis cursus vehicula blandit aliquam tellus conubia, phasellus erat accumsan nulla varius ultrices
                luctus torquent habitasse interdum iaculis tristique.
            </div>
        </rux-container>
    `
}

const Footer = () => {
    return html`
        <rux-container>
            <div slot="header">Container</div>
            <div>
                Sem neque faucibus netus malesuada congue dui cubilia blandit curae finibus tristique praesent penatibus commodo aliquam viverra nunc, molestie semper aptent taciti
                tincidunt vulputate nisi aenean sociosqu vitae leo tempor nibh maecenas lobortis.
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
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}

export const WithHeader = {
    render: Header.bind(),
    name: 'With Header',
}

export const WithTabBar = {
    render: TabBar.bind(),
    name: 'With Tab Bar',
}

export const WithToolbar = {
    render: Toolbar.bind(),
    name: 'With Toolbar',
}

export const WithFooter = {
    render: Footer.bind(),
    name: 'With Footer',
}
