import { Component, Host, Prop, h, Watch } from '@stencil/core';

@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.scss',
    shadow: true,
})
export class RuxIcon {
    svg: string

    @Prop({reflect: true}) size: 'extra-small' | 'small' | 'normal' | 'large' = 'normal'
    @Prop() icon: string;
    @Prop() viewBox: string = '0 0 24 24';
    @Prop() color: string;
    @Prop() label: string;

    @Watch('label')
    labelRequired(newValue: string){
      if (!newValue) {throw new Error('label is required')}
    }

    render() {
        const SVG = `rux-icon-${this.icon}`;

        return (
          <Host>
            <SVG class="icon" color={this.color} size={this.size} title={this.label} viewBox={this.viewBox}></SVG>
          </Host>
        );
    }
}
