import { Prop, Element, Component, h, Host } from '@stencil/core'
import { hasShadowDom } from '../../utils/utils'

/**
 * @part container - the components container.
 * @part icon - the optional rux-icon
 */
@Component({
    tag: 'rux-button',
    styleUrl: 'rux-button.scss',
    shadow: true,
})
export class RuxButton {
    @Element() el!: HTMLRuxButtonElement
    /**
     * For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @Prop({ reflect: true }) icon?: string

    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    @Prop({
        attribute: 'icon-only',
        reflect: true,
    })
    iconOnly: boolean = false
    /**
     * Changes button style from solid to secondary by setting rux-button--secondary class
     */
    @Prop() secondary: boolean = false
    /**
     * Toggles disabled attribute on the button
     */
    @Prop({ reflect: true }) disabled = false

    /**
     * Changes size of a button from medium to small or large by setting sizing classes
     * rux-button--small
     * rux-button--large
     */
    @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large'

    /**
     * The button type. Use 'submit' to submit native form data.
     */
    @Prop() type: 'submit' | 'button' = 'button'

    /**
     * Creates and appends a native <button> if used within a form
     * so that it can trigger the submit event.
     *
     * Shadow DOM limitation prevents <form> from working correctly.
     * https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/button/button.tsx
     * @param ev
     */
    private handleClick = (ev: Event) => {
        if (hasShadowDom(this.el)) {
            const form = this.el.closest('form')
            if (form) {
                ev.preventDefault()

                const fakeButton = document.createElement('button')
                fakeButton.type = this.type
                fakeButton.style.display = 'none'
                form.appendChild(fakeButton)
                fakeButton.click()
                fakeButton.remove()
            }
        }
    }

    render() {
        const { size, iconOnly, secondary, disabled, icon } = this
        return (
            <Host>
                <button
                    type="button"
                    onClick={this.handleClick}
                    class={{
                        'rux-button': true,
                        'rux-button--secondary': secondary,
                        'rux-button--default': !secondary,
                        'rux-button--small': size === 'small',
                        'rux-button--large': size === 'large',
                        'rux-button--icon-only': iconOnly,
                    }}
                    aria-disabled={disabled ? 'true' : null}
                    disabled={disabled}
                    part="container"
                >
                    {icon ? (
                        <rux-icon
                            size="extra-small"
                            icon={icon}
                            exportparts="icon"
                            color={secondary ? 'primary' : 'dark'}
                        ></rux-icon>
                    ) : null}

                    <slot></slot>
                </button>
            </Host>
        )
    }
}
