import { Prop, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    @Prop() disabled: boolean = false
    @Prop() checkedLabel: string = 'Enabled'
    @Prop() uncheckedLabel: string = 'Disabled'
    @Prop({ reflect: true }) checked: boolean = false

    render() {
        return (
            <Host>
                <input
                    class="rux-push-button__input"
                    id="ruxSwitch"
                    type="checkbox"
                    disabled={this.disabled}
                    checked={this.checked}
                />
                <label class="rux-push-button__button" htmlFor="ruxSwitch">
                    <slot></slot>
                </label>
            </Host>
        )
    }
}
