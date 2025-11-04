import { html } from 'lit-html'
import '../components/rux-push-button/rux-push-button.ts'

const Base = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-push-button
                label=${args.label}
                size=${args.size}
                icon=${args.icon}
                ?checked=${args.checked}
                ?disabled=${args.disabled}
                ?icon-only=${args.iconOnly}
                name=${args.name}
                value=${args.value}
            ></rux-push-button>
        </div>
    `
}

const WithAllVariants = () => {
    return html`
        <style>
            .button-list {
                list-style-type: none;
                margin: 0 1rem 0 0;
                padding: 0;
                display: flex;
                flex-flow: column;
            }
            .button-list li {
                margin: 0 1rem 1rem 0;
                display: flex;
            }
        </style>
        <div style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;">
            <ul class="button-list">
                <li>
                    <rux-push-button label="Push button small" size="small"></rux-push-button>
                </li>
                <li>
                    <rux-push-button label="Push button medium"></rux-push-button>
                </li>
                <li>
                    <rux-push-button label="Push button large" size="large"></rux-push-button>
                </li>
                <li>
                    <rux-push-button checked label="Push button checked"></rux-push-button>
                </li>
                <li>
                    <rux-push-button disabled label="Push button disabled"></rux-push-button>
                </li>
                <li>
                    <rux-push-button checked disabled label="Push button disabled checked"></rux-push-button>
                </li>
            </ul>
        </div>
    `
}

export default {
    title: 'Components/Push Button',
    component: 'rux-push-button',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        label: 'Push Button',
        size: 'medium',
        checked: false,
        disabled: false,
        iconOnly: false,
        icon: '',
        name: '',
        value: '',
    },
}

export const Checked = {
    render: Base.bind(),
    name: 'Checked',
    args: {
        label: 'Push Button',
        checked: true,
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',
    args: {
        label: 'Push Button',
        disabled: true,
    },
}

export const Small = {
    render: Base.bind(),
    name: 'Small',
    args: {
        label: 'Small Push Button',
        size: 'small',
    },
}

export const Large = {
    render: Base.bind(),
    name: 'Large',
    args: {
        label: 'Large Push Button',
        size: 'large',
    },
}

export const AllVariants = {
    render: WithAllVariants.bind(),
    name: 'All Variants',
}
