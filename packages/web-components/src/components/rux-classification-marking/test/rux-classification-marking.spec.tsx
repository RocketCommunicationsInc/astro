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
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">
            unclassified
          </div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })
})

describe('rux-classification-marking banners', () => {
    it('renders unclassified banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="unclassified"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">unclassified</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders controlled banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="controlled"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="controlled">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">cui</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders confidential banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="confidential"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="confidential">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">confidential</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders secret banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="secret"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="secret">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">secret</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders top secret banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="top-secret"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">top secret</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders top secret sci banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="top-secret-sci"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret-sci">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">top secret//sci</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders tincorrect option banner', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="notapprovedoption"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="notapprovedoption">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">Select a Classification Marking</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })
})

describe('rux-classification-marking tags', () => {
    it('renders unclassified tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="unclassified" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">u</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders controlled tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="controlled" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="controlled" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">cui</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders confidential tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="confidential" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="confidential" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">c</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders secret tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="secret" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="secret" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">s</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders top secret tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="top-secret" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">ts</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders top secret sci tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="top-secret-sci" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="top-secret-sci" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">TS//SCI</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders incorrect option tag', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="notapprovedoption" tag=true></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="notapprovedoption" tag>
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">Select a Classification Marking</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })
})

describe('rux-classification-marking label', () => {
    it('renders unclassified banner label', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="unclassified" label="-hello world-"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified" label="-hello world-">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--banner">unclassified-hello world-</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
    })

    it('renders unclassified tag label', async () => {
        const page = await newSpecPage({
            components: [RuxClassificationMarking],
            html: `<rux-classification-marking classification="unclassified" tag=true label="-hello world-"></rux-classification-marking>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-classification-marking classification="unclassified" tag label="-hello world-">
        <mock:shadow-root>
          <div class="rux-classification rux-classification--tag">u-hello world-</div>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-marking>
    `)
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

        expect(page.root).toEqualHtml(`
        <rux-classification-marking classification="secret">
          <mock:shadow-root>
            <div class="rux-classification rux-classification--banner">secret</div>
            <slot></slot>
          </mock:shadow-root>
          <h1>Test title for footer banner</h1>
        </rux-classification-marking>
      `)
    })
})
