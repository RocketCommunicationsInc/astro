describe('Textarea', () => {
    beforeEach(() => {
        cy.visitStory('forms-textarea--default-story')
    })
    it('renders', () => {
        cy.get('rux-textarea').should('have.class', 'hydrated')
    })
})
