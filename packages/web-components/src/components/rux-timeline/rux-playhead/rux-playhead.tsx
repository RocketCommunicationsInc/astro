import { Prop, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-playhead',
    styleUrl: 'rux-playhead.scss',
    shadow: true,
})
export class RuxPlayhead {
    @Prop() time: any = 0

    render() {
        return (
            <Host>
                <div class="rux-playhead" style={{ left: `${this.time}px` }}>
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
