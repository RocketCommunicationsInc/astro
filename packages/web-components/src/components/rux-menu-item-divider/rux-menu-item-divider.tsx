import { Component, h } from '@stencil/core'

@Component({
    tag: 'rux-menu-item-divider',
    styleUrl: 'rux-menu-item-divider.scss',
    shadow: true,
})
/**
 * @part container - the container of the rux-menu-item-divider
 */
export class RuxMenuItemDivider {
    render() {
        return <li part="container" role="separator"></li>
    }
}
