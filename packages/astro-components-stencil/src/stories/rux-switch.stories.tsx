import { html, render } from 'lit-html'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import Readme from '../components/rux-switch/readme.md'

export default {
    title: 'Components/Switch',
    decorators: [withKnobs],
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
