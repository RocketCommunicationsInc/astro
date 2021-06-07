import { Component, Host, h, Element } from '@stencil/core'

@Component({
    tag: 'rux-tab-panel',
    styleUrl: 'rux-tab-panel.scss',
    shadow: true,
})
export class RuxTabPanel {
    @Element() el: HTMLElement

    connectedCallback() {
        this.el.setAttribute('role', 'tabpanel')
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
