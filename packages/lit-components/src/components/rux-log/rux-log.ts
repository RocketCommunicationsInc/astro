import { LitElement, html, css, type PropertyValues, unsafeCSS } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

// Assume the type definition for LogRow is available, e.g., from 'rux-log.model'
interface LogRow {
    timestamp: string | Date
    status: string // Assuming a status type like 'normal', 'warning', 'critical', etc.
    message: string
}
import style from './rux-log.scss?inline' // Example for a build setup that imports CSS as a string


// Assume this is your SASS/CSS file. You'll need a build step to convert this to a JS string.
// Placeholder for the style import
// import style from './rux-log.scss?inline'

/**
 * A Log is a tabular representation of application events.
 *
 * @slot table - for advanced control, you may pass in your own table
 * @slot table-header - the log's table header
 * @slot table-header-row - the log's table header row
 * @slot table-body - the log's table body
 * @part log-notification - the filter notification
 */
@customElement('rux-log')
export class RuxLog extends LitElement {
    // We use @query to get a reference to the nested custom element
    @query('rux-input')
    private inputEl!: HTMLInputElement

    /**
     * An array of objects to display as log
     */
    @property({ type: Array })
    data: LogRow[] = []

    /**
     * Accepts [IANA timezone string format] such as `America/Los_Angeles`. Default timezone is `UTC`.
     */
    @property({ type: String })
    timezone: string = 'UTC'

    /**
     * A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match.
     */
    @property({ type: String, mutable: true, reflect: true })
    filter?: string

    // Use a static styles getter for component CSS
    static styles = css`
        ${unsafeCSS(style)}
    `

    // Lit's equivalent of Stencil's @Watch('filter')
    willUpdate(changedProperties: PropertyValues) {
        // If the external 'filter' property changes, and the internal input element exists
        // and its value is different, sync them.
        if (
            changedProperties.has('filter') &&
            this.inputEl &&
            this.inputEl.value !== this.filter
        ) {
            // Use property assignment (e.g., this.inputEl.value) for setting value on a component
            this.inputEl.value = this.filter || ''
        }
    }

    /**
     * Handles the 'ruxinput' event from the child <rux-input> element.
     * This updates the reactive 'filter' property.
     */
    private _setFilter(e: Event) {
        // We cast the event target to HTMLInputElement to safely access its value.
        // This is safe since we attach the handler directly to the input element in the template.
        this.filter = (e.target as HTMLInputElement).value
    }

    /**
     * Lit's equivalent of a Stencil getter for computed data.
     */
    get filteredData(): LogRow[] {
        if (this.filter) {
            const filter = this.filter
            return this.data.filter((row) =>
                row.message.toLowerCase().includes(filter.toLowerCase())
            )
        } else {
            return this.data
        }
    }

    render() {
        // Lit uses the 'html' tagged template function for rendering.
        // It's the equivalent of Stencil's `h()` function in JSX.
        return html`
            <div class="rux-log">
                <slot name="table">
                    <rux-table>
                        <slot name="table-header">
                            <rux-table-header class="relative">
                                <slot name="table-header-row">
                                    <rux-table-header-row>
                                        <rux-table-header-cell>
                                            Time
                                        </rux-table-header-cell>
                                        <rux-table-header-cell></rux-table-header-cell>
                                        <rux-table-header-cell class="rux-log__header-event-cell">
                                            <div class="header-event-container">
                                                Event
                                                <rux-input
                                                    size="small"
                                                    class="rux-log__filter"
                                                    type="search"
                                                    placeholder="Search..."
                                                    .value=${this.filter ?? ''}
                                                    @ruxinput=${this._setFilter}
                                                ></rux-input>
                                            </div>
                                        </rux-table-header-cell>
                                    </rux-table-header-row>
                                </slot>
                            </rux-table-header>
                        </slot>

                        ${this.filter
                            ? html`
                                  <div
                                      class="rux-log__notification"
                                      part="log-notification"
                                  >
                                      A filter with <b>${this.filter}</b> is
                                      enabled.
                                      ${this.data.length -
                                      this.filteredData.length}
                                      of ${this.data.length} records are
                                      currently hidden.
                                  </div>
                              `
                            : null}

                        <slot name="table-body">
                            <rux-table-body>
                                ${this.filteredData?.map(
                                    (row: LogRow) => html`
                                        <rux-table-row>
                                            <rux-table-cell>
                                                <rux-datetime
                                                    hour="2-digit"
                                                    time-zone=${this.timezone}
                                                    minute="2-digit"
                                                    second="2-digit"
                                                    date=${row.timestamp.toString()}
                                                ></rux-datetime>
                                            </rux-table-cell>
                                            <rux-table-cell>
                                                <rux-status
                                                    status=${row.status}
                                                ></rux-status>
                                            </rux-table-cell>
                                            <rux-table-cell>
                                                ${row.message}
                                            </rux-table-cell>
                                        </rux-table-row>
                                    `
                                )}
                            </rux-table-body>
                        </slot>
                    </rux-table>
                </slot>
            </div>
        `
    }
}
