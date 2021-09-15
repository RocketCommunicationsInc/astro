import { Component, h } from '@stencil/core'

@Component({
    tag: 'rux-menu-item-divider',
    styleUrl: 'rux-menu-item-divider.scss',
    shadow: true,
})
export class RuxMenuItemDivider {
    render() {
        return <li role="separator"></li>
    }
}
