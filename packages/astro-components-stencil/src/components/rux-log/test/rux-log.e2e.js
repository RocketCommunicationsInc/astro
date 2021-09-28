describe('Log', () => {
    beforeEach(() => {
        cy.visitComponent('rux-log')
    })
    it('renders', () => {
        cy.get('rux-log').should('have.class', 'hydrated')
    })
})
