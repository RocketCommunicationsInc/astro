describe('Log', () => {
    beforeEach(() => {
        cy.visitStory('components-log--log')
    })
    it('renders', () => {
        cy.get('rux-log').should('have.class', 'hydrated')
    })
})
