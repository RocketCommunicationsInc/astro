describe('Select', () => {
    beforeEach(() => {
        cy.visitStory('components-select-menu--select-menu')
    })
    it('renders', () => {
        cy.get('rux-select').should('have.class', 'hydrated')
    })
})
