import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div
            style="width: 100%; display: flex; align-items: center; justify-content: center;"
        >
            <rux-indeterminate-progress></rux-indeterminate-progress>
        </div>
    `
}

export default {
    title: 'Components/Indeterminate Progress',
    component: 'rux-indeterminate-progress',
    argTypes: extractArgTypes('rux-indeterminate-progress'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
}
