import { Component, Host, Prop, h } from '@stencil/core'

@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
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
        | string = 'auto'
    /**
     * The icon name
     */
    @Prop() icon!: string
    /**
     * The icon color
     */
    @Prop() color?: string
    /**
     * The icon SVG's title attribute. Used for accessibility. If none is provided, the icon name will be used.
     */
    @Prop() label?: string

    get iconLabel() {
        if (this.label) {
            return this.label
        } else {
            return this.icon
        }
    }

    render() {
        const SVG = `rux-icon-${this.icon}`

        return (
            <Host>
                <SVG
                    class="icon"
                    color={this.color}
                    size={this.size}
                    title={this.iconLabel}
                ></SVG>
            </Host>
        )
    }
}
