import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-calendar',
    styleUrl: 'rux-calendar.scss',
    shadow: true,
})
export class RuxCalendar {
    render() {
        return (
            <Host>
                <div>Calendar here :)</div>
            </Host>
        )
    }
}
