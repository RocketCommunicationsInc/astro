import { h } from '@stencil/core'

export interface FormFieldMessageInterface {
    helpText?: string
    errorText?: string
}

/**
 * @part error-text - The error text element
 * @part help-text - The help text element
 */

const FormFieldMessage = (props: FormFieldMessageInterface, children: any) => {
    const { helpText, errorText } = props

    function shouldShowHelpText() {
        return helpText && !errorText
    }

    function shouldShowErrorText() {
        return errorText ? true : false
    }

    return (
        (shouldShowHelpText() ? (
            <div class="rux-help-text" part="help-text">
                {children}
                {helpText}
            </div>
        ) : null) ||
        (shouldShowErrorText() ? (
            <div class="rux-error-text" part="error-text">
                {children}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.53 21.0001C21.07 21.0001 22.03 19.3301 21.26 18.0001L13.73 4.99005C12.96 3.66005 11.04 3.66005 10.27 4.99005L2.74 18.0001C1.97 19.3301 2.93 21.0001 4.47 21.0001H19.53ZM12 14.0001C11.45 14.0001 11 13.5501 11 13.0001V11.0001C11 10.4501 11.45 10.0001 12 10.0001C12.55 10.0001 13 10.4501 13 11.0001V13.0001C13 13.5501 12.55 14.0001 12 14.0001ZM11 16.0001V18.0001H13V16.0001H11Z"
                        fill="currentColor"
                    ></path>
                </svg>
                {errorText}
            </div>
        ) : null)
    )
}

export default FormFieldMessage
