import { Prop, Component, Host, h, Element } from '@stencil/core'

@Component({
    tag: 'rux-menu-item',
    styleUrl: 'rux-menu-item.scss',
    shadow: true,
})
export class RuxMenuItem {
    @Element() el!: HTMLRuxMenuItemElement
    /**
     * sets the menu item as selected
     */
    @Prop({ reflect: true }) selected = false
    /**
     * sets the menu item as disabled
     */
    @Prop({ reflect: true }) disabled = false
    /**
     * the value returned when item is selected.
     */
    @Prop({ mutable: true }) value?: string

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

    render() {
        const { disabled, selected, href, rel, download, target } = this
        const TagType = href ? 'a' : 'div'
        const attributes =
            TagType === 'a' ? { download, href, rel, target } : {}

        return (
            <Host value={this.value}>
                <TagType
                    {...attributes}
                    class={{
                        'rux-menu-item': true,
                        'rux-menu-item--selected': selected,
                        'rux-menu-item--disabled': disabled,
                    }}
                >
                    <slot></slot>
                </TagType>
            </Host>
        )
    }
}
