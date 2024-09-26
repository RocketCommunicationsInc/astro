import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
        <div
            style="padding-top: 1%; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
            <rux-tag status=${args.status}> </rux-tag>
        </div>
    `
}

const VariantsExample = (args) => {
    return html`
        <style>
            #custom {
                width: 100%;
                background: #003655;
                border-color: #2b659b;
            }
        </style>
        <div
            style="display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
            <div style="padding: 1% 5%;">
                <rux-tag status="pass"> </rux-tag>
            </div>
            <div style="padding: 1% 5%;">
                <rux-tag status="fail"> </rux-tag>
            </div>
            <div style="padding: 1% 5%;">
                <rux-tag status="unknown"> </rux-tag>
            </div>
            <div style="padding: 1% 5%;">
                <rux-tag id="custom">Custom Tag</rux-tag>
            </div>
        </div>
    `
}

export default {
    title: 'Components/Tag',
    component: 'rux-tag',
    argTypes: extractArgTypes('rux-tag'),
}

export const Default = {
    render: Base.bind(),

    args: {
        status: 'pass',
    },

    name: 'Rux Tag',
}

export const AllVariants = {
    render: VariantsExample.bind(),
    name: 'All Variants',
}
