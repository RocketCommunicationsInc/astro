import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
    svg: string;

    @Prop() size: 'extra small' | 'small' | 'base' | 'large' = 'base'

    @Prop() name: string;

    @Prop() viewBox: string = '0 0 24 24';

    @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'white' = 'primary';

    render() {
        const SVG = `rux-icon-${this.name}`;

        return (
          <Host>
            <SVG class="icon" color={this.color} size={this.size} viewBox={this.viewBox}></SVG>
          </Host>
        );
    }
}
