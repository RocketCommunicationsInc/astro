import { html, render } from 'lit-html'
import { text, withKnobs } from '@storybook/addon-knobs'
import Readme from '../components/rux-log/readme.md'

export default {
    title: 'Components/Log',
    decorators: [withKnobs],
}

export const Log = () => {
    // /* FAKE LOG DATA */

    // dates cannot be dynamically generated in a story https://github.com/storybooks/storybook/tree/master/addons/knobs#date
    const logData = [
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
    ]

    // button causes unintention re-render, don't use til fixed https://github.com/storybooks/storybook/issues/6675
    // button('Add log item', () => { _updateLog(); })

    const filter = text('Filter log', '')

    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-log ._filterValue="${filter}" .data="${logData}"> </rux-log>
        </div>
    `
}

Log.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: Readme,
        },
    },
}
