import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'rux-day',
    styleUrl: 'rux-day.scss',
    shadow: true,
})
export class RuxDay {
    @Prop({ reflect: true, mutable: true }) selected: boolean = false

    connectedCallback() {
        this._toggleSelected = this._toggleSelected.bind(this)
    }

    private _toggleSelected() {
        console.log('fired')
        this.selected = !this.selected
    }

    render() {
        return (
            <Host>
                <button
                    class={{
                        'rux-day': true,
                        'day-selected': this.selected,
                    }}
                    part="button"
                    onClick={this._toggleSelected}
                >
                    <div class="oridnal">
                        <slot name="ordinal"></slot>
                    </div>
                    <slot></slot>
                    <div class="gregorian">
                        <slot name="gregorian"></slot>
                    </div>
                </button>
            </Host>
        )
    }
}
