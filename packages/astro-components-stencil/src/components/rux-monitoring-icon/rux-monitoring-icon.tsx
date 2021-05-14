import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-monitoring-icon',
  styleUrl: 'rux-monitoring-icon.css',
  shadow: true,
})
export class RuxMonitoringIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
