describe('Clock', () => {
    beforeEach(() => {
        cy.visitStory('components-clock--default-story')
    })
    it('renders', () => {
        cy.get('rux-clock').should('have.class', 'hydrated')
    })
})
