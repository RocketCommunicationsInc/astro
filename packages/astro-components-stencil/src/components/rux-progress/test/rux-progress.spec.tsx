import { newSpecPage } from '@stencil/core/testing'
import { RuxProgress } from '../rux-progress'

describe('rux-progress', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxProgress],
            html: `<rux-progress></rux-progress>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-progress>
        <mock:shadow-root>
        <progress class="rux-progress"></progress>
          <slot></slot>
        </mock:shadow-root>
      </rux-progress>
    `)
    })
    it('returns progress as string', async () => {
        const progress = new RuxProgress()
        progress.value = 10
        const string = progress.getProgressAsString()
        expect(string).toBe('10%')
    })

    it('returns zero percent if no value is given', async () => {
        const progress = new RuxProgress()
        const string = progress.getProgressAsString()
        expect(string).toBe('0%')
    })
    it('changes max to equal value if given value is greater than given max', async () => {
        const progress = new RuxProgress()
        progress.checkValueNotOverMax(100, 150)
        expect(progress.max).toBe(150)
    })
    it('does not modify max if max is greater than given value', async () => {
        const progress = new RuxProgress()
        progress.checkValueNotOverMax(100, 50)
        expect(progress.max).toBe(100)
    })
    it('has correct default values for max and value if none are given', async () => {
        const progress = new RuxProgress()
        expect(progress.max).toBe(100)
        expect(progress.value).toBe(undefined)
    })
    it('renders a progress bar of 0/100 if value provided is 0', async () => {
        const page = await newSpecPage({
            components: [RuxProgress],
            html: `<rux-progress value="0"></rux-progress>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-progress value="0">
          <mock:shadow-root>
          <progress class="rux-progress" value="0" max="100"></progress>
          <output class="rux-progress__value">0%</output>
            <slot></slot>
          </mock:shadow-root>
        </rux-progress>
      `)
    })

    it('only renders the value if max is set to ""', async () => {
        const page = await newSpecPage({
            components: [RuxProgress],
            html: `<rux-progress value="20" max="100"></rux-progress>`,
        })
        await page?.root?.setAttribute('max', '')
        await page.waitForChanges()
        expect(page.root).toEqualHtml(`
      <rux-progress max="" value="20">
        <mock:shadow-root>
        <progress class="rux-progress" value="20" max="NaN"></progress>
        <output class="rux-progress__value">20</output>
          <slot></slot>
        </mock:shadow-root>
      </rux-progress>
    `)
    })
})
