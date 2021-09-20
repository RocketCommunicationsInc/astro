describe('Radio', () => {
    beforeEach(() => {
        cy.visitStory('forms-radio--default-story')
    })
    it('renders', () => {
        cy.get('rux-radio').should('have.class', 'hydrated')
    })
})
