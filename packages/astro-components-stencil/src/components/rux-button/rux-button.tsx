import { Prop, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-button',
  styleUrl: 'rux-button.css',
  shadow: true,
})

export class RuxButton {
  @Prop() icon: string = '';
  @Prop() iconOnly: boolean = false;
  @Prop() outline: boolean = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) size?: 'small' | 'large';

  render() {
    const { size, iconOnly, outline, disabled } = this;
    return (
      <Host
        aria-disabled={disabled ? 'true' : null }
        class={{
          'rux-button': true,
          'rux-button--outline': outline,
          'rux-button--small' : size === 'small',
          'rux-button--large' : size === 'large',
          'rux-button--icon-only' : iconOnly
        }}
        disabled={disabled}
      >
        <slot></slot>
      </Host>
    );
  }

}
