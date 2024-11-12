describe('POST /users', () => {
  it('register a new users', () => {
    const user = {
      name: "Cristiano Ferreira",
      email: "cristiano@gmail.com",
      password: "pwd123"
    }
    cy.task('deleteUser', user.email)

    cy.postUser(user).then(response => {
      expect(response.status).to.eq(200)

      cy.log(JSON.stringify(response.body))
      expect(response.body.name).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
    })

  })

  it('duplicate email', () => {
    const user = {
      name: "James Gun",
      email: "james@hotmail.com",
      password: "pwd123"
    }
    cy.task('deleteUser', user.email)

    cy.postUser(user)

    cy.postUser(user).then(response => {
      const { message } = response.body;

      expect(response.status).to.eq(409)
      expect(message).to.eq("Duplicated email!")
    })

  })
})

