describe('Modal', () => {
    beforeEach(() => {
        cy.visitStory('components-modal--modal')
    })
    it('renders', async () => {
        cy.get('rux-modal').should('have.class', 'hydrated')
    })
})
