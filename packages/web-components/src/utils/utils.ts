export function format(first: string, middle: string, last: string): string {
    return (
        (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
    )
}

export const hasShadowDom = (el: HTMLElement) => {
    return !!el.shadowRoot && !!(el as any).attachShadow
}

/**
* This method is used to add a hidden input to a host element that contains
* a Shadow DOM. It does not add the input inside of the Shadow root which
* allows it to be picked up inside of forms. It should contain the same
* values as the host element.
* https://github.com/ionic-team/ionic-framework/blob/ae96563fb3c4612cb8585292b389ee746f5759f7/core/src/utils/helpers.ts#L198

*
* @param always Add a hidden input even if the container does not use Shadow
* @param container The element where the input will be added
* @param name The name of the input
* @param value The value of the input
* @param disabled If true, the input is disabled
* @param checked Optional. If true, the input is checked
*/
export const renderHiddenInput = (
    always: boolean,
    container: HTMLElement,
    name: string,
    value: string | undefined | null,
    disabled: boolean,
    checked?: boolean
) => {
    let input = container.querySelector(
        'input.aux-input'
    ) as HTMLInputElement | null
    if (always || hasShadowDom(container)) {
        if (checked || checked == undefined) {
            if (!input) {
                input = container.ownerDocument!.createElement('input')
                input.type = 'hidden'
                input.classList.add('aux-input')
                container.appendChild(input)
            }
            input.disabled = disabled
            input.name = name
            input.value = value || ''
        } else {
            if (input) {
                input.remove()
            }
        }
    }
}
