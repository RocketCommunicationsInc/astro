describe('Push Button', () => {
    beforeEach(() => {
        cy.visitStory('components-push-button--push-button')
    })
    it('renders', () => {
        cy.get('rux-push-button').should('have.class', 'hydrated')
    })
})
