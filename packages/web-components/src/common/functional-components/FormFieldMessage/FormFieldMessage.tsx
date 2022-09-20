import { FunctionalComponent, h } from '@stencil/core'

export interface FormFieldMessageProps {
    helpText?: string
    errorText?: string
}

/**
 * @part error-text - The error text element
 * @part help-text - The help text element
 */

const FormFieldMessage: FunctionalComponent<FormFieldMessageProps> = (
    props,
    children
) => {
    const { helpText, errorText } = props

    if (errorText) {
        return (
            <div class="rux-error-text" part="error-text">
                {children}
                {errorText}
            </div>
        )
    }

    if (helpText) {
        return (
            <div class="rux-help-text" part="help-text">
                {children}
                {helpText}
            </div>
        )
    }

    return null
}

export default FormFieldMessage
