import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-monitoring-icon
                icon="${args.icon}"
                label="${args.label}"
                status="${args.status}"
                notifications="${args.notifications}"
                sublabel="${args.sublabel}"
                size="${args.size}"
            ></rux-monitoring-icon>
        </div>
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-monitoring-icon
                icon="widgets"
                label="Widgets icon"
                status="${args.status}"
                notifications="${args.notifications}"
            ></rux-monitoring-icon>
        </div>
    `
}

const AllVariants = (args) => {
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
                <rux-monitoring-icon
                    icon="mission"
                    label="Mission"
                    sublabel="Sub-label"
                    status="off"
                    notifications="4"
                ></rux-monitoring-icon>
            </li>
            <li>
                <rux-monitoring-icon
                    icon="equipment"
                    label="Equipment"
                    sublabel="Sub-label"
                    status="standby"
                    notifications="100"
                ></rux-monitoring-icon>
            </li>
            <li>
                <rux-monitoring-icon
                    icon="processor"
                    label="Processor"
                    sublabel="Sub-label"
                    status="normal"
                ></rux-monitoring-icon>
            </li>
            <li>
                <rux-monitoring-icon
                    icon="antenna"
                    label="Antenna"
                    sublabel="Sub-label"
                    status="caution"
                    notifications="1200"
                ></rux-monitoring-icon>
            </li>
            <li>
                <rux-monitoring-icon
                    icon="antenna-transmit"
                    label="NROL"
                    sublabel="Sub-label"
                    status="serious"
                    notifications="1000000"
                ></rux-monitoring-icon>
            </li>
            <li>
                <rux-monitoring-icon
                    icon="antenna-receive"
                    label="SBSS=1"
                    sublabel="Receiving"
                    status="critical"
                    notifications="34000000000000"
                ></rux-monitoring-icon>
            </li>
        </ul>
    `
}

export default {
    title: 'Components/Monitoring Icon',
    component: 'rux-monitoring-icon',
    argTypes: extractArgTypes('rux-monitoring-icon'),
}

export const Default_ = {
    render: Default.bind(),

    args: {
        status: 'normal',
        icon: 'altitude',
        label: 'Monitoring',
        notifications: 1,
        sublabel: '',
        size: '2.5rem',
    },

    name: 'Default',
}

export const AllVariants_ = {
    render: AllVariants.bind(),
    name: 'All Variants',

    argTypes: {
        label: {
            table: {
                disable: true,
            },
        },

        icon: {
            table: {
                disable: true,
            },
        },

        notifications: {
            table: {
                disable: true,
            },
        },

        status: {
            table: {
                disable: true,
            },
        },

        sublabel: {
            table: {
                disable: true,
            },
        },
    },
}
