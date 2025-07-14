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
import {
    toOrdinalIsoString,
    isIsoString,
    toPartialOrdinalIsoString,
} from './utils'
import { Part } from './utils/types'

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

/**
 * Handles paste events for datetime picker input
 * @param e The clipboard event
 * @param handleInitialValue Function to process the pasted value
 * @param parts Current parts array to find day value
 * @returns Object containing the day value for emission
 */
export function handlePaste(
    e: ClipboardEvent,
    handleInitialValue: (value: string) => void,
    parts: Part[]
): { dayValue: string | undefined } {
    e.preventDefault()
    let pastedValue = e.clipboardData!.getData('text/plain')
    // If there's a time portion (T...), ensure it ends with Z
    if (/T\d{2}/.test(pastedValue) && !pastedValue.trim().endsWith('Z')) {
        pastedValue += 'Z'
    }
    console.log(`handleInitialValue(${pastedValue.trim()})`)
    handleInitialValue(pastedValue.trim())

    return {
        dayValue: parts.find((part) => part.type === 'day')?.value,
    }
}

/**
 * Handles copy events for datetime picker input
 * @param e The clipboard event
 * @param iso Current ISO value
 * @param julianFormat Whether using Julian format
 */
export function handleCopy(
    e: ClipboardEvent,
    iso: string,
    julianFormat: boolean
): void {
    e.preventDefault()
    // This overrides the default copy behavior and returns the iso value instead
    //if we're in julianFormat, we want the julian ISO.
    let returnIso
    if (julianFormat) {
        //partialOrdinalIsoString func expects a valid ISO string to convert.
        if (isIsoString(iso)) {
            returnIso = toPartialOrdinalIsoString(iso)
        } else {
            //if it's not a valid iso string, we're getting back an ordinal value already.
            returnIso = iso
        }
    } else {
        returnIso = iso
    }

    e.clipboardData!.setData('text/plain', returnIso)
}

/**
 * Handles focus out events
 * @returns Object indicating which events to emit
 */
export function handleFocusOut(): { emitBlur: boolean; emitChange: boolean } {
    return { emitBlur: true, emitChange: true }
}

/**
 * Highlights input content on focus - already exists as highlightInput
 * This is just an alias for consistency
 */
export const handleHighlightInput = highlightInput
