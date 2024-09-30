import { html } from 'lit-html';
import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'

const Base = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; margin-bottom:50px; position: relative;"
        >
            <rux-classification-marking
                classification="${args.classification}"
                .label="${args.label}"
                ?tag="${args.tag}"
            ></rux-classification-marking>
        </div>
    `
}

const WithFooterBanner = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; margin-bottom:50px; position: relative;"
        >
            <rux-classification-marking
                classification="${args.classification}"
                label="${args.label}"
                ?tag="${args.tag}"
            >
                <h1>Document Title</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae euismod lacus. Pellentesque sollicitudin
                    quam tristique tristique eleifend. Nam nec nibh magna. Duis
                    iaculis nisi nec quam lobortis, id feugiat risus maximus.
                    Cras purus massa, vulputate id orci quis, semper iaculis
                    risus. Nam turpis ante, molestie auctor semper et, auctor
                    nec diam. Morbi vehicula enim ac enim ullamcorper
                    scelerisque. Etiam lacinia metus quis ligula ullamcorper,
                    sed suscipit orci sodales. venenatis. Donec a mi mattis,
                    scelerisque nisl in, tincidunt ipsum. Donec venenatis dui
                    sit amet neque auctor, vitae vulputate sem volutpat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae euismod lacus. Pellentesque sollicitudin
                    quam tristique tristique eleifend. Nam nec nibh magna. Duis
                    iaculis nisi nec quam lobortis, id feugiat risus maximus.
                    Cras purus massa, vulputate id orci quis, semper iaculis
                    risus. Nam turpis ante, molestie auctor semper et, auctor
                    nec diam. Morbi vehicula enim ac enim ullamcorper
                    scelerisque. Etiam lacinia metus quis ligula ullamcorper,
                    sed suscipit orci sodales. venenatis. Donec a mi mattis,
                    scelerisque nisl in, tincidunt ipsum. Donec venenatis dui
                    sit amet neque auctor, vitae vulputate sem volutpat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae euismod lacus. Pellentesque sollicitudin
                    quam tristique tristique eleifend. Nam nec nibh magna. Duis
                    iaculis nisi nec quam lobortis, id feugiat risus maximus.
                    Cras purus massa, vulputate id orci quis, semper iaculis
                    risus. Nam turpis ante, molestie auctor semper et, auctor
                    nec diam. Morbi vehicula enim ac enim ullamcorper
                    scelerisque. Etiam lacinia metus quis ligula ullamcorper,
                    sed suscipit orci sodales. venenatis. Donec a mi mattis,
                    scelerisque nisl in, tincidunt ipsum. Donec venenatis dui
                    sit amet neque auctor, vitae vulputate sem volutpat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae euismod lacus. Pellentesque sollicitudin
                    quam tristique tristique eleifend. Nam nec nibh magna. Duis
                    iaculis nisi nec quam lobortis, id feugiat risus maximus.
                    Cras purus massa, vulputate id orci quis, semper iaculis
                    risus. Nam turpis ante, molestie auctor semper et, auctor
                    nec diam. Morbi vehicula enim ac enim ullamcorper
                    scelerisque. Etiam lacinia metus quis ligula ullamcorper,
                    sed suscipit orci sodales. venenatis. Donec a mi mattis,
                    scelerisque nisl in, tincidunt ipsum. Donec venenatis dui
                    sit amet neque auctor, vitae vulputate sem volutpat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae euismod lacus. Pellentesque sollicitudin
                    quam tristique tristique eleifend. Nam nec nibh magna. Duis
                    iaculis nisi nec quam lobortis, id feugiat risus maximus.
                    Cras purus massa, vulputate id orci quis, semper iaculis
                    risus. Nam turpis ante, molestie auctor semper et, auctor
                    nec diam. Morbi vehicula enim ac enim ullamcorper
                    scelerisque. Etiam lacinia metus quis ligula ullamcorper,
                    sed suscipit orci sodales. venenatis. Donec a mi mattis,
                    scelerisque nisl in, tincidunt ipsum. Donec venenatis dui
                    sit amet neque auctor, vitae vulputate sem volutpat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae euismod lacus. Pellentesque sollicitudin
                    quam tristique tristique eleifend. Nam nec nibh magna. Duis
                    iaculis nisi nec quam lobortis, id feugiat risus maximus.
                    Cras purus massa, vulputate id orci quis, semper iaculis
                    risus. Nam turpis ante, molestie auctor semper et, auctor
                    nec diam. Morbi vehicula enim ac enim ullamcorper
                    scelerisque. Etiam lacinia metus quis ligula ullamcorper,
                    sed suscipit orci sodales. venenatis. Donec a mi mattis,
                    scelerisque nisl in, tincidunt ipsum. Donec venenatis dui
                    sit amet neque auctor, vitae vulputate sem volutpat.
                </p>
            </rux-classification-marking>
        </div>
    `
}

const WithAllBannerVariants = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; margin:20px;"
        >
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="top-secret-sci"
                ></rux-classification-marking>
            </div>
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="top-secret"
                ></rux-classification-marking>
            </div>
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="secret"
                ></rux-classification-marking>
            </div>
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="confidential"
                ></rux-classification-marking>
            </div>
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="controlled"
                ></rux-classification-marking>
            </div>
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="cui"
                ></rux-classification-marking>
            </div>
            <div
                style="position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <rux-classification-marking
                    classification="unclassified"
                ></rux-classification-marking>
            </div>
        </div>
    `
}

const WithAllTagVariants = () => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: flex-start; width: 400px; margin:60px auto;"
        >
            <div
                style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    Top Secret//SCI
                </p>
                <rux-classification-marking
                    tag
                    classification="top-secret-sci"
                ></rux-classification-marking>
            </div>
            <div
                style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    Top Secret
                </p>
                <rux-classification-marking
                    tag
                    classification="top-secret"
                ></rux-classification-marking>
            </div>
            <div
                style="display: flex; align-items:baseline;  position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    Secret
                </p>
                <rux-classification-marking
                    tag
                    classification="secret"
                ></rux-classification-marking>
            </div>
            <div
                style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    Confidential
                </p>
                <rux-classification-marking
                    tag
                    classification="confidential"
                ></rux-classification-marking>
            </div>
            <div
                style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    Controlled Unclassified
                </p>
                <rux-classification-marking
                    tag
                    classification="controlled"
                ></rux-classification-marking>
            </div>
            <div
                style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    CUI Unclassified
                </p>
                <rux-classification-marking
                    tag
                    classification="cui"
                ></rux-classification-marking>
            </div>
            <div
                style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
            >
                <p
                    style="display: flex; width:225px; font-size:13px; font-style:italic; color:#d5d7d9; margin: 0 0 1rem 0;"
                >
                    Uncontrolled Unclassified
                </p>
                <rux-classification-marking
                    tag
                    classification="unclassified"
                ></rux-classification-marking>
            </div>
        </div>
    `
}

export default {
    title: 'Components/Classification Markings',
    component: 'rux-classification-marking',
    argTypes: extractArgTypes('rux-classification-marking'),
}

export const Default = {
    render: Base.bind(),

    args: {
        classification: 'unclassified',
        tag: false,
        label: '',
    },

    name: 'Default',
}

export const WithLabel = {
    render: Base.bind(),

    args: {
        classification: 'unclassified',
        tag: false,
        label: ' customlabel',
    },

    name: 'With Label',
}

export const FooterBanner = {
    render: WithFooterBanner.bind(),

    args: {
        classification: 'secret',
        tag: false,
        label: '',
    },

    name: 'With Footer Banner',
}

export const AllBannerVariants = {
    render: WithAllBannerVariants.bind(),

    argTypes: {
        classification: {
            table: {
                disable: true,
            },
        },

        label: {
            table: {
                disable: true,
            },
        },

        tag: {
            table: {
                disable: true,
            },
        },
    },

    name: 'All Banner Variants',
}

export const AllTagVariants = {
    render: WithAllTagVariants.bind(),

    argTypes: {
        classification: {
            table: {
                disable: true,
            },
        },

        label: {
            table: {
                disable: true,
            },
        },

        tag: {
            table: {
                disable: true,
            },
        },
    },

    name: 'All Tag Variants',
}
