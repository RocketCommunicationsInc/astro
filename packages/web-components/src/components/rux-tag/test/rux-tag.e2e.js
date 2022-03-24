describe('rux-tag', () => {
    beforeEach(() => {
        cy.visitComponent('rux-tag')
    })
    it('renders', () => {
        cy.get('rux-tag').should('have.class', 'hydrated')
    })
    it('renders is-undefined class when invalid status is used', () => {
        cy.get('#invalid-status').should('have.class', 'is-undefined')
    })
})
