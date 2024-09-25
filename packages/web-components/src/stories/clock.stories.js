import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-clock
                .aos="${args.aos}"
                .los="${args.los}"
                .timezone="${args.timezone}"
                ?hide-timezone="${args.hideTimezone}"
                ?hide-date="${args.hideDate}"
                ?hide-labels="${args.hideLabels}"
                ?small="${args.small}"
                date-in="${args.dateIn}"
                ?static="${args.static}"
            ></rux-clock>
        </div>
    `
}

const ClockWithAosLos = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-clock
                .timezone="${args.timezone}"
                aos="${args.aos}"
                los="${args.los}"
                ?hide-timezone="${args.hideTimezone}"
                ?hide-date="${args.hideDate}"
                ?hide-labels="${args.hideLabels}"
                ?small="${args.small}"
                date-in="${args.dateIn}"
            ></rux-clock>
        </div>
    `
}

const DateIn = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-clock
                .timezone="${args.timezone}"
                aos="${args.aos}"
                los="${args.los}"
                date-in="${args.dateIn}"
                ?hide-timezone="${args.hideTimezone}"
                ?hide-date="${args.hideDate}"
                ?hide-labels="${args.hideLabels}"
                ?small="${args.small}"
            ></rux-clock>
        </div>
    `
}

const Small = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-clock
                .timezone="${args.timezone}"
                .aos="${args.aos}"
                .los="${args.los}"
                ?hide-timezone="${args.hideTimezone}"
                ?hide-date="${args.hideDate}"
                ?hide-labels="${args.hideLabels}"
                ?small="${args.small}"
            ></rux-clock>
        </div>
    `
}

const Static = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-clock
                .timezone="${args.timezone}"
                .aos="${args.aos}"
                .los="${args.los}"
                ?hide-timezone="${args.hideTimezone}"
                ?hide-date="${args.hideDate}"
                ?hide-labels="${args.hideLabels}"
                ?small="${args.small}"
                ?static="${args.static}"
            ></rux-clock>
        </div>
    `
}

const OtherVariants = () => {
    return html`
        <style>
            .clock-list {
                list-style-type: none;
                margin: 0 1rem 1rem 0;
                display: flex;
                flex-flow: column;
            }
            .clock-list li {
                padding-bottom: 2rem;
            }
            .clock-list span {
                margin: 0 0 1rem 1rem;
            }
        </style>
        <div
            style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
        >
            <ul class="clock-list">
                <span>Hide Date</span>
                <li>
                    <rux-clock hide-date></rux-clock>
                </li>
                <span>Hide Labels</span>
                <li>
                    <rux-clock hide-labels></rux-clock>
                </li>
                <span>Hide Timezone</span>
                <li>
                    <rux-clock hide-timezone></rux-clock>
                </li>
            </ul>
        </div>
    `
}

export default {
    title: 'Components/Clock',
    component: 'rux-clock',
    argTypes: extractArgTypes('rux-clock'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        aos: '',
        los: '',
        hideDate: false,
        hideLabels: false,
        hideTimezone: false,
        small: false,
        timezone: 'UTC',
        dateIn: '',
        static: false,
    },
}

export const WithAosLos = {
    render: ClockWithAosLos.bind(),

    args: {
        aos: '1988-04-22T12:12:12.000Z',
        los: '1988-04-22T12:12:12.000Z',
        hideDate: false,
        hideLabels: false,
        hideTimezone: false,
        small: false,
        timezone: 'UTC',
        dateIn: '',
    },

    name: 'With AOS/LOS',
}

export const WithDateIn = {
    render: DateIn.bind(),

    args: {
        aos: '',
        los: '',
        hideDate: false,
        hideLabels: false,
        hideTimezone: false,
        small: false,
        timezone: 'UTC',
        dateIn: '2022-04-22T23:59:55.000Z',
    },

    name: 'With Date In',
}

export const Small_ = {
    render: Small.bind(),

    args: {
        aos: '',
        los: '',
        hideDate: false,
        hideLabels: false,
        hideTimezone: false,
        small: true,
        timezone: 'UTC',
    },

    name: 'Small',
}

export const Static_ = {
    render: Static.bind(),

    args: {
        aos: '',
        los: '',
        hideDate: false,
        hideLabels: false,
        hideTimezone: false,
        small: false,
        static: true,
        timezone: 'UTC',
        dateIn: '2022-04-22T23:59:55.000Z',
    },

    name: 'Static',
}

export const OtherVariants_ = {
    render: OtherVariants.bind(),
    name: 'Other Variants',
}
