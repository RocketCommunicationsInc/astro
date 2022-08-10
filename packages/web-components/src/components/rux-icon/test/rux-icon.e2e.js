describe('Icon', () => {
    beforeEach(() => {
        cy.visitComponent('rux-icon')
    })
    it('renders', () => {
        cy.get('rux-icon').should('have.class', 'hydrated')
    })
    it('inherits title from a button', () => {
        cy.get('#btn').should('have.attr', 'title', 'Button Title')
        cy.get('#btn')
            .shadow()
            .find('rux-icon')
            .should('have.attr', 'title', 'Button Title')
    })
})
