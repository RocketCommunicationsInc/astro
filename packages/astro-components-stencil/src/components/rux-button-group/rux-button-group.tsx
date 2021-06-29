import { Prop, Component, h } from '@stencil/core'

@Component({
    tag: 'rux-button-group',
    styleUrl: 'rux-button-group.scss',
    shadow: true,
})
export class RuxButtonGroup {
    /**
     * The alignment of buttons within the group
     */
    @Prop() align: 'left' | 'center' | 'right' = 'left'

    render() {
        const { align } = this
        return (
            <div
                class={{
                    'rux-button-group': true,
                    'rux-button-group--left': align === 'left',
                    'rux-button-group--right': align === 'right',
                    'rux-button-group--center': align === 'center',
                }}
            >
                <slot></slot>
            </div>
        )
    }
}
