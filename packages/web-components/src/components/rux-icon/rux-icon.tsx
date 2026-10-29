import { Component, Host, Prop, State, Watch, h } from '@stencil/core'
import { iconLoaders } from './icon-loaders'

/**
 * @part icon - the icon in rux-icon
 */
@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
    @State() svg: string = ''
    private iconLoadGeneration = 0

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

    componentWillLoad() {
        return this.loadIcon(this.icon)
    }

    @Watch('icon')
    iconChanged(icon: string) {
        return this.loadIcon(icon)
    }

    private async loadIcon(icon: string) {
        const generation = ++this.iconLoadGeneration
        const loadIcon = iconLoaders[icon]

        if (!loadIcon) {
            this.svg = ''
            return
        }

        const { default: svg } = await loadIcon()
        if (generation === this.iconLoadGeneration) {
            this.svg = svg
        }
    }

    get iconSize() {
        const sizes: { [key: string]: string } = {
            'extra-small': '1rem',
            small: '2rem',
            normal: '3rem',
            large: '4rem',
        }

        return sizes[this.size] || this.size
    }

    render() {
        const style = {
            height: this.iconSize,
            width: this.iconSize,
        }

        return (
            <Host>
                <div
                    class="icon"
                    part="icon"
                    style={style}
                    innerHTML={this.svg}
                ></div>
            </Host>
        )
    }
}
