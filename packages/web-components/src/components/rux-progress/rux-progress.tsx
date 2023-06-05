import { Component, Host, h, Prop, Watch } from '@stencil/core'

/**
 * @part progress - the native progress element
 * @part output - the native output element
 */
@Component({
    tag: 'rux-progress',
    styleUrl: 'rux-progress.scss',
    shadow: true,
})
export class RuxProgress {
    /**
     * Current progress value between 0 and 100 (or the max, if defined below).
     */
    @Prop({ mutable: true }) value?: number = 0
    /**
     * For progress bars where progress bars have a maximum value greater or less than 100
     */
    @Prop() max: number = 100
    /**
     * Hides the progress label
     */
    @Prop({ attribute: 'hide-label' }) hideLabel: boolean = false

    connectedCallback() {
        if (this.value) {
            this._checkValueNotOverMax(this.max, this.value)
        }
    }
    @Watch('value')
    watchHandler() {
        if (this.value) {
            this._checkValueNotOverMax(this.max, this.value)
        }
    }

    private _getProgressAsString() {
        // If max = '', just return the value.
        if (!this.max) {
            return this.value
        }

        if (this.value === undefined || isNaN(this.value)) {
            return '0%'
        } else {
            return this.max === 100
                ? `${this.value}%`
                : `${this.value}/${this.max}`
        }
    }
    private _checkValueNotOverMax(max: number, value: number) {
        if (max && max < value) {
            value = max
            this.value = max
        }
    }

    render() {
        return (
            <Host>
                <progress
                    class="rux-progress"
                    value={this.value}
                    max={this.max}
                    part="progress"
                ></progress>
                <output
                    class="rux-progress__value"
                    hidden={this.hideLabel}
                    part="output"
                >
                    {this._getProgressAsString()}
                </output>
                <slot></slot>
            </Host>
        )
    }
}
