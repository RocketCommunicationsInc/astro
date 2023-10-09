import { Element, Listen, Component, Prop, Host, h, Watch } from '@stencil/core'
import { differenceInMinutes, differenceInHours } from 'date-fns'

interface DateValidation {
    success: boolean
    error?: string
}
/**
 * @slot (default) - The Track's content
 * @part track-header - The Track's header
 * @part container - The Track's container
 */
@Component({
    tag: 'rux-track',
    styleUrl: 'rux-track.scss',
    shadow: true,
})
export class RuxTrack {
    @Element() el!: HTMLRuxTrackElement

    /**
     * @internal - The grid's width. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) width = 0
    /**
     * @internal - The number of grid columns to display. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) columns = 0

    /**
     * @internal - The Track's interval. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) interval: any
    /**
     * @internal - The Track's start date. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) start = ''
    /**
     * @internal - The Track's end date. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) end = ''

    /**
     * @internal - The Track's time zone. Set automatically from the parent Timeline component.
     */
    @Prop({ reflect: true }) timezone = 'UTC'

    @Watch('start')
    @Watch('end')
    @Watch('interval')
    handleUpdate(_newValue: any, old: any) {
        if (old) {
            this.initializeRows()
        }
    }

    @Watch('timezone')
    handleTimezoneUpdate() {
        this.initializeRows()
    }

    @Listen('ruxtimeregionchange')
    handleTimeRegionChange(e: CustomEvent) {
        this.initializeRows()
        e.stopPropagation()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    /**
     * Tracks are displayed as a (CSS) grid of cells.
     * Each cell can represent a minute or hour depending on the interval.
     */
    private _calculateGridColumnFromTime(time: any) {
        if (this.start) {
            const timelineStart = new Date(this.start)

            if (this.interval === 'hour') {
                const difference = Math.abs(
                    differenceInMinutes(timelineStart, new Date(time))
                )

                return difference + 2
            }

            if (this.interval === 'day') {
                const difference = Math.abs(
                    differenceInHours(timelineStart, new Date(time))
                )

                return difference + 2
            }
        }
        return 0
    }

    private _validateTimeRegion(start: any, end: any): DateValidation {
        if (!start) {
            return {
                success: false,
                error: 'Time Region must have a start date provided',
            }
        }

        if (!end) {
            return {
                success: false,
                error: 'Time Region must have a end date provided',
            }
        }

        if (new Date(start) > new Date(end)) {
            return {
                success: false,
                error: `The Time Region start date must be before the end date: ${start} - ${end}`,
            }
        }

        if (new Date(start) > new Date(this.end)) {
            return {
                success: false,
                error: `The Time Region start date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`,
            }
        }

        if (
            new Date(start) < new Date(this.start) &&
            new Date(end) < new Date(this.start)
        ) {
            return {
                success: false,
                error: `The Time Region start and end dates do not fall within the Timeline's range: ${start} - ${end}`,
            }
        }

        return {
            success: true,
        }
    }

    /**
     * Time Regions are dumb and don't know anything about the grid.
     * The Track is responsible for lining up the Time Regions with the grid.
     */
    private initializeRows() {
        const children = [...this.el.children].filter(
            (el) => el.tagName.toLowerCase() === 'rux-time-region'
        ) as HTMLRuxTimeRegionElement[]

        children.forEach((el) => {
            const isHidden = el.style.visibility === 'hidden'
            const isValid = this._validateTimeRegion(el.start, el.end)
            /**
             * Store temp vars to use for calculating a Time Region's position in the grid
             * If a Time Region's range is outside the Timeline's range (a partial event),
             * visually it is treated as if its start/end dates = the timeline's.
             * */
            let start = el.start
            let end = el.end

            if (isValid.success) {
                if (el.start < this.start && el.end > this.end) {
                    el.partial = 'ongoing'
                    start = this.start
                    end = this.end
                } else if (el.start < this.start) {
                    el.partial = 'start'
                    start = this.start
                } else if (el.end > this.end) {
                    el.partial = 'end'
                    end = this.end
                } else {
                    el.partial = 'none'
                }

                el.timezone = this.timezone
                el.style.gridRow = '1'
                el.style.display = 'block'
                const gridColumn = `${this._calculateGridColumnFromTime(
                    start
                )} / ${this._calculateGridColumnFromTime(end)}`
                el.style.gridColumn = gridColumn
            } else {
                if (!isHidden) {
                    el.style.display = 'none'
                }
            }
        })
    }

    private _handleSlotChange() {
        this.initializeRows()
    }

    renderDebug() {
        return (
            <div style={{ display: 'contents' }}>
                {[...Array(this.columns)].map((_: any, i: any) => (
                    <div
                        style={{
                            gridRow: '1',
                            gridColumn: `${i + 2} / ${++i + 2}`,
                        }}
                        class={{
                            cell: true,
                            marker: i % 60 === 0,
                        }}
                    ></div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <Host>
                <div
                    class="rux-timeline rux-track"
                    style={{
                        gridTemplateColumns: `[header] 200px repeat(${this.columns}, ${this.width}px)`,
                    }}
                    part="container"
                >
                    <div
                        class="rux-track__header"
                        part="track-header"
                        style={{
                            gridRow: '1',
                        }}
                    >
                        <slot name="label"></slot>
                    </div>

                    <slot onSlotchange={this._handleSlotChange}></slot>

                    {this.renderDebug()}
                </div>
            </Host>
        )
    }
}
