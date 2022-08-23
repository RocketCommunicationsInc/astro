describe('Timeline', () => {
    beforeEach(() => {
        cy.visitComponent('rux-timeline')
    })

    it('renders', () => {
        cy.get('rux-timeline').should('have.class', 'hydrated')
    })

    // describe('when a new event is added', () => {
    // 	context('if the events start date is before the timelines start date', () => {
    // 		it('should display as a partial start event', () => {

    // 		})
    // 	})

    // 	context('if the events end date is after the timelines end date', () => {
    // 		it('should display a partial end event', () => {

    // 		})
    // 	})

    // 	context('if the events start date is before the timelines start date and the end date is after the timelines start date', () => {
    // 		it('should display an ongoing partial event', () => {

    // 		})
    // 	})
    // })

    // describe('when an existing event currently in the timelines range is editted', () => {
    // 	context('if the events start date is before the timelines start date', () => {
    // 		it('should display as a partial start event', () => {

    // 		})
    // 	})

    // 	context('if the events end date is after the timelines end date', () => {
    // 		it('should display a partial end event', () => {

    // 		})
    // 	})

    // 	context('if the events start date is before the timelines start date and the end date is after the timelines start date', () => {
    // 		it('should display an ongoing partial event', () => {

    // 		})
    // 	})
    // })

    // describe('when the zoom is increased', () => {
    // 	it('should keep the playhead synced to its original position', () => {

    // 	})
    // })
})

// Should throw an error when trying to set the playhead position to a date that is not within the timeline range.

// displays error if time region start is after time region end
// displays error if time region start is missing
// displays error if time region end is missing

// partial tests
// event is partial start. it should visually indicate. timeline range is changed so that it is in range. event should no longer visually indicate.
