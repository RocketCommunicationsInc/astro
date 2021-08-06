// import { newE2EPage } from '@stencil/core/testing'

describe('rux-slider', () => {
    beforeEach(() => {
        cy.visitStory('components-slider--default-story')
    })
    it('renders', () => {
        cy.get('rux-slider').should('have.class', 'hydrated')
    })
})
