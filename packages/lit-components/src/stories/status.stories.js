import { html } from 'lit-html'
import '../components/rux-status/rux-status.ts'

const Base = (args) => {
    return html`
        <div style="display: flex; justify-content: center; padding: 5%;">
            <rux-status status="${args.status}">${args.label}</rux-status>
        </div>
    `
}

const AllStatuses = () => {
    return html`
        <div style="display: flex; gap: 1rem; flex-direction: column; padding: 5%;">
            <rux-status status="normal">Normal</rux-status>
            <rux-status status="standby">Standby</rux-status>
            <rux-status status="off">Off</rux-status>
            <rux-status status="caution">Caution</rux-status>
            <rux-status status="serious">Serious</rux-status>
            <rux-status status="critical">Critical</rux-status>
        </div>
    `
}

export default {
    title: 'Components/Status',
    component: 'rux-status',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        status: 'normal',
        label: 'Status',
    },
}

export const AllVariants = {
    render: AllStatuses.bind(),
    name: 'All Statuses',
}
