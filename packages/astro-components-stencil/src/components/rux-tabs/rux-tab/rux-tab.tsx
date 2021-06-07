import { Component, Host, h, Prop, Element } from '@stencil/core'

@Component({
    tag: 'rux-tab',
    styleUrl: 'rux-tab.scss',
    shadow: true,
})
export class RuxTab {
    /**
     *  If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected.
     */
    @Prop({ reflect: true, mutable: true }) selected: boolean = false
    /**
     * If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.
     */
    @Prop({ reflect: true, mutable: true }) disabled: boolean = false

    @Element() el: HTMLElement

    connectedCallback() {
        this.el.setAttribute('role', 'tab')
        this.el.addEventListener('click', this.clickHandler)

        if (this.el.parentElement.getAttributeNode('small')) {
            this.el.setAttribute('small', '')
        }
    }

    clickHandler(e) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    render() {
        return (
            <Host onClick={(e) => this.clickHandler(e)}>
                <slot></slot>
            </Host>
        )
    }
}
