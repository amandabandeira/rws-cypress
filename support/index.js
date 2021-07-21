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

Cypress.Commands.add('loginBackground',()=>{
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body:{
         user:{
             email: "primeiroteste@gmail.com",
             password: "12345678"
         }
        }
    }).then((loginresponse)=>{
        console.log(loginresponse.body)
        cy.log(loginresponse.body.user.token)
        //onBeforeLoad antes de carregar setar no localstorage um token 
        cy.visit('editor',{
            onBeforeLoad:(win) =>{
                win.localStorage.setItem('jwtToken',loginresponse.body.user.token)
            }
        });
    })
})