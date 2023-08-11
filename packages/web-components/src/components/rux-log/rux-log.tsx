/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Prop, Component, Host, h, Watch, Element } from '@stencil/core'
import { LogRow } from './rux-log.model'

/**
 * A Log is a tabular representation of application events and may include username, priority, equipment type, signal type, etc. As part of the [Notification System](https://www.astrouxds.com/design-guidelines/notifications), Logs provide sorting and filtering function for examining events.
 * @slot table - for advanced control, you may pass in your own table
 * @slot table-header - the log's table header
 * @slot table-header-row - the log's table header row
 * @slot table-body - the log's table body
 * @part log-notification - the filter notification
 *
 */
@Component({
    tag: 'rux-log',
    styleUrl: 'rux-log.scss',
    shadow: true,
})
export class RuxLog {
    @Element() el!: HTMLRuxLogElement
    private inputEl!: HTMLRuxInputElement
    /**
     * An array of objects to display as log
     */
    @Prop() data: LogRow[] = []
    /**
     * Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    @Prop() timezone: string = 'UTC'

    /**
     * A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match.
     */
    @Prop({ mutable: true, reflect: true }) filter?: string

    @Watch('filter')
    syncFilter() {
        if (this.inputEl.value !== this.filter) {
            this.inputEl.value = this.filter || ''
        }
    }

    private _setFilter(e: Event) {
        this.filter = (e.target as HTMLInputElement).value
    }

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
        return (
            <Host>
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
                                                        ref={(el) =>
                                                            (this.inputEl = el!)
                                                        }
                                                        onRuxinput={(event) =>
                                                            this._setFilter(
                                                                event
                                                            )
                                                        }
                                                    ></rux-input>
                                                </div>
                                            </rux-table-header-cell>
                                        </rux-table-header-row>
                                    </slot>
                                </rux-table-header>
                            </slot>

                            {this.filter && (
                                <div
                                    class="rux-log__notification"
                                    part="log-notification"
                                >
                                    A filter with <b>{this.filter}</b> is
                                    enabled.{' '}
                                    {this.data.length -
                                        this.filteredData.length}{' '}
                                    of {this.data.length} records are currently
                                    hidden.
                                </div>
                            )}

                            <slot name="table-body">
                                <rux-table-body>
                                    {this.filteredData.map((row: LogRow) => (
                                        <rux-table-row>
                                            <rux-table-cell>
                                                <rux-datetime
                                                    hour="2-digit"
                                                    time-zone={this.timezone}
                                                    minute="2-digit"
                                                    second="2-digit"
                                                    date={row.timestamp}
                                                ></rux-datetime>
                                            </rux-table-cell>
                                            <rux-table-cell>
                                                <rux-status
                                                    status={row.status}
                                                ></rux-status>
                                            </rux-table-cell>
                                            <rux-table-cell>
                                                {row.message}
                                            </rux-table-cell>
                                        </rux-table-row>
                                    ))}
                                </rux-table-body>
                            </slot>
                        </rux-table>
                    </slot>
                </div>
            </Host>
        )
    }
}
