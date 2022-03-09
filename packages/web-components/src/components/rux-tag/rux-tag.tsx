import { Component, Host, h, Prop } from '@stencil/core'
import { StatusTags } from '../../common/commonTypes.module'

const statusMap = {
    unknown: 'UNK',
    pass: 'PASS',
    fail: 'FAIL',
}

@Component({
    tag: 'rux-tag',
    styleUrl: 'rux-tag.scss',
    shadow: true,
})
export class RuxTag {
    /**
     *  Used to display a status of pass, fail, or unknown.
     */
    @Prop({ reflect: true }) status?: StatusTags

    /**
     * Used to change the visual of a non-status rux-tag.
     */
    @Prop({ reflect: true, attribute: 'tag-base' }) tagBase?:
        | '0'
        | '1'
        | '2'
        | '3'
        | '4'

    @Prop({ reflect: true, attribute: 'tag-style' }) tagStyle?:
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900' = '300'

    render() {
        return (
            <Host
                class={
                    this.tagBase ? `rux-tag-base--${this.tagBase}` : undefined
                }
            >
                <div
                    class={
                        this.tagStyle
                            ? `rux-tag-style--${this.tagStyle}`
                            : undefined
                    }
                    part="container"
                >
                    {this.status ? (
                        `${statusMap[this.status]}`
                    ) : (
                        <slot name="tag-text"></slot>
                    )}
                </div>
            </Host>
        )
    }
}
