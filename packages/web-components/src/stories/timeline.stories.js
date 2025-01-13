import { html } from 'lit-html'

const Base = (args) => {
    let start = args.start
    let end = args.end
    let position = args.playhead
    if (args.start) {
        start = new Date(args.start).toISOString()
    }
    if (args.end) {
        end = new Date(args.end).toISOString()
    }
    if (args.playhead) {
        position = new Date(args.playhead).toISOString()
    }
    return html`
        <div style="width: 950px; margin: auto">
            <rux-timeline
                has-played-indicator="${args.hasPlayedIndicator}"
                timezone="${args.timezone}"
                start="${start}"
                end="${end}"
                playhead="${position}"
                interval="${args.interval}"
                zoom="${args.zoom}"
                ruler-position="${args.rulerPosition}"
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T01:00:00Z"
                        end="2021-02-01T02:00:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 2</div>
                    <rux-time-region
                        start="2021-02-01T10:00:00Z"
                        end="2021-02-01T12:00:00Z"
                        status="serious"
                    >
                        Event 2.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 3</div>
                    <rux-time-region
                        start="2021-02-01T00:00:00Z"
                        end="2021-02-02T02:00:00Z"
                        status="standby"
                    >
                        Event 3.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 4</div>
                    <rux-time-region
                        start="2021-02-01T03:00:00Z"
                        end="2021-02-02T04:33:00Z"
                        status="critical"
                    >
                        Event 4.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 5</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="caution"
                    >
                        Event 5.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 6</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 6.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 7</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 7.1
                    </rux-time-region>
                </rux-track>
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

const VerticalScrollExample = () => {
    return html`
        <style>
            rux-timeline::part(time-region-container) {
                height: 223px;
            }
        </style>
        <div style="width: 950px; margin: auto">
            <rux-timeline
                start="2021-02-01T00:00:00Z"
                end="2021-02-03T00:00:00Z"
                interval="hour"
                zoom="2"
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T01:00:00Z"
                        end="2021-02-01T02:00:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 2</div>
                    <rux-time-region
                        start="2021-02-01T10:00:00Z"
                        end="2021-02-01T12:00:00Z"
                        status="serious"
                    >
                        Event 2.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 3</div>
                    <rux-time-region
                        start="2021-02-01T00:00:00Z"
                        end="2021-02-02T02:00:00Z"
                        status="standby"
                    >
                        Event 3.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 4</div>
                    <rux-time-region
                        start="2021-02-01T03:00:00Z"
                        end="2021-02-02T04:33:00Z"
                        status="critical"
                    >
                        Event 4.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 5</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="caution"
                    >
                        Event 5.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 6</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 6.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 7</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 7.1
                    </rux-time-region>
                </rux-track>
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

const SubTracksExample = () => {
    return html` <iframe
        src="https://codesandbox.io/embed/timeline-demo-collapse-js-rqf39e"
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="timeline-demo-collapse-js"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>`
}

const WithPlayedIndicatorExample = () => {
    return html`
        <style>
            rux-timeline::part(time-region-container) {
                height: 223px;
            }
        </style>
        <div style="width: 950px; margin: auto">
            <rux-timeline
                start="2021-02-01T00:00:00Z"
                end="2021-02-03T00:00:00Z"
                interval="hour"
                zoom="2"
                playhead="2021-02-01T01:00:00Z"
                has-played-indicator
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T01:00:00Z"
                        end="2021-02-01T02:00:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 2</div>
                    <rux-time-region
                        start="2021-02-01T10:00:00Z"
                        end="2021-02-01T12:00:00Z"
                        status="serious"
                    >
                        Event 2.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 3</div>
                    <rux-time-region
                        start="2021-02-01T00:00:00Z"
                        end="2021-02-02T02:00:00Z"
                        status="standby"
                    >
                        Event 3.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 4</div>
                    <rux-time-region
                        start="2021-02-01T03:00:00Z"
                        end="2021-02-02T04:33:00Z"
                        status="critical"
                    >
                        Event 4.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 5</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="caution"
                    >
                        Event 5.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 6</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 6.1
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 7</div>
                    <rux-time-region
                        start="2021-02-01T05:00:00Z"
                        end="2021-02-02T05:33:00Z"
                        status="normal"
                    >
                        Event 7.1
                    </rux-time-region>
                </rux-track>
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

const ShowStartOfDayExample = () => {
    return html`
        <style>
            rux-timeline::part(time-region-container) {
                height: auto;
            }
        </style>
        <div style="width: 950px; margin: auto">
            <rux-timeline
                start="2021-02-01T23:00:00Z"
                end="2021-02-03T00:00:00Z"
                interval="hour"
                zoom="2"
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T23:00:00Z"
                        end="2021-02-02T02:00:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>

                <rux-track slot="ruler">
                    <rux-ruler show-start-of-day></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

const MinutesExample = () => {
    return html`
        <style>
            rux-timeline::part(time-region-container) {
                height: auto;
            }
        </style>
        <div style="width: 950px; margin: auto">
            <rux-timeline
                start="2021-02-01T00:00:00Z"
                end="2021-02-01T01:00:00Z"
                interval="minute"
                zoom="2"
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T00:01:00Z"
                        end="2021-02-01T00:08:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>

                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

const MonthsExample = (args) => {
    let start = args.start
    if (!start) {
        start = '2023-01-01T00:00:00Z'
    }
    let end = args.end
    if (!end) {
        end = '2024-12-01T00:00:00Z'
    }
    let position = args.playhead

    if (start) {
        start = new Date(start).toISOString()
    }
    if (end) {
        end = new Date(end).toISOString()
    }
    if (position) {
        position = new Date(position).toISOString()
    }
    return html`
        <div style="width: 950px; margin: auto">
            <rux-timeline
                has-played-indicator="${args.hasPlayedIndicator}"
                timezone="${args.timezone}"
                start="${start}"
                end="${end}"
                playhead="${position}"
                interval="${args.interval}"
                zoom="${args.zoom}"
            >
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2024-02-01T01:00:00Z"
                        end="2024-02-01T02:00:00Z"
                        status="serious"
                    >
                        2/1-2/2
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 2</div>
                    <rux-time-region
                        start="2024-02-01T10:00:00Z"
                        end="2024-02-01T12:00:00Z"
                        status="serious"
                    >
                        2/1-2/2
                    </rux-time-region>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 3</div>
                    <rux-time-region
                        start="2024-01-14T07:00:00Z"
                        end="2024-01-18T02:00:00Z"
                        status="standby"
                    >
                        1/14-1/18
                    </rux-time-region>
                    <rux-time-region
                        start="2024-02-01T07:00:00Z"
                        end="2024-02-19T02:00:00Z"
                        status="standby"
                    >
                        2/1-2/19
                    </rux-time-region>
                    <rux-time-region
                        start="2024-02-15T07:00:00Z"
                        end="2024-03-27T02:00:00Z"
                        status="standby"
                    >
                        2/15-3/27
                    </rux-time-region>
                    <rux-time-region
                        start="2024-04-20T07:00:00Z"
                        end="2024-06-20T02:00:00Z"
                        status="standby"
                    >
                        4/20-6/20
                    </rux-time-region>
                </rux-track>
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

const RulerPositionExample = (args) => {
    return html`
        <style>
            rux-timeline::part(time-region-container) {
                height: auto;
            }
        </style>
        <div style="width: 950px; margin: auto">
            <rux-timeline
                has-played-indicator="${args.hasPlayedIndicator}"
                timezone="${args.timezone}"
                start="${args.start}"
                end="${args.end}"
                interval="${args.interval}"
                zoom="${args.zoom}"
                ruler-position="${args.rulerPosition}"
            >
                <rux-track slot="ruler">
                    <rux-ruler></rux-ruler>
                </rux-track>
                <rux-track>
                    <div slot="label">Region 1</div>
                    <rux-time-region
                        start="2021-02-01T01:00:00Z"
                        end="2021-02-01T04:00:00Z"
                        status="serious"
                    >
                        Event 1.2
                    </rux-time-region>
                </rux-track>
            </rux-timeline>
        </div>
    `
}

export default {
    title: 'Beta/Timeline [BETA]',
    component: 'rux-timeline',

    subcomponents: {
        RuxTrack: 'rux-track',
        RuxRuler: 'rux-ruler',
        RuxTimeRegion: 'rux-time-region',
    },

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
                name: '"day" | "hour" | "minute"',
                required: false,
            },

            control: {
                type: 'radio',
            },

            table: {
                category: 'props',

                type: {
                    summary: '"day" | "hour" | "minute"',
                },

                defaultValue: {
                    summary: "'hour'",
                },
            },

            options: ['month', 'week', 'day', 'hour', 'minute'],
        },

        hasPlayedIndicator: {
            name: 'has-played-indicator',
            description: 'Visually marks past time as played in each track',

            type: {
                name: 'boolean | undefined',
                required: false,
            },

            control: {
                type: 'boolean',
            },

            table: {
                category: 'props',

                type: {
                    summary: 'boolean | undefined',
                },

                defaultValue: {
                    summary: 'false',
                },
            },

            options: [null],
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
        rulerPosition: {
            name: 'ruler-position',
            description:
                'Controls the position of the ruler, placing it on either the top or bottom of the timeline.   ',

            type: {
                name: 'string',
                required: false,
            },

            control: {
                type: 'radio',
            },

            table: {
                category: 'props',

                type: {
                    summary: '"top" | "bottom" | undefined',
                },

                defaultValue: {
                    summary: "'bottom'",
                },
            },

            options: ['top', 'bottom'],
        },
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        zoom: 2,
        interval: 'hour',
        start: '2021-02-01T00:00:00Z',
        end: '2021-02-03T00:00:00Z',
        playhead: '2021-02-01T04:00:00Z',
        timezone: 'America/New_York',
        hasPlayedIndicator: false,
        rulerPosition: 'bottom',
    },
}

export const WithVerticalScroll = {
    render: VerticalScrollExample.bind(),
    name: 'With Vertical Scroll',
}

export const Track = {
    render: () => '',
    name: 'Track',
}

export const SubTracks = {
    render: SubTracksExample.bind(),
    name: 'SubTracks',
}

export const WithPlayedIndicator = {
    render: WithPlayedIndicatorExample.bind(),
    name: 'With Played Indicator',
}

export const ShowStartOfDay = {
    render: ShowStartOfDayExample.bind(),
    name: 'Show Start of Day',
}

export const Minutes = {
    render: MinutesExample.bind(),
    name: 'Minutes',
}

export const MonthsWeeks = {
    render: MonthsExample.bind(),
    name: 'Months/Weeks',

    args: {
        zoom: 1,
        interval: 'month',
        start: '2023-12-12T10:00:00Z',
        end: '2025-01-01T20:00:00Z',
        playhead: '2024-02-15T07:00:00Z',
        timezone: 'UTC',
        hasPlayedIndicator: false,
    },
}

export const RulerPosition = {
    render: RulerPositionExample.bind(),
    name: 'Ruler Position',

    args: {
        zoom: 2,
        interval: 'hour',
        start: '2021-02-01T00:00:00Z',
        end: '2021-02-03T00:00:00Z',
        playhead: '2021-02-01T04:00:00Z',
        timezone: 'America/New_York',
        hasPlayedIndicator: false,
        rulerPosition: 'top',
    },
}
