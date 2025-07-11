/**
 * Simple handlers for the datetime picker component.
 *
 * These handlers have been successfully extracted from the main component:
 * - handlePopupClose: Sets calendar popup state to closed
 * - toggleCalendar: Toggles calendar popup state
 * - highlightInput: Selects input content on focus
 *
 * More complex handlers (handleChange, handleDaySelected, handlePaste, handleCopy, etc.)
 * remain in the main component due to their heavy dependencies on component state and methods.
 * These could be extracted in future iterations with more careful dependency management.
 */

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
