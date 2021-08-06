import { html, render } from 'lit-html'
import { withKnobs } from '@storybook/addon-knobs'

//@ts-ignore
import selectMenuReadme from '../components/rux-select/readme.md'

export default {
    title: 'Components/Form Elements',
    decorators: [withKnobs],
}

export const SelectMenu = () => {
    return html`
        <style>
            .demo-rows {
                padding: 1rem 10%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .demo-row {
                width: 178px;
            }
            .demo-row:not(:last-child) {
                margin-bottom: 15px;
            }

            .demo-row > * {
                display: block;
            }

            .demo-row label {
                margin-bottom: 5px;
                font-size: 1rem;
                letter-spacing: 0.5px;
            }

            .rux-error-text {
                display: block;
                padding-left: 1.625rem;
                background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FF3030%22%20fill-rule%3D%22evenodd%22%20d%3D%22M64.031%205c8.461%200%2068.88%20107.243%2063.648%20114.184-5.232%206.942-120.805%205.477-127.212%200C-5.941%20113.708%2055.57%205%2064.03%205zm3.45%2075.894l1.822-34.893H56.946l1.82%2034.893h8.715zM56.803%2093.108c0%201.929.547%203.423%201.643%204.483%201.095%201.06%202.642%201.589%204.642%201.589%201.953%200%203.477-.542%204.572-1.625%201.095-1.084%201.643-2.566%201.643-4.447%200-1.952-.542-3.452-1.625-4.5-1.084-1.047-2.613-1.571-4.59-1.571-2.047%200-3.607.512-4.678%201.536-1.072%201.023-1.607%202.535-1.607%204.535z%22%2F%3E%0A%3C%2Fsvg%3E');
                background-repeat: no-repeat;
                background-size: 1rem;
                background-position: center left 0rem;
                text-align: left;
                width: fit-content;
                -webkit-order: 3;
                order: 3;
                margin-top: 0.625rem;
                color: var(--colorCritical);
                font-size: var(--fontSizeMD);
                font-family: var(--fontFamily);
                font-weight: bold;
            }
        </style>

        <div class="demo-rows">
            <div class="demo-row">
                <rux-select label="Enabled">
                    <option value="" selected>Select an option</option>
                    <optgroup label="Group one">
                        <option>Option 1.1</option>
                        <option>Option 1.2</option>
                        <option>Option 1.3</option>
                        <option>Option 1.4</option>
                    </optgroup>
                    <optgroup label="Group two">
                        <option>Option 2.1</option>
                        <option>Option 2.2</option>
                        <option>Option 2.3</option>
                        <option>Option 2.4</option>
                    </optgroup>
                </rux-select>
            </div>

            <div class="demo-row">
                <rux-select label="Disabled" disabled>
                    <option value="" selected>Select an option</option>
                    <optgroup label="Group one">
                        <option value="1.1">Option 1.1</option>
                        <option value="1.2">Option 1.2</option>
                        <option value="1.3">Option 1.3</option>
                        <option value="1.4">Option 1.4</option>
                    </optgroup>
                    <optgroup label="Group two">
                        <option value="2.1">Option 2.1</option>
                        <option value="2.2">Option 2.2</option>
                        <option value="2.3">Option 2.3</option>
                        <option value="2.4">Option 2.4</option>
                    </optgroup>
                </rux-select>
            </div>

            <div class="demo-row">
                <rux-select label="Invalid" required invalid>
                    <option value="" selected>Select an option</option>
                    <optgroup label="Group one">
                        <option value="1.1">Option 1.1</option>
                        <option value="1.2">Option 1.2</option>
                        <option value="1.3">Option 1.3</option>
                        <option value="1.4">Option 1.4</option>
                    </optgroup>
                    <optgroup label="Group two">
                        <option value="2.1">Option 2.1</option>
                        <option value="2.2">Option 2.2</option>
                        <option value="2.3">Option 2.3</option>
                        <option value="2.4">Option 2.4</option>
                    </optgroup>
                </rux-select>
                <span class="rux-error-text">Error text</span>
            </div>
        </div>
    `
}

SelectMenu.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: selectMenuReadme,
        },
    },
}
