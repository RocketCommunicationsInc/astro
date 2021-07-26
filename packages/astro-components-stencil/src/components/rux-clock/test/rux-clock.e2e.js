describe('Clock', () => {
    beforeEach(() => {
        cy.visitStory('components-clock--default-story')
    })
    it('renders', async () => {
        cy.get('rux-clock').should('have.class', 'hydrated')
    })
})
