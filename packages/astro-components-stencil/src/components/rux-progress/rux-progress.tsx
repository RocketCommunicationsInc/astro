import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-progress',
  styleUrl: 'rux-progress.scss',
  shadow: true,
})
export class RuxProgress {
@Prop({ mutable: true }) max: number = 100;
@Prop({ mutable: true }) value: number = 0;
@Prop({ mutable: true }) hideLabel: boolean = false;

getProgressAsString(){
  return this.max === 100 ? `${this.value}%` : `${this.value}/${this.max}`
}
  render() {
    return (
      <Host>
       {
         this.value ? (
        [
         <progress class="rux-progress" value={this.value} max={this.max}></progress>,
         <output class="rux-progress__value" hidden={this.hideLabel} >{this.getProgressAsString()}</output>
        ]
         )
         
         : <progress class="rux-progress"></progress>
       }
        

        <slot></slot>
      </Host>
    );
  }

}

