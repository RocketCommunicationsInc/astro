/**
 * Simple handlers for the datetime picker component.
 *
 * These handlers have been successfully extracted from the main component:
 * - handlePopupClose: Sets calendar popup state to closed
 * - toggleCalendar: Toggles calendar popup state
 * - highlightInput: Selects input content on focus
 * - handleDaySelected: Processes calendar day selection events
 *
 * More complex handlers (handleChange, handlePaste, handleCopy, etc.)
 * remain in the main component due to their heavy dependencies on component state and methods.
 * These could be extracted in future iterations with more careful dependency management.
 */

import { CalendarDateTimeUpdatedEvent } from './datetime-picker.types'
import { toOrdinalIsoString } from './utils'

/**
 * Handles popup close events
 * @returns false to indicate the calendar should be closed
 */
export function handlePopupClose(): boolean {
    return false
}

/**
 * Toggles the calendar popup state
 * @param isCalendarOpen Current state of the calendar popup
 * @returns The new state (toggled)
 */
export function toggleCalendar(isCalendarOpen: boolean): boolean {
    return !isCalendarOpen
}

/**
 * Highlights input content on focus for better user experience
 * @param e The focus event
 */
export function highlightInput(e: FocusEvent): void {
    const target = e.target as HTMLInputElement
    target.select()
}

/**
 * Processes calendar day selection events and determines the appropriate value and event emission
 * @param event The calendar date time updated event
 * @param julianFormat Whether using Julian format
 * @returns Object containing the new value and which events to emit
 */
export function handleDaySelected(
    event: CalendarDateTimeUpdatedEvent,
    julianFormat: boolean
): { value: string; emitChange: boolean; emitInput: boolean } {
    const value = julianFormat
        ? toOrdinalIsoString(event.detail.iso)
        : event.detail.iso

    // Based on the event's source, determine which event to emit
    const emitChange = event.detail.source !== 'timeChange'
    const emitInput = event.detail.source === 'timeChange'

    return { value, emitChange, emitInput }
}
