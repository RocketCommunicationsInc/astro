describe('Input Field', () => {
    beforeEach(() => {
        cy.visitStory('components-input-field--default-story')
    })
    it('renders', () => {
        cy.get('rux-input-field').should('have.class', 'hydrated')
    })
})
