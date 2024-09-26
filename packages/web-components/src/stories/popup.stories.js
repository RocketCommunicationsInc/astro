import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
<div style="display: flex; width: 100%; justify-content: center; margin-top: 10%;">
    <rux-pop-up open=${args.open} placement=${args.placement} ?close-on-select=${args.closeOnSelect} ?disable-auto-update="${args.disableAutoUpdate} ?enable-animation-frame="${args.enableAnimationFrame}">
        <rux-icon icon="apps" slot="trigger"></rux-icon>
        <rux-menu>
            <rux-menu-item href="#">Menu Item 1</rux-menu-item>
            <rux-menu-item href="#">Menu Item 2</rux-menu-item>
            <rux-menu-item href="#">Menu Item 3</rux-menu-item>
        </rux-menu>
    </rux-pop-up>
</div>
`
}

const WithPlacements = () => {
    return html`
        <div
            style="display: flex; width: 100%; justify-content: center; margin-bottom: 10%; margin-top: 10%;"
        >
            <rux-pop-up placement="top" open>
                <rux-button slot="trigger">Top</rux-button>
                <rux-menu>
                    <rux-menu-item href="#">Menu Item 1</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 2</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 3</rux-menu-item>
                </rux-menu>
            </rux-pop-up>
        </div>
        <div
            style="display: flex; width: 100%; justify-content: center; margin-bottom: 10%"
        >
            <rux-pop-up placement="right" open>
                <rux-button slot="trigger">Right</rux-button>
                <rux-menu>
                    <rux-menu-item href="#">Menu Item 1</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 2</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 3</rux-menu-item>
                </rux-menu>
            </rux-pop-up>
        </div>
        <div
            style="display: flex; width: 100%; justify-content: center; margin-bottom: 15%"
        >
            <rux-pop-up placement="bottom" open>
                <rux-button slot="trigger">Bottom</rux-button>
                <rux-menu>
                    <rux-menu-item href="#">Menu Item 1</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 2</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 3</rux-menu-item>
                </rux-menu>
            </rux-pop-up>
        </div>
        <div
            style="display: flex; width: 100%; justify-content: center; margin-bottom: 10%"
        >
            <rux-pop-up placement="left" open>
                <rux-button slot="trigger">Left</rux-button>
                <rux-menu>
                    <rux-menu-item href="#">Menu Item 1</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 2</rux-menu-item>
                    <rux-menu-item href="#">Menu Item 3</rux-menu-item>
                </rux-menu>
            </rux-pop-up>
        </div>
    `
}

export default {
    title: 'Components/Pop Up',
    component: 'rux-pop-up',
    argTypes: extractArgTypes('rux-pop-up'),

    subcomponents: {
        RuxMenu: 'rux-menu',
        RuxMenuItem: 'rux-menu-item',
        RuxMenuItemDivider: 'rux-menu-item-divider',
    },

    parameters: {
        actions: {
            handles: ['ruxpopupopened rux-pop-up', 'ruxpopupclosed rux-pop-up'],
        },
    },
}

export const Default = {
    render: Base.bind(),

    args: {
        open: true,
        placement: 'auto',
        closeOnSelect: false,
        disableAutoUpdate: false,
    },

    name: 'Default',
}

export const Placements = {
    render: WithPlacements.bind(),
    name: 'Placements',

    argTypes: {
        placement: {
            table: {
                disable: true,
            },
        },

        open: {
            table: {
                disable: true,
            },
        },

        closeOnSelect: {
            table: {
                disable: true,
            },
        },
    },
}
