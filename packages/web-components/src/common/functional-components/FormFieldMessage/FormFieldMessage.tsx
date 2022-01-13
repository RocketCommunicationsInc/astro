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
                {errorText}
            </div>
        ) : null)
    )
}

export default FormFieldMessage
