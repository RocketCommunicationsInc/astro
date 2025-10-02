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

    private handleTopicClick = (event: Event) => {
        const target = event.currentTarget as HTMLElement
        const topic = target.getAttribute('data-topic') as
            | 'issue'
            | 'idea'
            | 'bug'
            | 'other'
        if (topic) {
            this.paneSwitcher(topic)
        }
    }

    // Switch between sentiment options
    private sentimentSwitcher(
        sentiment: 'positive' | 'neutral' | 'negative' | 'confusing'
    ) {
        this.activeSentiment = sentiment
    }

    // Handle sentiment button click
    private handleSentimentClick = (event: Event) => {
        const target = event.currentTarget as HTMLElement
        const sentiment = target.getAttribute('data-sentiment') as
            | 'positive'
            | 'neutral'
            | 'negative'
            | 'confusing'
        if (sentiment) {
            this.sentimentSwitcher(sentiment)
        }
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
                    {this.renderFeedbackTab()}
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
                            {this.renderTopicSelector()}

                            {this.activeTopic === 'issue' &&
                                this.renderIssueForm()}

                            {this.activeTopic === 'idea' &&
                                this.renderIdeaForm()}

                            {this.activeTopic === 'bug' &&
                                this.renderBugReportForm()}

                            {this.activeTopic === 'other' &&
                                this.renderOtherFeedbackForm()}

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

    // Feedback tab that toggles the form open/closed
    private renderFeedbackTab() {
        console.log('isOpen', this.isOpen)
        return (
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
        )
    }

    // Topic selector buttons
    private renderTopicSelector() {
        return (
            <div class="rux-form__topic-selector" part="topic-selector">
                {this.renderTopicButton('issue', 'Issue', 'error-outline')}
                {this.renderTopicButton('idea', 'Idea', 'highlight')}
                {this.renderTopicButton('bug', 'Bug', 'bug-report')}
                {this.renderTopicButton('other', 'Other', 'textsms')}
            </div>
        )
    }

    // Individual topic button
    private renderTopicButton(topic: string, label: string, icon: string) {
        return (
            <div
                class={`rux-form__topic-button ${
                    this.activeTopic === topic ? 'active' : ''
                }`}
                data-topic={topic}
                onClick={this.handleTopicClick}
            >
                <rux-icon
                    class="topic-button__icon"
                    icon={icon}
                    size="20px"
                ></rux-icon>
                <div class="topic-button__label">{label}</div>
            </div>
        )
    }

    // Form for "Issue" topic
    private renderIssueForm() {
        return (
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
        )
    }

    // Form for "Idea" topic
    private renderIdeaForm() {
        return (
            <div
                class="rux-form-topic__form-container rux-form-topic__idea"
                part="idea"
            >
                <rux-textarea
                    label="Tell us about your idea"
                    rows={12}
                ></rux-textarea>
            </div>
        )
    }

    // Form for "Bug Report" topic
    private renderBugReportForm() {
        return (
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
                <rux-textarea label="Describe the bug" rows={4}></rux-textarea>
            </div>
        )
    }

    // Form for "Other" topic
    private renderOtherFeedbackForm() {
        return (
            <div
                class="rux-form-topic__form-container rux-form-topic__other"
                part="other"
            >
                <label>Sentiment (optional)</label>
                {this.renderSentimentButtons()}
                <rux-textarea
                    label="Describe your experience using tktk-platform-Acme"
                    rows={5}
                    style={{ resize: 'none' }}
                ></rux-textarea>
            </div>
        )
    }

    // Individual sentiment button
    private renderSentimentButton(
        sentiment: 'positive' | 'neutral' | 'negative' | 'confusing',
        emoji: string
    ) {
        return (
            <div
                class={`rux-form__sentiment-button ${
                    this.activeSentiment === sentiment ? 'active' : ''
                }`}
                data-sentiment={sentiment}
                onClick={this.handleSentimentClick}
            >
                <div class="sentiment-button__emoji-wrapper">
                    <div class="sentiment-button__emoji">{emoji}</div>
                </div>
                <div class="sentiment-button__label">
                    {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
                </div>
            </div>
        )
    }

    // Sentiment buttons container
    private renderSentimentButtons() {
        return (
            <div class="rux-form__sentiment-buttons" part="sentiment-group">
                {this.renderSentimentButton('positive', '😊')}
                {this.renderSentimentButton('neutral', '😐')}
                {this.renderSentimentButton('negative', '😠')}
                {this.renderSentimentButton('confusing', '😖')}
            </div>
        )
    }
}
