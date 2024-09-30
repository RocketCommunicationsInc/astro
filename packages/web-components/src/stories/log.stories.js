import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-log filter="${args.filter}" .data="${args.data}"> </rux-log>
        </div>
    `
}

export default {
    title: 'Components/Log',
    component: 'rux-log',
    argTypes: extractArgTypes('rux-log'),
}

export const Default = {
    render: Base.bind(),

    args: {
        data: [
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'serious',
                message: 'USA-177 experienced solar panel misalignment.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'caution',
                message: 'USA-168 suffered power degradation.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'standby',
                message: 'Antenna DGS 2 has weak signal.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Black FEP 121 is offline.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Antenna DGS 1 went offline.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'serious',
                message: 'USA-177 experienced solar panel misalignment.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'caution',
                message: 'USA-168 suffered power degradation.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'standby',
                message: 'Antenna DGS 2 has weak signal.',
            },
            {
                timestamp: new Date(1557503698781),
                status: 'off',
                message: 'Black FEP 121 is offline.',
            },
        ],

        filter: '',
        timezone: 'UTC',
    },

    name: 'Log',
}
