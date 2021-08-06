describe('Log', () => {
    beforeEach(() => {
        cy.visitStory('components-log--log')
    })
    it('renders', async () => {
        cy.get('rux-log').should('have.class', 'hydrated')
    })
})
