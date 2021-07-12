import {
    Component,
    Host,
    h,
    Element,
    Prop,
    EventEmitter,
    Event,
} from '@stencil/core'

/**
 * @slot start - before element text. Typically used for icons
 */

@Component({
    tag: 'rux-menu-item',
    styleUrl: 'rux-menu-item.scss',
    shadow: true,
})
export class RuxMenuItem {
    @Element() el!: HTMLRuxMenuItemElement

    /**
     * Disables the item
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Value returned when item is selected. If no value is given, the text content will be used.
     */
    @Prop() value: any

    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    @Prop() href: string | undefined

    /**
     * Specifies where to display the linked URL.
     * Only applies when an `href` is provided.
     * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
     */
    @Prop() target: string | undefined

    /**
     * Specifies the relationship of the target object to the link object.
     * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
     */
    @Prop() rel: string | undefined

    /**
     * This attribute instructs browsers to download a URL instead of navigating to
     * it, so the user will be prompted to save it as a local file. If the attribute
     * has a value, it is used as the pre-filled file name in the Save prompt
     * (the user can still change the file name if they want).
     */
    @Prop() download: string | undefined

    /**
     * Emitted when item is clicked. Ex `{value : 10}`
     */
    @Event({ eventName: 'rux-menu-item-selected' })
    ruxMenuItemSelected!: EventEmitter<object>
    private itemOnClick = () => {
        const emittedValue = this.value ? this.value : this.el.textContent
        this.ruxMenuItemSelected.emit({ value: emittedValue })
    }

    private isClickable(): boolean {
        return !this.disabled
    }

    render() {
        const { disabled, href, rel, download, target, itemOnClick } = this
        const clickable = this.isClickable()
        const TagType = href ? 'a' : 'div'
        const attributes =
            TagType === 'a' ? { download, href, rel, target } : {}
        // Only sets onClick if the item is clickable for screen readers
        const clickFunc = clickable
            ? {
                  onClick: () => {
                      itemOnClick()
                  },
              }
            : {}

        return (
            <Host aria-disabled={disabled ? 'true' : null}>
                <li {...clickFunc}>
                    <TagType {...attributes}>
                        <slot name="start"></slot>
                        <slot></slot>
                    </TagType>
                </li>
            </Host>
        )
    }
}
