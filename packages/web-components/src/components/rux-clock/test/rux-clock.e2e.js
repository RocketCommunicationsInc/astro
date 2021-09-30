describe('Clock', () => {
    beforeEach(() => {
        cy.visitComponent('rux-clock')
    })
    it('renders', () => {
        cy.get('rux-clock').should('have.class', 'hydrated')
    })
})
