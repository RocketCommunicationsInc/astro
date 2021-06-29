import { Prop, Component, h } from '@stencil/core'

@Component({
    tag: 'rux-button',
    styleUrl: 'rux-button.scss',
    shadow: true,
})
export class RuxButton {
    /**
     * For a [button styleguid, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @Prop({ reflect: true }) icon: string = ''

    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    @Prop({ reflect: true }) iconOnly: boolean = false
    /*
      Changes button style from solid to secondary by setting rux-button--secondary class
    */
    @Prop() secondary: boolean = false
    /*
      Toggles disabled attribute on the button
    */
    @Prop({ reflect: true }) disabled = false

    /**
     * Changes size of a button from standard to small or large by setting sizing classes
     * rux-button--small
     * rux-button--large
     */
    @Prop({ reflect: true }) size?: 'small' | 'large'

    render() {
        const { size, iconOnly, secondary, disabled, icon } = this
        return (
            <button
                type="button"
                class={{
                    'rux-button': true,
                    'rux-button--secondary': secondary,
                    'rux-button--small': size === 'small',
                    'rux-button--large': size === 'large',
                    'rux-button--icon-only': iconOnly,
                }}
                aria-disabled={disabled ? 'true' : null}
                disabled={disabled}
            >
                {icon ? (
                    <rux-icon
                        icon={icon}
                        color={secondary ? 'primary' : 'dark'}
                    ></rux-icon>
                ) : null}

                <slot></slot>
            </button>
        )
    }
}
