describe('Tree Node', () => {
    beforeEach(() => {
        cy.visitComponent('rux-tree-node')
    })
    it('renders', () => {
        cy.get('rux-tree-node').should('have.class', 'hydrated')
    })
})
