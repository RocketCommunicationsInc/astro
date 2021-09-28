describe('Segmented Button', () => {
    beforeEach(() => {
        cy.visitComponent('rux-segmented-button')
    })
    it('renders', () => {
        cy.get('rux-segmented-button').should('have.class', 'hydrated')
    })
})
