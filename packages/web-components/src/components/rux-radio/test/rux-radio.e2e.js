describe('Radio', () => {
    beforeEach(() => {
        cy.visitStory('components-radio--default-story')
    })
    it('renders', () => {
        cy.get('rux-radio').should('have.class', 'hydrated')
    })
})
