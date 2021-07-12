import { Component, Host, Prop, h, Watch } from '@stencil/core'

@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
    svg: string = ''

    /**
     * The size of the icon
     */
    @Prop({ reflect: true }) size:
        | 'extra-small'
        | 'small'
        | 'normal'
        | 'large' = 'normal'
    /**
     * The icon name
     */
    @Prop() icon!: string
    /**
     * The icon color
     */
    @Prop() color?: string
    /**
     * The icon label
     */
    @Prop() label?: string

    @Watch('label')
    labelRequired(newValue: string) {
        if (!newValue) {
            throw new Error('label is required')
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
                    title={this.label}
                ></SVG>
            </Host>
        )
    }
}
