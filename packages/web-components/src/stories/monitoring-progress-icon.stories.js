import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-monitoring-progress-icon
                progress="${args.progress}"
                .max="${args.max}"
                .min="${args.min}"
                label="${args.label}"
                .range="${args.range}"
                .sublabel="${args.sublabel}"
                .notifications="${args.notifications}"
            ></rux-monitoring-progress-icon>
        </div>
    `
}

export default {
    title: 'Components/Monitoring Progress Icon',
    component: 'rux-monitoring-progress-icon',
    argTypes: extractArgTypes('rux-monitoring-progress-icon'),
}

export const MonitoringProgressIcon = {
    render: Base.bind(),

    args: {
        progress: 50,
        label: 'Progress',

        range: [
            {
                threshold: 17,
                status: 'off',
            },
            {
                threshold: 33,
                status: 'standby',
            },
            {
                threshold: 49,
                status: 'normal',
            },
            {
                threshold: 65,
                status: 'caution',
            },
            {
                threshold: 81,
                status: 'serious',
            },
            {
                threshold: 100,
                status: 'critical',
            },
        ],

        max: 100,
        min: 0,
        notifications: 0,
        sublabel: '',
    },

    name: 'Monitoring Progress Icon',
}
