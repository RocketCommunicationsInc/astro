/**
 * JSX render function for the datetime picker component.
 *
 * This file contains the main render function extracted from the component
 * to improve maintainability and separation of concerns.
 */

import { Fragment, Host, h } from '@stencil/core'
import { PartKey, Precision, Part, InputRefs } from './utils/types'
import { setMaxLength, setMaxLengthOrdinal } from './utils'
import { determineMinMax } from './datetime-picker.helpers'
import { renderHiddenInput } from '../../utils/utils'
import {
    getMaskClasses,
    getDisplayClasses,
    getDisplayText,
    getInputContainerClasses,
} from './datetime-picker.render'

/**
 * Renders the datetime picker component
 * @param props All the component properties and state needed for rendering
 * @returns JSX element
 */
export function renderDatetimePicker(props: {
    disabled: boolean
    label?: string
    size: string
    refs: InputRefs
    handleChange: (
        event: InputEvent,
        type: PartKey,
        inputRefs: InputRefs
    ) => void
    errorText?: string
    helpText?: string
    toggleCalendar: () => void
    isCalendarOpen: boolean
    handleCopy: (e: ClipboardEvent) => void
    handlePaste: (e: ClipboardEvent) => void
    iso: string
    precision: Precision
    el: HTMLRuxDatetimePickerElement
    name: string
    value: string
    required: boolean
    invalid: boolean
    parts: Part[]
    julianFormat: boolean
    minYear: number
    maxYear: number
    _highlightInput: (e: FocusEvent) => void
}) {
    const {
        disabled,
        label,
        size,
        refs,
        handleChange,
        errorText,
        helpText,
        toggleCalendar,
        isCalendarOpen,
        handleCopy,
        handlePaste,
        iso,
        precision,
        el,
        name,
        value,
        required,
        invalid,
        parts,
        julianFormat,
        minYear,
        maxYear,
        _highlightInput,
    } = props

    renderHiddenInput(true, el, name, value, disabled)

    return (
        <Host>
            <div>
                <div
                    class={{ control: true }}
                    onPaste={handlePaste}
                    onCopy={handleCopy}
                >
                    {label && (
                        <label>
                            {label}
                            {required && (
                                <span
                                    part="required"
                                    class="rux-datetime-picker-label__asterisk"
                                >
                                    &#42;
                                </span>
                            )}
                        </label>
                    )}

                    <div
                        class={getInputContainerClasses(
                            size,
                            disabled,
                            invalid
                        )}
                    >
                        {parts.map(({ type, value }, i) =>
                            type === 'mask' ? (
                                <span class={getMaskClasses(value)} key={i}>
                                    {value}
                                </span>
                            ) : (
                                <Fragment>
                                    <input
                                        key={i}
                                        class={{
                                            part: true,
                                            year: type === 'year',
                                            month: type === 'month',
                                            day: type === 'day',
                                            hour: type === 'hour',
                                            min: type === 'min',
                                            sec: type === 'sec',
                                            ms: type === 'ms',
                                            us: precision === 'us',
                                            ordinalDay:
                                                type === 'day' && julianFormat,
                                        }}
                                        disabled={disabled}
                                        ref={(el) => (refs[type] = el)}
                                        onInput={(e: InputEvent) =>
                                            handleChange(e, type, refs)
                                        }
                                        maxLength={
                                            !julianFormat
                                                ? setMaxLength(
                                                      precision === 'us'
                                                  )[type]
                                                : setMaxLengthOrdinal(
                                                      precision === 'us'
                                                  )[type]
                                        }
                                        max={
                                            determineMinMax(
                                                type,
                                                precision === 'us',
                                                julianFormat,
                                                minYear,
                                                maxYear
                                            )[1]
                                        }
                                        min={
                                            determineMinMax(
                                                type,
                                                precision === 'us',
                                                julianFormat,
                                                minYear,
                                                maxYear
                                            )[0]
                                        }
                                        value={value}
                                        onFocus={(e: FocusEvent) =>
                                            _highlightInput(e)
                                        }
                                    />
                                    <span
                                        class={getDisplayClasses(
                                            type,
                                            julianFormat,
                                            precision
                                        )}
                                    >
                                        {getDisplayText(
                                            type,
                                            value,
                                            julianFormat,
                                            precision
                                        )}
                                    </span>
                                </Fragment>
                            )
                        )}
                        <rux-pop-up
                            open={isCalendarOpen}
                            placement="bottom"
                            class="calendar-btn"
                        >
                            <button
                                type="button"
                                disabled={disabled}
                                class="calendar-btn calendar-icon"
                                onClick={toggleCalendar}
                                slot="trigger"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 3h1c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V2c0-.55.45-1 1-1s1 .45 1 1v1h10V2c0-.55.45-1 1-1s1 .45 1 1v1ZM5 21h14c.55 0 1-.45 1-1V8H4v12c0 .55.45 1 1 1Z" />
                                </svg>
                            </button>
                            <rux-calendar
                                //* ISO controls the displayed date in the calendar and should only ever be in ISO format, not ordinal
                                iso={iso}
                                minYear={minYear}
                                maxYear={maxYear}
                                precision={precision}
                                isJulian={julianFormat}
                            ></rux-calendar>
                        </rux-pop-up>
                    </div>

                    {helpText && !errorText && (
                        <small class="rux-help-text">{helpText}</small>
                    )}

                    {errorText && (
                        <small class="rux-error-text">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M19.53 21c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3h15.06ZM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1Zm-1 2v2h2v-2h-2Z"
                                />
                            </svg>

                            {errorText}
                        </small>
                    )}
                </div>
            </div>
        </Host>
    )
}
