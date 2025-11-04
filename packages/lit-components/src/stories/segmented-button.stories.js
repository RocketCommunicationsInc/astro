import { html } from 'lit-html'
import '../components/rux-segmented-button/rux-segmented-button.ts'

const Base = (args) => {
    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button .data="${args.data}" .selected="${args.selected}" .size="${args.size}" ?disabled="${args.disabled}"></rux-segmented-button>
        </div>
    `
}

export default {
    title: 'Components/Segmented Button',
    component: 'rux-segmented-button',
}

export const Default = {
    render: Base.bind(),
    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],
        selected: 'Second item',
        size: 'small',
        disabled: false,
    },
    name: 'Default',
}

export const Disabled = {
    render: Base.bind(),
    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],
        selected: 'Second item',
        size: 'small',
        disabled: true,
    },
    name: 'Disabled',
}

export const Medium = {
    render: Base.bind(),
    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],
        selected: 'Second item',
        size: 'medium',
    },
    name: 'Medium',
}

export const Large = {
    render: Base.bind(),
    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],
        selected: 'Second item',
        size: 'large',
    },
    name: 'Large',
}
