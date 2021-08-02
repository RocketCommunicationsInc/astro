describe('Checkbox', () => {
    beforeEach(() => {
        cy.visitStory('components-form-elements--checkboxes')
    })
    it('renders', async () => {
        cy.get('rux-checkbox').should('have.class', 'hydrated')
    })
})
