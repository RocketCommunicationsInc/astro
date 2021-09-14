import { newSpecPage } from '@stencil/core/testing'
import { RuxSelect } from '../rux-select'

describe('rux-select', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
        <rux-select label="Select an Option">
          <option value="" selected>Select an Option</option>
          <optgroup label="Group one">
              <option>Option 1.1</option>
              <option>Option 1.2</option>
              <option>Option 1.3</option>
              <option>Option 1.4</option>
          </optgroup>
          <optgroup label="Group two">
              <option>Option 2.1</option>
              <option>Option 2.2</option>
              <option>Option 2.3</option>
              <option>Option 2.4</option>
          </optgroup>
        </rux-select>
      `,
        })
        expect(page.root).toEqualHtml(`
     <rux-select label="Select an Option">
       <label>
         Select an Option
       </label>
       <select class="rux-select">
         <option selected="" value="">
           Select an Option
         </option>
         <optgroup label="Group one">
           <option>
             Option 1.1
           </option>
           <option>
             Option 1.2
           </option>
           <option>
             Option 1.3
           </option>
           <option>
             Option 1.4
           </option>
         </optgroup>
         <optgroup label="Group two">
           <option>
             Option 2.1
           </option>
           <option>
             Option 2.2
           </option>
           <option>
             Option 2.3
           </option>
           <option>
             Option 2.4
           </option>
         </optgroup>
       </select>
      </rux-select>
    `)
    })
})
