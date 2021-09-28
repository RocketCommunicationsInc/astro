describe('Icon', () => {
    beforeEach(() => {
        cy.visitComponent('rux-icon')
    })
    it('renders', () => {
        cy.get('rux-icon').should('have.class', 'hydrated')
    })
})
