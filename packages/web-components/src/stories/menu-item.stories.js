import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
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
    argTypes: extractArgTypes('rux-menu-item'),
}

export const Default = {
    render: Base.bind(),
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

export const Disabled = {
    render: Base.bind(),

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
