describe('Status', () => {
    beforeEach(() => {
        cy.visitComponent('rux-status')
    })
    it('renders', () => {
        cy.get('rux-status').should('have.class', 'hydrated')
    })
})
