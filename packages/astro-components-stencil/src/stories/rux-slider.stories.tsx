import { html, render } from 'lit-html'
import { boolean, number, text, array, withKnobs } from '@storybook/addon-knobs'
import readme from '../components/rux-slider/readme.md'

// import { RuxSlider } from '../src/components/rux-slider/rux-slider.js';

export default {
    title: 'Components/Slider',
    decorators: [withKnobs],
}

export const Slider = () => {
    const minKnob = number('Min', 0)
    const maxKnob = number('Max', 100)
    const stepKnob = number('Step', 1)
    const valKnob = number('Value', 50)
    const disabledKnob = boolean('Disabled', false)

    return html`
        <div style="display: flex; padding: 10vh 5vw; justify-content: center;">
            <rux-slider
                .min="${minKnob}"
                .max="${maxKnob}"
                .step="${stepKnob}"
                .value="${valKnob}"
                ?disabled="${disabledKnob}"
            >
            </rux-slider>
        </div>
    `
}

Slider.story = {
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
