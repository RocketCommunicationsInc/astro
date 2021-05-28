import { Prop, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rux-global-status-bar',
  styleUrl: 'rux-global-status-bar.scss',
  shadow: true,
})
export class RuxGlobalStatusBar {
  @Prop() appname: string;
  @Prop() version: string;

  render() {
    return (
      <Host>
        <header>
        <slot name="left-side"></slot>
        <div class="app-meta" hidden={!this.appname}>
          <h1>{this.appname}<span class="app-version">{this.version}</span></h1>
        </div>
        <slot></slot>
        <slot name="right-side"></slot>
      </header>
      </Host>
    );
  }

}
