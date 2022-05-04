import { Component, Host, h, Element } from '@stencil/core'

/**
 * @part container - The outermost div encasing rux-indeterminate-progress which is responsible for the overall size and the outermost border.
 * @part animated-spinner - The second div in the heirarchy which is responsible for the spinning conic-gradient and the gap between the spinner and the containers's border.
 * @part inner-spinner-gap - The third div in the heirarchy which controls the gap between the animated-spinner and the inner-circle's border.
 * @part inner-circle - The fourth div in the heirarchy which controls the inner-most circle.
 */

@Component({
    tag: 'rux-indeterminate-progress',
    styleUrl: 'rux-indeterminate-progress.scss',
    shadow: true,
})
export class RuxIndeterminateProgress {
    @Element() el!: HTMLRuxIndeterminateProgressElement

    private small: boolean = false

    private _setSmall() {
        const size = getComputedStyle(this.el).getPropertyValue('--size')
        console.log(size)
        if (parseFloat(size) <= 30) {
            this.small = true
        }
    }
    componentWillRender() {
        this._setSmall()
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-indeterminate-container': true,
                        small: this.small,
                    }}
                    part="container"
                >
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
            </Host>
        )
    }
}
