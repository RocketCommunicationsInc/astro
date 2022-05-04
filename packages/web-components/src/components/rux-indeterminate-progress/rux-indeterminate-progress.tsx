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
        // don't want to assume they using px for ind prog --size
        const unitObj = {
            rem: 1.875,
            px: 30,
            unk: 30,
        }
        const unit = this._determineMeasurement(size)
        if (unitObj[unit]) {
            if (parseFloat(size) <= unitObj[unit]) {
                this.small = true
            }
        }
        // if (parseFloat(size) <= 30) {
        //     this.small = true
        // }
    }
    private _determineMeasurement(size: string) {
        if (size.includes('px')) {
            return 'px'
        } else if (size.includes('rem')) {
            return 'rem'
        } else {
            //very rigid - only px and rem? Should I add more? Scrap it entirely?
            return 'unk'
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
