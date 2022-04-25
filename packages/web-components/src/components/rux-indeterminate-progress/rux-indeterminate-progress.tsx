import { Component, Host, h } from '@stencil/core'

/**
 * @part wrapper - The outermost div encasing rux-indeterminate-progress which is responsible for the overall size and the outermost border.
 * @part second - The second div in the heirarchy which is responsible for the spinning conic-gradient and the dark border between the spinner and the wrapper's border.
 * @part third - The third div in the heirarchy which controls the gap between the animated-spinner and the inner-most border.
 * @part fourth - The fourth div in the heirarchy which controls the inner-most border.
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
                        class="rux-indeterminate-second"
                        part="animated-spinner"
                    >
                        <div class="rux-indeterminate-third" part="third">
                            <div
                                class="rux-indeterminate-fourth"
                                part="fourth"
                            ></div>
                        </div>
                    </div>
                </div>
                <slot></slot>
            </Host>
        )
    }
}
