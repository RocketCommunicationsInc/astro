import { newSpecPage } from '@stencil/core/testing'
import { RuxClassificationMarking } from '../rux-classification-marking'

describe('rux-classification-marking', () => {
    it('builds', async () => {
        const classificationMarking = new RuxClassificationMarking()

        expect(classificationMarking).toBeTruthy()
        expect(classificationMarking).toEqual({
            classification: 'unclassified',
            isWrapper: false,
            tag: false,
        })
    })

    it('renders component with no properties set', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking></rux-classification-marking>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    describe('rux-classification-marking banners', () => {
        it('renders unclassified banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="unclassified"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders controlled banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="controlled"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders cui banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="cui"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders confidential banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="confidential"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders secret banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="secret"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders top secret banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="top-secret"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders top secret sci banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="top-secret-sci"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders tincorrect option banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="notapprovedoption"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })
    })

    describe('rux-classification-marking tags', () => {
        it('renders unclassified tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="unclassified" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders controlled tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="controlled" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders confidential tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="confidential" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders secret tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="secret" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders top secret tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="top-secret" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders top secret sci tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="top-secret-sci" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders incorrect option tag', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="notapprovedoption" tag=true></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })
    })

    describe('rux-classification-marking label', () => {
        it('renders unclassified banner label', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="unclassified" label="-hello world-"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        it('renders unclassified tag label', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `<rux-classification-marking classification="unclassified" tag=true label="-hello world-"></rux-classification-marking>`,
            })
            expect(page.root).toMatchSnapshot()
        })

        //This test does not test for the proper expectation but excludes the second footer-banner div due to an unknown bug in jest
        it('renders footer banner', async () => {
            const page = await newSpecPage({
                components: [RuxClassificationMarking],
                html: `
          <rux-classification-marking classification="secret">
            <h1>Test title for footer banner</h1>
          </rux-classification-marking>
        `,
            })

            expect(page.root).toMatchSnapshot()
        })
    })
})
