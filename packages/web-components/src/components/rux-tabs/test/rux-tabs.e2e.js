describe('Tab', () => {
    beforeEach(() => {
        cy.visitComponent('rux-tabs')
    })

    it('renders', () => {
        cy.get('rux-tab').should('have.class', 'hydrated')
    })

    it('first tab is selected by default', async () => {
        cy.get('#tab-id-1').should('have.attr', 'selected')
        cy.get('#tab-id-2').should('not.have.attr', 'selected')
    })

    it('selects tab when user clicks', () => {
        cy.get('#tab-id-2').click().should('have.attr', 'selected')
        cy.get('#tab-id-1').should('not.have.attr', 'selected')
        cy.get('#tab-id-1').click().should('have.attr', 'selected')
    })

    it('shows correct panel when its tab is clicked', () => {
        cy.get('rux-tab-panel').eq(0).should('not.have.class', 'hidden')
        cy.get('rux-tab-panel').eq(1).should('have.class', 'hidden')
        cy.get('rux-tab-panel').eq(2).should('have.class', 'hidden')
        cy.get('#tab-id-2').click()
        cy.get('rux-tab-panel').eq(0).should('have.class', 'hidden')
        cy.get('rux-tab-panel').eq(1).should('not.have.class', 'hidden')
        cy.get('rux-tab-panel').eq(2).should('have.class', 'hidden')
    })
})
