import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-datetime
                date=${args.date}
                day=${args.day}
                hour=${args.hour}
                minute=${args.minute}
                month=${args.month}
                second=${args.second}
                time-zone=${args.timeZone}
                year=${args.year}
                hour-12=${args.hour12}
                .era=${args.era}
                .time-zone-name=${args.timeZoneName}
                .weekday=${args.weekday}
                .locale=${args.locale}
            ></rux-datetime>
        </div>
    `
}

export default {
    title: 'Utilities/Date Time',
    component: 'rux-datetime',
    argTypes: extractArgTypes('rux-datetime'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        date: new Date().toString(),
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Los_Angeles',
        hour12: true,
        era: undefined,
        timeZoneName: undefined,
        weekday: undefined,
        locale: 'en-US',
    },

    argTypes: {
        era: {
            control: 'select',
        },

        timeZoneName: {
            control: 'select',
        },

        weekday: {
            control: 'select',
        },
    },
}
