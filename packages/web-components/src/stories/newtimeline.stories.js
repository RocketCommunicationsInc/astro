// my-list.stories.js|jsx

import { html } from 'lit'

import { useArgs } from '@storybook/api'
import { Default } from './newtimeregion.stories'
//👇 Instead of importing my-list-item, we import the stories
// import { Unchecked } from './my-list-item.stories';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/web-components/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    subcomponents: { 'rux-time-region': 'rux-time-region' },
    argTypes: {
        end: {
            name: 'end',
            description:
                'The timeline\'s end date. Must be an ISO string "2021-02-02T05:00:00Z"',
            type: {
                name: 'date',
                required: false,
            },
            control: {
                type: 'date',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '2021-02-02T00:00:00Z',
                },
            },
        },
        timezone: {
            name: 'timezone',
            description: "The timeline's timezone",
            type: {
                name: 'string',
                required: false,
            },
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: "'UTC'",
                },
            },
            options: [null],
        },
        interval: {
            name: 'interval',
            description: "The timeline's date time interval",
            type: {
                name: '"day" | "hour"',
                required: false,
            },
            control: {
                type: 'radio',
            },
            table: {
                category: 'props',
                type: {
                    summary: '"day" | "hour"',
                },
                defaultValue: {
                    summary: "'hour'",
                },
            },
            options: ['day', 'hour'],
        },
        playhead: {
            name: 'playhead',
            description:
                'The timeline\'s playhead date time. Must be an ISO string "2021-02-02T05:00:00Z"',
            type: {
                name: 'date | undefined',
                required: false,
            },
            control: {
                type: 'date',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'date | undefined',
                },
                defaultValue: {
                    summary: '2021-02-01T10:00:00Z',
                },
            },
            options: [null],
        },
        start: {
            name: 'start',
            description:
                'The timeline\'s start date. Must be an ISO string "2021-02-02T05:00:00Z"',
            type: {
                name: 'string',
                required: false,
            },
            control: {
                type: 'date',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '2021-02-01T00:00:00Z',
                },
            },
            options: [null],
        },
        zoom: {
            name: 'zoom',
            description: "The timeline's zoom level.",
            type: {
                name: 'number',
                required: false,
            },
            control: {
                type: 'number',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: '1',
                },
            },
            options: [null],
        },
    },
}

console.log('hi', useArgs)

console.log('yo', Default.args)
const Template = ({ items, ...args }) => html`
    <div style="width: 1050px; margin: auto">
        real timeline
        <rux-timeline
            timezone="America/New_York"
            start="2022-01-10T00:00"
            end="2022-01-11T00:00"
            interval="hour"
            zoom="2"
        >
            ${args}
            <rux-track>
                <div slot="label">Region 1</div>
                ${items.map(
                    (item) => html`
                        <rux-time-region
                            start="${item.start}"
                            end="${item.end}"
                            selected="${item.selected}"
                            status="${item.status}"
                        >
                            hi
                        </rux-time-region>
                    `
                )}
            </rux-track>
            <rux-track slot="ruler">
                <rux-ruler></rux-ruler>
            </rux-track>
        </rux-timeline>
    </div>
`
export const Empty = Template.bind({})
Empty.args = { items: [] }

export const OneItem = Template.bind({})
OneItem.args = {
    items: [
        {
            ...Default.args,
        },
    ],
}
// export const OneItem = () => html`
// <div>
//   hi
//   ${Default({...Default.args})}
// </div>
// `
// export const OneItem = Template.bind({})
// OneItem.args = {
//   children: <rux-time-region {...Default.args}></rux-time-region>
// }
// const TimelineTemplate = ({ items, ...args}) => html`
//   <div>
//     ${
//       items.map((item) => {
//         html`<rux-time-region {...item} >ok</rux-time-region>`
//       })
//     }
//     hi
//   </div>
// `
// ;

// export const Empty = TimelineTemplate.bind({})
// Empty.args = { items: []};

// export const OneItem = TimelineTemplate.bind({})
// OneItem.args = {
//   items: [
//     {
//       ...Default.args
//     }
//   ]
// }
