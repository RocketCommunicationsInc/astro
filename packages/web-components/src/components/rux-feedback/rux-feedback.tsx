import { Component, Element, Host, Prop, State, h } from '@stencil/core'
import { Classification } from '../../common/commonTypes.module'

@Component({
    tag: 'rux-feedback',
    styleUrl: 'rux-feedback.scss',
    shadow: true,
})
export class RuxFeedback {
    @Element() el!: HTMLRuxFeedbackElement

    @Prop({ reflect: true }) classification?: Classification = undefined

    @State() activeTopic: 'issue' | 'idea' | 'bug' | 'other' | 'success' =
        'issue'

    @State() activeSentiment:
        | 'positive'
        | 'neutral'
        | 'negative'
        | 'confusing' = 'positive'

    @State() isOpen: boolean = true

    // Toggle feedback form open/closed
    private handleTabClick = () => {
        this.isOpen = !this.isOpen
        const feedbackEl = this.el.shadowRoot?.querySelector('.rux-feedback')
        if (this.isOpen) {
            feedbackEl?.classList.add('open')
        } else {
            feedbackEl?.classList.remove('open')
        }
    }

    private handleClose = () => {
        this.isOpen = false
        const feedbackEl = this.el.shadowRoot?.querySelector('.rux-feedback')
        feedbackEl?.classList.remove('open')
        this.paneSwitcher('issue')
        this.sentimentSwitcher('positive')
    }

    private handleSendMoreFeedback = (e: Event) => {
        e.preventDefault()
        this.paneSwitcher('issue')
        this.sentimentSwitcher('positive')
    }

    // Switch between feedback topic panes
    private paneSwitcher(
        topic: 'issue' | 'idea' | 'bug' | 'other' | 'success'
    ) {
        this.activeTopic = topic
    }

    private handleIssueClick = () => {
        this.paneSwitcher('issue')
    }
    private handleIdeaClick = () => {
        this.paneSwitcher('idea')
    }
    private handleBugClick = () => {
        this.paneSwitcher('bug')
    }
    private handleOtherClick = () => {
        this.paneSwitcher('other')
    }

    // Switch between sentiment options
    private sentimentSwitcher(
        sentiment: 'positive' | 'neutral' | 'negative' | 'confusing'
    ) {
        this.activeSentiment = sentiment
    }

    private handlePositiveClick = () => {
        this.sentimentSwitcher('positive')
    }
    private handleNeutralClick = () => {
        this.sentimentSwitcher('neutral')
    }
    private handleNegativeClick = () => {
        this.sentimentSwitcher('negative')
    }
    private handleConfusingClick = () => {
        this.sentimentSwitcher('confusing')
    }

    // Handle form submission
    private handleSubmit = (e: Event) => {
        console.log('e', e)
        e.preventDefault()
        this.paneSwitcher('success')
        this.el.dispatchEvent(
            new CustomEvent('feedback-submitted', {
                detail: {
                    topic: this.activeTopic,
                    sentiment: this.activeSentiment,
                },
            })
        )
    }

    render() {
        return (
            <Host>
                <div
                    class={`rux-feedback ${this.isOpen ? 'open' : ''}`}
                    part="container"
                >
                    <div
                        class="rux-feedback__tab"
                        part="tab"
                        onClick={this.handleTabClick}
                    >
                        Feedback
                        {this.isOpen ? (
                            <rux-icon
                                icon="keyboard-arrow-down"
                                size="extra-small"
                            ></rux-icon>
                        ) : (
                            <rux-icon
                                icon="keyboard-arrow-up"
                                size="extra-small"
                            ></rux-icon>
                        )}
                    </div>
                    <div class="rux-feedback__header" part="header">
                        {this.classification && (
                            <rux-classification-marking
                                classification={this.classification}
                            ></rux-classification-marking>
                        )}
                        <h3 class="rux-feedback__title" part="title">
                            Send us your feedback
                        </h3>
                    </div>
                    {this.activeTopic !== 'success' && (
                        <form class="rux-feedback__form" part="form">
                            <div
                                class="rux-form__topic-group"
                                part="topic-group"
                            >
                                <div
                                    class={`rux-form__topic-button ${
                                        this.activeTopic === 'issue'
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={this.handleIssueClick}
                                >
                                    <rux-icon
                                        class="topic-button__icon"
                                        icon="error-outline"
                                        size="20px"
                                    ></rux-icon>
                                    <div class="topic-button__label">Issue</div>
                                </div>
                                <div
                                    class={`rux-form__topic-button ${
                                        this.activeTopic === 'idea'
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={this.handleIdeaClick}
                                >
                                    <rux-icon
                                        class="topic-button__icon"
                                        icon="highlight"
                                        size="20px"
                                    ></rux-icon>
                                    <div class="topic-button__label">Idea</div>
                                </div>
                                <div
                                    class={`rux-form__topic-button ${
                                        this.activeTopic === 'bug'
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={this.handleBugClick}
                                >
                                    <rux-icon
                                        class="topic-button__icon"
                                        icon="bug-report"
                                        size="20px"
                                    ></rux-icon>
                                    <div class="topic-button__label">Bug</div>
                                </div>
                                <div
                                    class={`rux-form__topic-button ${
                                        this.activeTopic === 'other'
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={this.handleOtherClick}
                                >
                                    <rux-icon
                                        class="topic-button__icon"
                                        icon="textsms"
                                        size="20px"
                                    ></rux-icon>
                                    <div class="topic-button__label">Other</div>
                                </div>
                            </div>

                            {this.activeTopic === 'issue' && (
                                <div
                                    class="rux-form-topic__form-container rux-form-topic__issue"
                                    part="issue"
                                >
                                    <rux-input
                                        label="What page are you commenting on?"
                                        placeholder="Add URL"
                                        type="url"
                                        size="medium"
                                    ></rux-input>
                                    <rux-textarea
                                        label="Describe your issue"
                                        rows={8}
                                    ></rux-textarea>
                                </div>
                            )}

                            {this.activeTopic === 'idea' && (
                                <div
                                    class="rux-form-topic__form-container rux-form-topic__idea"
                                    part="idea"
                                >
                                    <rux-textarea
                                        label="Tell us about your idea"
                                        rows={12}
                                    ></rux-textarea>
                                </div>
                            )}

                            {this.activeTopic === 'bug' && (
                                <div
                                    class="rux-form-topic__form-container rux-form-topic__bug"
                                    part="bug"
                                >
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
                                    <rux-textarea
                                        label="Describe the bug"
                                        rows={4}
                                    ></rux-textarea>
                                </div>
                            )}

                            {this.activeTopic === 'other' && (
                                <div
                                    class="rux-form-topic__form-container rux-form-topic__other"
                                    part="other"
                                >
                                    <label>Sentiment (optional)</label>
                                    <div
                                        class="rux-form__sentiment-buttons"
                                        part="sentiment-group"
                                    >
                                        <div
                                            class={`rux-form__sentiment-button ${
                                                this.activeSentiment ===
                                                'positive'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={this.handlePositiveClick}
                                        >
                                            <div class="sentiment-button__emoji-wrapper">
                                                <div class="sentiment-button__emoji">
                                                    😊
                                                </div>
                                            </div>
                                            <div class="sentiment-button__label">
                                                Positive
                                            </div>
                                        </div>
                                        <div
                                            class={`rux-form__sentiment-button ${
                                                this.activeSentiment ===
                                                'neutral'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={this.handleNeutralClick}
                                        >
                                            <div class="sentiment-button__emoji-wrapper">
                                                <div class="sentiment-button__emoji">
                                                    😐
                                                </div>
                                            </div>
                                            <div class="sentiment-button__label">
                                                Neutral
                                            </div>
                                        </div>
                                        <div
                                            class={`rux-form__sentiment-button ${
                                                this.activeSentiment ===
                                                'negative'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={this.handleNegativeClick}
                                        >
                                            <div class="sentiment-button__emoji-wrapper">
                                                <div class="sentiment-button__emoji">
                                                    😠
                                                </div>
                                            </div>
                                            <div class="sentiment-button__label">
                                                Negative
                                            </div>
                                        </div>
                                        <div
                                            class={`rux-form__sentiment-button ${
                                                this.activeSentiment ===
                                                'confusing'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={this.handleConfusingClick}
                                        >
                                            <div class="sentiment-button__emoji-wrapper">
                                                <div class="sentiment-button__emoji">
                                                    😖
                                                </div>
                                            </div>
                                            <div class="sentiment-button__label">
                                                Confusing
                                            </div>
                                        </div>
                                    </div>
                                    <rux-textarea
                                        label="Describe your experience using tktk-platform-Acme"
                                        rows={5}
                                        style={{ resize: 'none' }}
                                    ></rux-textarea>
                                </div>
                            )}

                            <div class="rux-form__buttons">
                                <rux-button secondary>Cancel</rux-button>
                                <rux-button onClick={this.handleSubmit}>
                                    Send
                                </rux-button>
                            </div>
                        </form>
                    )}

                    {this.activeTopic === 'success' && (
                        <div class="rux-feedback__success" part="success">
                            <div class="rux-feedback__success__message">
                                <rux-icon
                                    class="check-icon"
                                    size="large"
                                    icon="check"
                                ></rux-icon>
                                <h3>Thank you.</h3>
                                <p>Your feedback was sent.</p>
                                <a
                                    class="more-feedback-link"
                                    href="#"
                                    onClick={this.handleSendMoreFeedback}
                                >
                                    Send More Feedback?
                                </a>
                            </div>
                            <div class="rux-feedback__success__close-button">
                                <rux-button onClick={this.handleClose}>
                                    Close
                                </rux-button>
                            </div>
                        </div>
                    )}
                </div>
            </Host>
        )
    }
}
