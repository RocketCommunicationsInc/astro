describe('Tree', () => {
    beforeEach(() => {
        cy.visitComponent('rux-tree')
    })
    it('renders', () => {
        cy.get('rux-tree').should('have.class', 'hydrated')
    })

    it('allows keyboard controls', async () => {
        const parent = cy.get('rux-tree-node').first().shadow().find('.parent')
        parent.focus()
        cy.focused().should('have.attr', 'expanded')
        cy.realPress('ArrowDown')
        cy.focused().contains('Tree item 1.1')
        cy.focused().should('have.attr', 'expanded')
        cy.realPress('ArrowLeft')
        cy.focused().should('not.have.attr', 'expanded')
    })
    it('emits ruxtreenodeselected event', () => {
        cy.document().invoke(
            'addEventListener',
            'ruxtreenodeselected',
            cy.stub().as('ruxtreenodeselected')
        )
        cy.get('rux-tree-node').first().shadow().find('.parent').click()
        cy.get('@ruxtreenodeselected').should('be.calledOnce')
    })
    it('emits ruxtreenodeexpanded', () => {
        cy.document().invoke(
            'addEventListener',
            'ruxtreenodeexpanded',
            cy.stub().as('ruxtreenodeexpanded')
        )
        cy.get('#test-expanded').shadow().find('.parent').find('.arrow').click()
        cy.get('@ruxtreenodeexpanded')
            .should('be.calledOnce')
            .its('firstCall.args.0.detail')
            .should('include', 'node')
    })
    it('emits ruxtreenodecollapsed', () => {
        cy.document().invoke(
            'addEventListener',
            'ruxtreenodecollapsed',
            cy.stub().as('ruxtreenodecollapsed')
        )
        // Need to open it first to test
        cy.get('#test-expanded').shadow().find('.parent').find('.arrow').click()
        cy.get('#test-expanded').shadow().find('.parent').find('.arrow').click()
        cy.get('@ruxtreenodecollapsed')
            .should('be.calledOnce')
            .its('firstCall.args.0.detail')
            .should('include', 'node')
    })
})
