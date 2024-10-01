import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = () => {
    return html`
        <div style="padding: 5%;">
            <rux-breadcrumb>
                <rux-breadcrumb-item href="#">Home</rux-breadcrumb-item>
                <rux-breadcrumb-item href="#">Second Item</rux-breadcrumb-item>
                <rux-breadcrumb-item>Current Item</rux-breadcrumb-item>
            </rux-breadcrumb>
        </div>
    `
}

const WithIcons = () => {
    return html`
        <div style="padding: 5%;">
            <rux-breadcrumb>
                <rux-breadcrumb-item href="#"
                    ><rux-icon icon="home"></rux-icon> Home</rux-breadcrumb-item
                >
                <rux-breadcrumb-item href="#"
                    ><rux-icon icon="border-clear"></rux-icon> Second
                    Item</rux-breadcrumb-item
                >
                <rux-breadcrumb-item
                    ><rux-icon icon="person"></rux-icon>Current
                    Item</rux-breadcrumb-item
                >
            </rux-breadcrumb>
        </div>
    `
}

const WithIconsOnly = () => {
    return html`
        <div style="padding: 5%;">
            <rux-breadcrumb>
                <rux-breadcrumb-item href="#"
                    ><rux-icon icon="home"></rux-icon
                ></rux-breadcrumb-item>
                <rux-breadcrumb-item href="#"
                    ><rux-icon icon="border-clear"></rux-icon
                ></rux-breadcrumb-item>
                <rux-breadcrumb-item
                    ><rux-icon icon="person"></rux-icon
                ></rux-breadcrumb-item>
            </rux-breadcrumb>
        </div>
    `
}

export default {
    title: 'Components/Breadcrumb',
    component: 'rux-breadcrumb',

    subcomponents: {
        RuxBreadcrumbItem: 'rux-breadcrumb-item',
    },

    argTypes: extractArgTypes('rux-breadcrumb'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}

export const Icons = {
    render: WithIcons.bind(),
    name: 'Icons',
}

export const IconsOnly = {
    render: WithIconsOnly.bind(),
    name: 'IconsOnly',
}
