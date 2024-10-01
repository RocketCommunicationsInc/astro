import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div
            style="padding: 5%; display: flex; flex-direction: column; justify-content: center; align-items: center;"
        >
            <rux-tooltip
                message="${args.message}"
                placement="${args.placement}"
                delay="${args.delay}"
                strategy="${args.strategy}"
                offset="${args.offset}"
                disable-auto-update="${args.disableAutoUpdate}"
                open="${args.open}"
            >
                <rux-button>Trigger</rux-button>
            </rux-tooltip>
        </div>
    `
}

const PlacementsExample = () => {
    return html`
        <div
            style="display: flex; flex-direction: row; justify-content: center; align-items: center;"
        >
            <div style="padding: 2.5% 5%;">
                <div style="padding: 30px 10px 30px 30px;">
                    <rux-tooltip placement="top" message="Tooltip" open>
                        <rux-button>Top</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px 10px 30px 30px;">
                    <rux-tooltip placement="top-start" message="Tooltip" open>
                        <rux-button>Top Start</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px 10px 30px 30px;">
                    <rux-tooltip placement="top-end" message="Tooltip" open>
                        <rux-button>Top End</rux-button>
                    </rux-tooltip>
                </div>
            </div>
            <div style="padding: 2.5% 5%;">
                <div style="padding: 30px 10px 30px 10px;">
                    <rux-tooltip placement="bottom" message="Tooltip" open>
                        <rux-button>Bottom</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px 10px 30px 10px;">
                    <rux-tooltip
                        placement="bottom-start"
                        message="Tooltip"
                        open
                    >
                        <rux-button>Bottom Start</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px 10px 30px 10px;">
                    <rux-tooltip placement="bottom-end" message="Tooltip" open>
                        <rux-button>Bottom End</rux-button>
                    </rux-tooltip>
                </div>
            </div>
            <div style="padding: 2.5% 5%;">
                <div style="padding: 30px 30px 30px 0px;">
                    <rux-tooltip placement="right" message="Tooltip" open>
                        <rux-button>Right</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px 30px 30px 0px;">
                    <rux-tooltip placement="right-start" message="Tooltip" open>
                        <rux-button>Right Start</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px 30px 30px 0px;">
                    <rux-tooltip placement="right-end" message="Tooltip" open>
                        <rux-button>Right End</rux-button>
                    </rux-tooltip>
                </div>
            </div>
            <div style="padding: 2.5% 5%;">
                <div style="padding: 30px;">
                    <rux-tooltip placement="left" message="Tooltip" open>
                        <rux-button>Left</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px;">
                    <rux-tooltip placement="left-start" message="Tooltip" open>
                        <rux-button>Left Start</rux-button>
                    </rux-tooltip>
                </div>
                <div style="padding: 30px;">
                    <rux-tooltip placement="left-end" message="Tooltip" open>
                        <rux-button>Left End</rux-button>
                    </rux-tooltip>
                </div>
            </div>
        </div>
    `
}

export default {
    title: 'Components/Tooltip',
    component: 'rux-tooltip',
    argTypes: extractArgTypes('rux-tooltip'),

    parameters: {
        actions: {
            handles: [
                'ruxtooltipopened rux-tooltip',
                'ruxtooltipclosed rux-tooltip',
            ],
        },
    },
}

export const Default = {
    render: Base.bind(),

    args: {
        open: true,
        message: 'Tooltip',
        placement: 'top',
        delay: 800,
        strategy: 'absolute',
        offset: 8,
        disableAutoUpdate: false,
    },

    name: 'Default',
}

export const Placements = {
    render: PlacementsExample.bind(),
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

        delay: {
            table: {
                disable: true,
            },
        },

        message: {
            table: {
                disable: true,
            },
        },
    },
}
