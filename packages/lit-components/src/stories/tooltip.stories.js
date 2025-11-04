import { html } from 'lit-html'
import '../components/rux-tooltip/rux-tooltip.ts'
import '../components/rux-button/rux-button.ts'

const Base = (args) => {
    return html`
        <div style="display: flex; justify-content: center; padding: 10%;">
            <rux-tooltip
                message="${args.message}"
                placement="${args.placement}"
                ?open="${args.open}"
                strategy="${args.strategy}"
                ?disabled="${args.disabled}"
                delay="${args.delay}"
            >
                <rux-button>Hover for tooltip</rux-button>
            </rux-tooltip>
        </div>
    `
}

export default {
    title: 'Components/Tooltip',
    component: 'rux-tooltip',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        message: 'Tooltip message',
        placement: 'top',
        open: false,
        strategy: 'absolute',
        disabled: false,
        delay: 800,
    },
}

export const Bottom = {
    render: Base.bind(),
    name: 'Bottom',
    args: {
        message: 'Tooltip on bottom',
        placement: 'bottom',
    },
}

export const Left = {
    render: Base.bind(),
    name: 'Left',
    args: {
        message: 'Tooltip on left',
        placement: 'left',
    },
}

export const Right = {
    render: Base.bind(),
    name: 'Right',
    args: {
        message: 'Tooltip on right',
        placement: 'right',
    },
}
