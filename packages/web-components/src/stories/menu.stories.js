import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = () => {
    return html`
        <rux-menu>
            <rux-menu-item>Menu Item</rux-menu-item>
            <rux-menu-item>Menu Item</rux-menu-item>
            <rux-menu-item>Menu Item</rux-menu-item>
        </rux-menu>
    `
}

export default {
    title: 'Components/Pop Up/Menu',
    component: 'rux-menu',

    subcomponents: {
        RuxPopUp: 'rux-pop-up',
        RuxMenuItem: 'rux-menu-item',
        RuxMenuItemDivider: 'rux-menu-item-divider',
    },

    argTypes: extractArgTypes('rux-menu'),

    parameters: {
        actions: {
            handles: ['ruxmenuselected', 'rux-menu'],
        },
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}