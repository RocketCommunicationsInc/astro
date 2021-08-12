describe('Icon', () => {
    beforeEach(() => {
        cy.visitStory('components-icons--default-story')
    })
    it('renders', () => {
        cy.get('rux-icon').should('have.class', 'hydrated')
    })
})
