import { Component, Host, h, Prop, Element } from '@stencil/core'
import { StatusTags } from '../../common/commonTypes.module'
import { hasSlot } from '../../utils/utils'

const statusMap = {
    unknown: 'UNK',
    pass: 'PASS',
    fail: 'FAIL',
}

/**
 * @slot tag-text - The text for the rux-tag
 * @part container - The container of the rux-tag's text
 */

@Component({
    tag: 'rux-tag',
    styleUrl: 'rux-tag.scss',
    shadow: true,
})
export class RuxTag {
    /**
     *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
     */
    @Prop({ reflect: true }) status?: StatusTags = 'unknown'

    @Element() el!: HTMLRuxTagElement

    render() {
        return (
            <Host
                class={{
                    'is-undefined': statusMap[this.status!] === undefined,
                }}
            >
                <div part="container">
                    {this.status && !hasSlot(this.el, 'tag-text') ? (
                        statusMap[this.status] ? (
                            `${statusMap[this.status]}`
                        ) : (
                            'UNK'
                        )
                    ) : (
                        <slot name="tag-text"></slot>
                    )}
                </div>
            </Host>
        )
    }
}
