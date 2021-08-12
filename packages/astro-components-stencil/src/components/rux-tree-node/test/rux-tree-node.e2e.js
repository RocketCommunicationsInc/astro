describe('Tree Node', () => {
    beforeEach(() => {
        cy.visitStory('components-tree-node--default-story')
    })
    it('renders', () => {
        cy.get('rux-tree-node').should('have.class', 'hydrated')
    })
})
