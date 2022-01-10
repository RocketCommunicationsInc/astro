import { h } from '@stencil/core'

export interface FormFieldMessageInterface {
    helpText?: string
    errorText?: string
}

const FormFieldMessage = (props: FormFieldMessageInterface, children: any) => {
    const { helpText, errorText } = props

    return (
        (helpText || errorText) && (
            <div
                class={{
                    'rux-error-text': !!errorText,
                    'rux-help-text': !!helpText,
                }}
                part="form-field-message"
            >
                {children}

                {helpText && !errorText && helpText}

                {errorText && errorText}
            </div>
        )
    )
}

export default FormFieldMessage
