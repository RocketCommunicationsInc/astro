import { html } from 'lit-html'
import '../components/rux-notification/rux-notification.ts'

const Base = (args) => {
    return html`
        <div style="position: relative; height: 200px;">
            <rux-notification ?open="${args.open}" message="${args.message}" close-after="${args.closeAfter}" ?small="${args.small}"></rux-notification>
        </div>
    `
}

export default {
    title: 'Components/Notification',
    component: 'rux-notification',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        open: true,
        message: 'This is a notification message',
        closeAfter: 0,
        small: false,
    },
}

export const AutoClose = {
    render: Base.bind(),
    name: 'Auto Close',
    args: {
        open: true,
        message: 'This notification will close automatically',
        closeAfter: 3000,
    },
}

export const Small = {
    render: Base.bind(),
    name: 'Small',
    args: {
        open: true,
        message: 'Small notification',
        small: true,
    },
}
