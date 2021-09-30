describe('Classificaton Marking', () => {
    beforeEach(() => {
        cy.visitComponent('rux-classification-marking')
    })
    it('renders', () => {
        cy.get('rux-classification-marking').should('have.class', 'hydrated')
    })
})
