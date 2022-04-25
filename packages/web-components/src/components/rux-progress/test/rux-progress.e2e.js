describe('Progress', () => {
    beforeEach(() => {
        cy.visitComponent('rux-progress')
    })
    it('renders', () => {
        cy.get('rux-progress').should('have.class', 'hydrated')
    })
    it('renders rux-spinner when no value is present', () => {
        cy.get('#spinner').shadow().children().should('have.length', '3')
    })
})
