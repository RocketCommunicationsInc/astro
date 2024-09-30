import { html } from 'lit-html'
import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'

const Base = (args) => {
    return html`
        <div style="padding: 5%;">
            <rux-accordion-item
                ?disabled="${args.disabled}"
                ?expanded="${args.expanded}"
            >
                <div slot="label">Title 1</div>
                <p>Content 1</p>
            </rux-accordion-item>
        </div>
    `
}

const IconSlotted = (args) => {
    return html`
        <div style="padding: 5%;">
            <rux-accordion-item
                ?disabled="${args.disabled}"
                ?expanded="${args.expanded}"
            >
                <rux-icon icon="apps" slot="prefix" size="auto"></rux-icon>
                <div slot="label">Title 1</div>
                <p>Content 1</p>
            </rux-accordion-item>
        </div>
    `
}

export default {
    title: 'Components/Accordion/Accordion Item',
    component: 'rux-accordion-item',

    subcomponents: {
        RuxAccordion: 'rux-accordion',
    },

    argTypes: extractArgTypes('rux-accordion-item'),

    parameters: {
        actions: {
            handles: [
                'ruxexpanded rux-accordion-item',
                'ruxcollapsed rux-accordion-item',
            ],
        },
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        disabled: false,
        expanded: false,
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',

    args: {
        disabled: true,
        expanded: false,
    },
}

export const Expanded = {
    render: Base.bind(),
    name: 'Expanded',

    args: {
        disabled: false,
        expanded: true,
    },
}

export const WithIcon = {
    render: IconSlotted.bind(),
    name: 'With Icon',

    args: {
        disabled: false,
        expanded: false,
    },
}
