import { Component, Host, h } from '@stencil/core'

/**
 * @part wrapper - The outermost div encasing rux-indeterminate-progress which is responsible for the overall size and the outermost border.
 * @part animated-spinner - The second div in the heirarchy which is responsible for the spinning conic-gradient and the gap between the spinner and the wrapper's border.
 * @part inner-spinner-gap - The third div in the heirarchy which controls the gap between the animated-spinner and the inner-circle's border.
 * @part inner-cirlce - The fourth div in the heirarchy which controls the inner-most circle.
 */

@Component({
    tag: 'rux-indeterminate-progress',
    styleUrl: 'rux-indeterminate-progress.scss',
    shadow: true,
})
export class RuxIndeterminateProgress {
    render() {
        return (
            <Host>
                <div class="rux-indeterminate-wrapper" part="wrapper">
                    <div
                        class="rux-indeterminate-animated-spinner"
                        part="animated-spinner"
                    >
                        <div
                            class="rux-indeterminate-inner-spinner-gap"
                            part="inner-spinner-gap"
                        >
                            <div
                                class="rux-indeterminate-inner-circle"
                                part="inner-circle"
                            ></div>
                        </div>
                    </div>
                </div>
                <slot></slot>
            </Host>
        )
    }
}
