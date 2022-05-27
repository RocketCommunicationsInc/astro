describe('Tab', () => {
    beforeEach(() => {
        cy.visitComponent('rux-tabs')
    })

    it('renders', () => {
        cy.get('rux-tab').should('have.class', 'hydrated')
    })

    it('first tab is selected by default', () => {
        cy.get('#tab-id-1').should('have.attr', 'selected')
        cy.get('#tab-id-2').should('not.have.attr', 'selected')
    })

    it('selects tab when user clicks', () => {
        cy.get('#tab-id-2').shadow().find('.rux-tab').click({ force: true })
        cy.get('#tab-id-2').should('have.attr', 'selected')
        cy.get('#tab-id-1').shadow().find('.rux-tab')
        cy.get('#tab-id-1').should('not.have.attr', 'selected')
        cy.get('#tab-id-1').shadow().find('.rux-tab')
        cy.get('#tab-id-1')
            .click({ force: true })
            .should('have.attr', 'selected')
    })

    it('shows correct panel when its tab is clicked', () => {
        cy.get('rux-tab-panel').eq(0).should('not.have.class', 'hidden')
        cy.get('rux-tab-panel').eq(1).should('have.class', 'hidden')
        cy.get('rux-tab-panel').eq(2).should('have.class', 'hidden')
        cy.get('#tab-id-2').click({ force: true })
        cy.get('rux-tab-panel').eq(0).should('have.class', 'hidden')
        cy.get('rux-tab-panel').eq(1).should('not.have.class', 'hidden')
        cy.get('rux-tab-panel').eq(2).should('have.class', 'hidden')
    })
})
