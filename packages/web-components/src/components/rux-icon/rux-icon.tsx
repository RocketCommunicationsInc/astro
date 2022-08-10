import { Component, Host, Prop, h } from '@stencil/core'

/**
 * @part icon - the icon in rux-icon
 */
@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
    // eslint-disable-next-line
    svg: string = ''

    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    @Prop({ reflect: true }) size:
        | 'extra-small'
        | 'small'
        | 'normal'
        | 'large'
        | 'auto'
        | string = 'normal'
    /**
     * The icon name
     */
    @Prop() icon!: string

    render() {
        const SVG = `rux-icon-${this.icon}`

        return (
            <Host>
                <SVG class="icon" part="icon" size={this.size}></SVG>
            </Host>
        )
    }
}
