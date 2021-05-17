import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-progress',
  styleUrl: 'rux-progress.scss',
  shadow: true,
})
export class RuxProgress {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
