describe('Indeterminate Progress', () => {
    beforeEach(() => {
        cy.visitComponent('rux-indeterminate-progress')
    })
    it('renders', () => {
        cy.get('rux-indeterminate-progress').should('have.class', 'hydrated')
    })
})
