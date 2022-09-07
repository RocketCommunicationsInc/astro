import { Component, h, Host, Prop } from '@stencil/core'
//import { hasShadowDom } from '../../utils/utils'

/**
 * @slot label - the content that goes in <summary>
 */

@Component({
    tag: 'rux-accordion-item',
    styleUrl: 'rux-accordion-item.scss',
    shadow: true,
})
export class RuxAccordionItem {
    /*******
     * gives title of the item
     * *********/

    @Prop({ reflect: true }) label: string = ''

    /*******
     * item expanded or not
     * *********/

    @Prop({ reflect: true }) expanded: boolean = false

    /*******
     * toggles disabled
     * *********/

    @Prop({ reflect: true }) disabled: boolean = false

    /*******
     * toggles truncated text
     * *********/

    @Prop({ reflect: true }) truncated: boolean = false

    /*******
     * toggles left icon
     * *********/

    @Prop({ reflect: true }) iconLeft: string = ''

    private _clickHandler(e: MouseEvent) {
        console.log('clicked!', this.disabled)
        if (this.disabled) {
            e.preventDefault()
        } else {
            this.expanded = !this.expanded
        }
    }

    connectedCallback() {
        this._clickHandler = this._clickHandler.bind(this)
    }

    render() {
        return (
            <Host>
                <details
                    open={this.expanded}
                    part="truncated"
                    class={{
                        'rux-accordion-item': true,
                        'rux-accordion-item--disabled': this.disabled,
                    }}
                    onClick={this._clickHandler}
                >
                    <summary>
                        {this.iconLeft && (
                            <rux-icon
                                icon={this.iconLeft}
                                size="20px"
                            ></rux-icon>
                        )}
                        <span class="rux-accordion-item--title">
                            <slot name="label">{this.label}</slot>
                        </span>
                        <rux-icon
                            icon={
                                this.expanded
                                    ? 'keyboard-arrow-up'
                                    : 'keyboard-arrow-down'
                            }
                            size="20px"
                            class="indicator"
                        ></rux-icon>
                    </summary>
                    <span class="rux-accordion-item--content">
                        <slot></slot>
                    </span>
                </details>
            </Host>
        )
    }
}
