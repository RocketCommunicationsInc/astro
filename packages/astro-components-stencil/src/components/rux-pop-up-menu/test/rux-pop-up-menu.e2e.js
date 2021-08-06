describe('Pop Up Menu', () => {
    beforeEach(() => {
        cy.visitStory('components-pop-up-menu--default-story')
    })
    it('renders', async () => {
        cy.get('rux-pop-up-menu').should('have.class', 'hydrated')
    })
})
