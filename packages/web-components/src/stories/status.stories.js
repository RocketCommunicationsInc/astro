import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div style="display: flex; margin-top: 1rem;">
            <rux-status
                status="${args.status}"
                style="margin: auto;"
            ></rux-status>
        </div>
    `
}

const WithAllVariants = () => {
    return html`
        <style>
            ul {
                display: flex;
                list-style: none;
                justify-content: space-around;
                padding: 0 1rem;
            }
            ul li {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        </style>
        <ul>
            <li>
                <rux-status status="off"></rux-status>
                <div class="label">Off</div>
            </li>
            <li>
                <rux-status status="standby"></rux-status>
                <div class="label">Standby</div>
            </li>
            <li>
                <rux-status status="normal"></rux-status>
                <div class="label">Normal</div>
            </li>
            <li>
                <rux-status status="caution"></rux-status>
                <div class="label">Caution</div>
            </li>
            <li>
                <rux-status status="serious"></rux-status>
                <div class="label">Serious</div>
            </li>
            <li>
                <rux-status status="critical"></rux-status>
                <div class="label">Critical</div>
            </li>
        </ul>
    `
}

export default {
    title: 'Components/Status',
    component: 'rux-status',
    argTypes: extractArgTypes('rux-status'),
}

export const Default = {
    render: Base.bind(),

    args: {
        status: 'critical',
    },

    name: 'Default',
}

export const AllVariants = {
    render: WithAllVariants.bind(),
    name: 'All Variants',

    argTypes: {
        status: {
            table: {
                disable: true,
            },
        },
    },
}
