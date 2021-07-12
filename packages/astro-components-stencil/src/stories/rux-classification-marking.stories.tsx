import { html, render } from 'lit-html'
import { text, select, withKnobs } from '@storybook/addon-knobs'
import Readme from '../../src/components/rux-classification-marking/readme.md'

export default {
    title: 'Components/Classification Markings',
    decorators: [withKnobs],
}

export const ClassificationMarkings = () => {
    const classificationOptions = [
        'Top Secret//SCI',
        'Top Secret',
        'Secret',
        'Confidential',
        'Controlled',
        'Unclassified',
    ]
    const classification = select(
        'Classification',
        classificationOptions,
        'Top Secret//SCI'
    )

    const markingOptions = ['Banner', 'Tag']
    const markingType = select('Marking Type', markingOptions, 'banner')
    const markingText = text('Marking Label', '')

    function markingSelect() {
        const myLabel = markingType.toLowerCase()

        return `${myLabel}`
    }

    function markingFilter() {
        let markingClass = classification
            .toLowerCase()
            .replace(/[//]/g, ' ') // replace forwards slashes of Top Secret//SCI with single space
            .replace(/\s+/g, '-') // replace spaces with dashes

        return markingClass
    }

    const markingTemplate = `
    <div style="display: flex; flex-flow: row; justify-content: center;margin-top:30px;">
      <rux-classification-marking
        classification="${markingFilter()}"
        label="${markingText}"
        ${markingSelect()}
      >
      </rux-classification-marking>
    </div>
  `

    return markingTemplate
}

ClassificationMarkings.story = {
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

export const ClassificationMarkingBanners = () => html`
    <div
        style="display: flex; flex-flow: column; justify-content: center; margin:20px;"
    >
        <div
            style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-classification-marking
                classification="top-secret-sci"
            ></rux-classification-marking>
        </div>

        <div
            style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-classification-marking
                classification="top-secret"
            ></rux-classification-marking>
        </div>

        <div
            style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-classification-marking
                classification="secret"
            ></rux-classification-marking>
        </div>

        <div
            style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-classification-marking
                classification="confidential"
            ></rux-classification-marking>
        </div>

        <div
            style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-classification-marking
                classification="controlled"
            ></rux-classification-marking>
        </div>

        <div
            style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;"
        >
            <rux-classification-marking
                classification="unclassified"
            ></rux-classification-marking>
        </div>
    </div>
`

ClassificationMarkingBanners.story = {
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

export const ClassificationMarkingTags = () => html`
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

ClassificationMarkingTags.story = {
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
