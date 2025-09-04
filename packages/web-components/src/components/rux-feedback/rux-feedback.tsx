import { Component, Element, Host, State, h } from '@stencil/core'

import { hasSlot } from '../../utils/utils'
/**
 * @slot (default) - The feedback widget's content
 * @slot header - The feedback widget's header
 * @slot footer - The feedback widget's footer
 * @part container - The feedback widget's outtermost container
 * @part header - The feedback widget's outside header element
 * @part body - The feedback widget's outside body element
 * @part footer - The feedback widget's outside footer element
 *
 */

@Component({
    tag: 'rux-feedback',
    styleUrl: 'rux-feedback.scss',
    shadow: true,
})
export class RuxFeedback {
    @Element() el!: HTMLRuxFeedbackElement

    // @State() activeSlots = {
    //     header: false,
    //     footer: false,
    // }

    render() {
        return (
            <Host>
                <div class="rux-feedback" part="container">
                    <div class="rux-feedback__header">
                        <rux-classification-marking classification="unclassified"></rux-classification-marking>
                        <h3 class="rux-feedback__title">
                            Send us your feedback
                        </h3>
                    </div>

                    <div class="rux-feedback__form">
                        <div class="rux-form__topic-group">
                            <rux-button
                                size="large"
                                icon="error-outline"
                                secondary
                            >
                                Issue
                            </rux-button>
                            <rux-button size="large" icon="highlight" secondary>
                                Idea
                            </rux-button>
                            <rux-button
                                size="large"
                                icon="bug-report"
                                secondary
                            >
                                Bug
                            </rux-button>
                            <rux-button size="large" icon="textsms" secondary>
                                Other
                            </rux-button>
                        </div>

                        <div class="rux-form-topic__issue">
                            <rux-input
                                label="What page are you commenting on?"
                                placeholder="Add URL"
                                type="url"
                                size="medium"
                            ></rux-input>
                            <rux-textarea label="Describe your issue"></rux-textarea>
                        </div>

                        <div class="rux-form-topic__idea">
                            <rux-textarea label="Tell us about your idea"></rux-textarea>
                        </div>

                        <div class="rux-form-topic__bug">
                            <rux-input
                                label="What page is this bug on?"
                                placeholder="Add URL"
                                type="url"
                                size="medium"
                            ></rux-input>
                            <rux-input
                                label="Browser"
                                type="text"
                                size="medium"
                            ></rux-input>
                            <rux-textarea label="Describe the bug"></rux-textarea>
                        </div>

                        <div class="rux-form-topic__other">
                            <h3>Sentiment picker</h3>
                            <rux-textarea label="Describe your experience using tktk-platform-Acme"></rux-textarea>
                        </div>

                        <rux-button secondary>Cancel</rux-button>
                        <rux-button>Send</rux-button>
                    </div>

                    <div class="rux-feedback__success">
                        <h3>Thank you.</h3>
                        <rux-icon size="normal" icon="check"></rux-icon>
                        <p>Your feedback was sent.</p>
                        <p>Send More Feedback?</p>
                        <rux-button>Close</rux-button>
                    </div>
                </div>
            </Host>
        )
    }
}
