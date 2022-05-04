describe('Indeterminate Progress', () => {
    beforeEach(() => {
        cy.visitComponent('rux-indeterminate-progress')
    })
    it('renders', () => {
        cy.get('rux-indeterminate-progress').should('have.class', 'hydrated')
    })
    it('applies the small class if below 30px size', () => {
        cy.get('#small').shadow().find('div').should('have.class', 'small')
    })
    it('should not apply the small class if --size is above 30px', () => {
        cy.get('#almost-small')
            .shadow()
            .find('div')
            .should('not.have.class', 'small')
    })
})
