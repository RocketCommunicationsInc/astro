import { Component, h } from '@stencil/core'

/**
 * @slot (default) - Two or more RuxNotification components to render in the group
 * @part container - the components container
 */
@Component({
    tag: 'rux-notification-group',
    styleUrl: 'rux-notification-group.scss',
    shadow: true,
})
export class RuxNotificationGroup {
    render() {
        return (
            <div part="container">
                <slot></slot>
            </div>
        )
    }
}
