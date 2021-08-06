describe('Checkbox', () => {
    beforeEach(() => {
        cy.visitStory('components-checkbox--default-story')
    })
    it('renders', () => {
        cy.get('rux-checkbox').should('have.class', 'hydrated')
    })
})
