describe('Classificaton Marking', () => {
    beforeEach(() => {
        cy.visitStory('components-classification-markings--default-story')
    })
    it('renders', async () => {
        cy.get('rux-classification-marking').should('have.class', 'hydrated')
    })
})
