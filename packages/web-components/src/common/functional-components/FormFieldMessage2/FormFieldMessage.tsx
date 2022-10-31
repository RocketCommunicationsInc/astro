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
    console.log(children)

    if (errorText) {
        return (
            <div class="rux-error-text" part="error-text">
                {children}
                <svg
                    fill="none"
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                        fill="currentColor"
                    />
                </svg>
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
    const newStuff = children.map((child) => <p>{child}</p>)
    return newStuff
}

export default FormFieldMessage
