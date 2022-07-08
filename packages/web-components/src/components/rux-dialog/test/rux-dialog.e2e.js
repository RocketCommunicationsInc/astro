describe('dialog', () => {
    beforeEach(() => {
        cy.visitComponent('rux-dialog')
    })
    it('renders', () => {
        cy.get('rux-dialog').should('have.class', 'hydrated')
    })

    it('should close and open the dialog', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('open', false)
        })
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('open', true)
        })
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__wrapper')
            .should('exist')
    })

    it('should display new dialog title in the dialog when changed', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('modal-title', 'This is a test title')
        })
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__header')
            .contains('This is a test title')
    })

    it('should display dialog message in the dialog when changed', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('modal-message', 'This is a test message')
        })
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__message')
            .contains('This is a test message')
    })

    it('should display new confirmation text in the dialog when changed', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('confirm-text', 'Test Confirm Text')
        })
        cy.get('rux-dialog')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .next()
            .contains('Test Confirm Text')
    })

    it('should display new deny text in the dialog when changed', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('deny-text', 'Test Deny Text')
        })
        cy.get('rux-dialog')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .first()
            .contains('Test Deny Text')
    })

    it('should close the dialog when deny clicked', () => {
        cy.get('rux-dialog')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .first()
            .click()
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__wrapper')
            .should('not.exist')
    })

    it('should close the dialog when confirm clicked', () => {
        cy.get('rux-dialog')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .next()
            .click()
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__wrapper')
            .should('not.exist')
    })

    it('should close when enter key pressed', () => {
        cy.get('rux-dialog').shadow().find('dialog').click()
        cy.get('body').type('{enter}')
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__wrapper')
            .should('not.exist')
    })

    it('should close the dialog when click occurs outside dialog', () => {
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__wrapper')
            .click('topLeft')
        cy.get('rux-dialog')
            .shadow()
            .find('.rux-dialog__wrapper')
            .should('not.exist')
    })
    it('should be able to dynamically add slots', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('open', false)
        })
        cy.get('#dyn').click()
        cy.get('#change').find('.test')
        cy.get('#change')
            .shadow()
            .find('.rux-dialog__wrapper')
            .find('dialog')
            .find('.rux-dialog__footer')
            .children()
            .should('have.length', '1')
    })
    it('should emit ruxdialogclosed with a detail of false when default deny button is clicked', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('open', true)
        })
        cy.document().invoke(
            'addEventListener',
            'ruxdialogclosed',
            cy.stub().as('ruxdialogclosed')
        )
        cy.get('rux-dialog')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .first()
            .click()
        cy.get('@ruxdialogclosed')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', false)
    })
    it('should emit ruxdialogclosed with a detail of true when default confirm button is clicked', () => {
        cy.get('rux-dialog').then(($dialog) => {
            $dialog[0].setAttribute('open', true)
        })
        cy.document().invoke(
            'addEventListener',
            'ruxdialogclosed',
            cy.stub().as('ruxdialogclosed')
        )
        cy.get('rux-dialog')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .next()
            .click()
        cy.get('@ruxdialogclosed')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', true)
    })
})
