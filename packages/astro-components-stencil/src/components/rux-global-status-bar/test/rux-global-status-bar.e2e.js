describe('Global Status Bar', () => {
    beforeEach(() => {
        cy.visitStory('components-global-status-bar--default-story')
    })
    it('renders', async () => {
        cy.get('rux-global-status-bar').should('have.class', 'hydrated')
    })
})
