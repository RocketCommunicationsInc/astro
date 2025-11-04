import { html } from 'lit-html'
import '../components/rux-breadcrumb/rux-breadcrumb.ts'

const Base = () => {
    return html`
        <rux-breadcrumb>
            <rux-breadcrumb-item href="#">Home</rux-breadcrumb-item>
            <rux-breadcrumb-item href="#">Parent Page</rux-breadcrumb-item>
            <rux-breadcrumb-item>Current Page</rux-breadcrumb-item>
        </rux-breadcrumb>
    `
}

export default {
    title: 'Components/Breadcrumb',
    component: 'rux-breadcrumb',
    subcomponents: {
        RuxBreadcrumbItem: 'rux-breadcrumb-item',
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}
