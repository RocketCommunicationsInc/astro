import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
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

export const Default = {
    render: Base.bind(),
    name: 'Default',
}
