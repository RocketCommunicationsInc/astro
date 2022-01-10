import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-ruler',
    styleUrl: 'rux-ruler.scss',
    shadow: true,
})
export class RuxRuler {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
