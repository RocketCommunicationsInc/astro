import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html` <rux-menu-item-divider></rux-menu-item-divider> `
}

export default {
    title: 'Components/Pop Up/Menu Item Divider',
    component: 'rux-menu-item-divider',

    subcomponents: {
        RuxPopUp: 'rux-pop-up',
    },

    argTypes: extractArgTypes('rux-menu-item-divider'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
}
