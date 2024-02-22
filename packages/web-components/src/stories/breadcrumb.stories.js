import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
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

const Icons = (args) => {
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

const IconsOnly = (args) => {
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

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
}

export const Icons_ = {
    render: Icons.bind(),
    name: 'Icons',
}

export const IconsOnly_ = {
    render: IconsOnly.bind(),
    name: 'IconsOnly',
}
