import { LitElement, css, html, unsafeCSS } from 'lit'
import type { Status, StatusTypes } from '../../common/commonTypes.module'
import { customElement, property } from 'lit/decorators.js'

import StatusSVG from './statuses/light-theme' // Ensure this path is correct relative to the new file location
import style from './rux-status.scss?inline'

/**
 * @part status - the container of the rux-status symbol
 */
@customElement('rux-status')
export class RuxStatus extends LitElement {
    /**
     * Styles from rux-status.scss should be converted to CSS and placed here.
     * Example placeholder styles are included.
     */
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
     */
    @property({ type: String, reflect: true })
    status: Status = 'normal'

    // Stencil's @Element() is not directly needed. 'this' refers to the custom element instance.

    // Stencil's @Watch('status') is handled by Lit's willUpdate lifecycle method.
    protected willUpdate(changedProperties: Map<PropertyKey, unknown>): void {
        if (changedProperties.has('status') && this.status !== undefined) {
            this.validateStatus(this.status)
        }
    }

    private validateStatus(newValue: string) {
        const statusTypes = {
            off: true,
            standby: true,
            normal: true,
            caution: true,
            serious: true,
            critical: true,
        } as StatusTypes

        if (!statusTypes[newValue]) {
            throw new Error(`rux-status: status of '${newValue}' is not valid. Please use a valid status.`)
        }
    }

    // Stencil's connectedCallback logic for validation is covered by willUpdate,
    // as it runs on initial property assignment (including defaults or attribute values).
    // No explicit connectedCallback is typically needed for this use case in Lit.

    render() {
        return html` <div part="status" class="status-wrapper" .innerHTML=${this.status ? StatusSVG[this.status] : ''}></div> `
    }
}
