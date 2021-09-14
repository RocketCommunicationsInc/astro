import { Component, Host, Prop, h, Element, Listen, State } from '@stencil/core'
import { Classification } from '../../common/commonTypes.module'
import { hasSlot } from '../../utils/utils'

/**
 * @part footer-banner - the footer banner
 *
 */
@Component({
    tag: 'rux-classification-marking',
    styleUrl: 'rux-classification-marking.scss',
    shadow: true,
})
export class RuxClassificationMarking {
    @Element() el!: HTMLRuxClassificationMarkingElement
    /**
     * Defines which classification marking will be displayed.
     */
    @Prop() classification: Classification = 'unclassified'
    /**
     * Allows additional text labels to be added to the a marking
     */
    @Prop() label?: string
    /**
     * Declares the marking as a `tag` rather than the default banner style
     */
    @Prop({ reflect: true }) tag: boolean = false

    @State() isWrapper: boolean = hasSlot(this.el)

    @Listen('slotchange')
    handleSlotChange() {
        this.isWrapper = hasSlot(this.el)
    }

    get type(): 'tag' | 'banner' {
        return this.tag ? 'tag' : 'banner'
    }

    _getDisplayData(): string {
        const markings = {
            banner: {
                controlled: 'cui',
                confidential: 'confidential',
                secret: 'secret',
                'top-secret': 'top secret',
                'top-secret-sci': 'top secret//sci',
                unclassified: 'unclassified',
            },
            tag: {
                controlled: 'cui',
                confidential: 'c',
                secret: 's',
                'top-secret': 'ts',
                'top-secret-sci': 'TS//SCI',
                unclassified: 'u',
            },
        }

        const text = markings[this.type][this.classification]
        if (!text) {
            return 'Select a Classification Marking'
        }
        return text
    }

    render() {
        const { isWrapper, label, tag, type } = this
        return (
            <Host>
                <div
                    class={{
                        'rux-classification': true,
                        'rux-classification--tag': type === 'tag',
                        'rux-classification--banner': type === 'banner',
                    }}
                >
                    {this._getDisplayData()}
                    {label}
                </div>
                <slot></slot>
                {isWrapper && !tag && (
                    <div
                        class={{
                            'rux-classification': true,
                            'rux-classification--banner': type === 'banner',
                            'rux-classification--banner__footer':
                                isWrapper === true,
                        }}
                        part="footer-banner"
                    >
                        {this._getDisplayData()}
                        {label}
                    </div>
                )}
            </Host>
        )
    }
}
