describe('POST /sessions', () => {
  it('user session', () => {
    cy.fixture('users').then((users) => {

      const userData = {
        name: "Jennifer Aniston",
        email: "jennifer@gmail.com",
        password: 'pwd123'
      }
  
      cy.task('deleteUser', userData.email)
      cy.postUser(userData)
  
      cy.postSession(userData).then(response => {
        const { user, token } = response.body;
  
        expect(response.status).to.eq(200)
        expect(user.name).to.eq(userData.name)
        expect(user.email).to.eq(userData.email)
        expect(token).not.to.empty
      })   
    })
  });

  it('invalid password', () => {
    const user = {
      email: "cristiano@gmail.com",
      password: 'pwd1234'
    }

    cy.postSession(user).then(response => {
      expect(response.status).to.eq(401)
    })   
  })

  it('email not found', () => {
    const user = {
      email: "404@gmail.com",
      password: 'pwd123'
    }

    cy.postSession(user).then(response => {
      expect(response.status).to.eq(401)
    })   
  })
})

Cypress.Commands.add('postSession', (user) => {
  cy.api({
    url: "/sessions",
    method: "POST",
    body: { email: user.email, password: user.password },
    failOnStatusCode: false
  }).then(response => {
    return response
  })
} );