import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'
import { styled } from '@storybook/theming'

const StyledDiv = styled.div`
    position: relative;
    margin: 1rem 0;
    border-left: 20px solid var(--color-status-serious);
    background: white;
    color: var(--color-status-serious);
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
    return html`
        <rux-toast-stack position="${args.position}">
            <rux-toast message="Toast 2"></rux-toast>
            <rux-toast message="Toast 2"></rux-toast>
        </rux-toast-stack>
    `
}

const HideClose = (args) => {
    return html`
        <rux-toast-stack position="${args.position}">
            <rux-toast message="Toast 2"></rux-toast>
            <rux-toast message="Toast 2"></rux-toast>
        </rux-toast-stack>
    `
}

const AllVariants = () => html`
    <style>
        .wrapper {
            margin-bottom: 1rem;
        }
    </style>
    <section>
        <div class="wrapper">
            <rux-toast-stack position="top-right">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
            <rux-toast-stack position="top-left">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
            <rux-toast-stack position="bottom-right">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
            <rux-toast-stack position="bottom-left">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
        </div>
    </section>
`

export default {
    title: 'Beta/Toast Stack [BETA]',
    component: 'rux-toast-stack',

    subcomponents: {
        RuxToast: 'rux-toast',
    },

    argTypes: args,
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
    height: '300px',

    args: {
        position: 'top-right',
    },
}

export const Position = {
    render: HideClose.bind(),

    args: {
        position: 'top-right',
    },

    name: 'Position',
    height: '300px',
}

export const AllVariants_ = {
    render: AllVariants.bind(),
    name: 'All Variants',
    height: '500px',

    argTypes: {
        position: {
            table: {
                disable: true,
            },
        },
    },
}
