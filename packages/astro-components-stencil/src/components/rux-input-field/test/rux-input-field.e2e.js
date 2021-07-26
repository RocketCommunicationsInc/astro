describe('Input Field', () => {
    beforeEach(() => {
        cy.visitStory('components-input-field--default-story')
    })
    it('renders', async () => {
        cy.get('rux-input-field').should('have.class', 'hydrated')
    })
})
