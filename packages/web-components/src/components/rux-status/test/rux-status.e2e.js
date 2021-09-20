describe('Status', () => {
    beforeEach(() => {
        cy.visitStory('components-status--default-story')
    })
    it('renders', () => {
        cy.get('rux-status').should('have.class', 'hydrated')
    })
})
