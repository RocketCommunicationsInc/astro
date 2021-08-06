describe('Push Button', () => {
    beforeEach(() => {
        cy.visitStory('components-push-button--push-button-story')
    })
    it('renders', async () => {
        cy.get('rux-push-button').should('have.class', 'hydrated')
    })
})
