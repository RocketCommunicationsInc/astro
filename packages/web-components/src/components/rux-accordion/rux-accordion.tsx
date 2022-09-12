import { Component, h, Host, Prop } from '@stencil/core'
//import { hasShadowDom } from '../../utils/utils'

@Component({
    tag: 'rux-accordion',
    styleUrl: 'rux-accordion.scss',
    shadow: true,
})
export class RuxAccordion {
    /**
     * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * If present, sets accordion item headers to wrap text instead of overflow: ellipsis
     */
    @Prop({ reflect: true }) truncated: boolean = false

    /*******
     * toggles disabled - default false
     * *********/
    @Prop({ reflect: true }) disallowMultiple: boolean = false

    render() {
        return (
            <Host tabindex={this.disabled ? '-1' : null}>
                <slot></slot>
            </Host>
        )
    }
}