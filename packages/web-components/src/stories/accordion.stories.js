import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div style="padding: 5%;">
            <rux-accordion
                ?disabled="${args.disabled}"
                ?disallow-multiple="${args.disallowMultiple}"
            >
                <rux-accordion-item
                    ><div slot="label">Title 1</div>
                    <p>Content 1</p></rux-accordion-item
                >
                <rux-accordion-item
                    ><div slot="label">Title 2</div>
                    <p>Content 2</p></rux-accordion-item
                >
                <rux-accordion-item
                    ><div slot="label">Title 3</div>
                    <p>Content 3</p></rux-accordion-item
                >
            </rux-accordion>
        </div>
    `
}

const TruncateExample = (args) => {
    return html`
        <div style="padding: 5%;">
            <style>
                #truncated [slot='label'] {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            </style>
            <rux-accordion
                ?disabled="${args.disabled}"
                ?disallow-multiple="${args.disallowMultiple}"
                id="truncated"
            >
                <rux-accordion-item>
                    <div slot="label">
                        Title 1 - Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. A eos impedit tempora labore magnam
                        magni maiores esse unde, praesentium sed eaque ducimus
                        in odit
                    </div>
                    <p>Content 1</p>
                </rux-accordion-item>
                <rux-accordion-item>
                    <div slot="label">
                        Title 2 - Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. A eos impedit tempora labore magnam
                        magni maiores esse unde, praesentium sed eaque ducimus
                        in odit
                    </div>
                    <p>Content 2</p>
                </rux-accordion-item>
                <rux-accordion-item>
                    <div slot="label">
                        Title 3 - Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. A eos impedit tempora labore magnam
                        magni maiores esse unde, praesentium sed eaque ducimus
                        in odit
                    </div>
                    <p>
                        Content 3 Long - Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. A eos impedit tempora labore magnam
                        magni maiores esse unde, praesentium sed eaque ducimus
                        in oditLorem, ipsum dolor sit amet consectetur
                        adipisicing elit. A eos impedit tempora labore magnam
                        magni maiores esse unde
                    </p>
                </rux-accordion-item>
            </rux-accordion>
        </div>
    `
}

export default {
    title: 'Components/Accordion',
    component: 'rux-accordion',

    subcomponents: {
        RuxAccordionItem: 'rux-accordion-item',
    },

    argTypes: extractArgTypes('rux-accordion'),

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
        disallowMultiple: false,
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',

    args: {
        disabled: true,
        disallowMultiple: false,
    },
}

export const DisallowMultiple = {
    render: Base.bind(),
    name: 'DisallowMultiple',

    args: {
        disabled: false,
        disallowMultiple: true,
    },
}

export const Truncated = {
    render: TruncateExample.bind(),
    name: 'Truncated',

    args: {
        disabled: false,
        disallowMultiple: false,
    },
}
