import { Component, Element, Host, State, h } from '@stencil/core'

@Component({
    tag: 'rux-feedback',
    styleUrl: 'rux-feedback.scss',
    shadow: true,
})
export class RuxFeedback {
    @Element() el!: HTMLRuxFeedbackElement

    @State() activeTopic: 'issue' | 'idea' | 'bug' | 'other' | 'success' =
        'issue'

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

    render() {
        return (
            <Host>
                <div class="rux-feedback" part="container">
                    <div class="rux-feedback__tab" part="tab">
                        Feedback
                        <rux-icon
                            icon="keyboard-arrow-up"
                            size="small"
                        ></rux-icon>
                    </div>
                    <div class="rux-feedback__header" part="header">
                        <rux-classification-marking classification="unclassified"></rux-classification-marking>
                        <h3 class="rux-feedback__title" part="title">
                            Send us your feedback
                        </h3>
                    </div>
                    {this.activeTopic !== 'success' && (
                        <div class="rux-feedback__form" part="form">
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
                                <div class="rux-form-topic__issue" part="issue">
                                    <rux-input
                                        label="What page are you commenting on?"
                                        placeholder="Add URL"
                                        type="url"
                                        size="medium"
                                    ></rux-input>
                                    <rux-textarea label="Describe your issue"></rux-textarea>
                                </div>
                            )}
                            {this.activeTopic === 'idea' && (
                                <div class="rux-form-topic__idea" part="idea">
                                    <rux-textarea label="Tell us about your idea"></rux-textarea>
                                </div>
                            )}
                            {this.activeTopic === 'bug' && (
                                <div class="rux-form-topic__bug" part="bug">
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
                            )}
                            {this.activeTopic === 'other' && (
                                <div class="rux-form-topic__other" part="other">
                                    <h3>Sentiment picker</h3>
                                    <rux-textarea label="Describe your experience using tktk-platform-Acme"></rux-textarea>
                                </div>
                            )}

                            <rux-button secondary>Cancel</rux-button>
                            <rux-button>Send</rux-button>
                        </div>
                    )}

                    {this.activeTopic === 'success' && (
                        <div class="rux-feedback__success" part="success">
                            <h3>Thank you.</h3>
                            <rux-icon size="normal" icon="check"></rux-icon>
                            <p>Your feedback was sent.</p>
                            <p>Send More Feedback?</p>
                            <rux-button>Close</rux-button>
                        </div>
                    )}
                </div>
            </Host>
        )
    }
}
