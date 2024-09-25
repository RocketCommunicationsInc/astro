import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-menu-item
            ?disabled="${args.disabled}"
            .download="${args.download}"
            .href="${args.href}"
            .rel="${args.rel}"
            .target="${args.target}"
            .value="${args.value}"
            >Menu Item</rux-menu-item
        >
    `
}

const Disabled = (args) => {
    return html`
        <rux-menu-item
            ?disabled="${args.disabled}"
            .download="${args.download}"
            .href="${args.href}"
            .rel="${args.rel}"
            .target="${args.target}"
            .value="${args.value}"
            >Menu Item</rux-menu-item
        >
    `
}

export default {
    title: 'Components/Pop Up/Menu Item',
    component: 'rux-menu-item',

    subcomponents: {
        RuxPopUp: 'rux-pop-up',
        RuxMenu: 'rux-menu',
    },

    argTypes: extractArgTypes('rux-menu-item'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        disabled: false,
        download: '',
        href: '',
        rel: '',
        target: '',
        value: {},
    },
}

export const Disabled_ = {
    render: Disabled.bind(),

    args: {
        disabled: true,
        download: '',
        href: '',
        rel: '',
        target: '',
        value: {},
    },

    name: 'Disabled',
}
