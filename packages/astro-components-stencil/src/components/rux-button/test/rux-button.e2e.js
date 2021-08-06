describe('Button', () => {
    beforeEach(() => {
        cy.visitStory('components-button--default-story')
    })
    it('renders', () => {
        cy.get('rux-button').should('have.class', 'hydrated')
    })
})
