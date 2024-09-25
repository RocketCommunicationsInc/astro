import { html, render } from 'lit-html'
import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { styled } from '@storybook/theming'

const StyledDiv = styled.div`
    position: relative;
    margin: 1rem 0;
    border-left: 20px solid var(--status-symbol-color-fill-serious);
    background: white;
    color: var(--status-symbol-color-fill-serious);
    padding: 19px;
    font-family: var(--font-body-1-bold-font-family);
    font-size: var(--font-body-1-bold-font-size);
    font-weight: var(--font-body-1-bold-font-weight);
    letter-spacing: var(--font-body-1-bold-letter-spacing);
    .banner-text {
        margin-top: 1rem;
        color: var(--color-text-inverse);
    }
`

const BetaTag = styled.div`
    display: inline-block;
    padding: 7px;
    color: var(--color-palette-neutral-1000);
    border-radius: var(--radius-base);
    background: var(--color-palette-teal-300);
    font-family: var(--font-body-2-bold-font-family);
    font-size: var(--font-body-2-bold-font-size);
    font-weight: var(--font-body-2-bold-font-weight);
    letter-spacing: var(--font-body-2-bold-letter-spacing);
`

const Default = (args) => {
    let start = args.start
    let end = args.end
    if (args.start) {
        start = new Date(args.start).toISOString()
    }
    if (args.end) {
        end = new Date(args.end).toISOString()
    }
    return html`
        <rux-time-region
            start="${start}"
            status="${args.status}"
            ?hide-timestamp="${args.hideTimestamp}"
            end="${end}"
            selected="${args.selected}"
            partial="${args.partial}"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
    `
}

const Selected = (args) => {
    return html`
        <rux-time-region
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
            selected="${args.selected}"
            status="${args.status}"
            partial="${args.partial}"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
    `
}

const Partial = (args) => {
    return html`
        <rux-time-region
            partial="${args.partial}"
            start="2020-01-01T00:00"
            end="2020-01-02T00:00"
            status="${args.status}"
            selected="${args.selected}"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
    `
}

const AllVariants = (args) => {
    return html`
        <style>
            rux-time-region {
                margin-bottom: 1rem;
            }
        </style>
        <h2>With Slotted Status</h2>
        <rux-time-region start="2021-01-01T00:00" end="2021-01-02T00:00">
            <rux-status status="normal"></rux-status>
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            selected
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            <rux-status status="normal"></rux-status>
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <h2>Without Status</h2>
        <rux-time-region start="2021-01-01T00:00" end="2021-01-02T00:00">
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            selected
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <h2>With Status</h2>
        <br />
        <rux-time-region
            status="normal"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            selected
            status="normal"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            status="critical"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            selected
            status="critical"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            status="caution"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            selected
            status="caution"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <h2>Partial Events</h2>
        <rux-time-region
            partial="start"
            status="critical"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            partial="end"
            status="critical"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
        <br />
        <rux-time-region
            partial="ongoing"
            status="critical"
            start="2021-01-01T00:00"
            end="2021-01-02T00:00"
        >
            Cras vestibulum orci sed nisl
        </rux-time-region>
    `
}

export default {
    title: 'Beta/Timeline [BETA]/Time Region',
    component: 'rux-time-region',
    argTypes: args,
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        start: '2021-01-01T00:00',
        end: '2021-01-02T00:00',
        selected: false,
        hideTimestamp: false,
        status: 'standby',
        partial: '',
    },
}

export const Selected_ = {
    render: Selected.bind(),
    name: 'Selected',

    args: {
        selected: true,
        status: '',
        partial: '',
    },
}

export const Partial_ = {
    render: Partial.bind(),
    name: 'Partial',

    args: {
        selected: false,
        status: '',
        partial: 'ongoing',
    },
}

export const AllVariants_ = {
    render: AllVariants.bind(),
    name: 'All Variants',

    args: {
        start: '2021-01-01T00:00',
        end: '2021-01-02T00:00',
    },
}
