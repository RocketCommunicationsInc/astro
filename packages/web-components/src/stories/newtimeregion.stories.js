// my-list.stories.js|jsx

import { html } from 'lit'
import { useArgs } from '@storybook/client-api'

//👇 Instead of importing my-list-item, we import the stories
// import { Unchecked } from './my-list-item.stories';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/web-components/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    //   title: 'test/timeline/region',
    argTypes: {
        end: {
            name: 'end',
            description: 'The end time',
            type: {
                name: 'any',
                required: false,
            },
            control: {
                type: 'date',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'any',
                },
                defaultValue: {},
            },
            options: [],
        },
        hideTimestamp: {
            name: 'hide-timestamp',
            description: 'Optionally hide the bottom right timestamp.',
            type: {
                name: 'boolean',
                required: false,
            },
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
            options: [],
        },
        start: {
            name: 'start',
            description: 'The start time',
            type: {
                name: 'any',
                required: false,
            },
            control: {
                type: 'date',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'any',
                },
                defaultValue: {},
            },
            options: [],
        },
    },
}

export const Default = (args) => html`
    <rux-time-region
        start="${args.start}"
        ?hide-timestamp="${args.hideTimestamp}"
        end="${args.end}"
        selected="${args.selected}"
        status="${args.status}"
    >
        Cras vestibulum orci sed nisl
    </rux-time-region>
`

Default.args = {
    start: '2022-01-10T00:00',
    end: '2022-01-10T04:00',
    selected: true,
    status: 'critical',
}
