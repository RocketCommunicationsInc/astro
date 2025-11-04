import { html } from 'lit-html'
import '../components/rux-toast/rux-toast.ts'

const Base = (args) => {
    return html`
        <div style="position: relative; height: 200px;">
            <rux-toast ?open="${args.open}" message="${args.message}" close-after="${args.closeAfter}" ?hide-close="${args.hideClose}"></rux-toast>
        </div>
    `
}

export default {
    title: 'Components/Toast',
    component: 'rux-toast',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        open: true,
        message: 'This is a toast message',
        closeAfter: 0,
        hideClose: false,
    },
}

export const AutoClose = {
    render: Base.bind(),
    name: 'Auto Close',
    args: {
        open: true,
        message: 'This toast will close automatically',
        closeAfter: 3000,
    },
}
