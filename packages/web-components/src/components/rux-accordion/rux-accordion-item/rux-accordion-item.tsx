import { Component, h, Host, Prop, Element } from '@stencil/core'

/**
 * @slot label - sets the accordion item header title
 * @part container - the accordion item
 * @part label-wrapper - the element wrapping rux-icons and the label
 * @part label - the label
 * @part icon - the optional rux-icon
 * @part indicator - the opened/closed indicator
 */

@Component({
    tag: 'rux-accordion-item',
    styleUrl: 'rux-accordion-item.scss',
    shadow: true,
})
export class RuxAccordionItem {
    @Element() el!: HTMLRuxAccordionItemElement

    /**
     * Takes a string label set by  the user and places it in summary as the title
     */
    @Prop({ reflect: true }) label: string = ''

    /**
     * If present, sets the initial state on this accordion icon to open, displaying the accordion content.
     */

    @Prop({ mutable: true, reflect: true }) expanded: boolean = false

    /**
     * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
     */

    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * If set to true or passed in this wraps lines of header text rather than truncating them
     */

    @Prop({ reflect: true }) truncated: boolean = false

    /**
     * When set, places a rux-icon of the string type to the left of the label
     */

    @Prop({ reflect: true }) iconLeft: string = ''

    private _clickHandler(e: MouseEvent) {
        //if the rux-accordion-item has the disabled attribute, it cannot be manipulated
        if (this.disabled) {
            e.preventDefault()
            return
        }

        //MARK: should we extract this out into a function? What is best practice here?
        //if rux-accordion has the attribute to disallow-multiple then make sure only one rux-accordion-item is open at a time
        if (this.el?.parentElement?.getAttributeNode('disallow-multiple')) {
            e.preventDefault()
            const items = this.el.parentElement.querySelectorAll(
                'rux-accordion-item'
            ) //get all rux-accordion-items
            const isExpanded: boolean = this.el.hasAttribute('expanded') // state of the item when accessed

            items.forEach((item) => {
                item.removeAttribute('expanded')
            })
            //only add the expanded attribute if it was not there when clicked. Else, close the item.
            !isExpanded && this.el.setAttribute('expanded', '')

            console.log(items)
            return
        }
        this.expanded = !this.expanded
    }

    connectedCallback() {
        this._clickHandler = this._clickHandler.bind(this)

        //handle wrapped or truncated on init only add attribute if it doesn't already exist
        if (this.el?.parentElement?.getAttributeNode('truncated')) {
            if (!this.el.getAttribute('truncated')) {
                this.el.setAttribute('truncated', '')
            }
        }
    }

    render() {
        return (
            <Host>
                <details
                    part="container"
                    open={this.expanded}
                    class={{
                        'rux-accordion-item': true,
                        'rux-accordion-item--disabled': this.disabled,
                    }}
                    onClick={this._clickHandler}
                >
                    <summary part="label-wrapper">
                        {this.iconLeft && (
                            <rux-icon
                                exportparts="icon"
                                icon={this.iconLeft}
                                size="20px"
                            ></rux-icon>
                        )}
                        <div
                            part="label"
                            class={{
                                'rux-accordion-item--title': true,
                                'rux-accordion-item--title--truncated': this
                                    .truncated,
                            }}
                        >
                            {this.label}
                        </div>
                        <rux-icon
                            part="indicator"
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
