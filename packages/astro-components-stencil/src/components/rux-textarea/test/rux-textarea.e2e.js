describe('Textarea', () => {
    beforeEach(() => {
        cy.visitStory('components-textarea--default-story')
    })
    it('renders', async () => {
        cy.get('rux-textarea').should('have.class', 'hydrated')
    })
})
