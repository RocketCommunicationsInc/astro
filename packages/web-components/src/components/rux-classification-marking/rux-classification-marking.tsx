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
    @Prop({ reflect: true }) classification: Classification = 'unclassified'
    /**
     * Allows additional text labels to be added to the marking
     */
    @Prop() label?: string
    /**
     * Declares the marking as a `tag` rather than the default banner style
     */
    @Prop({ reflect: true }) tag: boolean = false

    @State() isWrapper: boolean = hasSlot(this.el)

    @Listen('slotchange')
    private _handleSlotChange() {
        this.isWrapper = hasSlot(this.el)
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    get type(): 'tag' | 'banner' {
        return this.tag ? 'tag' : 'banner'
    }

    private _getDisplayData(): string {
        const markings = {
            banner: {
                cui: 'cui',
                controlled: 'controlled',
                confidential: 'confidential',
                secret: 'secret',
                'top-secret': 'top secret',
                'top-secret-sci': 'top secret//sci',
                unclassified: 'unclassified',
            },
            tag: {
                cui: 'cui',
                controlled: 'cui',
                confidential: 'c',
                secret: 's',
                'top-secret': 'ts',
                'top-secret-sci': 'TS//SCI',
                unclassified: 'u',
            },
        }

        const text = markings[this.type][this.classification]
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
