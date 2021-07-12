import { html, render } from 'lit-html'
import {
    boolean,
    text,
    select,
    number,
    withKnobs,
} from '@storybook/addon-knobs'

//@ts-ignore
import readme from '../components/rux-notification/readme.md'

export default {
    title: 'Components/Notification',
    decorators: [withKnobs],
}

export const Notification = () => {
    const toggleBanner = boolean('Enable Banner', true)
    const statusOptions = ['standby', 'normal', 'caution', 'critical']
    const statusKnob = select('Status', statusOptions, 'normal')

    const messageKnob = text(
        'Banner Message',
        `This is a notification banner. It won’t disappear until the user dismisses it.`
    )
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${toggleBanner}"
                status="${statusKnob}"
                message="${messageKnob}"
            >
            </rux-notification>
        </div>
    `
}

Notification.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}

export const NotificationAutoClose = () => {
    const toggleBanner = boolean('Enable Banner', true)
    const statusOptions = ['standby', 'normal', 'caution', 'critical']
    const statusKnob = select('Status', statusOptions, 'standby')

    const closeDelay = number('Close Delay', 3, {
        range: true,
        min: 2,
        max: 10,
        step: 1,
    })

    const messageKnob = text(
        'Banner Message',
        `This is a notification banner. It will disappear in ${
            closeDelay * 1000
        } ms.`
    )
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${toggleBanner}"
                close-after="${closeDelay}"
                status="${statusKnob}"
                message="${messageKnob}"
            >
            </rux-notification>
        </div>
    `
}

NotificationAutoClose.story = {
    name: 'Notification (Auto Close)',

    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}

export const AllNotificationBanners = () => html`
    <div
        style="display: flex; flex-flow: column; justify-content: center; margin:20px;"
    >
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="standby"
                message="Standby notification banner"
            ></rux-notification>
        </div>
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="normal"
                message="Normal notification banner"
            ></rux-notification>
        </div>
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="caution"
                message="Caution notification banner"
            ></rux-notification>
        </div>
        <div
            style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-notification
                open
                status="critical"
                message="Critical notification banner"
            ></rux-notification>
        </div>
    </div>
`

AllNotificationBanners.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: readme,
        },
    },
}
