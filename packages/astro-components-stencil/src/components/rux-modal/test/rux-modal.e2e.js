describe('Modal', () => {
    beforeEach(() => {
        cy.visitStory('components-modal--modal')
    })
    it('renders', () => {
        cy.get('rux-modal').should('have.class', 'hydrated')
    })
})
