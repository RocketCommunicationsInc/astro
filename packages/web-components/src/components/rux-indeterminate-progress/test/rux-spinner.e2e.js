describe('Spinner', () => {
    beforeEach(() => {
        cy.visitComponent('rux-spinner')
    })
    it('renders', () => {
        cy.get('rux-spinner').should('have.class', 'hydrated')
    })
})
