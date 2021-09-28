describe('Progress', () => {
    beforeEach(() => {
        cy.visitComponent('rux-progress')
    })
    it('renders', () => {
        cy.get('rux-progress').should('have.class', 'hydrated')
    })
})
