import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'
import ruxIconsJson from './icons.json'

const Default = (args) => {
    return html` <rux-icon icon="${args.icon}" size="${args.size}"></rux-icon> `
}

const AllIcons = (args) => {
    const displaySection = (section) => {
        return html`
            <div class="icon__section">
                <div class="icon-group__header">
                    ${section}
                    <span class="icon-style">Solid</span>
                </div>
                ${Object.keys(ruxIconsJson[section]).map((category) => {
                    return html`
                        <div>
                            <div class="icon-list">
                                ${Object.values(
                                    ruxIconsJson[section][category]
                                ).map((icon) => {
                                    const idx = icon.lastIndexOf('/')
                                    const name = icon
                                        .substring(idx + 1)
                                        .replace(/\//g, '-')
                                        .replace(/ /g, '-')
                                        .replace(/.svg/g, '')
                                        .toLowerCase()
                                    return html`
                                        <div class="icon">
                                            <rux-icon
                                                size="normal"
                                                icon="${name}"
                                            ></rux-icon>
                                            <div class="icon-label">
                                                ${name}
                                            </div>
                                        </div>
                                    `
                                })}
                            </div>
                            <div></div>
                        </div>
                    `
                })}
            </div>
        `
    }
    return html`
        <style>
            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .icon-label {
                margin-top: 1rem;
                font-size: 0.75rem;
            }
            .icon-style {
                font-size: 1.5rem;
                margin-left: auto;
            }
            .icon-group__header {
                display: flex;
                align-items: center;
                font-size: 3rem;
                font-weight: 400;
                text-align: left;
                text-transform: capitalize;
                margin-bottom: 1rem;
            }
            .icon-list {
                display: grid;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                grid-auto-rows: minmax(70px, auto);
                grid-gap: 1rem;
                padding-bottom: 60px;
            }
            .icon__wrapper {
                padding: 1rem;
            }
        </style>
        <div class="icon__wrapper">
            ${displaySection('Astro')}
            ${Object.keys(ruxIconsJson).map((section) =>
                section !== 'Astro' ? displaySection(section) : null
            )}
        </div>
    `
}

export default {
    title: 'Components/Icons',
    component: 'rux-icon',
    argTypes: args,
}

export const Default_ = {
    render: Default.bind(),

    args: {
        icon: 'satellite-transmit',
        size: 'normal',
    },

    parameters: {
        docs: {
            source: {
                code:
                    '<rux-icon size="normal" icon="satellite-transmit"></rux-icon>',
            },
        },
    },

    name: 'Default',
}

export const AllIcons_ = {
    render: AllIcons.bind(),

    args: {
        size: 'normal',
    },

    argTypes: {
        size: {
            table: {
                disable: true,
            },
        },

        icon: {
            table: {
                disable: true,
            },
        },
    },

    name: 'All Icons',
}
