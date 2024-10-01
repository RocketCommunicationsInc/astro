import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html'

const Base = (args) => {
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

export const Default = {
    render: Base.bind(),
    name: 'Default',
}
