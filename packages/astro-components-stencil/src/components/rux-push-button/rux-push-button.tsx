import { Prop, Component, Host, h, State, Listen } from '@stencil/core'

@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    @Prop() disabled: boolean = false
    @Prop() checkedLabel: string = 'Enabled'
    @Prop() uncheckedLabel: string = 'Disabled'
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    @State() label: string = this.uncheckedLabel

    @Listen('click')
    handleClick(e: Event) {
        e.preventDefault()
        this.checked = !this.checked
        if (this.checked) {
            this.label = this.checkedLabel
        } else {
            this.label = this.uncheckedLabel
        }
    }

    render() {
        const { disabled, checked, label } = this
        return (
            <Host>
                <input
                    class="rux-push-button__input"
                    id="ruxSwitch"
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                />
                <label class="rux-push-button__button" htmlFor="ruxSwitch">
                    <slot>{label}</slot>
                </label>
            </Host>
        )
    }
}
