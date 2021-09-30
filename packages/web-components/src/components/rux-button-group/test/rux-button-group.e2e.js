describe('Button Group', () => {
    beforeEach(() => {
        cy.visitComponent('rux-button-group')
    })
    it('renders', () => {
        cy.get('rux-button-group').should('have.class', 'hydrated')
    })
})
