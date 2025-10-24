import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-feedback
                classification="${args.classification || ''}"
                ?disable-url-collection="${args.disableUrlCollection}"
                ?disable-display-url="${args.disableDisplayUrl}"
                ?disable-edit-url="${args.disableEditUrl}"
                ?disable-floating="${args.disableFloating}"
                allowed-file-types="${args.allowedFileTypes || ''}"
                max-file-size="${args.maxFileSize || 0}"
                uploadable-topics="${args.uploadableTopics || ''}"
                ?show-file-description="${args.showFileDescription}"
                included-forms="${args.includedForms || ''}"
                custom-form="${args.customForm || ''}"
            ></rux-feedback>
        </div>
    `
}

export default {
    title: 'Components/Feedback',
    component: 'rux-feedback',
    argTypes: extractArgTypes('rux-feedback'),
    parameters: {
        actions: {
            handles: ['feedback-submitted'],
        },
    },
}

/**
 * Default configuration with all standard forms enabled.
 * Users can select from Issue, Idea, Bug, or Other feedback types.
 */
export const Default = {
    render: Base.bind({}),
    args: {},
    name: 'Default',
}

/**
 * Shows only Bug and Issue forms for focused feedback collection.
 */
export const LimitedForms = {
    render: Base.bind({}),
    args: {
        includedForms: 'bug,issue',
    },
    name: 'Limited Forms',
}

/**
 * Custom form for Feature Requests with a custom icon and label.
 * The custom form includes page URL and description fields.
 */
export const CustomFormOnly = {
    render: Base.bind({}),
    args: {
        customForm: '{"icon":"lightbulb","label":"Feature Request"}',
        includedForms: 'custom',
    },
    name: 'Custom Form Only',
}

/**
 * Combines standard forms with a custom Support Ticket form.
 */
export const MixedForms = {
    render: Base.bind({}),
    args: {
        customForm: '{"icon":"support","label":"Support Ticket"}',
        includedForms: 'bug,issue,custom',
    },
    name: 'Mixed Standard and Custom Forms',
}

/**
 * Enables file uploads for all forms with validation.
 * Supports images and PDFs up to 5MB.
 */
export const WithFileUpload = {
    render: Base.bind({}),
    args: {
        allowedFileTypes: 'image/*,.pdf',
        maxFileSize: 5242880, // 5MB
        showFileDescription: true,
    },
    name: 'With File Upload',
}

/**
 * File uploads enabled only for Bug reports.
 */
export const SelectiveFileUpload = {
    render: Base.bind({}),
    args: {
        uploadableTopics: 'bug',
        allowedFileTypes: 'image/*,.pdf,.log',
        maxFileSize: 10485760, // 10MB
        showFileDescription: true,
    },
    name: 'Selective File Upload (Bug Only)',
}

/**
 * Screenshots only (no other file types allowed), 2MB limit.
 */
export const ScreenshotsOnly = {
    render: Base.bind({}),
    args: {
        allowedFileTypes: 'image/png,image/jpeg,image/jpg',
        maxFileSize: 2097152, // 2MB
        uploadableTopics: 'bug,issue',
    },
    name: 'Screenshots Only',
}

/**
 * Automatically collects current page URL and displays it to users.
 * URL is pre-filled but editable.
 */
export const WithURLCollection = {
    render: Base.bind({}),
    args: {},
    name: 'With URL Collection (Default)',
}

/**
 * Collects URL but keeps it hidden from the user.
 * URL is captured in the background but not shown in the form.
 */
export const HiddenURLCollection = {
    render: Base.bind({}),
    args: {
        disableDisplayUrl: true,
    },
    name: 'Hidden URL Collection',
}

/**
 * URL is displayed but locked for editing.
 * Users can see the URL but cannot modify it.
 */
export const ReadOnlyURL = {
    render: Base.bind({}),
    args: {
        disableEditUrl: true,
    },
    name: 'Read-Only URL',
}

/**
 * URL collection is completely disabled.
 * Users must manually enter URLs if needed.
 */
export const NoURLCollection = {
    render: Base.bind({}),
    args: {
        disableUrlCollection: true,
    },
    name: 'No URL Collection',
}

/**
 * Displays a CUI (Controlled Unclassified Information) classification marking.
 */
export const WithClassification = {
    render: Base.bind({}),
    args: {
        classification: 'cui',
    },
    name: 'With Classification Marking',
}

/**
 * Complete configuration showcasing all features:
 * - Custom form + standard forms
 * - File uploads with descriptions
 * - URL auto-collection with editing
 * - Classification marking
 */
export const FullyConfigured = {
    render: (args) => {
        return html`
            <div style="padding: 10%; display: flex; justify-content: center;">
                <rux-feedback
                    custom-form='{"icon":"flag","label":"Security Report"}'
                    included-forms="bug,issue,custom"
                    allowed-file-types="image/*,.pdf,.log,.txt"
                    max-file-size="10485760"
                    ?show-file-description="${true}"
                    classification="cui"
                ></rux-feedback>
            </div>
            <div
                style="margin: 20px; padding: 15px; background: #f5f5f5; border-radius: 4px;"
            >
                <p><strong>Event Listener Example:</strong></p>
                <pre
                    style="background: white; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px;"
                ><code>const feedback = document.querySelector('rux-feedback');
feedback.addEventListener('feedback-submitted', (e) => {
  console.log('Feedback data:', e.detail);
  // Send to your API
  fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(e.detail)
  });
});</code></pre>
            </div>
        `
    },
    args: {},
    name: 'Fully Configured',
}

/**
 * Minimal configuration with only Issue form and basic settings.
 */
export const MinimalSetup = {
    render: Base.bind({}),
    args: {
        includedForms: 'issue',
    },
    name: 'Minimal Setup',
}

/**
 * Bug reporting setup optimized for technical feedback.
 * Includes browser field, URL collection, and file uploads.
 */
export const BugReportingSetup = {
    render: Base.bind({}),
    args: {
        includedForms: 'bug',
        allowedFileTypes: 'image/*,.log,.txt',
        maxFileSize: 5242880, // 5MB
        showFileDescription: true,
        disableEditUrl: true,
    },
    name: 'Bug Reporting Setup',
}

/**
 * User feedback collection with sentiment tracking.
 * Shows only the "Other" form with emoji sentiment options.
 */
export const SentimentFeedback = {
    render: Base.bind({}),
    args: {
        includedForms: 'other',
    },
    name: 'Sentiment Feedback',
}

/**
 * Multiple custom forms example showing how to use different custom configurations.
 */
export const MultipleCustomFormsExample = {
    render: () => {
        return html`
            <div style="display: grid; gap: 20px; padding: 20px;">
                <div>
                    <h3>Feature Request Form</h3>
                    <rux-feedback
                        custom-form='{"icon":"lightbulb","label":"Feature Request"}'
                        included-forms="custom"
                    ></rux-feedback>
                </div>
                <div>
                    <h3>Security Report Form</h3>
                    <rux-feedback
                        custom-form='{"icon":"security","label":"Security Issue"}'
                        included-forms="custom"
                        classification="confidential"
                    ></rux-feedback>
                </div>
                <div>
                    <h3>General Inquiry Form</h3>
                    <rux-feedback
                        custom-form='{"icon":"help","label":"General Question"}'
                        included-forms="custom"
                        disable-url-collection
                    ></rux-feedback>
                </div>
            </div>
        `
    },
    args: {},
    name: 'Multiple Custom Forms',
    parameters: {
        docs: {
            description: {
                story:
                    'Example showing multiple custom form configurations side by side. Each can have different settings.',
            },
        },
    },
}

/**
 * File upload disabled for all forms.
 */
export const NoFileUploads = {
    render: Base.bind({}),
    args: {
        uploadableTopics: 'none',
    },
    name: 'No File Uploads',
}

/**
 * Disables floating behavior; feedback form is always expanded.
 */
export const NoFloating = {
    render: Base.bind({}),
    args: {
        disableFloating: true,
    },
    argTypes: {
        disableFloating: {
            control: { type: 'boolean' },
        },
    },
    name: 'No Floating',
}

/**
 * Interactive playground to test all configuration options.
 */
export const Playground = {
    render: Base.bind({}),
    args: {
        classification: '',
        disableUrlCollection: false,
        disableDisplayUrl: false,
        disableEditUrl: false,
        allowedFileTypes: 'image/*,.pdf',
        maxFileSize: 5242880,
        uploadableTopics: '',
        showFileDescription: true,
        includedForms: '',
        customForm: '',
        disableFloating: false,
    },
    name: 'Playground',
    argTypes: {
        classification: {
            control: { type: 'select' },
            options: [
                '',
                'unclassified',
                'cui',
                'controlled',
                'confidential',
                'secret',
                'top-secret',
                'top-secret-sci',
            ],
        },
        disableUrlCollection: {
            control: { type: 'boolean' },
        },
        disableDisplayUrl: {
            control: { type: 'boolean' },
        },
        disableEditUrl: {
            control: { type: 'boolean' },
        },
        allowedFileTypes: {
            control: { type: 'text' },
        },
        maxFileSize: {
            control: { type: 'number' },
        },
        uploadableTopics: {
            control: { type: 'text' },
        },
        showFileDescription: {
            control: { type: 'boolean' },
        },
        includedForms: {
            control: { type: 'text' },
        },
        customForm: {
            control: { type: 'text' },
        },
        disableFloating: {
            control: { type: 'boolean' },
        },
    },
}
