import {
    Component,
    Host,
    h,
    Prop,
    Element,
    EventEmitter,
    Event,
    Method,
    Watch,
    State,
} from '@stencil/core'

/**
 * @slot menu-end - Area below the menu list to insert elements. For example, confirmation and/or cancel button group.
 */

@Component({
    tag: 'rux-pop-up-menu',
    styleUrl: 'rux-pop-up-menu.scss',
    shadow: true,
})
export class RuxPopUpMenu {
    @Element() el!: HTMLRuxPopUpMenuElement

    @State() anchorBounds?: DOMRect
    @State() menuBounds?: DOMRect

    /**
     * Optional element to trigger opening and closing of the menu.
     * If none is supplied the element where aria-controls === menu id will be assigned
     */
    @Prop({ mutable: true }) triggerEl?: HTMLElement

    /**
     * Element to anchor the menu to. If none is given the menu will anchor
     * to the trigger element where aria-controls === menu id
     */
    @Prop({ mutable: true }) anchorEl?: HTMLElement
    @Watch('triggerEl')
    @Watch('anchorEl')
    tieElements() {
        this._bindElements()
    }

    /**
     * Boolean which controls when to show the menu
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false

    /**
     * Emitted when the menu is about to open.
     */
    @Event({ eventName: 'rux-menu-will-open' })
    ruxMenuWillOpen!: EventEmitter<void>

    /**
     * Emitted when the menu is about to close
     */
    @Event({ eventName: 'rux-menu-will-close' })
    ruxMenuWillClose!: EventEmitter<void>

    /**
     * Emitted when the menu is open.
     */
    @Event({ eventName: 'rux-menu-did-open' })
    ruxMenuDidOpen!: EventEmitter<void>

    /**
     * Emitted when the menu is closed.
     */
    @Event({ eventName: 'rux-menu-did-close' })
    ruxMenuDidClose!: EventEmitter<void>

    componentDidRender() {
        this._setMenuPosition()
    }

    connectedCallback() {
        this._handleClick = this._handleClick.bind(this)
        this._handleOutsideClick = this._handleOutsideClick.bind(this)

        this._bindElements()

        if (this.open) {
            this._show()
        }
    }

    disconnectedCallback() {
        if (this.triggerEl) {
            this.triggerEl.removeEventListener('mousedown', this._handleClick)
        }
    }

    /**
     * Returns 'true' if the menu is open, 'false' if it is not.
     */
    @Method()
    async isOpen(): Promise<boolean> {
        return Promise.resolve(this.open)
    }

    /**
     * Opens the menu. If the menu is already open it returns 'false'.
     */
    @Method()
    async show(): Promise<boolean> {
        if (this.open) {
            return Promise.resolve(false)
        }

        this._show()
        return Promise.resolve(true)
    }

    /**
     * Closes the menu. If the menu is already closed it returns 'false'.
     */
    @Method()
    async close(): Promise<boolean> {
        if (!this.open) {
            return Promise.resolve(false)
        }

        this._hide()
        return Promise.resolve(true)
    }

    /**
     * Toggles the menu open or close. Will return 'true' on menu open and 'false' on menu close
     */
    @Method()
    async toggle(): Promise<boolean> {
        if (this.open) {
            this._hide()
            return Promise.resolve(false)
        } else {
            this._show()
            return Promise.resolve(true)
        }
    }

    private _bindElements() {
        if (!this.triggerEl) {
            const triggerEl: HTMLElement | null = document.querySelector(
                `[aria-controls="${this.el.id}"]`
            )

            if (triggerEl) {
                this.triggerEl = triggerEl
                this.triggerEl.addEventListener('mousedown', this._handleClick)
            } else {
                this.triggerEl = this.el
            }
        } else {
            this.triggerEl.addEventListener('mousedown', this._handleClick)
        }

        if (!this.anchorEl) {
            this.anchorEl = this.triggerEl
        }
        this.anchorBounds = this.anchorEl.getBoundingClientRect()
        this.menuBounds = this.el.getBoundingClientRect()
    }

    private _setMenuPosition() {
        if (this.anchorEl && this.anchorBounds && this.menuBounds) {
            let { anchorBounds, menuBounds } = this
            anchorBounds = this.anchorEl.getBoundingClientRect()
            menuBounds = this.el.getBoundingClientRect()
            const caret = parseInt(getComputedStyle(this.el, ':after').height)
            let top: number
            let left: number
            let caretLeft: number

            const padding = 8

            if (
                menuBounds.width + anchorBounds.left - padding >
                window.innerWidth
            ) {
                left = anchorBounds.right - menuBounds.width
                caretLeft = menuBounds.width - 25
            } else if (anchorBounds.left - padding > 0) {
                left = anchorBounds.left - padding
                caretLeft = 10
            } else {
                left = padding
                caretLeft = 10
            }

            top =
                anchorBounds.bottom +
                padding / 2 +
                19 / 2 /* changed caret ref to 19 for bug fix */

            if (
                menuBounds.height + anchorBounds.bottom + padding >
                window.innerHeight
            ) {
                top = anchorBounds.top - menuBounds.height - caret
                this.el.classList.add('from-top')
            } else {
                this.el.classList.remove('from-top')
            }

            this.el.style.left = `${left}px`
            this.el.style.top = `${top}px`

            this.el.style.setProperty('--caretLeft', `${caretLeft}px`)
        }
    }

    private _handleClick(e: Event) {
        e.preventDefault()
        this._show()
    }

    private _handleOutsideClick(e: MouseEvent) {
        const target = e.composedPath().includes(this.el)
        if (!target) {
            this._hide()
        }
    }

    private _show() {
        if (this.anchorEl) {
            this.ruxMenuWillOpen.emit()
            this.open = true

            const debounce = setTimeout(() => {
                window.addEventListener('resize', () => this._setMenuPosition())
                window.addEventListener('mousedown', this._handleOutsideClick)
                clearTimeout(debounce)
            }, 10)

            this.triggerEl?.removeEventListener('mousedown', this._handleClick)

            this.ruxMenuDidOpen.emit()
        } else {
            console.error(
                'Unable to open pop up menu properly without an anchor element'
            )
        }
    }

    private _hide() {
        this.ruxMenuWillClose.emit()
        this.open = false

        window.removeEventListener('mousedown', this._handleOutsideClick)
        window.removeEventListener('resize', this._setMenuPosition)

        this.triggerEl?.addEventListener('mousedown', this._handleClick)
        this.ruxMenuDidClose.emit()
    }

    render() {
        return (
            <Host aria-hidden={!this.open ? 'true' : 'false'}>
                <ul role="menu" aria-expanded={`${this.open}`}>
                    <slot></slot>
                </ul>
                <slot name="menu-end"></slot>
            </Host>
        )
    }
}
