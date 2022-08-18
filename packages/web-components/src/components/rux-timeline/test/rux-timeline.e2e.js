// Time Regions that have a start date outside of the Timeline range are not shown
// Time Regions that have a end date outside of the Timeline range are not shown

// Playhead should remain synced to its original position in time when zoom is increased

// Should throw an error when trying to set the playhead position to a date that is not within the timeline range.

// displays error if time region start is after time region end
// displays error if time region start is missing
// displays error if time region end is missing

// partial tests
// event is partial start. it should visually indicate. timeline range is changed so that it is in range. event should no longer visually indicate.

// Event should become partial if editted
// Arrange:
// 	Timeline range = 2022-01-10T00:00
// 	Add new event with start = 2022-01-10T00:00 - 2022-01-10T03:00
// Act:
// 	Edit event start = 2022-01-09T00:00
// Assert:
// 	Event should be partial
