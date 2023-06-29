export const hasShadowDom = (el: HTMLElement) => {
    return !!el.shadowRoot && !!(el as any).attachShadow
}

export function hasSlot(el: HTMLElement, name?: string | undefined): boolean {
    // Look for a named slot
    if (name) {
        return el.querySelector(`[slot="${name}"]`) !== null
    }

    // Look for a default slot
    return [...el.childNodes].some((node) => {
        //If node is text and not an empty string return true
        if (
            node.nodeType === node.TEXT_NODE &&
            node?.textContent?.trim() !== ''
        ) {
            return true
        }

        //If node is an element with a slot attribute return true
        if (node.nodeType === node.ELEMENT_NODE) {
            const el = node as HTMLElement
            if (
                !el.hasAttribute('slot') &&
                /*
                 * This condition is specifically for checkbox because
                 * the hidden input becomes slotted content
                 */
                el.getAttribute('type') !== 'hidden'
            ) {
                return true
            }
        }

        return false
    })
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
    checked?: boolean,
    secondInput?: boolean
) => {
    let input = container.querySelector(
        'input.aux-input'
    ) as HTMLInputElement | null
    if (always || hasShadowDom(container)) {
        if (checked || checked == undefined) {
            if (!input || (secondInput && input)) {
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

/**
 * Renders multiple hidden inputs from an array of values
 * Used in multiselect
 * @param always
 * @param container
 * @param name
 * @param value
 * @param disabled
 */
export const renderHiddenSelect = (
    always: boolean,
    container: HTMLElement,
    name: string,
    value: string | undefined | null | string[],
    disabled: boolean
) => {
    // Clear any existing hidden options. May be more performant to edit their values instead though.
    let inputs = container.querySelectorAll(
        'input.aux-select'
    ) as NodeListOf<HTMLInputElement>
    if (inputs) {
        for (const elem of inputs) {
            elem.remove()
        }
    }

    if (always || hasShadowDom(container)) {
        if (Array.isArray(value)) {
            for (const el in value) {
                let input = container.ownerDocument!.createElement('input')
                input.type = 'hidden'
                input.classList.add('aux-select')
                input.classList.add(`aux-select-${el}`)
                input.disabled = disabled
                input.name = name

                if (value[el]) {
                    input.value = value[el]
                }
                container.appendChild(input)
            }
        } else {
            let input = container.ownerDocument!.createElement('input')
            input.type = 'hidden'
            input.classList.add('aux-select')
            input.classList.add(`aux-select-0`)
            input.disabled = disabled
            input.name = name
            if (value) {
                input.value = value
            }
            container.appendChild(input)
        }
    }
}
