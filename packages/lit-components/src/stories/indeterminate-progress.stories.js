import { html } from 'lit-html'
import '../components/rux-indeterminate-progress/rux-indeterminate-progress.ts'

const Base = () => {
    return html`
        <div style="padding: 5%; display: flex; justify-content: center;">
            <rux-indeterminate-progress></rux-indeterminate-progress>
        </div>
    `
}

export default {
    title: 'Components/Indeterminate Progress',
    component: 'rux-indeterminate-progress',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}
