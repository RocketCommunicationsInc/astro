const { el } = require('date-fns/locale')

describe('Pop Up Menu', () => {
    const menuRef = 'rux-pop-up-menu'

    beforeEach(() => {
        cy.visitStory('components-pop-up-menu--default-story')
    })

    it('renders', () => {
        cy.get('rux-pop-up-menu').should('have.class', 'hydrated')
    })
})

describe('Pop Up Menu Item', () => {
    beforeEach(() => {
        cy.visitForm('pop-up-menu')
    })

    it('should open and close popup by togglying open attribute', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })

        cy.get('rux-pop-up-menu').should('have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'false')

        cy.get('rux-pop-up-menu').then(($popUp) => {
            $popUp[0].removeAttribute('open')
        })

        cy.get('rux-pop-up-menu').should('not.have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'true')
    })

    it('should open clicking on anchor element', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })
        cy.get('rux-pop-up-menu').should('have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'false')
    })

    it('should close clicking outside of the popup element', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })

        cy.get('rux-pop-up-menu').should('have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'false')

        cy.get('body').click()

        cy.get('rux-pop-up-menu').should('not.have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'true')
    })

    it('should select item and closes menu', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })
        cy.wait(50)
        cy.get('rux-pop-up-menu rux-menu-item:nth-child(1)').click()

        cy.get('rux-pop-up-menu').should('not.have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'true')

        cy.get('#log').contains('Value:Item 1')
    })

    it('should open menu add another item and close', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })
        cy.get('rux-pop-up-menu').should('have.attr', 'open')
        cy.get('rux-pop-up-menu').should('have.attr', 'aria-hidden', 'false')

        cy.get('rux-pop-up-menu rux-menu-item:nth-child(5)').click({
            force: true,
        })

        cy.get('#log').contains('Value:Item 4')
    })
})
