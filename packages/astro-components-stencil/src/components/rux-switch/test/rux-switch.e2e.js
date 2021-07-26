describe('Switch', () => {
    beforeEach(() => {
        cy.visitStory('components-switch--switch-story')
    })
    it('renders', async () => {
        cy.get('rux-switch').should('have.class', 'hydrated')
    })
})
