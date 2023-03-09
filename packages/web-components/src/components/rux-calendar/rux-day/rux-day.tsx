import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-day',
    styleUrl: 'rux-day.scss',
    shadow: true,
})
export class RuxDay {
    render() {
        return (
            <Host>
                <button class="rux-day">
                    <div class="oridnal">
                        <slot name="ordinal"></slot>
                    </div>
                    <slot></slot>
                    <div class="gregorian">
                        <slot name="gregorian"></slot>
                    </div>
                </button>
            </Host>
        )
    }
}
