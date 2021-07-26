describe('Progress', () => {
    beforeEach(() => {
        cy.visitStory('components-progress--default-story')
    })
    it('renders', async () => {
        cy.get('rux-progress').should('have.class', 'hydrated')
    })
})
