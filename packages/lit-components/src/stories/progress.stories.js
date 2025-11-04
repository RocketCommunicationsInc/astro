import { html } from 'lit-html'
import '../components/rux-progress/rux-progress.ts'

const Base = (args) => {
    return html`
        <div style="padding: 5%; display: flex; justify-content: center;">
            <rux-progress value="${args.value}" max="${args.max}" label="${args.label}" ?hide-label="${args.hideLabel}"></rux-progress>
        </div>
    `
}

export default {
    title: 'Components/Progress',
    component: 'rux-progress',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        value: 50,
        max: 100,
        label: '',
        hideLabel: false,
    },
}

export const WithLabel = {
    render: Base.bind(),
    name: 'With Label',
    args: {
        value: 75,
        max: 100,
        label: 'Progress',
    },
}

export const HiddenLabel = {
    render: Base.bind(),
    name: 'Hidden Label',
    args: {
        value: 30,
        max: 100,
        hideLabel: true,
    },
}
