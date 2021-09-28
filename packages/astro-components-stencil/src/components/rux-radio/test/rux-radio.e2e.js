describe('Radio', () => {
    beforeEach(() => {
        cy.visitComponent('rux-radio')
    })
    it('renders', () => {
        cy.get('rux-radio').should('have.class', 'hydrated')
    })
})
