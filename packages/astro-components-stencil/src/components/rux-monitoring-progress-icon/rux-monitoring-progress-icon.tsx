import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-monitoring-progress-icon',
  styleUrl: 'rux-monitoring-progress-icon.css',
  shadow: true,
})
export class RuxMonitoringProgressIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
