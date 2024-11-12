describe('POST /users', () => {
  it('register a new users', () => {
    const user = {
      name: "Cristiano Ferreira",
      email: "cristiano@gmail.com",
      password: "pwd123"
    }
    cy.task('deleteUser', user.email)
    
    cy.api({
      url: "/users",
      method: "POST",
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
      
      cy.log(JSON.stringify(response.body))
      expect(response.body.name).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
    })
  })
})