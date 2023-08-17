import { Component, Host, h, Element } from '@stencil/core'
import { mask } from '../../utils/utils'

@Component({
    tag: 'rux-julian-input',
    styleUrl: 'rux-julian-input.scss',
    shadow: true,
})
export class RuxJulianInput {
    /*
    Need an input that can support our julian/ordinal format of YYYY-DDD. A regex pattern for that is /^\d{4}\/\d{3}$/gm. This however matches the format exactly, so we
      may need to consider an alternative for _while_ the user is typing in the input.
    This input should have validation for the above format, placeholder for the above format
    This input should work in both directions, from input to calendar and calendar to input
    Datepicker should be able to use this input instead of a regular <rux-input type="date" />
    This input should also be a stand alone component.
    This input should have the same styles as our rux-input and use the same tokens

  */

    @Element() el!: HTMLInputElement

    connectedCallback() {
        setTimeout(() => mask(this.el), 1000)
    }

    render() {
        return (
            <Host>
                <input></input>
            </Host>
        )
    }
}
