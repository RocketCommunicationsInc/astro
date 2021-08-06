describe('Button', () => {
    beforeEach(() => {
        cy.visitStory('components-button--default-story')
    })
    it('renders', async () => {
        cy.get('rux-button').should('have.class', 'hydrated')
    })
})
