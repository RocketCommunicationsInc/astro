import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-menu-item-divider',
  styleUrl: 'rux-menu-item-divider.css',
  shadow: true,
})
export class RuxMenuItemDivider {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
