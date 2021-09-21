import { newSpecPage } from '@stencil/core/testing'
import { RuxSlider } from '../rux-slider'

describe('rux-slider', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider></rux-slider>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-slider style="--slider-value-percent: 50%;">
            <mock:shadow-root>
              <div class="rux-form-field" part="form-field">
                <label aria-hidden="true" class="rux-input-label" htmlfor="rux-slider-1" part="label">
                  <span class="hidden">
                    <slot name="label"></slot>
                  </span>
                </label>
                <div class="rux-slider">
                  <input aria-disabled="false" aria-label="slider" id="rux-slider-1" class="rux-range" max="100" min="0" step="1" type="range" value="50">
                </div>
            </div>
            </mock:shadow-root>
            <input class="aux-input" type="hidden" value="50">
          </rux-slider>
        `)
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider label="hello"></rux-slider>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-slider label="hello" style="--slider-value-percent: 50%;">
          <mock:shadow-root>
            <div class="rux-form-field" part="form-field">
              <label aria-hidden="false" class="rux-input-label" htmlfor="rux-slider-2" part="label">
                <span>
                  <slot name="label">hello</slot>
                </span>
              </label>
              <div class="rux-slider">
                <input aria-disabled="false" aria-label="slider" id="rux-slider-2" class="rux-range" max="100" min="0" step="1" type="range" value="50">
              </div>
          </div>
          </mock:shadow-root>
          <input class="aux-input" type="hidden" value="50">
        </rux-slider>
      `)
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider><div slot="label">hello</div></rux-slider>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-slider style="--slider-value-percent: 50%;">
        <mock:shadow-root>
          <div class="rux-form-field" part="form-field">
            <label aria-hidden="false" class="rux-input-label" htmlfor="rux-slider-3" part="label">
              <span>
                <slot name="label"></slot>
              </span>
            </label>
            <div class="rux-slider">
              <input aria-disabled="false" aria-label="slider" id="rux-slider-3" class="rux-range" max="100" min="0" step="1" type="range" value="50">
            </div>
        </div>
        </mock:shadow-root>
        <div slot="label">hello</div>
        <input class="aux-input" type="hidden" value="50">
      </rux-slider>
    `)
    })
})
