import { html } from 'lit-html'
import '../components/rux-tag/rux-tag.ts'

const Base = (args) => {
    return html`
        <div style="display: flex; justify-content: center; padding: 5%;">
            <rux-tag status="${args.status}">${args.label}</rux-tag>
        </div>
    `
}

const AllStatuses = () => {
    return html`
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 5%;">
            <rux-tag status="normal">Normal</rux-tag>
            <rux-tag status="standby">Standby</rux-tag>
            <rux-tag status="off">Off</rux-tag>
            <rux-tag status="caution">Caution</rux-tag>
            <rux-tag status="serious">Serious</rux-tag>
            <rux-tag status="critical">Critical</rux-tag>
        </div>
    `
}

export default {
    title: 'Components/Tag',
    component: 'rux-tag',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        status: 'normal',
        label: 'Tag',
    },
}

export const AllVariants = {
    render: AllStatuses.bind(),
    name: 'All Statuses',
}
