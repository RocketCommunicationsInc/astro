import {
    Component,
    Element,
    Host,
    Prop,
    State,
    Event,
    EventEmitter,
    h,
} from '@stencil/core'
import { Classification } from '../../common/commonTypes.module'

// TYPE DEFINITIONS

export type FeedbackTopic = 'issue' | 'idea' | 'bug' | 'other' | 'success'

export type Sentiment = 'positive' | 'neutral' | 'negative' | 'confusing'

export interface FeedbackFormData {
    topic: FeedbackTopic
    sentiment?: Sentiment
    currentPageUrl?: string
    pageUrl?: string
    browser?: string
    description: string
}

export interface FeedbackFormErrors {
    pageUrl?: string
    browser?: string
    description?: string
}

@Component({
    tag: 'rux-feedback',
    styleUrl: 'rux-feedback.scss',
    shadow: true,
})
export class RuxFeedback {
    @Element() el!: HTMLRuxFeedbackElement

    // Optional classification marking
    @Prop({ reflect: true }) classification?: Classification = undefined

    // Whether to automatically collect the current page URL
    @Prop({ reflect: true }) disable_url_collection?: boolean = false

    // Whether to display the page URL to the user
    @Prop({ reflect: true }) disable_display_url?: boolean = false

    // Whether to disable the ability to edit the page URL
    @Prop({ reflect: true }) disable_edit_url?: boolean = false

    // Active feedback topic pane
    @State() activeTopic: FeedbackTopic = 'issue'

    // Active sentiment option
    @State() activeSentiment: Sentiment = 'positive'

    // Is feedback form open or closed
    @State() isOpen: boolean = false

    // Form data
    @State() formData: FeedbackFormData = {
        topic: 'issue',
        sentiment: 'positive',
        currentPageUrl: '',
        pageUrl: '',
        browser: '',
        description: '',
    }

    // Form validation errors
    @State() formErrors: FeedbackFormErrors = {}

    // Current page URL where the component is used
    @State() currentPageUrl: string = ''
    
    componentWillLoad() {
        this.currentPageUrl = window.location.href
        if (!this.disable_url_collection) {
            this.formData.currentPageUrl = this.currentPageUrl
            if (!this.disable_display_url) {
                this.formData.pageUrl = this.currentPageUrl
            } else {
                this.formData.pageUrl = ''
            }
        }
    }

    // Custom event for form submission
    @Event({ eventName: 'feedback-submitted' })
    feedbackSubmitted!: EventEmitter<FeedbackFormData>

    // METHODS

    // PRIMARY UI BUTTONS

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
    // Handle cancel button click
    private handleCancel = (e: Event) => {
        e.preventDefault()
        this.handleClose()
    }
    // Handle close button click
    private handleClose = () => {
        this.isOpen = false
        const feedbackEl = this.el.shadowRoot?.querySelector('.rux-feedback')
        feedbackEl?.classList.remove('open')
        this.resetForm()
    }

    // Reset form to initial state
    private resetForm() {
        this.paneSwitcher('issue')
        this.sentimentSwitcher('positive')
        this.formData = {
            topic: 'issue',
            sentiment: 'positive',
            pageUrl: '',
            browser: '',
            description: '',
        }
        this.clearErrors()
    }

    // FORM SWITCHING

    // Switch between feedback topic panes
    private paneSwitcher(topic: FeedbackTopic) {
        this.activeTopic = topic
        this.formData = {
            ...this.formData,
            topic: topic,
        }
        // Clear errors when switching topics
        this.clearErrors()
    }
    // Handle topic button click
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

    // SENTIMENT SWITCHING

    // Switch between sentiment options
    private sentimentSwitcher(sentiment: Sentiment) {
        this.activeSentiment = sentiment
        this.formData = {
            ...this.formData,
            sentiment: sentiment,
        }
    }
    // Handle sentiment button click
    private handleSentimentClick = (event: Event) => {
        const target = event.currentTarget as HTMLElement
        const sentiment = target.getAttribute('data-sentiment') as Sentiment
        if (sentiment) {
            this.sentimentSwitcher(sentiment)
        }
    }

    // Handle form submission
    private handleSubmit = (e: Event) => {
        e.preventDefault()

        // Validate form
        if (!this.validateForm()) {
            console.log('Form validation failed', this.formErrors)
            return
        }

        // Prepare submission data
        const submissionData: FeedbackFormData = {
            topic: this.activeTopic,
            description: this.formData.description,
        }

        // Add optional fields based on topic
        if (this.activeTopic === 'issue' || this.activeTopic === 'bug') {
            submissionData.pageUrl = this.formData.pageUrl
        }

        if (this.activeTopic === 'bug') {
            submissionData.browser = this.formData.browser
        }

        if (this.activeTopic === 'other') {
            submissionData.sentiment = this.activeSentiment
        }

        console.log('Submitting feedback:', submissionData)

        // Emit custom event with form data
        this.feedbackSubmitted.emit(submissionData)

        // Show success message
        this.paneSwitcher('success')
    }

    // Handle "Send More Feedback" link click
    private handleSendMoreFeedback = (e: Event) => {
        e.preventDefault()
        this.resetForm()
    }

    // VALIDATION METHODS

    // Validate URL format
    private isValidUrl = (url: string): boolean => {
        try {
            new URL(url)
            return true
        } catch {
            return false
        }
    }

    // Validate form based on active topic
    private validateForm = (): boolean => {
        const errors: FeedbackFormErrors = {}
        let isValid = true

        // Common validation: description is always required
        if (!this.formData.description.trim()) {
            errors.description = 'This field is required'
            isValid = false
        } else if (this.formData.description.trim().length < 10) {
            errors.description = 'Please provide at least 10 characters'
            isValid = false
        }

        // Topic-specific validation
        if (this.activeTopic === 'issue' || this.activeTopic === 'bug') {
            if (!this.formData.pageUrl?.trim()) {
                errors.pageUrl = 'Page URL is required'
                isValid = false
            } else if (!this.isValidUrl(this.formData.pageUrl)) {
                errors.pageUrl = 'Please enter a valid URL'
                isValid = false
            }
        }

        if (this.activeTopic === 'bug') {
            if (!this.formData.browser?.trim()) {
                errors.browser = 'Browser information is required'
                isValid = false
            }
        }

        this.formErrors = errors
        console.log('this.formErrors', this.formErrors, isValid)
        return isValid
    }

    // Clear validation errors
    private clearErrors() {
        this.formErrors = {}
    }

    // Update form data
    private updateFormData = (event: Event) => {
        const target = event.currentTarget as HTMLInputElement
        const field = target.getAttribute(
            'data-field'
        ) as keyof FeedbackFormData
        const value = target.value
        this.formData = { ...this.formData, [field]: value }
        // Clear error for this field when user starts typing
        if (this.formErrors[field as keyof FeedbackFormErrors]) {
            this.formErrors = {
                ...this.formErrors,
                [field]: undefined,
            }
        }
    }

    // RENDERERS

    // Feedback tab that toggles the form open/closed
    private renderFeedbackTab() {
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
                    onRuxinput={this.updateFormData}
                    data-field="pageUrl"
                    placeholder="Add URL"
                    label="What page are you commenting on?"
                    type="url"
                    size="medium"
                    value={this.formData.pageUrl}
                    error-text={this.formErrors.pageUrl}
                    invalid={!!this.formErrors.pageUrl}
                    readonly={this.disable_edit_url}
                    disabled={this.disable_edit_url}
                ></rux-input>
                <rux-textarea
                    onRuxinput={this.updateFormData}
                    data-field="description"
                    label="Describe your issue"
                    rows={8}
                    value={this.formData.description}
                    error-text={this.formErrors.description}
                    invalid={!!this.formErrors.description}
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
                    onRuxinput={this.updateFormData}
                    data-field="description"
                    label="Tell us about your idea"
                    rows={12}
                    value={this.formData.description}
                    error-text={this.formErrors.description}
                    invalid={!!this.formErrors.description}
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
                    onRuxinput={this.updateFormData}
                    data-field="pageUrl"
                    label="What page is this bug on?"
                    placeholder="Add URL"
                    type="url"
                    size="medium"
                    value={this.formData.pageUrl}
                    error-text={this.formErrors.pageUrl}
                    invalid={!!this.formErrors.pageUrl}
                    readonly={this.disable_edit_url}
                    disabled={this.disable_edit_url}
                ></rux-input>
                <rux-input
                    onRuxinput={this.updateFormData}
                    data-field="browser"
                    label="Browser"
                    type="text"
                    size="medium"
                    value={this.formData.browser}
                    error-text={this.formErrors.browser}
                    invalid={!!this.formErrors.browser}
                ></rux-input>
                <rux-textarea
                    onRuxinput={this.updateFormData}
                    data-field="description"
                    label="Describe the bug"
                    rows={4}
                    value={this.formData.description}
                    error-text={this.formErrors.description}
                    invalid={!!this.formErrors.description}
                ></rux-textarea>
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
                    onRuxinput={this.updateFormData}
                    data-field="description"
                    label="Describe your experience using Acme"
                    rows={5}
                    style={{ resize: 'none' }}
                    value={this.formData.description}
                    error-text={this.formErrors.description}
                    invalid={!!this.formErrors.description}
                ></rux-textarea>
            </div>
        )
    }

    // Individual sentiment button
    private renderSentimentButton(sentiment: Sentiment, emoji: string) {
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

    // Success message after form submission
    private renderSuccessMessage() {
        return (
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
                    <rux-button onClick={this.handleClose}>Close</rux-button>
                </div>
            </div>
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
                                <rux-button
                                    secondary
                                    onClick={this.handleCancel}
                                >
                                    Cancel
                                </rux-button>
                                <rux-button onClick={this.handleSubmit}>
                                    Send
                                </rux-button>
                            </div>
                        </form>
                    )}

                    {this.activeTopic === 'success' &&
                        this.renderSuccessMessage()}
                </div>
            </Host>
        )
    }
}
