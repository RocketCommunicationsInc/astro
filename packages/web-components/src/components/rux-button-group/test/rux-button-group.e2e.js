describe('Button Group', () => {
    beforeEach(() => {
        cy.visitStory('components-button-group--button-group')
    })
    it('renders', () => {
        cy.get('rux-button-group').should('have.class', 'hydrated')
    })
})
