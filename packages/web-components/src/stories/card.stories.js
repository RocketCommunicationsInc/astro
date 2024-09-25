import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            Suscipit potenti habitant penatibus praesent quam class erat purus
            nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero
            maecenas dictumst donec dis cras ante finibus.
        </rux-card>
    `
}

const WithHeader = (args) => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            <div slot="header">Card Title</div>
            Suscipit potenti habitant penatibus praesent quam class erat purus
            nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero
            maecenas dictumst donec dis cras ante finibus.
        </rux-card>
    `
}

const WithFooter = (args) => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            Suscipit potenti habitant penatibus praesent quam class erat purus
            nisl ligula arcu accumsan risus, interdum phasellus lorem leo libero
            maecenas dictumst donec dis cras ante finibus.
            <div slot="footer">
                <rux-button size="small" style="width: 100%;"
                    >Primary button</rux-button
                >
            </div>
        </rux-card>
    `
}

const FullExample = (args) => {
    return html`
        <rux-card style="width: 300px; margin: auto;">
            <div slot="header" style="display: flex; align-items: center;">
                <rux-icon
                    icon="star"
                    size="26px"
                    style="margin-right: 10px;"
                ></rux-icon>
                Card Title
            </div>
            <div
                style="padding-top: 20px; padding-bottom: 20px; display: flex; justify-content: center;"
            >
                <svg
                    width="140"
                    height="140"
                    viewBox="0 0 140 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M139.65 70C139.65 108.467 108.467 139.65 70 139.65C31.5334 139.65 0.35 108.467 0.35 70C0.35 31.5334 31.5334 0.35 70 0.35C108.467 0.35 139.65 31.5334 139.65 70Z"
                        stroke="black"
                        stroke-width="0.7"
                    />
                    <circle
                        cx="70"
                        cy="70"
                        r="41.65"
                        stroke="black"
                        stroke-width="0.7"
                    />
                    <path
                        d="M69.3044 28L69.3044 0.700024C109.605 0.700026 139.3 32.2 139.3 70.7L112.002 70.7C112.002 45.5 92.4029 28 69.3044 28Z"
                        fill="#AEA8E5"
                    />
                    <path
                        d="M69.3044 112L69.3044 139.3C109.605 139.3 139.3 107.45 139.3 70.7L112.002 70.7C111.302 93.45 92.7529 112 69.3044 112Z"
                        fill="#938BDB"
                    />
                    <path
                        d="M69.3044 28L69.3044 0.702855C30.8085 0.349326 0.00881784 33.6 0.711748 70.7L27.9982 70.7C27.9982 45.85 47.597 28.35 69.3044 28Z"
                        fill="#302C54"
                    />
                    <path
                        d="M69.3044 112L69.3044 139.3C30.1086 139.3 0.361846 106.75 0.711796 70.7L27.9982 70.7C28.6963 94.15 47.247 111.65 69.3044 112Z"
                        fill="#6058A8"
                    />
                </svg>
            </div>
            <div slot="footer" style="justify-content: center; display: flex;">
                <rux-button size="small">Primary button</rux-button>
            </div>
        </rux-card>
    `
}

export default {
    title: 'Components/Card',
    component: 'rux-card',
    argTypes: extractArgTypes('rux-card'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
}

export const WithHeader_ = {
    render: WithHeader.bind(),
    name: 'With Header',
}

export const WithFooter_ = {
    render: WithFooter.bind(),
    name: 'With Footer',
}

export const FullExample_ = {
    render: FullExample.bind(),
    name: 'Full Example',
}
