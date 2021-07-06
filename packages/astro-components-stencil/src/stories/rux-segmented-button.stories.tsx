import { html, render } from 'lit-html'
import { radios, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Readme from '../components/rux-segmented-button/readme.md'

export default {
    title: 'Components/Segmented Button',
    decorators: [withKnobs],
}

export const SegmentedButton = () => {
    const segmentButtonArray = [
        { label: 'First item' },
        { label: 'Second item', selected: true },
        { label: 'Third item' },
    ]
    const segments = radios(
        'Initially selected segment',
        ['First item', 'Second item', 'Third item', 'Missing item'],
        'Second item'
    )

    console.log(segments)

    document.addEventListener('change', (e) => action('change')(e.target))

    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button
                .data="${segmentButtonArray}"
                .selected="${segments}"
            ></rux-segmented-button>
        </div>
    `
}

SegmentedButton.story = {
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
