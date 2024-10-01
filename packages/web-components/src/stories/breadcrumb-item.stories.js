import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div style="padding: 5%;">
            <rux-breadcrumb-item href=${args.href} current=${args.current}
                >Breadcrumb Item</rux-breadcrumb-item
            >
        </div>
    `
}

const Icon = (args) => {
    return html`
        <div style="padding: 5%;">
            <rux-breadcrumb-item href=${args.href} current=${args.current}
                ><rux-icon icon="border-clear"></rux-icon> Breadcrumb
                Item</rux-breadcrumb-item
            >
        </div>
    `
}

const IconOnly = (args) => {
    return html`
        <div style="padding: 5%;">
            <rux-breadcrumb-item href=${args.href} current=${args.current}
                ><rux-icon icon="border-clear"></rux-icon
            ></rux-breadcrumb-item>
        </div>
    `
}

export default {
    title: 'Components/Breadcrumb/Breadcrumb Item',
    component: 'rux-breadcrumb-item',

    subcomponents: {
        RuxBreadcrumb: 'rux-breadcrumb',
    },

    argTypes: extractArgTypes('rux-breadcrumb-item'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        href: '#',
        current: false,
    },
}

export const WithoutHref = {
    render: Base.bind(),
    name: 'Without HREF',

    args: {
        href: null,
        current: false,
    },
}

export const WithIcon = {
    render: Icon.bind(),
    name: 'With Icon',

    args: {
        href: '#',
        current: false,
    },
}

export const WithIconOnly = {
    render: IconOnly.bind(),
    name: 'Icon Only',

    args: {
        href: '#',
        current: false,
    },
}
