describe('Segmented Button', () => {
    beforeEach(() => {
        cy.visitStory('components-segmented-button--segmented-button')
    })
    it('renders', () => {
        cy.get('rux-segmented-button').should('have.class', 'hydrated')
    })
})
