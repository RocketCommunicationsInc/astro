describe('Textarea', () => {
    beforeEach(() => {
        cy.visitStory('components-textarea--default-story')
    })
    it('renders', () => {
        cy.get('rux-textarea').should('have.class', 'hydrated')
    })
})
