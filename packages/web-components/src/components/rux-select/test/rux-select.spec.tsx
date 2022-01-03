import { newSpecPage } from '@stencil/core/testing'
import { RuxSelect } from '../rux-select'

describe('rux-select', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
            <rux-select label="test">
                <rux-option label="one"></rux-option>
                <rux-option label="two"></rux-option>
            </rux-select>
      `,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders option groups', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
            <rux-select>
              <rux-option label="outside option"></rux-option>
              <rux-option-group label="Group one">
                <rux-option label="inside option"></rux-option>
              </rux-option-group>
              <rux-option label="outside option"></rux-option>
            </rux-select>
          `,
        })
        expect(page.root).toMatchSnapshot()
    })
})
