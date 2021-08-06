import { html, render } from 'lit-html'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { withActions } from '@storybook/addon-actions'
import Readme from '../components/rux-switch/readme.md'

export default {
    title: 'Components/Switch',
    decorators: [withActions('rux-change'), withKnobs],
}

export const Switch = () => {
    const disabled = boolean('Disabled', false)
    const checked = boolean('Checked', false)

    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-switch
                .disabled=${disabled}
                .checked=${checked}
                id="01"
                style="padding-left: 0%;"
            ></rux-switch>
        </div>
    `
}

Switch.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: Readme,
        },
    },
}
