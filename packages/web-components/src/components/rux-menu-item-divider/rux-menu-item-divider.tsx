import { Component, h } from '@stencil/core'

/**
 * @part container - the container of the rux-menu-item-divider
 */
@Component({
    tag: 'rux-menu-item-divider',
    styleUrl: 'rux-menu-item-divider.scss',
    shadow: true,
})
export class RuxMenuItemDivider {
    render() {
        return <li part="container" role="separator"></li>
    }
}
