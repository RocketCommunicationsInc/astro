import { html } from 'lit-html'
import '../components/rux-clock/rux-clock.ts'

const Base = (args) => {
    return html`
        <div style="padding: 5%; display: flex; justify-content: center;">
            <rux-clock
                timezone="${args.timezone}"
                ?hide-timezone="${args.hideTimezone}"
                ?hide-date="${args.hideDate}"
                ?small="${args.small}"
                date-format="${args.dateFormat}"
            ></rux-clock>
        </div>
    `
}

export default {
    title: 'Components/Clock',
    component: 'rux-clock',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        timezone: 'UTC',
        hideTimezone: false,
        hideDate: false,
        small: false,
        dateFormat: 'DD MMM YYYY',
    },
}

export const Small = {
    render: Base.bind(),
    name: 'Small',
    args: {
        timezone: 'UTC',
        small: true,
    },
}

export const NoTimezone = {
    render: Base.bind(),
    name: 'Hide Timezone',
    args: {
        timezone: 'UTC',
        hideTimezone: true,
    },
}

export const NoDate = {
    render: Base.bind(),
    name: 'Hide Date',
    args: {
        timezone: 'UTC',
        hideDate: true,
    },
}
