import { html } from 'lit-html'
import '../components/rux-card/rux-card.ts'
import '../components/rux-button/rux-button.ts'

const Base = () => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            Suscipit potenti habitant penatibus praesent quam class erat purus nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero maecenas dictumst donec dis cras
            ante finibus.
        </rux-card>
    `
}

const WithHeader = () => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            <div slot="header">Card Title</div>
            Suscipit potenti habitant penatibus praesent quam class erat purus nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero maecenas dictumst donec dis cras
            ante finibus.
        </rux-card>
    `
}

const WithFooter = () => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            Suscipit potenti habitant penatibus praesent quam class erat purus nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero maecenas dictumst donec dis cras
            ante finibus.
            <div slot="footer">
                <rux-button size="small" style="width: 100%;">Primary button</rux-button>
            </div>
        </rux-card>
    `
}

const WithFullExample = () => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            <div slot="header" style="display: flex; align-items: center;">Card Title</div>
            <div style="padding-top: 20px; padding-bottom: 20px; text-align: center;">
                <p>Card content goes here</p>
            </div>
            <div slot="footer" style="justify-content: center; display: flex;">
                <rux-button size="small">Primary button</rux-button>
            </div>
        </rux-card>
    `
}

export default {
    title: 'Components/Card',
    component: 'rux-card',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}

export const Header = {
    render: WithHeader.bind(),
    name: 'With Header',
}

export const Footer = {
    render: WithFooter.bind(),
    name: 'With Footer',
}

export const FullExample = {
    render: WithFullExample.bind(),
    name: 'Full Example',
}
