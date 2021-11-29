// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import 'cypress-real-events/support'

/**
 * Make Cypress fail if it finds any console.errors
 */
Cypress.on('window:before:load', (win) => {
    cy.stub(win.console, 'error', (msg) => {
        // Whitelist errors should we so ever desire to
        // if (msg.includes("This is an error")) {
        //   return null;
        // }

        cy.now('task', 'error', msg)
        throw new Error(msg)
    })

    cy.stub(win.console, 'warn', (msg) => {
        cy.now('task', 'warn', msg)
    })
})
