import { Prop, Component, h } from '@stencil/core'

@Component({
    tag: 'rux-button',
    styleUrl: 'rux-button.scss',
    shadow: true,
})
export class RuxButton {
    @Prop() icon: string = ''
    @Prop() iconOnly: boolean = false
    @Prop() outline: boolean = false
    @Prop() type: string = 'button'
    @Prop({ reflect: true }) disabled = false
    @Prop({ reflect: true }) size?: 'small' | 'large'

    render() {
        const { type, size, iconOnly, outline, disabled } = this
        return (
            <button
                type={type}
                class={{
                    'rux-button': true,
                    'rux-button--outline': outline,
                    'rux-button--small': size === 'small',
                    'rux-button--large': size === 'large',
                    'rux-button--icon-only': iconOnly,
                }}
                aria-disabled={disabled ? 'true' : null}
                disabled={disabled}
            >
                <slot></slot>
            </button>
        )
    }
}
